import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { hash: "inicio", label: "Início" },
  { hash: "competencias", label: "Competências" },
  { hash: "formacao", label: "Formação" },
  { hash: "experiencia", label: "Experiência" },
  { hash: "contato", label: "Contato" },
];

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          hash="inicio"
          className="flex items-center gap-3 text-ink no-underline"
          onClick={() => setAberto(false)}
        >
          <span className="grid size-9 place-items-center rounded-sm bg-accent font-display text-sm font-semibold tracking-wide text-accent-fg">
            MP
          </span>
          <span className="font-display text-lg tracking-tight">Marcio Pavão</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Seções do currículo">
          {links.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md border border-line text-ink md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
          </span>
        </button>
      </div>

      {aberto ? (
        <nav
          id="menu-mobile"
          className="border-t border-line bg-bg px-4 py-3 md:hidden"
          aria-label="Seções do currículo"
        >
          <ul className="flex flex-col">
            {links.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  className="flex min-h-11 items-center text-base font-medium text-ink"
                  onClick={() => setAberto(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
