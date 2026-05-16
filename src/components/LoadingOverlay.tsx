import { useEffect, useState } from "react";

type LoadingOverlayProps = {
  minMs?: number;
};

export function LoadingOverlay({ minMs = 900 }: LoadingOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), minMs);
    return () => window.clearTimeout(t);
  }, [minMs]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background/90 backdrop-blur-md"
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-1 animate-loader-spin rounded-full border-4 border-transparent border-t-primary-container border-r-primary" />
        <div className="absolute inset-4 animate-loader-breathe rounded-full bg-gradient-to-br from-primary-fixed to-primary-container clay-orb" />
      </div>
      <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
        Loading
      </p>
    </div>
  );
}
