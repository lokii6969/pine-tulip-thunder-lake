import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { autor, competencias, contato, experiencias, formacao } from "@/data/curriculo";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <Hero />
      <Competencias />
      <Formacao />
      <Experiencia />
      <Contato />
    </PageShell>
  );
}

function Hero() {
  return (
    <section id="inicio" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-16 lg:py-20">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="overflow-hidden rounded-full border border-line bg-wash">
            <img
              src={autor.foto}
              alt={`Foto de ${autor.nome}`}
              width={280}
              height={280}
              className="aspect-square w-full object-cover object-top"
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Currículo profissional</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-6xl">
            {autor.nome}
          </h1>
          <p className="mt-4 font-display text-2xl text-muted">{autor.cargo}</p>
          <p className="mt-2 text-sm font-medium text-faint">{autor.cidade}</p>
          <p className="mt-1 text-sm text-faint">{autor.idiomas}</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{autor.resumo}</p>
        </div>
      </div>
    </section>
  );
}

function Competencias() {
  return (
    <section id="competencias" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionTitle icone="competencias.svg" kicker="O que eu faço" titulo="Principais competências" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {competencias.map((item) => (
            <li
              key={item.nome}
              className="rounded-lg border border-line bg-bg px-5 py-5 transition-colors duration-150 hover:border-accent/40"
            >
              <img src={`/icones/${item.arquivo}`} alt="" width={40} height={40} className="size-10" />
              <h3 className="mt-4 font-display text-xl text-ink">{item.nome}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detalhe}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Formacao() {
  return (
    <section id="formacao" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionTitle icone="formacao.svg" kicker="Estudos" titulo="Formação acadêmica" />
        <ol className="space-y-0">
          {formacao.map((item) => (
            <li key={item.curso} className="grid gap-2 border-t border-line py-7 last:border-b md:grid-cols-[140px_1fr] md:gap-8">
              <p className="text-sm font-medium text-faint">{item.periodo}</p>
              <div>
                <h3 className="font-display text-2xl text-ink">{item.curso}</h3>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-base text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                  >
                    {item.instituicao}
                  </a>
                ) : (
                  <p className="mt-1 text-base text-accent">{item.instituicao}</p>
                )}
                {item.detalhe ? (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.detalhe}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section id="experiencia" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionTitle icone="experiencia.svg" kicker="Trajetória" titulo="Experiência profissional" />
        <div className="grid gap-5">
          {experiencias.slice(0, 3).map((item) => (
            <article key={item.empresa} className="rounded-lg border border-line bg-bg p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl text-ink">{item.cargo}</h3>
                <p className="text-sm text-faint">{item.periodo}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              >
                {item.empresa}
              </a>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{item.resumo}</p>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <Link
            to="/experiencia"
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90"
          >
            Veja as experiências profissionais em detalhes
          </Link>
        </p>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionTitle icone="contato.svg" kicker="Fale comigo" titulo="Contato" />
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
          Prefira o formulário se quiser enviar uma mensagem. Os dados abaixo são os canais de contato.
        </p>
        <ul className="grid min-w-0 gap-4 sm:grid-cols-2">
          <ContatoItem icone="email.svg" rotulo="E-mail" valor={contato.email} href={`mailto:${contato.email}`} />
          <ContatoItem icone="telefone.svg" rotulo="Telefone" valor={contato.telefone} href={contato.telefoneHref} />
          <ContatoItem icone="telefone.svg" rotulo="Telefone" valor={contato.telefone2} href={contato.telefone2Href} />
          <ContatoItem icone="local.svg" rotulo="Cidade" valor={contato.cidade} />
        </ul>
        <p className="mt-8">
          <Link
            to="/contato"
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90"
          >
            Clique aqui para entrar em contato
          </Link>
        </p>
      </div>
    </section>
  );
}

function ContatoItem({
  icone,
  rotulo,
  valor,
  href,
  externo,
}: {
  icone: string;
  rotulo: string;
  valor: string;
  href?: string;
  externo?: boolean;
}) {
  const inner = (
    <>
      <img src={`/icones/${icone}`} alt="" width={36} height={36} className="size-9 shrink-0" />
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-widest text-faint">{rotulo}</span>
        <span className="mt-1 block break-all text-base text-ink">{valor}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <li className="min-w-0">
        <a
          href={href}
          className="flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-lg border border-line bg-paper px-5 py-4 transition-colors duration-150 hover:border-accent/40"
          {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li className="flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-lg border border-line bg-paper px-5 py-4">
      {inner}
    </li>
  );
}
