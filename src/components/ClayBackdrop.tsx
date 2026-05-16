export function ClayBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="fixed left-[10%] top-[18%] h-[min(40vw,420px)] w-[min(40vw,420px)] rounded-full bg-primary/10 blur-[100px] mix-blend-multiply" />
      <div className="fixed bottom-[8%] right-[8%] h-[min(34vw,360px)] w-[min(34vw,360px)] rounded-full bg-secondary/10 blur-[90px] mix-blend-multiply" />
      <div className="fixed bottom-[30%] left-[35%] h-[min(28vw,280px)] w-[min(28vw,280px)] rounded-full bg-tertiary-container/15 blur-[80px] mix-blend-multiply md:block" />
    </div>
  );
}
