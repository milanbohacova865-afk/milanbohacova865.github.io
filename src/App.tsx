import { Route, Routes } from "react-router-dom";
import { LoadingOverlay, PageTransition } from "@/components";
import SplashCursor from "@/components/Splash_Cursor";
import { RootLayout } from "@/layouts";
import { AboutPage, ContactPage, HomePage, WorkPage } from "@/pages";

export function App() {
  return (
    <>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={7}
        SPLAT_RADIUS={0.06}
        SPLAT_FORCE={2000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#1e5834"
      />
      <LoadingOverlay />
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<PageTransition />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
