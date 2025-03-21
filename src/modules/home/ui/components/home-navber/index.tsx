import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Search_Input } from "./search-input";
import { Auth_Button } from "@/modules/auth/ui/components/auth-button";

export function Home_Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center flex-shrink-0">
            <SidebarTrigger />
            <Link href={"/"}>
              <div className="p-4 flex items-center gap-1">
                <div className="bg-gradient-to-r from-blue-700 via-slate-900 to-violet-600 text-transparent bg-clip-text relative">
                  <h1 className="text-xl font-bold tracking-tight text-transparent text-center md:text-3xl">
                    Nova Insights
                  </h1>
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar  */}
          <div className="flex-1 justify-center flex  max-w-[720px] mx-auto">
            <Search_Input />
          </div>
          <div className="flex-shrink-0 flex items-center gap-4">
            <Auth_Button />
          </div>
        </div>
      </nav>
    </>
  );
}
