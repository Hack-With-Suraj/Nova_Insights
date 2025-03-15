import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export function Auth_Button() {
  return (
    <>
      <Button
      variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-900 border-blue-500/20 rounded-full shadow-none">
        <UserCircleIcon />
        sign in
      </Button>
    </>
  );
}
