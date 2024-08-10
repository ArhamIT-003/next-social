"use client";
import { UserInfoBtnProps } from "@/data/types";
import { swicthBlock, switchFollow } from "@/lib/action";
import React, { Fragment, useState } from "react";

function UserInfoBtn({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingRequestSend,
}: UserInfoBtnProps) {
  const [userState, setUserState] = useState({
    isFollowing: isFollowing,
    isFollowingRequestSend: isFollowingRequestSend,
    isUserBlocked: isUserBlocked,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        isFollowing: prev.isFollowing && false,
        isFollowingRequestSend:
          !prev.isFollowing && !prev.isFollowingRequestSend ? true : false,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const block = async () => {
    try {
      await swicthBlock(userId);
      setUserState((prev) => ({
        ...prev,
        isUserBlocked: !prev.isUserBlocked,
      }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <form action={follow} className="w-full">
        <button className="bg-blue-500 text-white p-2 rounded-lg text-sm font-medium w-full transition-all ease-in-out">
          {userState.isFollowing
            ? "Following"
            : userState.isFollowingRequestSend
            ? "Friend Request Send"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="flex justify-end p-0 m-0">
        <button className="max-w-fit text-red-500 text-xs">
          {userState.isUserBlocked ? "Unblock User" : "Block User"}
        </button>
      </form>
    </Fragment>
  );
}

export default UserInfoBtn;
