import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function Birthdays() {
  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-md">
        {/* TOP CONTAINER */}
        <div className="flex flex-col justify-center gap-4">
          <p className="text-xs text-gray-500">Birthdays</p>
          {/* IF A BIRTHDAY IS THERE */}
          <div className="flex items-center justify-between">
            {/* USER */}
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://images.pexels.com/photos/9320042/pexels-photo-9320042.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt="avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-xs font-medium">Apollo Creed</p>
            </div>
            {/* BUTTON TO CELEBRATE */}
            <button className="bg-blue-500 text-white rounded-md text-xs p-1">
              Celebrate
            </button>
          </div>
        </div>
        {/* BOTTOM CONTAINER - UPCOMING BIRTHDAY */}
        <div className="bg-slate-100 p-4 rounded-md my-2 flex gap-4">
          <Image
            src="/gift.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <Link
            href={"/upcoming-birthday"}
            className="flex flex-col gap-1 text-xs justify-center"
          >
            <span className="font-medium">See Upcoming birthdays</span>
            <span>See 16 others upcoming birthdays</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
