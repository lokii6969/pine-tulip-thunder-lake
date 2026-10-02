import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionTitle, t as PageShell } from "./section-title-CWWJUzH6.mjs";
import { i as experiencias } from "./curriculo-zYEAe3c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experiencia-Bw-DR90U.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienciaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
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
					icone: "experiencia.svg",
					kicker: "Histórico completo",
					titulo: "Experiência profissional em detalhes"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 max-w-2xl text-base leading-relaxed text-muted",
				children: "Tabela com projetos, instituições, períodos e principais atividades. Os nomes das instituições apontam para os sites oficiais."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-lg border border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] border-collapse text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "sr-only",
							children: "Detalhamento das experiências profissionais"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-wash text-xs font-semibold uppercase tracking-widest text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "border-b border-line px-4 py-3",
									children: "Empresa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "border-b border-line px-4 py-3",
									children: "Cargo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "border-b border-line px-4 py-3",
									children: "Período"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "border-b border-line px-4 py-3",
									children: "Local"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "border-b border-line px-4 py-3",
									children: "Principais atividades"
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: experiencias.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "align-top even:bg-bg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "row",
									className: "border-b border-line px-4 py-4 font-medium text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: item.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
										children: item.empresa
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-line px-4 py-4 text-ink",
									children: item.cargo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-line px-4 py-4 whitespace-nowrap text-muted",
									children: item.periodo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-line px-4 py-4 text-muted",
									children: item.local
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "border-b border-line px-4 py-4 text-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "list-disc space-y-1 pl-4",
										children: item.atividades.map((atividade) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: atividade }, atividade))
									})
								})
							]
						}, item.empresa)) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/icones/voltar.svg",
						alt: "",
						width: 20,
						height: 20,
						className: "size-5"
					}), "Voltar à página principal"]
				})
			})
		]
	}) });
}
//#endregion
export { ExperienciaPage as component };
