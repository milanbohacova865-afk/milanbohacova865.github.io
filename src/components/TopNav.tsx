import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-full px-3 py-2 font-body text-body-md text-on-surface-variant transition-transform duration-300 hover:scale-105 hover:text-primary active:scale-95 sm:px-4 md:px-6";

export function TopNav() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex w-full justify-center px-margin-mobile pt-4 md:px-margin-desktop md:pt-8">
      <div className="pointer-events-auto mx-auto flex max-w-fit items-center gap-3 rounded-full border-2 border-white/40 bg-surface/60 px-3 py-2 shadow-[10px_10px_20px_rgba(0,0,0,0.1),-10px_-10px_20px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(255,255,255,0.6),inset_-4px_-4px_8px_rgba(0,0,0,0.05)] backdrop-blur-3xl sm:gap-4 md:gap-8 md:px-8 md:py-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `hidden border-r-2 border-white/30 pr-4 font-heading text-headline-md font-black tracking-tight md:block md:pr-8 ${isActive ? "text-primary" : "text-primary hover:text-primary-container"}`
          }
        >
          CLAY.folio
        </NavLink>
        <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-on-primary shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3)]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-on-primary shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3)]" : ""}`
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-on-primary shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3)]" : ""}`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-on-primary shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3)]" : ""}`
            }
          >
            Contact Me
          </NavLink>
        </nav>
        <NavLink
          to="/contact"
          className="ml-1 hidden rounded-full bg-secondary-container px-6 py-3 font-label-md text-label-md text-on-secondary-container clay-orb transition-transform duration-300 hover:scale-105 active:scale-95 lg:inline-flex"
        >
          Let&apos;s Chat
        </NavLink>
      </div>
    </header>
  );
}
