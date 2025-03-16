import { HydrateClient, trpc } from "@/trpc/server";
import Pageclient from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function page() {
  void trpc.hello.prefetch({ text: "suraj" });
  return (
    <>
      <HydrateClient>
        <Suspense fallback={<p>loding...</p>}>
        <ErrorBoundary fallback={<p>error...</p>} >
          <Pageclient />
        </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </>
  );
}
