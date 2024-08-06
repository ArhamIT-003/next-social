import Image from "next/image";
import React, { Fragment } from "react";

function ProfileCard() {
  return (
    <Fragment>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
        <div className="relative h-20">
          <Image
            src={
              "https://images.pexels.com/photos/27300639/pexels-photo-27300639/free-photo-of-yol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="avatar"
            fill
            className="rounded-md object-cover"
          />
          <Image
            src={
              "https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="avatar"
            width={48}
            height={48}
            className="w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 rounded-full object-cover"
          />
        </div>
        <div className="h-20 flex flex-col gap-2 items-center">
          <span className="font-medium text-sm">Mike Ross</span>
          <span className="text-gray-400 font-medium text-xs">500 follower</span>
          <button className="bg-blue-500 text-white p-2 text-xs rounded-md">My Profile</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileCard;
