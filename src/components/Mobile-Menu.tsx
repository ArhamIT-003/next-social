"use client";

import { mobileMenuItems } from "@/data/component-data";
import { ClerkLoaded, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React, { Fragment, useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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

            <ClerkLoaded>
              <SignedIn>
                <>
                  <Link
                    href="/notifications"
                    className="text-lg font-normal antialiased"
                  >
                    Notifications
                  </Link>
                  <Link
                    href="/peoples"
                    className="text-lg font-normal antialiased"
                  >
                    Peoples
                  </Link>
                  <Link
                    href="/messages"
                    className="text-lg font-normal antialiased"
                  >
                    Messages
                  </Link>
                </>
              </SignedIn>
              <SignedOut>
                <Link href="/login" className="text-lg font-normal antialiased">
                  Login
                </Link>
              </SignedOut>
            </ClerkLoaded>
          </div>
        )}
      </div>
    </Fragment>
  );
}
