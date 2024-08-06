import React, { Fragment } from "react";
import Card from "./Card";
import Image from "next/image";

export default function Stories() {
  return (
    <Fragment>
      {/* CUSTOM CARD COMPONENT */}
      <Card>
        <div className="flex gap-8 items-center px-2">
          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <Image
              src={"/stories.png"}
              alt="user-stories"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-blue-400"
            />
            <span className="text-xs">Ricky</span>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
