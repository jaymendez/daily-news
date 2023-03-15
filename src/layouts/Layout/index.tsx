import React from 'react';

import type { TChildrenProps } from '@/types/components';

import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children }: TChildrenProps) => {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
