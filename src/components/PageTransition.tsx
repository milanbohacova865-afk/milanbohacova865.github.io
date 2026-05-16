import { Outlet, useLocation } from "react-router-dom";

export function PageTransition() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-[50vh]">
      <div key={pathname} className="animate-page-flip-in">
        <Outlet />
      </div>
    </div>
  );
}
