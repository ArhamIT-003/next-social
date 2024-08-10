"use server";
import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default async function UserMedia({ user }: { user: User }) {
  const postWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(postWithMedia);

  if (!postWithMedia) throw new Error("No post found!");

  return (
    <Fragment>
      <div className="p-4 bg-white rounded-md shadow-md">
        {/* TOP CONTAINER- TITLE */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400">User Media</p>
          <Link href={"/see-all"} className="text-xs font-medium text-blue-500">
            See All
          </Link>
        </div>
        {/* BOTTOM CONTAINER- MEDIA */}
        <div className="flex items-center gap-4 flex-wrap my-2">
          {postWithMedia.length
            ? postWithMedia?.map((post) => (
                <div key={post.id} className="relative w-1/5 h-24">
                  <Image
                    src={post.img!}
                    alt="user-media"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))
            : "No media!"}
        </div>
      </div>
    </Fragment>
  );
}
