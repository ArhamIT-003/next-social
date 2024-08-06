import Link from "next/link";
import React, { Fragment } from "react";
import MobileMenu from "./Mobile-Menu";
import Image from "next/image";
import { isLoggedInFeatures, menuItems } from "@/data/component-data";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {menuItems.map((menu, index) => (
                <Link
                  href={menu.link}
                  key={index}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={menu.image}
                    width={16}
                    height={16}
                    alt={`menu-image-${menu.name}`}
                    className="w-4 h-4"
                  />
                  {menu.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block mx-4">
              <div className="flex items-center justify-between border-[1px] rounded-md border-blue-500 px-2 py-1">
                <input
                  type="text"
                  placeholder="search..."
                  className="outline-none bg-transparent placeholder:text-sm"
                />
                <Image
                  src="/search.png"
                  alt="search.png"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>
        </div>
        {/* MEDIUM SCREENS AND LARGE SCREENS */}
        <div className="hidden md:block">
          <ClerkLoading>
            <div className="bg-blue-500 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <div className="flex gap-4 items-center cursor-pointer">
                {isLoggedInFeatures.map((images, index) => (
                  <Image
                    key={index}
                    src={images.image}
                    alt="is-logged-in-features"
                    width={18}
                    height={18}
                  />
                ))}
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex gap-2 items-center cursor-pointer">
                <Image
                  src="/noAvatar.png"
                  alt="avatar"
                  width={15}
                  height={15}
                />
                <Link href={"/sign-in"} className="text-sm">
                  Login/Register
                </Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>

        {/* SMALL SCREENS */}
        <div className="block md:hidden">
          <div className="flex items-center gap-4">
            <UserButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
