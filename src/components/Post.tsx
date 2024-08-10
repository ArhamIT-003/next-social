"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Comments from "./Comments";
import { Post as PostTypes, User } from "@prisma/client";

type FeedTypes = PostTypes & { user: User } & {
  likes: [{ userId: string }];
} & { _count: { comments: number; likes: number } };

export default function Post({ post }: { post: FeedTypes }) {
  const [openComment, setOpenComment] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={post.user.avatar!}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">{post.user.username}</span>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/more.png"}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 rounded-full"
            />
          </div>
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-6">
          <div className="w-full relative min-h-96">
            <Image
              src={post.img!}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p>{post.desc}</p>
        </div>
        {/* INTERACTIONS */}
        <div className="flex items-center justify-between lg:justify-center gap-4 flex-wrap my-4">
          <div className="flex gap-4 items-center">
            <div className="bg-slate-100 p-2 rounded-lg flex gap-4 items-center">
              <Image
                src={"/like.png"}
                alt="like-button"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <div className="w-[0.5px] h-4 bg-slate-400"></div>
              <span className="text-xs md:text-sm">
                {post._count.likes} Likes
              </span>
            </div>
            <div
              className="bg-slate-100 p-2 rounded-lg flex gap-4 items-center cursor-pointer"
              onClick={() => setOpenComment(!openComment)}
            >
              <Image
                src={"/comment.png"}
                alt="comments-button"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <div className="w-[0.5px] h-4 bg-slate-400"></div>
              <span className="text-xs md:text-sm">
                {post._count.comments} comments
              </span>
            </div>
          </div>
          <div>
            <div className="bg-slate-100 p-2 rounded-lg flex md:flex-end gap-4 items-center">
              <Image
                src={"/share.png"}
                alt="share-button"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <div className="w-[0.5px] h-4 bg-slate-400"></div>
              <span className="text-xs md:text-sm">share</span>
            </div>
          </div>
        </div>
        {/* COMMENTS SECTIONS */}
        <div>{openComment && <Comments />}</div>
      </div>
    </Fragment>
  );
}
