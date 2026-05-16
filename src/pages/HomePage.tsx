import { Link } from "react-router-dom";

function HeroClayStage() {
  return (
    <div className="relative mx-auto flex h-[min(72vw,420px)] w-full max-w-xl items-center justify-center md:h-[560px] md:max-w-none">
      <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[48px] border-4 border-white/40 bg-gradient-to-br from-surface via-surface-container-low to-surface-container clay-shadow md:rounded-[60px]">
        <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary-fixed to-primary-container opacity-95 clay-orb md:h-48 md:w-48" />
        <div className="absolute -bottom-6 -right-6 h-44 w-44 rounded-full bg-gradient-to-br from-secondary-fixed to-secondary-container opacity-95 clay-orb md:h-52 md:w-52" />
        <div className="absolute left-[18%] top-[42%] h-36 w-36 -translate-y-1/2 rounded-full bg-gradient-to-br from-tertiary-fixed to-tertiary-container opacity-90 clay-orb md:h-44 md:w-44" />
        <div className="absolute bottom-[14%] left-[12%] h-20 w-28 rounded-[2rem] bg-surface/90 clay-card" />
        <div className="absolute right-[10%] top-[18%] h-24 w-24 rotate-12 rounded-[1.75rem] bg-surface-container-high/95 clay-orb" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="pb-stack-lg">
      <section className="mb-stack-lg flex min-h-[min(70vh,640px)] flex-col items-center justify-between gap-gutter md:flex-row md:items-center md:gap-12">
        <div className="z-10 flex w-full flex-1 flex-col items-start gap-6">
          <div className="clay-card w-fit rounded-full border border-white/60 bg-surface/80 px-6 py-3 backdrop-blur-xl">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
              Creative specialist
            </span>
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-on-surface sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.5rem]">
            Hi, I&apos;m <br />
            <span className="text-primary">Alex Clay</span>
          </h1>
          <p className="max-w-lg font-body text-body-lg text-on-surface-variant">
            Crafting tactile digital experiences that blur the line between pixels and physical
            volume. Welcome to my personal playground.
          </p>
          <Link
            to="/contact"
            className="clay-shadow-button mt-2 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 font-label-md text-label-md uppercase tracking-wider text-on-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in touch
            <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
          </Link>
        </div>

        <div className="relative w-full flex-1">
          <HeroClayStage />
        </div>
      </section>

      <section className="grid gap-gutter md:grid-cols-3">
        {[
          {
            title: "Tactile systems",
            body: "Convex cards, recessed inputs, and multi-layer shadows that read as sculpted mass—not stickers on glass.",
          },
          {
            title: "Ambient depth",
            body: "Lilac canvas, soft violet and rose glows, and glass-clay panels that borrow light from the background.",
          },
          {
            title: "Prototype-aligned",
            body: "Layouts and copy rhythm follow the Stitch desktop exports in prototype1111 while staying image-free.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-[2.5rem] border-2 border-white/50 bg-surface/80 p-8 clay-card backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1"
          >
            <h2 className="mb-3 font-heading text-headline-md text-on-surface">{card.title}</h2>
            <p className="font-body text-body-md text-on-surface-variant">{card.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
