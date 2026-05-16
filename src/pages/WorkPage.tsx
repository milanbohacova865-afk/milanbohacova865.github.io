const projects = [
  {
    title: "Clay Dashboard",
    tag: "Product UI",
    span: "md:col-span-7",
    accent: "from-primary-fixed to-primary-container",
  },
  {
    title: "Motion Study",
    tag: "Interaction",
    span: "md:col-span-5",
    accent: "from-secondary-fixed to-secondary-container",
  },
  {
    title: "Design Tokens",
    tag: "Systems",
    span: "md:col-span-5",
    accent: "from-tertiary-fixed to-tertiary-container",
  },
  {
    title: "Portfolio v2",
    tag: "Frontend",
    span: "md:col-span-7",
    accent: "from-primary-fixed-dim to-primary",
  },
] as const;

export function WorkPage() {
  return (
    <div className="pb-stack-lg">
      <header className="mb-gutter max-w-3xl">
        <p className="mb-3 font-label-md text-label-md uppercase tracking-widest text-primary-container">
          Selected work
        </p>
        <h1 className="font-display text-4xl font-black text-on-surface sm:text-5xl md:text-6xl">
          Projects with volume
        </h1>
        <p className="mt-4 font-body text-body-lg text-on-surface-variant">
          Placeholder tiles inspired by the Work tab in the Stitch desktop nav—swap titles, tags,
          and links when your case studies are ready. No photography: only clay gradients and
          shapes.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group relative overflow-hidden rounded-[3rem] border-2 border-white/50 bg-surface/75 p-8 clay-card backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 md:p-10 ${p.span}`}
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-90 blur-2xl transition-transform duration-500 group-hover:scale-110 ${p.accent}`}
            />
            <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between gap-6 md:min-h-[200px]">
              <div>
                <p className="mb-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                  {p.tag}
                </p>
                <h2 className="font-heading text-2xl font-extrabold text-on-surface sm:text-3xl">
                  {p.title}
                </h2>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="flex gap-2">
                  <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-surface to-surface-container-high clay-orb" />
                  <span className="h-10 w-10 translate-y-2 rounded-full bg-gradient-to-br from-surface-container to-primary-fixed/40 clay-orb" />
                </div>
                <span className="material-symbols-outlined rounded-full bg-surface/80 p-3 text-primary clay-orb transition-transform group-hover:-translate-y-1">
                  north_east
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
