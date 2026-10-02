import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-title-CWWJUzH6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-wash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-ink",
					children: "Marcio Deivid Ferreira Pavão"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-md text-sm leading-relaxed text-muted",
					children: "Desenvolvedor de sistemas · Engenharia de Software na UEPA · Belém, PA."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/curriculo-atividade.zip",
					download: true,
					className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
					children: "Baixar arquivos HTML da atividade"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs leading-relaxed text-faint",
				children: [
					"Ícones originais no estilo de recursos gratuitos de",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://br.freepik.com/",
						className: "underline decoration-line underline-offset-2 hover:text-accent",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Freepik"
					}),
					"."
				]
			})]
		})
	});
}
var links = [
	{
		hash: "inicio",
		label: "Início"
	},
	{
		hash: "competencias",
		label: "Competências"
	},
	{
		hash: "formacao",
		label: "Formação"
	},
	{
		hash: "experiencia",
		label: "Experiência"
	},
	{
		hash: "contato",
		label: "Contato"
	}
];
function SiteHeader() {
	const [aberto, setAberto] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "inicio",
					className: "flex items-center gap-3 text-ink no-underline",
					onClick: () => setAberto(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-sm bg-accent font-display text-sm font-semibold tracking-wide text-accent-fg",
						children: "MP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-tight",
						children: "Marcio Pavão"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					"aria-label": "Seções do currículo",
					children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: item.hash,
						className: "text-sm font-medium text-muted transition-colors duration-150 hover:text-accent",
						children: item.label
					}, item.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-md border border-line text-ink md:hidden",
					"aria-expanded": aberto,
					"aria-controls": "menu-mobile",
					"aria-label": aberto ? "Fechar menu" : "Abrir menu",
					onClick: () => setAberto((v) => !v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex w-5 flex-col gap-1.5",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px bg-ink" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px bg-ink" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px bg-ink" })
						]
					})
				})
			]
		}), aberto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "menu-mobile",
			className: "border-t border-line bg-bg px-4 py-3 md:hidden",
			"aria-label": "Seções do currículo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: item.hash,
					className: "flex min-h-11 items-center text-base font-medium text-ink",
					onClick: () => setAberto(false),
					children: item.label
				}) }, item.hash))
			})
		}) : null]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Ir para o conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "conteudo",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SectionTitle({ icone, titulo, kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: `/icones/${icone}`,
			alt: "",
			width: 48,
			height: 48,
			className: "size-12"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-widest text-accent",
			children: kicker
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl",
			children: titulo
		})] })]
	});
}
//#endregion
export { SectionTitle as n, PageShell as t };
