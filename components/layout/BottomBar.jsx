"use client"
import React from 'react';
import { sidebarLinks } from '@constants'; // Ensure this import is correct
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.route} // Use a unique key, such as link.route
            href={link.route}
            className={`flex gap-2 rounded-lg py-2 px-4 ${
              isActive ? "bg-purple-1" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {link.icon} {/* Make sure link.icon is a valid JSX element */}
              <p className="text-small-medium text-light-1 max-sm:hidden">{link.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;