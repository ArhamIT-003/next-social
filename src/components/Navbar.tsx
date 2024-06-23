import Link from "next/link";
import React, { Fragment } from "react";
import MobileMenu from "./Mobile-Menu";
import Image from "next/image";

interface MenuItemsType {
  link: string;
  name: string;
  image: string;
}
export default function Navbar() {
  const menuItems: MenuItemsType[] = [
    { link: "/", name: "Homepage", image: "/home.png" },
    { link: "/friends", name: "Friends", image: "/friends.png" },
    { link: "/stories", name: "Stories", image: "/stories.png" },
  ];

  return (
    <Fragment>
      <div className="w-full h-[96px] flex justify-between items-center">
        {/* LOGO DIV NOT FOR MEDIUM SCREENS */}
        <div className="md:hidden lg:block">
          <Link
            href={"/"}
            className="font-bold text-xl text-blue-500 uppercase"
          >
            next-social
          </Link>
        </div>
        {/* MEDIUM SCREENS AND LARGE SCREENS */}
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            {menuItems.map((menu, index) => (
              <Link
                href={menu.link}
                key={index}
                className="flex items-center gap-2"
              >
                <Image
                  src={menu.image}
                  width={15}
                  height={15}
                  alt={`menu-image-${menu.name}`}
                  className="object-contain"
                />
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
        {/* MEDIUM SCREENS AND LARGE SCREENS */}
        <div className="hidden md:block">
          <button className="text-base">Login/Register</button>
        </div>

        {/* SMALL SCREENS */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </Fragment>
  );
}
