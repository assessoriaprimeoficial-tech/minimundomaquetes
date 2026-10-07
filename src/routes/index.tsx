import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import shareLogoAsset from "@/assets/share-logo.jpg.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Hammer,
  Layers3,
  MessageCircle,
  PackageCheck,
  Recycle,
  Ruler,
  Sparkles,
  WalletCards,
  UserRound,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5521985261185?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mini%20Mundo%20Maquetes%20e%20quero%20fazer%20um%20or%C3%A7amento.";
const plans = [
  {
    name: "Simples",
    size: "50 × 50 cm",
    audience: "Alunos de 6 a 10 anos",
    price: "R$ 180 a R$ 220",
    color: "bg-blue-600",
  },
  {
    name: "Comum",
    size: "60 × 60 ou 60 × 80 cm",
    audience: "Alunos de 12 a 17 anos",
    price: "R$ 250 a R$ 280",
    color: "bg-orange-500",
  },
  {
    name: "Grande",
    size: "aprox. 1,50 m",
    audience: "Alunos acima de 17 anos e cursos",
    price: "R$ 350 a R$ 450",
    color: "bg-red-500",
  },
  {
    name: "Mega",
    size: "1 × 1 m",
    audience: "Projetos expressivos e detalhados",
    price: "R$ 450 a R$ 750",
    color: "bg-red-600",
  },
];
const faqs = [
  [
    "Qual é o prazo de fabricação?",
    "O prazo padrão para entrega é de até 8 dias após a confirmação do pedido.",
  ],
  [
    "Quais materiais são utilizados?",
    "Nas maquetes escolares, utilizamos principalmente isopor 100%, papelão, plástico e PVC, priorizando materiais recicláveis. Para projetos permanentes, também trabalhamos com materiais novos.",
  ],
  [
    "A maquete é uma réplica exata?",
    "Não. A maquete é criada ou baseada na imagem de referência e fica semelhante ao pedido, mas os elementos são simulados. Água, energia e outros itens são representados visualmente.",
  ],
  [
    "Posso pedir mudanças depois que estiver pronta?",
    "Para evitar retrabalho, enviamos uma ideia durante a montagem. Depois de pintura e colagem não realizamos mudanças, inclusive no dia da entrega.",
  ],
  [
    "Como funciona o pagamento?",
    "É solicitado 30% de sinal para iniciar e o restante é pago quando o cliente vier buscar. Em pedidos com prazo longo, se o projeto ficar pronto antes, o saldo deve ser pago após o envio de fotos e vídeos.",
  ],
  [
    "Vocês fazem entrega?",
    "A retirada é feita no local de fabricação e fica sob responsabilidade do cliente, pessoalmente ou por Uber/Carga.",
  ],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mini Mundo Maquetes | Maquetes escolares e projetos" },
      {
        name: "description",
        content:
          "Maquetes escolares, para feiras, cursos e projetos. Modelos simples, comuns, grandes e mega sob encomenda.",
      },
      { property: "og:title", content: "Mini Mundo Maquetes" },
      {
        property: "og:description",
        content: "Transformamos ideias e projetos em maquetes feitas sob encomenda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://minimundomaquetes.lovable.app/" },
      { property: "og:image", content: new URL(shareLogoAsset.url, "https://minimundomaquetes.lovable.app").href },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logomarca Mini Mundo Maquete" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: new URL(shareLogoAsset.url, "https://minimundomaquetes.lovable.app").href },
    ],
    links: [{ rel: "canonical", href: "https://minimundomaquetes.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" aria-label="Mini Mundo Maquetes — início" className="block shrink-0">
            <img src={logoAsset.url} alt="Mini Mundo Maquete" width={1475} height={825} className="h-auto w-24 object-contain sm:w-28" />
          </a>
          <nav className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#sobre" className="hover:text-blue-600">
              Sobre
            </a>
            <a href="#modelos" className="hover:text-blue-600">
              Modelos
            </a>
            <a href="#como-funciona" className="hover:text-blue-600">
              Como funciona
            </a>
            <a href="#avaliacoes" className="hover:text-blue-600">
              Galeria
            </a>
            <a href="#duvidas" className="hover:text-blue-600">
              Dúvidas
            </a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg hover:bg-blue-700"
          >
            Pedir orçamento
          </a>
        </div>
      </header>

      <section className="relative pt-28 text-center">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -right-24 top-28 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Sparkles size={15} /> Feitas sob encomenda
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Sua ideia em um <span className="text-blue-600">Mini Mundo.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Fabricamos{" "}
              <strong className="text-slate-900">
                maquetes escolares, para feiras, cursos e projetos
              </strong>
              , com diferentes tamanhos e níveis de detalhe.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-extrabold text-white shadow-xl hover:bg-blue-700"
              >
                Quero fazer minha maquete{" "}
                <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </a>
              <a
                href="#modelos"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-extrabold transition hover:bg-blue-50"
              >
                Ver modelos e valores
              </a>
            </div>
            <div className="mt-9 grid w-full max-w-xl grid-cols-3 gap-2 text-center sm:gap-3">
              {[
                ["8 dias", "prazo padrão"],
                ["30%", "sinal inicial"],
                ["4 níveis", "de maquete"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="min-w-0 rounded-2xl border border-slate-100 bg-white/80 px-2 py-4 shadow-sm sm:px-4"
                >
                  <b className="block text-xl font-black text-blue-700">{a}</b>
                  <span className="text-xs font-semibold text-slate-500">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="overflow-hidden bg-orange-500 py-3 text-white"><div className="flex w-max animate-info-marquee whitespace-nowrap font-extrabold uppercase tracking-[0.14em]"><span className="mx-8">✦ Maquetes sob encomenda</span><span className="mx-8">✦ Prazo padrão de até 8 dias</span><span className="mx-8">✦ 30% de sinal para iniciar</span><span className="mx-8">✦ Modelos simples, comuns, grandes e mega</span><span className="mx-8">✦ Peça seu orçamento pelo WhatsApp</span><span className="mx-8">✦ Maquetes sob encomenda</span><span className="mx-8">✦ Prazo padrão de até 8 dias</span><span className="mx-8">✦ 30% de sinal para iniciar</span><span className="mx-8">✦ Modelos simples, comuns, grandes e mega</span><span className="mx-8">✦ Peça seu orçamento pelo WhatsApp</span></div></div>


      </section>

      <section id="modelos" className="scroll-mt-24 bg-[#f7fbff] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <div>
              <p className="font-extrabold uppercase tracking-[0.18em] text-blue-600">
                Modelos e valores
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Escolha o nível da sua maquete
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Confira o tamanho, indicação e média de valor de cada modelo. Abaixo de cada
              categoria, deixamos um carrossel preparado para mostrar as maquetes reais daquele
              tipo.
            </p>
          </div>
          <div className="mt-10 space-y-12">
            {plans.map((p, i) => (
              <article key={p.name} className="overflow-visible bg-transparent text-center">
                <div className="block">
                  <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                    <div className={"absolute inset-x-0 top-0 h-2 rounded-t-[2rem] " + p.color} />
                    <span className="text-sm font-extrabold text-slate-400">MODELO 0{i + 1}</span>
                    <h3 className="mt-4 text-3xl font-black">{p.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      {i === 0
                        ? "Ideal para trabalhos escolares mais simples, especialmente para crianças e alunos que precisam apresentar uma ideia de forma objetiva e criativa."
                        : i === 1
                          ? "Uma opção mais completa para trabalhos escolares e apresentações que precisam de mais espaço e elementos na composição."
                          : i === 2
                            ? "Modelo maior e mais expressivo, indicado para alunos acima de 17 anos, cursos e projetos que precisam de presença visual."
                            : "Modelo de maior impacto, pensado para projetos expressivos e detalhados, como usinas, construções, mar, navios, plataformas e outros trabalhos especiais."}
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Tamanho
                        </span>
                        <strong className="mt-1 block text-lg">{p.size}</strong>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Indicado para
                        </span>
                        <strong className="mt-1 block text-sm leading-5">{p.audience}</strong>
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                        Média de valor
                      </span>
                      <strong className="mt-1 block text-2xl font-black text-blue-700">
                        {p.price}
                      </strong>
                      <p className="mt-1 text-xs text-blue-700/70">
                        O valor final pode variar conforme detalhes, materiais e exigências do
                        projeto.
                      </p>
                    </div>
                    <a
                      href={
                        WHATSAPP +
                        "&text=Quero%20um%20or%C3%A7amento%20para%20uma%20maquete%20" +
                        encodeURIComponent(p.name) +
                        "."
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-md hover:bg-blue-700"
                    >
                      Pedir orçamento para este modelo <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 border-y border-slate-200 bg-[#eaf5ff] px-0 py-10 text-center sm:px-7">
                    <div className="mx-auto mb-5 flex max-w-6xl items-center justify-center gap-4">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">
                          Fotos do modelo
                        </span>
                        <h4 className="mt-1 font-black text-slate-900">
                          Exemplos de {p.name.toLowerCase()}
                        </h4>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex w-max gap-4 animate-maquette-marquee">
                        {[1, 2, 3, 1, 2, 3].map((n, index) => (
                          <div key={index} className="min-w-[82vw] shrink-0 sm:min-w-[420px]">
                            <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-white shadow-sm">
                              <div className="text-center">
                                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                                  {n}
                                </div>
                                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">
                                  Espaço para foto
                                </p>
                                <p className="mt-1 text-sm font-bold text-slate-700">
                                  Maquete {p.name.toLowerCase()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-sm leading-6 text-orange-950">
            <strong>Materiais novos ou réplicas:</strong> quando o projeto exige somente materiais
            novos, sem reciclados, ou uma réplica, o valor é definido conforme as exigências e
            combinado diretamente com o cliente.
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 bg-[#fff8ee] py-20 text-slate-900 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="flex flex-col items-center gap-10">
            <div>
              <p className="font-extrabold uppercase tracking-[0.18em] text-orange-400">
                Como funciona
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Do pedido à retirada, tudo explicado.
              </h2>
              <p className="mt-5 leading-7 text-white/60">
                Para que o resultado fique alinhado com sua expectativa, seguimos um processo
                simples e objetivo.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4">
              {[
                [
                  "01",
                  "Você envia a ideia",
                  "Conte o que precisa, envie imagens de referência e informe tamanho e finalidade.",
                ],
                [
                  "02",
                  "Definimos o modelo",
                  "Alinhamos o nível da maquete e o orçamento antes de começar.",
                ],
                [
                  "03",
                  "Produzimos",
                  "O prazo padrão é de 8 dias. Em pedidos longos, enviamos fotos e vídeos quando o trabalho estiver pronto.",
                ],
                [
                  "04",
                  "Você retira",
                  "A retirada é feita no local de fabricação. O transporte fica por conta do cliente.",
                ],
              ].map(([n, t, d]) => (
                <div
                  key={n}
                  className="rounded-3xl border border-orange-100 bg-white p-7 text-center shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-3xl font-black text-blue-600">{n}</span>
                  <h3 className="mt-4 font-black">{t}</h3>
                  <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-white shadow-lg hover:bg-orange-600"
          >
            Falar sobre meu projeto <MessageCircle size={17} />
          </a>
          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5 text-sm text-white/80">
            <div className="flex flex-col items-center gap-4 text-center">
              <span>
                <strong className="text-slate-900">Pagamento via Pix</strong>
                <br />
                <span className="text-slate-500">
                  Chave: 21 985261185 — Adilson Simões do Nascimento
                </span>
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-blue-600 px-4 py-2 font-extrabold text-white shadow-md hover:bg-blue-700"
              >
                Enviar comprovante
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
            {(
              [
                [WalletCards, "Pagamento", "30% de sinal + restante na retirada."],
                [Clock3, "Prazo", "Até 8 dias após o pedido."],
                [PackageCheck, "Retirada", "No local de fabricação, por conta do cliente."],
              ] as const
            ).map(([Icon, t, d]) => (
              <div key={t as string} className="flex flex-col items-center gap-3 text-center">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={20} />
                </div>
                <div>
                  <b className="block">{t as string}</b>
                  <span className="mx-auto block max-w-xl text-sm text-slate-500">{d as string}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="scroll-mt-24 overflow-hidden bg-[#f7fbff] py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 text-center lg:px-8"><p className="font-extrabold uppercase tracking-[0.18em] text-blue-600">Avaliações</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Quem já pediu, recomenda.</h2><p className="mx-auto mt-4 max-w-2xl text-slate-500">Espaço preparado para avaliações reais dos clientes da Mini Mundo Maquetes.</p><div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden"><div className="flex w-max animate-review-marquee gap-5">{[1,2,3,4,5,6].map((i)=><div key={i} className="w-[82vw] max-w-md shrink-0 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-lg"><div className="text-2xl tracking-[0.2em] text-yellow-400">★★★★★</div><p className="mt-6 text-lg font-semibold leading-8 text-slate-700">“Espaço para uma avaliação real e detalhada do cliente, contando como foi o atendimento, a produção e o resultado da maquete.”</p><div className="mt-6 flex flex-col items-center"><div className="grid h-14 w-14 place-items-center rounded-full bg-slate-100 text-slate-400"><UserRound size={27}/></div><span className="mt-3 text-sm font-extrabold text-slate-900">{["Mariana Alves","Carlos Henrique","Fernanda Martins","Rafael Oliveira","Juliana Costa","André Souza"][i-1]}</span><span className="text-xs font-semibold text-slate-400">Cliente Mini Mundo</span></div></div>)}</div></div><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mx-auto mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-extrabold text-white shadow-lg hover:bg-blue-700">Quero encomendar minha maquete <MessageCircle size={18}/></a></div></section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border-2 border-blue-100 bg-blue-50 p-7 text-blue-950 shadow-sm">
              <span className="text-sm font-extrabold text-blue-700">Para quem é</span>
              <h3 className="mt-2 text-2xl font-black">Escolas, alunos e cursos</h3>
              <p className="mt-3 text-sm leading-6 text-blue-800">
                Do trabalho escolar ao projeto acadêmico que precisa chamar atenção na apresentação.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-orange-100 bg-orange-50 p-7 text-orange-950 shadow-sm">
              <span className="text-sm font-extrabold text-orange-700">Para apresentar</span>
              <h3 className="mt-2 text-2xl font-black">Feiras e projetos</h3>
              <p className="mt-3 text-sm leading-6 text-orange-800">
                Modelos maiores para explicar estruturas, ambientes e ideias de forma visual.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-red-100 bg-red-50 p-7 text-red-950 shadow-sm">
              <span className="text-sm font-extrabold text-red-700">Projeto especial</span>
              <h3 className="mt-2 text-2xl font-black">Materiais novos</h3>
              <p className="mt-3 text-sm leading-6 text-red-800">
                Para maquetes permanentes, réplicas e exigências específicas, o orçamento é
                personalizado.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-extrabold text-white shadow-lg hover:bg-orange-600"
          >
            Falar sobre meu projeto <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <section id="duvidas" className="scroll-mt-24 bg-[#f7fbff] py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 text-center lg:px-8">
          <div>
            <p className="font-extrabold uppercase tracking-[0.18em] text-blue-600">
              Perguntas frequentes
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Antes de pedir, tire suas dúvidas.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Transparência é parte do nosso processo. Veja as principais informações sobre
              produção, pagamento e retirada.
            </p>
          </div>
          <div className="w-full space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full flex-col items-center justify-center gap-3 px-5 py-5 text-center font-extrabold"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={
                      "shrink-0 transition " +
                      (openFaq === i ? "rotate-180 text-blue-600" : "text-slate-400")
                    }
                    size={19}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-6 text-slate-600">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-extrabold text-white shadow-lg hover:bg-orange-600"
          >
            Tirar dúvidas pelo WhatsApp <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <section className="px-5 pb-24 pt-8 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-blue-600 px-7 py-12 text-center text-white shadow-2xl sm:px-12">
          <p className="font-extrabold uppercase tracking-[0.18em] text-blue-100">Vamos criar?</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Mande sua ideia e peça seu orçamento.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Envie uma foto, desenho ou explique o projeto. Vamos avaliar o tamanho, nível de detalhe
            e materiais necessários.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-blue-700 shadow-lg hover:-translate-y-1"
          >
            Falar pelo WhatsApp <MessageCircle size={20} />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-5 text-center text-sm text-slate-500 lg:px-8">
          <img src={logoAsset.url} alt="Mini Mundo Maquete" width={1475} height={825} className="h-auto w-32 object-contain sm:w-36" />
          <div>
            <strong className="text-slate-900">MINI MUNDO MAQUETES</strong>
            <p className="mt-1">Maquetes escolares, feiras, cursos e projetos.</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:text-blue-600"
            >
              WhatsApp
            </a>
            <span>© 2026 Mini Mundo Maquetes</span>
          </div>
        </div>
      </footer>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 block h-16 w-16 rounded-full transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <img src={whatsappAsset.url} alt="" width={64} height={64} className="h-full w-full object-contain" />
      </a>
    </main>
  );
}
