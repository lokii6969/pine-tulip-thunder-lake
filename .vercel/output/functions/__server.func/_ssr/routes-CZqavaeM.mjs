import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionTitle, t as PageShell } from "./section-title-CWWJUzH6.mjs";
import { a as formacao, i as experiencias, n as competencias, r as contato, t as autor } from "./curriculo-zYEAe3c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CZqavaeM.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Competencias, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formacao, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiencia, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contato, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xs lg:mx-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-full border border-line bg-wash",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: autor.foto,
						alt: `Foto de ${autor.nome}`,
						width: 280,
						height: 280,
						className: "aspect-square w-full object-cover object-top"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-accent",
					children: "Currículo profissional"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-6xl",
					children: autor.nome
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-2xl text-muted",
					children: autor.cargo
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium text-faint",
					children: autor.cidade
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-faint",
					children: autor.idiomas
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
					children: autor.resumo
				})
			] })]
		})
	});
}
function Competencias() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "competencias",
		className: "border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				icone: "competencias.svg",
				kicker: "O que eu faço",
				titulo: "Principais competências"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: competencias.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-bg px-5 py-5 transition-colors duration-150 hover:border-accent/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/icones/${item.arquivo}`,
							alt: "",
							width: 40,
							height: 40,
							className: "size-10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl text-ink",
							children: item.nome
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: item.detalhe
						})
					]
				}, item.nome))
			})]
		})
	});
}
function Formacao() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "formacao",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				icone: "formacao.svg",
				kicker: "Estudos",
				titulo: "Formação acadêmica"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-0",
				children: formacao.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-2 border-t border-line py-7 last:border-b md:grid-cols-[140px_1fr] md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-faint",
						children: item.periodo
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-ink",
							children: item.curso
						}),
						item.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-1 inline-block text-base text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
							children: item.instituicao
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base text-accent",
							children: item.instituicao
						}),
						item.detalhe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: item.detalhe
						}) : null
					] })]
				}, item.curso))
			})]
		})
	});
}
function Experiencia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experiencia",
		className: "border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					icone: "experiencia.svg",
					kicker: "Trajetória",
					titulo: "Experiência profissional"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: experiencias.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-bg p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-ink",
									children: item.cargo
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-faint",
									children: item.periodo
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-1 inline-block text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
								children: item.empresa
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base",
								children: item.resumo
							})
						]
					}, item.empresa))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/experiencia",
						className: "inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90",
						children: "Veja as experiências profissionais em detalhes"
					})
				})
			]
		})
	});
}
function Contato() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					icone: "contato.svg",
					kicker: "Fale comigo",
					titulo: "Contato"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-8 max-w-2xl text-base leading-relaxed text-muted",
					children: "Prefira o formulário se quiser enviar uma mensagem. Os dados abaixo são os canais de contato."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid min-w-0 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContatoItem, {
							icone: "email.svg",
							rotulo: "E-mail",
							valor: contato.email,
							href: `mailto:${contato.email}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContatoItem, {
							icone: "telefone.svg",
							rotulo: "Telefone",
							valor: contato.telefone,
							href: contato.telefoneHref
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContatoItem, {
							icone: "telefone.svg",
							rotulo: "Telefone",
							valor: contato.telefone2,
							href: contato.telefone2Href
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContatoItem, {
							icone: "local.svg",
							rotulo: "Cidade",
							valor: contato.cidade
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contato",
						className: "inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg transition-opacity duration-150 hover:opacity-90",
						children: "Clique aqui para entrar em contato"
					})
				})
			]
		})
	});
}
function ContatoItem({ icone, rotulo, valor, href, externo }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: `/icones/${icone}`,
		alt: "",
		width: 36,
		height: 36,
		className: "size-9 shrink-0"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-semibold uppercase tracking-widest text-faint",
			children: rotulo
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block break-all text-base text-ink",
			children: valor
		})]
	})] });
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "min-w-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-lg border border-line bg-paper px-5 py-4 transition-colors duration-150 hover:border-accent/40",
			...externo ? {
				target: "_blank",
				rel: "noopener noreferrer"
			} : {},
			children: inner
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "flex min-h-20 min-w-0 items-center gap-4 overflow-hidden rounded-lg border border-line bg-paper px-5 py-4",
		children: inner
	});
}
//#endregion
export { Home as component };
