"use server";
import React, { Fragment } from "react";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export default async function Feeds() {
  const { userId } = auth();

  if (!userId) throw new Error("User is not authenticated!");

  const posts = await prisma.post.findMany({
    where: {
      userId,
      img: {
        not: null,
      },
    },
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });

  console.log("Feed Post", posts);

  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        {posts.length
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : "No post yet!"}
      </div>
    </Fragment>
  );
}
