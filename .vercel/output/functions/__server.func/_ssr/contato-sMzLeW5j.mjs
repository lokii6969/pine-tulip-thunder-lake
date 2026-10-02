import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionTitle, t as PageShell } from "./section-title-CWWJUzH6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-sMzLeW5j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContatoPage() {
	const [enviado, setEnviado] = (0, import_react.useState)(false);
	const [nome, setNome] = (0, import_react.useState)("");
	function enviar(event) {
		event.preventDefault();
		const dados = new FormData(event.currentTarget);
		setNome(String(dados.get("nome") ?? ""));
		setEnviado(true);
		event.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/icones/voltar.svg",
					alt: "",
					width: 20,
					height: 20,
					className: "size-5"
				}), "Voltar à página principal"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					icone: "contato.svg",
					kicker: "Mensagem",
					titulo: "Formulário de contato"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-base leading-relaxed text-muted",
				children: "Simulação de envio: nenhum dado é armazenado. Preencha os campos para testar o formulário."
			}),
			enviado ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-line bg-accent-soft px-6 py-8",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-ink",
						children: "Mensagem registrada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-base leading-relaxed text-muted",
						children: [
							"Obrigado",
							nome ? `, ${nome}` : "",
							". Esta é apenas uma simulação — nenhum e-mail foi enviado."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-6 inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg",
						onClick: () => setEnviado(false),
						children: "Enviar outra mensagem"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: enviar,
				className: "rounded-xl border border-line bg-paper p-5 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campo, {
							label: "Nome",
							htmlFor: "nome",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nome",
								name: "nome",
								type: "text",
								required: true,
								autoComplete: "name",
								className: campoClass,
								placeholder: "Seu nome completo"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campo, {
							label: "E-mail",
							htmlFor: "email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								required: true,
								autoComplete: "email",
								className: campoClass,
								placeholder: "voce@empresa.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campo, {
							label: "Telefone",
							htmlFor: "telefone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "telefone",
								name: "telefone",
								type: "tel",
								required: true,
								autoComplete: "tel",
								className: campoClass,
								placeholder: "(11) 90000-0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-medium text-ink",
							children: "Você é um recrutador?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-line bg-bg px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "recrutador",
									value: "sim",
									required: true,
									className: "accent-accent"
								}), "Sim, sou recrutador(a)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-line bg-bg px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "recrutador",
									value: "nao",
									className: "accent-accent"
								}), "Não, não sou recrutador(a)"]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campo, {
							label: "Mensagem",
							htmlFor: "mensagem",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "mensagem",
								name: "mensagem",
								required: true,
								rows: 6,
								className: `${campoClass} min-h-36 resize-y`,
								placeholder: "Conte rapidamente o motivo do contato"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90",
							children: "Enviar"
						})
					]
				})
			})
		]
	}) });
}
var campoClass = "mt-2 block w-full rounded-md border border-line bg-bg px-3 py-3 text-base text-ink outline-none transition-shadow duration-150 placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20";
function Campo({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor,
		className: "text-sm font-medium text-ink",
		children: label
	}), children] });
}
//#endregion
export { ContatoPage as component };
