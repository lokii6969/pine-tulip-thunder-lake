import { type FormEvent, type ReactNode, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";

export const Route = createFileRoute("/contato")({ component: ContatoPage });

function ContatoPage() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");

  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);
    setNome(String(dados.get("nome") ?? ""));
    setEnviado(true);
    event.currentTarget.reset();
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          <img src="/icones/voltar.svg" alt="" width={20} height={20} className="size-5" />
          Voltar à página principal
        </Link>

        <div className="mt-8">
          <SectionTitle icone="contato.svg" kicker="Mensagem" titulo="Formulário de contato" />
        </div>
        <p className="mb-8 text-base leading-relaxed text-muted">
          Simulação de envio: nenhum dado é armazenado. Preencha os campos para testar o formulário.
        </p>

        {enviado ? (
          <div className="rounded-lg border border-line bg-accent-soft px-6 py-8" role="status">
            <h3 className="font-display text-2xl text-ink">Mensagem registrada</h3>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Obrigado{nome ? `, ${nome}` : ""}. Esta é apenas uma simulação — nenhum e-mail foi enviado.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg"
              onClick={() => setEnviado(false)}
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={enviar} className="rounded-xl border border-line bg-paper p-5 sm:p-8">
            <div className="grid gap-5">
              <Campo label="Nome" htmlFor="nome">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className={campoClass}
                  placeholder="Seu nome completo"
                />
              </Campo>
              <Campo label="E-mail" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={campoClass}
                  placeholder="voce@empresa.com"
                />
              </Campo>
              <Campo label="Telefone" htmlFor="telefone">
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={campoClass}
                  placeholder="(11) 90000-0000"
                />
              </Campo>
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-ink">Você é um recrutador?</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-line bg-bg px-4 py-3 text-sm">
                    <input type="radio" name="recrutador" value="sim" required className="accent-accent" />
                    Sim, sou recrutador(a)
                  </label>
                  <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-line bg-bg px-4 py-3 text-sm">
                    <input type="radio" name="recrutador" value="nao" className="accent-accent" />
                    Não, não sou recrutador(a)
                  </label>
                </div>
              </fieldset>
              <Campo label="Mensagem" htmlFor="mensagem">
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className={`${campoClass} min-h-36 resize-y`}
                  placeholder="Conte rapidamente o motivo do contato"
                />
              </Campo>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </section>
    </PageShell>
  );
}

const campoClass =
  "mt-2 block w-full rounded-md border border-line bg-bg px-3 py-3 text-base text-ink outline-none transition-shadow duration-150 placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20";

function Campo({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
