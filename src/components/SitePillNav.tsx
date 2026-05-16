import { useLocation } from "react-router-dom";
import PillNav from "@/components/Pill_Nav";
import logoUrl from "@/assets/logo.svg?url";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export function SitePillNav() {
  const { pathname } = useLocation();

  return (
    <PillNav
      logo={logoUrl}
      logoAlt="CLAY.folio"
      items={[...NAV_ITEMS]}
      activeHref={pathname}
      className="site-pill-nav"
      ease="power2.easeOut"
      baseColor="rgba(243, 235, 250, 0.82)"
      pillColor="#7c3aed"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#1d1a24"
      initialLoadAnimation={false}
    />
  );
}
