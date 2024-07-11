import React from "react";
import Sidebar from "@/components/notes/Sidebar";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" flex min-w-screen min-h-screen">
      <Sidebar />
      <h1>Protected route</h1>
    </div>
  );
};

export default page;
