"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-5">Loading...</div>;
  }

  if (!session || !session.user) {
    return <div className="text-red-500 p-5">You Need To Sign In</div>;
  }

  return <div>This is a client page and must be protected</div>;
};

export default Page;
