import { Outlet } from "react-router-dom";
import { ClayBackdrop, SiteFooter, SitePillNav } from "@/components";

export function RootLayout() {
  return (
    <div className="bg-ambient-page flex min-h-screen flex-col overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <ClayBackdrop />
      <SitePillNav />
      <main className="mx-auto w-full max-w-container-max flex-1 px-margin-mobile pb-12 pt-[150px] md:px-margin-desktop md:pt-[200px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
