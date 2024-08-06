import Image from "next/image";
import React, { Fragment } from "react";

export default function SponsoredAds({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-md">
        {/* TOP CONTAINER */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400">Sponsored Ads</p>
          <Image src={"/more.png"} alt="" width={16} height={16} />
        </div>
        {/* BOTTOM CONTAINER */}
        <div
          className={`flex flex-col mt-4 ${size == "md" ? "gap=2" : "gap-4"}`}
        >
          <div
            className={`relative ${
              size == "sm" ? "h-24" : size == "md" ? "h-32" : "h-48"
            }`}
          >
            <Image
              src={
                "https://images.pexels.com/photos/17071144/pexels-photo-17071144/free-photo-of-white-houses-near-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="ads"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center gap-4 my-2">
            <Image
              src={
                "https://images.pexels.com/photos/17071144/pexels-photo-17071144/free-photo-of-white-houses-near-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="noop"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <p className="text-blue-500 text-xs font-medium">
              House for sale. Interested ?
            </p>
          </div>
          <p className={`${size == "sm" ? "text-xs" : "text-sm"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            optio commodi dolores rem quo ut doloremque dicta, soluta enim vel?
          </p>
          <button className="bg-slate-100 text-xs p-2 rounded-lg text-slate-400 font-medium">
            Learn More
          </button>
        </div>
      </div>
    </Fragment>
  );
}
