const services = [
  {
    icon: "design_services",
    title: "UI/UX Design",
    caption: "Crafting intuitive journeys.",
  },
  {
    icon: "view_in_ar",
    title: "3D Interactions",
    caption: "Adding depth and feel.",
  },
  {
    icon: "code",
    title: "Design Systems",
    caption: "Scalable visual language.",
  },
] as const;

function TactileBanner() {
  return (
    <div className="clay-card-panel relative col-span-1 flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-surface-dim md:col-span-12 md:h-80">
      <div
        className="absolute inset-0 opacity-50 qr-dot-grid"
        aria-hidden
      />
      <div className="absolute left-[8%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-primary-fixed/90 to-primary-container/80 blur-[2px] clay-orb md:h-40 md:w-40" />
      <div className="absolute bottom-[12%] right-[10%] h-36 w-36 rounded-full bg-gradient-to-br from-secondary-fixed/90 to-secondary-container/75 clay-orb md:h-44 md:w-44" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl font-black uppercase tracking-[0.35em] text-primary/20 sm:text-6xl md:text-7xl">
          Tactile
        </span>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="pb-stack-lg">
      <header className="mb-gutter text-center md:text-left">
        <h1 className="mb-unit font-display text-4xl font-black text-on-surface sm:text-5xl md:text-6xl lg:text-display-lg">
          About me
        </h1>
        <p className="mx-auto max-w-2xl font-body text-body-lg text-on-surface-variant md:mx-0">
          Crafting digital experiences with a tactile touch.
        </p>
      </header>

      <div className="grid auto-rows-min grid-cols-1 gap-gutter md:grid-cols-12">
        <article className="clay-card-panel col-span-1 flex flex-col justify-center p-10 md:col-span-8 md:p-12">
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary sm:text-headline-lg">
            Hello, I&apos;m a Digital Sculptor.
          </h2>
          <div className="space-y-4 font-body text-body-lg text-on-surface-variant">
            <p>
              I specialize in designing user interfaces that feel physically present. My work is
              rooted in the belief that digital environments shouldn&apos;t just be flat screens,
              but tactile spaces that invite interaction. I blend modern aesthetic trends with
              robust usability principles to create products that are both beautiful and highly
              functional.
            </p>
            <p>
              With a background spanning traditional graphic design and modern front-end
              development, I bridge the gap between creative vision and technical execution. I obsess
              over the micro-interactions—the way a button depresses, how a shadow shifts, and the
              satisfying &quot;click&quot; of a well-designed component.
            </p>
            <p>
              When I&apos;m not pushing pixels or fine-tuning CSS shadows, you can usually find me
              experimenting with 3D modeling, exploring generative art, or trying to find the
              perfect shade of off-white.
            </p>
          </div>
        </article>

        <article className="clay-card-primary col-span-1 flex flex-col justify-between p-10 text-on-primary-container md:col-span-4">
          <div>
            <h3 className="mb-6 font-heading text-headline-md text-on-primary">What I do</h3>
            <ul className="space-y-6">
              {services.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <div className="clay-icon-recessed flex h-12 w-12 shrink-0 items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-primary">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.caption}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <TactileBanner />
      </div>
    </div>
  );
}
