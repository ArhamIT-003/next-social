import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function UserInfo() {
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
            <h3 className="text-lg">Mike Ross</h3>
            <span className="text-gray-500 font-normal">@mikeRoss</span>
          </div>
          {/* USER DESCRIPTION */}
          <p className="text-xs text-gray-400 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nam
            accusantium eligendi impedit sunt reprehenderit quia.
          </p>
          {/* USER DESCRIPTION END HERE*/}
          {/* USER CURRENT LIVING, WORKING, STUDYING*/}
          <div className="flex flex-col gap-4 justify-center my-2">
            <div className="flex items-center gap-1">
              <Image src={"/map.png"} alt="" width={16} height={16} />
              <span className="text-gray-500 text-xs font-medium">
                Living in
              </span>
              <span className="text-gray-800 text-xs font-bold">Denver</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={"/school.png"} alt="" width={16} height={16} />
              <span className="text-gray-500 text-xs font-medium">Went to</span>
              <span className="text-gray-800 text-xs font-bold">
                Kingston University
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={"/work.png"} alt="" width={16} height={16} />
              <span className="text-gray-500 text-xs font-medium">
                Works in
              </span>
              <span className="text-gray-800 text-xs font-bold">Apple Inc</span>
            </div>
          </div>
          {/* LINKS AND FOLLOWING OR BLOCK */}
          <div className="flex items-center justify-between text-sm my-2">
            <Link href={"/link"} className="flex items-center gap-1">
              <Image src={"/link.png"} alt="" width={16} height={16} />
              <span className="text-xs text-blue-500 font-medium">
                mike.dev
              </span>
            </Link>
            {/* JOINED DATE */}
            <div className="flex items-center gap-1">
              <Image src={"/date.png"} alt="" width={16} height={16} />
              <span className="text-xs">Joined November 2023</span>
            </div>
          </div>

          {/* LINKS AND FOLLOWING OR BLOCK USER END HERE */}
          <button className="bg-blue-500 text-white p-2 rounded-lg text-sm font-medium">
            Following
          </button>
          <div className="flex justify-end p-0 m-0">
            <button className="max-w-fit text-red-500 text-xs">
              Block User
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
