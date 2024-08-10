"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

export async function swicthBlock(userId: string) {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("User is not authenticated!");

  try {
    const userBlock = await prisma.blockRequest.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (userBlock) {
      await prisma.blockRequest.delete({
        where: {
          id: userBlock.id,
        },
      });
    } else {
      await prisma.blockRequest.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something Went Wrong!");
  }
}
