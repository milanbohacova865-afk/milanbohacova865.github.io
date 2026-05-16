export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-container-max flex-col items-center justify-center gap-unit px-margin-mobile pb-margin-desktop pt-stack-lg md:px-margin-desktop">
      <div className="mb-4 font-heading text-headline-md text-primary">CLAY.folio</div>
      <div className="mb-4 flex flex-wrap items-center justify-center gap-6">
        <a
          className="font-body text-body-md text-outline transition-colors hover:-translate-y-0.5 hover:text-primary"
          href="https://dribbble.com"
          target="_blank"
          rel="noreferrer"
        >
          Dribbble
        </a>
        <a
          className="font-body text-body-md text-outline transition-colors hover:-translate-y-0.5 hover:text-primary"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-body text-body-md text-outline transition-colors hover:-translate-y-0.5 hover:text-primary"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="text-center font-body text-body-md text-on-surface-variant">
        © {new Date().getFullYear()} Claymorphic Studio. All rights reserved.
      </p>
    </footer>
  );
}
