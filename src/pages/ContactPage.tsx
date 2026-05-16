import Folder from "@/components/Folder";

export function ContactPage() {
  return (
    <div className="pb-stack-lg">
      <section className="mb-stack-lg flex flex-col items-center text-center">
        <div
          className="mb-gutter flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-primary-fixed via-primary-container to-secondary-container clay-orb md:h-40 md:w-40"
          aria-label="Avatar placeholder"
        >
          <span className="material-symbols-outlined text-5xl text-on-primary md:text-6xl">
            person
          </span>
        </div>
        <h1 className="mb-unit font-display text-headline-lg-mobile text-on-surface sm:text-headline-lg">
          Contact me
        </h1>
        <p className="mx-auto max-w-2xl font-body text-body-lg text-on-surface-variant">
          Let&apos;s sculpt something amazing together. Reach out via your preferred method below
          and I&apos;ll get back to you as soon as I can.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
        <div className="group flex flex-col items-center justify-center rounded-[3rem] border-2 border-white/50 bg-surface/80 p-gutter text-center clay-card backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface text-primary clay-orb transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-[40px]">forum</span>
          </div>
          <h3 className="mb-2 font-heading text-headline-md text-on-surface">WeChat</h3>
          <p className="mb-4 font-body text-body-lg font-bold text-on-surface-variant">your.handle</p>
          <p className="mb-3 font-body text-body-md text-on-surface-variant">
            Tap the folder to open — replaces the QR placeholder.
          </p>
          <div
            className="relative mx-auto flex w-full max-w-[min(100%,320px)] items-center justify-center overflow-visible"
            style={{
              height: "min(600px, 70vh)",
              minHeight: 280,
            }}
          >
            <Folder size={2} color="#5227FF" className="custom-folder flex justify-center" />
          </div>
        </div>

        <div className="group flex flex-col items-center justify-center rounded-[3rem] border-2 border-white/50 bg-surface/80 p-gutter text-center clay-card backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface text-secondary clay-orb transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-[40px]">call</span>
          </div>
          <h3 className="mb-2 font-heading text-headline-md text-on-surface">Phone</h3>
          <p className="mb-8 font-body text-body-lg font-bold text-on-surface-variant">+1 000 000 0000</p>
          <a
            href="tel:+10000000000"
            className="w-full rounded-full bg-surface py-4 text-center font-label-md text-label-md text-primary clay-orb transition-colors duration-300 hover:bg-primary-container hover:text-on-primary-container active:translate-y-px active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]"
          >
            Call Now
          </a>
        </div>

        <div className="group flex flex-col items-center justify-center rounded-[3rem] border-2 border-white/50 bg-surface/80 p-gutter text-center clay-card backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface text-error clay-orb transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-[40px]">play_circle</span>
          </div>
          <h3 className="mb-2 font-heading text-headline-md text-on-surface">YouTube</h3>
          <p className="mb-8 font-body text-body-lg font-bold text-on-surface-variant">@your.handle</p>
          <a
            href="https://youtube.com/@your.handle"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-surface py-4 text-center font-label-md text-label-md text-error clay-orb transition-colors duration-300 hover:bg-error-container hover:text-on-error-container active:translate-y-px active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]"
          >
            Subscribe
          </a>
        </div>
      </section>
    </div>
  );
}
