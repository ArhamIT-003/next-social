"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Comments from "./Comments";

export default function Post() {
  const [openComment, setOpenComment] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={"/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">Mike Ross</span>
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
              src={
                "https://images.pexels.com/photos/19013702/pexels-photo-19013702/free-photo-of-curtain-hanging-from-a-window-on-a-building-facade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dicta, ipsa ex voluptates neque omnis debitis quis, expedita tempore
            voluptate nobis quam ducimus veritatis. Officiis, veniam repellat
            ipsum enim, hic dolores odit cum provident magnam voluptatum eaque,
            veritatis vel commodi ad aspernatur omnis? Cumque sit nam officia
            possimus earum laboriosam quaerat nesciunt praesentium odio optio
            aliquam, laborum minus perspiciatis molestiae dolores.
          </p>
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
              <span className="text-xs md:text-sm">123 Likes</span>
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
              <span className="text-xs md:text-sm">2 comments</span>
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
