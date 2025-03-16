"use client";
import { trpc } from "@/trpc/client";

export default function Pageclient() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "suraj" });
  return <div>{data.greeting}</div>;
}
