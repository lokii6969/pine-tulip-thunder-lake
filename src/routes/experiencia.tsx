import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { experiencias } from "@/data/curriculo";

export const Route = createFileRoute("/experiencia")({ component: ExperienciaPage });

function ExperienciaPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          <img src="/icones/voltar.svg" alt="" width={20} height={20} className="size-5" />
          Voltar à página principal
        </Link>

        <div className="mt-8">
          <SectionTitle icone="experiencia.svg" kicker="Histórico completo" titulo="Experiência profissional em detalhes" />
        </div>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
          Tabela com projetos, instituições, períodos e principais atividades. Os nomes das instituições apontam para os sites oficiais.
        </p>

        <div className="overflow-x-auto rounded-lg border border-line bg-paper">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Detalhamento das experiências profissionais</caption>
            <thead className="bg-wash text-xs font-semibold uppercase tracking-widest text-muted">
              <tr>
                <th scope="col" className="border-b border-line px-4 py-3">
                  Empresa
                </th>
                <th scope="col" className="border-b border-line px-4 py-3">
                  Cargo
                </th>
                <th scope="col" className="border-b border-line px-4 py-3">
                  Período
                </th>
                <th scope="col" className="border-b border-line px-4 py-3">
                  Local
                </th>
                <th scope="col" className="border-b border-line px-4 py-3">
                  Principais atividades
                </th>
              </tr>
            </thead>
            <tbody>
              {experiencias.map((item) => (
                <tr key={item.empresa} className="align-top even:bg-bg">
                  <th scope="row" className="border-b border-line px-4 py-4 font-medium text-ink">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                    >
                      {item.empresa}
                    </a>
                  </th>
                  <td className="border-b border-line px-4 py-4 text-ink">{item.cargo}</td>
                  <td className="border-b border-line px-4 py-4 whitespace-nowrap text-muted">{item.periodo}</td>
                  <td className="border-b border-line px-4 py-4 text-muted">{item.local}</td>
                  <td className="border-b border-line px-4 py-4 text-muted">
                    <ul className="list-disc space-y-1 pl-4">
                      {item.atividades.map((atividade) => (
                        <li key={atividade}>{atividade}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            <img src="/icones/voltar.svg" alt="" width={20} height={20} className="size-5" />
            Voltar à página principal
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
