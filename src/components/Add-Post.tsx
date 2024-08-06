import Image from "next/image";
import React, { Fragment } from "react";

export default function AddPost() {
  return (
    <Fragment>
      {/* CONTAINER */}
      <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
        {/* Avatar */}
        <Image
          src={""}
          alt="avatar"
          width={20}
          height={20}
          className="w-5 h-5 rounded-full"
        />
        {/* Input */}
        <div className="flex-1">
          <div className="flex gap-4">
            <textarea
              name=""
              id=""
              placeholder="What's in your mind?"
              className="flex-1 outline-none rounded-lg p-1 placeholder:text-xs bg-slate-100"
            ></textarea>
            <Image
              src={"/emoji.png"}
              alt="avatar"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          {/* POST */}
          <div className="mt-2 flex items-center gap-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={"/addImage.png"} alt="image" width={20} height={20} />
              <span>Photo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={"/addVideo.png"} alt="video" width={20} height={20} />
              <span>Video</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={"/addEvent.png"} alt="event" width={20} height={20} />
              <span>Events</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={"/poll.png"} alt="poll" width={20} height={20} />
              <span>Poll</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
