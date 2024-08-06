import AddPost from "@/components/Add-Post";
import Feeds from "@/components/Feeds";
import LeftMenu from "@/components/Left-Menu";
import RightMenu from "@/components/Right-Menu";
import Stories from "@/components/Stories";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="home" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Stories />
            <AddPost />
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
