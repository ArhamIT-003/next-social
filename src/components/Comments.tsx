import Image from "next/image";
import React, { Fragment } from "react";

export default function Comments() {
  return (
    <Fragment>
      <h1 className="text-lg font-bold">Comments</h1>
      <div className="my-4 flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
        <div className="flex-1 flex gap-4 bg-slate-100 p-2 rounded-lg">
          <input
            placeholder="Write your comments here..."
            className="flex-1 outline-none rounded-lg placeholder:text-xs bg-transparent"
          />
          <Image
            src={"/emoji.png"}
            alt="avatar"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="my-4">
        {/* COMMENT */}
        <div className="flex gap-4">
          {/* AVATAR */}

          <Image
            src={
              "https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm">Mike Ross</p>
              <Image
                src={"/more.png"}
                alt="more"
                width={14}
                height={14}
                className="cursor-pointer"
              />
            </div>
            <p className="text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              vitae pariatur aliquam consequuntur incidunt fugiat! laborum
              quisquam, nam harum! Neque voluptates nisi expedita! Et.
            </p>
            {/* ICONS */}
            <div className="max-w-fit">
              <div className="bg-slate-100 p-2 rounded-lg flex gap-4 items-center">
                <Image
                  src={"/like.png"}
                  alt="like-button"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <div className="w-[0.5px] h-4 bg-slate-400"></div>
                <span className="text-xs">1 Like</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
