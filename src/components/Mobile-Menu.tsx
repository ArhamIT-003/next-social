"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";

interface MobileMenuType {
  link: string;
  name: string;
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuItems: MobileMenuType[] = [
    { link: "/", name: "Homepage" },
    { link: "/friends", name: "Friends" },
    { link: "/stories", name: "Stories" },
    { link: "/groups", name: "Groups" },
    { link: "/login", name: "Login" },
  ];

  return (
    <Fragment>
      <div>
        <div
          className="flex flex-col gap-[4.5px] cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen && "rotate-45"
            } origin-left ease-in-out duration-500`}
          ></div>
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen && "opacity-0"
            } ease-in-out duration-500`}
          ></div>
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen && "-rotate-45"
            } origin-left ease-in-out duration-500`}
          ></div>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col items-center justify-center gap-8 bg-white">
            {mobileMenuItems.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className="text-lg font-normal antialiased"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}
