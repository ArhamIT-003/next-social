import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function FriendsRequest() {
  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-md">
        {/* Friends Request */}
        {/* TOP CONTAINER- DETAILS */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400">Friends Request</p>
          <Link href={"/see-all"} className="text-xs font-medium text-blue-500">
            See All
          </Link>
        </div>
        {/* BOTTOM CONTAINER - WHO REQUEST TO FOLLOW YOU */}
        <div className="flex items-center justify-between my-4">
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
            <p className="text-xs font-medium">Ricky James</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/accept.png"}
              alt="accept"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"/reject.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* BOTTOM CONTAINER ENDS HERE */}
      </div>
    </Fragment>
  );
}
