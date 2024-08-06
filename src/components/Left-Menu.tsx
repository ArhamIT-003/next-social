import React, { Fragment } from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import { LeftMenuData } from "@/data/component-data";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        {type == "home" && <ProfileCard />}
        <div className="p-4 bg-white shadow-md rounded-md text-sm text-gray-600 flex flex-col gap-2">
          {LeftMenuData.map((data, i) => (
            <Fragment key={i}>
              <Link
                href={data.link}
                className="flex gap-4 items-center p-2 hover:bg-slate-100 hover:rounded-lg"
              >
                <Image src={data.image} alt="home" width={16} height={16} />
                <span>{data.name}</span>
              </Link>
              <hr className="border-t-1 border-gray-300 w-36 self-center" />
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
