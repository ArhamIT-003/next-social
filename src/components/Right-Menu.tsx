import React, { Fragment } from "react";
import FriendsRequest from "./Friends-Request";
import Birthdays from "./Birthdays";
import SponsoredAds from "./Sponsored-Ads";
import UserInfo from "./User-Info";
import UserMedia from "./User-Media";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        {userId ? (
          <>
            <UserInfo />
            <UserMedia />
          </>
        ) : null}
        <FriendsRequest />
        <Birthdays />
        <SponsoredAds size="md" />
      </div>
    </Fragment>
  );
}
