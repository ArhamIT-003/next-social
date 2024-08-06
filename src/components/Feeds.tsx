import React, { Fragment } from "react";
import Post from "./Post";

export default function Feeds() {
  return (
    <Fragment>
      <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        <Post />
      </div>
    </Fragment>
  );
}
