"use client"
import React from 'react';
import { sidebarLinks } from '@constants'; // Ensure this import is correct
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.route} // Use a unique key, such as link.route
            href={link.route}
            className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
              isActive ? "bg-purple-1" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {link.icon} {/* Make sure link.icon is a valid JSX element */}
              <p className="text-light-1">{link.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;