"use server";
import React, { Fragment, Suspense } from "react";
import FriendsRequest from "./Friends-Request";
import Birthdays from "./Birthdays";
import SponsoredAds from "./Sponsored-Ads";
import UserInfo from "./User-Info";
import UserMedia from "./User-Media";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export default async function RightMenu() {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      _count: {
        select: {
          followers: true,
          post: true,
          followings: true,
        },
      },
    },
  });
  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        {user ? (
          <>
            <Suspense fallback="loading...">
              <UserInfo user={user} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMedia user={user} />
            </Suspense>
          </>
        ) : null}
        <FriendsRequest />
        <Birthdays />
        <SponsoredAds size="md" />
      </div>
    </Fragment>
  );
}
