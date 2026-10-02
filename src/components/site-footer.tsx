export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-wash">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg text-ink">Marcio Deivid Ferreira Pavão</p>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
            Desenvolvedor de sistemas · Engenharia de Software na UEPA · Belém, PA.
          </p>
          <a
            href="/curriculo-atividade.zip"
            download
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            Baixar arquivos HTML da atividade
          </a>
        </div>
        <p className="text-xs leading-relaxed text-faint">
          Ícones originais no estilo de recursos gratuitos de{" "}
          <a
            href="https://br.freepik.com/"
            className="underline decoration-line underline-offset-2 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
