import Link from 'next/link';
import React from 'react';

import { Filter, Home, Stack } from '@/components/Icons';
import { FOOTER_LINKS, LINK_GROUPS } from '@/constants/sidebar';

import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <aside className="sticky top-[70px] h-[calc(100vh-70px)] w-64 border-r-2 border-solid border-[#2d323c] pt-10">
      <nav className="flex h-full flex-col">
        <Link
          href="/"
          className="flex items-center py-1.5 px-4 text-[#a7b2ce] hover:bg-[#2d323c] hover:text-white"
        >
          <Home color="#fff" size={18} />
          <span className="ml-2.5 flex-1">My feed</span>

          <button className="w-4">
            <Filter color="rgba(255, 255, 255, 0.5)" size={14} />
          </button>
        </Link>
        {LINK_GROUPS.map((group) => (
          <div className="section" key={group.label}>
            <span className="pl-4 text-sm font-bold text-[#70788d]">
              {group.label}
            </span>
            <ul className="mt-4">
              {group.links.map((link) => (
                <SidebarLink {...link} key={link.label} />
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-auto">
          <div className="section">
            <ul>
              {FOOTER_LINKS.map((link) => (
                <SidebarLink {...link} key={link.label} />
              ))}
            </ul>
          </div>
          <div className="status mx-3.5 mt-6 mb-2.5 flex items-center rounded-xl border-[1px] border-solid border-white p-4">
            <div className="center mr-4 h-8 w-8 rounded-full border-[1px] border-solid border-white">
              <Stack color="#70788d" />
            </div>
            <div className="font-bold text-white">
              <span className="bold text-white">Silver</span>
              <span className="mt-1 block text-sm text-[#70788d]">
                Next level: Gold
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
