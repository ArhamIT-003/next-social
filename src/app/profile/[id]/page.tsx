import Feeds from "@/components/Feeds";
import LeftMenu from "@/components/Left-Menu";
import RightMenu from "@/components/Right-Menu";
import Image from "next/image";
import React, { Fragment } from "react";

export default function SingleProfilePage() {
  return (
    <Fragment>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-48 relative">
                <Image
                  src={
                    "https://images.pexels.com/photos/27300639/pexels-photo-27300639/free-photo-of-yol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="avatar"
                  fill
                  className="rounded-lg object-cover"
                />
                <Image
                  src={
                    "https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="avatar"
                  width={128}
                  height={128}
                  className="w-32 h-32 cursor-pointer absolute -bottom-16 m-auto right-0 rounded-full left-0 object-cover ring-4 ring-white"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Mike Ross</h1>
              <div className="flex justify-center items-center gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold self-center text-sm">100</span>
                  <span className="font-semibold">All Posts</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold self-center text-sm">
                    1.2k
                  </span>
                  <span className="font-semibold">Followers</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold self-center text-sm">100</span>
                  <span className="font-semibold">Following</span>
                </div>
              </div>
            </div>
            <Feeds />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu />
        </div>
      </div>
    </Fragment>
  );
}
