import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import UserInfoBtn from "./User-Info-Btn";

export default async function UserInfo({ user }: { user: User }) {
  let isFollowing = false;
  let isUserBlocked = false;
  let isFollowingRequestSend = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.blockRequest.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followingRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followingRes ? (isFollowing = true) : (isFollowing = false);

    const followingReqSend = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followingReqSend
      ? (isFollowingRequestSend = true)
      : (isFollowingRequestSend = false);
  }

  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-md">
        {/* TOP CONTAINER- TITLE */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400">User Information</p>
          <Link href={"/see-all"} className="text-xs font-medium text-blue-500">
            See All
          </Link>
        </div>
        {/* BOTTOM CONTAINER- All-DETAILS */}
        <div className="flex flex-col gap-2 justify-center">
          {/* NAME AND USERID */}
          <div className="flex gap-4 items-center text-sm my-2">
            <h3 className="text-[16px]">{user.username}</h3>
            <span className="text-gray-500 font-normal text-[10px]">
              @{user.username}
            </span>
          </div>
          {/* USER DESCRIPTION */}
          {user.description && (
            <p className="text-xs text-gray-400 font-medium">
              {user.description}
            </p>
          )}
          {/* USER DESCRIPTION END HERE*/}
          {/* USER CURRENT LIVING, WORKING, STUDYING*/}
          <div className="flex flex-col gap-4 justify-center">
            {user.city && (
              <div className="flex items-center gap-1">
                <Image src={"/map.png"} alt="" width={16} height={16} />
                <span className="text-gray-500 text-xs font-medium">
                  Living in
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  {user.city}
                </span>
              </div>
            )}
            {user.school && (
              <div className="flex items-center gap-1">
                <Image src={"/school.png"} alt="" width={16} height={16} />
                <span className="text-gray-500 text-xs font-medium">
                  Went to
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  {user.school}
                </span>
              </div>
            )}
            {user.work && (
              <div className="flex items-center gap-1">
                <Image src={"/work.png"} alt="" width={16} height={16} />
                <span className="text-gray-500 text-xs font-medium">
                  Works in
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  {user.work}
                </span>
              </div>
            )}
          </div>
          {/* LINKS AND FOLLOWING OR BLOCK */}
          <div className="flex items-center justify-between text-sm">
            {user.website && (
              <Link href={"/link"} className="flex items-center gap-1">
                <Image src={"/link.png"} alt="" width={16} height={16} />
                <span className="text-xs text-blue-500 font-medium">
                  {user.website}
                </span>
              </Link>
            )}
            {/* JOINED DATE */}
            <div className="flex items-center gap-1">
              <Image src={"/date.png"} alt="" width={16} height={16} />
              <span className="text-xs">
                Joined on {user.createdAt.toDateString()}
              </span>
            </div>
          </div>

          {/* LINKS AND FOLLOWING OR BLOCK USER END HERE */}
          <UserInfoBtn
            userId={user.id}
            currentUserId={currentUserId}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingRequestSend={isFollowingRequestSend}
          />
        </div>
      </div>
    </Fragment>
  );
}
