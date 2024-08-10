"use server";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

async function ProfileCard() {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  console.log("profile card ->", user);
  return (
    <Fragment>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
        <div className="relative h-20">
          <Image
            src={user.cover || "/noCover.png"}
            alt="avatar"
            fill
            className="rounded-md object-cover"
          />
          <Image
            src={user.avatar || "/noAvatar.png"}
            alt="avatar"
            width={48}
            height={48}
            className="w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 rounded-full object-cover"
          />
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
          <span className="font-medium text-sm">{user.username}</span>
          <span className="text-gray-400 font-medium text-xs">
            {user?._count.followers} follower
          </span>
          <Link
            href={`/profile/${user.username}`}
            className="bg-blue-500 text-white p-2 text-xs rounded-md"
          >
            My Profile
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileCard;
