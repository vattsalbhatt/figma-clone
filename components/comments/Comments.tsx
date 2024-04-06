"use client";

import { ClientSideSuspense } from "@liveblocks/react";

import { CommentsOverlay } from "@/components/comments/CommentsOverlay";
import Loader from "../Loader";


export const Comments = () => {
  return (
    <ClientSideSuspense fallback={<Loader />}>
      {() => <CommentsOverlay />}
    </ClientSideSuspense>
  );
};
