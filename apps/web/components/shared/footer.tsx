import { ThemeToggle } from "@/components/shared/theme-toggle";

const LINK_CLASS =
  "text-muted-foreground/50 text-xs transition-colors duration-200 hover:text-muted-foreground";

export function Footer() {
  return (
    <footer className="pt-12 pb-8">
      <div className="via-foreground/10 mb-4 h-px bg-linear-to-r from-transparent to-transparent" />
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <a
          href="https://autorply.sa"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          &copy; {new Date().getFullYear()} Autorply
        </a>

        <div className="flex items-center gap-5">
          <a href="https://hub.autorply.sa" className={LINK_CLASS}>
            Autorply AI Hub
          </a>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
