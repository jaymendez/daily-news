import Link from 'next/link';
import React from 'react';

type SidebarLinkProps = {
  label: string;
  Icon: any;
};

const SidebarLink = ({ label, Icon }: SidebarLinkProps) => {
  return (
    <Link
      key={label}
      href=""
      className="flex items-center gap-x-2.5 py-1.5 px-4 text-[#a7b2ce] hover:bg-[#2d323c] hover:text-white"
    >
      <Icon color="#fff" size={18} />
      <span className="flex-1">{label}</span>
    </Link>
  );
};

export default SidebarLink;
