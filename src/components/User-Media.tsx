import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function UserMedia() {
  const media: string[] = [
    "https://images.pexels.com/photos/26223021/pexels-photo-26223021/free-photo-of-carlo-scarpa-venedik.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/25542632/pexels-photo-25542632/free-photo-of-coffee-pot-and-coffee-cup-on-window-sill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/22276426/pexels-photo-22276426/free-photo-of-garden-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/22276426/pexels-photo-22276426/free-photo-of-garden-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

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
          {media?.map((img, index) => (
            <div key={index} className="relative w-1/5 h-24">
              <Image
                src={img}
                alt="user-media"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
