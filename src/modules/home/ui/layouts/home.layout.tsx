import { SidebarProvider } from "@/components/ui/sidebar";
import { Home_Navbar } from "../components/home-navber";
import { Home_SideBar } from "../components/home-sidebar";

export function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <Home_Navbar />
        <div className="flex min-h-screen pt-[4rem] ">
          <Home_SideBar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
}
