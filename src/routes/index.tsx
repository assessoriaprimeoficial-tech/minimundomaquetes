import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";
import shareLogoAsset from "@/assets/share-logo.jpg.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import simpleStadium3 from "@/assets/simples-estadio-3.png.asset.json";
import simpleStadium4 from "@/assets/simples-estadio-4.png.asset.json";
import simpleStadium5 from "@/assets/simples-estadio-5.png.asset.json";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Menu,
  X,
  MessageCircle,
  PackageCheck,
  Sparkles,
  WalletCards,
  UserRound,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5521994183376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mini%20Mundo%20Maquetes%20e%20quero%20fazer%20um%20or%C3%A7amento.";
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
const carouselImages = {
  simples: ["/maquetes/simples/simple-1.jpg","/maquetes/simples/simple-2.jpg","/maquetes/simples/simple-3.jpg","/maquetes/simples/simple-4.jpg","/maquetes/simples/simple-5.jpg","/maquetes/simples/simple-6.jpg", simpleStadium3.url, simpleStadium4.url, simpleStadium5.url],
  comum: ["/maquetes/comum/0b9014e4-4f95-4b4b-bd22-2e57f79cedfd.jpg","/maquetes/comum/0c45016a-17b6-43f4-aa91-3a4e11640d99.jpg","/maquetes/comum/0c6a4fee-9d9e-4d08-a3f8-55baf8592124.jpg","/maquetes/comum/0de77307-11e8-48ec-9b4d-ae992ce67f2a.jpg","/maquetes/comum/125c8f62-4548-4067-a546-7884fdb22836.jpg","/maquetes/comum/1a430770-ce68-420c-a979-a9275ebe34a0.jpg","/maquetes/comum/1a5ac719-3f7f-453b-b4b2-53996d4fee1a.jpg","/maquetes/comum/1bdc8383-2049-460f-ac06-b5a58f92e885.jpg","/maquetes/comum/1fd95a8f-deae-47e5-8a85-91398821e5b8.jpg","/maquetes/comum/21356367-acb3-43d7-8d87-1d770a6230a9.jpg","/maquetes/comum/25b584c3-bc35-48d2-8f2b-6091f950b2a1.jpg","/maquetes/comum/2d7d22d4-a257-4cb5-89ec-c8d5f5fa85d6.jpg","/maquetes/comum/2dd8c9ef-b8e6-48b9-b286-2589f754f411.jpg","/maquetes/comum/315f9ca7-3a4a-499f-95b8-60397e6e906b.jpg","/maquetes/comum/366635ac-3f47-4791-a231-d3cf2fe650a3.jpg","/maquetes/comum/387f627b-47b1-4d28-a90a-4aa149da3d49.jpg","/maquetes/comum/3cc61672-550d-4d22-aa2f-5ffd639ef5b9.jpg","/maquetes/comum/416985ec-907c-46b2-8678-0019aef25728.jpg","/maquetes/comum/46d079a8-ea3e-4e46-8c76-3e188d3cf572.jpg","/maquetes/comum/51737cae-ca09-4a4a-85a3-538e396496b2.jpg","/maquetes/comum/5af4e981-4f6a-4ee8-8024-23c239477945.jpg","/maquetes/comum/5cd0a31c-d276-4721-9147-12e1457a5c3c.jpg","/maquetes/comum/5d185c0e-1026-414f-8989-4db639a959ff.jpg","/maquetes/comum/65065579-37ce-45d3-9172-32abc16b2aee.jpg","/maquetes/comum/694efc64-e39f-4a77-b2f0-b5ecb8540177.jpg","/maquetes/comum/69db17a7-5234-4545-aac1-3f35c6c854e1.jpg","/maquetes/comum/6c18052f-37ef-43e3-a11e-67ad2898f4e4.jpg","/maquetes/comum/6d393a8f-3c86-486e-8a16-c099d7ea1271.jpg","/maquetes/comum/702fc074-7937-4c1e-bdc3-aa8f08449fad.jpg","/maquetes/comum/73af4ea9-40b5-4084-adfd-276bd3f24249.jpg","/maquetes/comum/73de6da1-3b08-4dba-aec5-993b9e71ba78.jpg","/maquetes/comum/74e828d8-ad7a-44d2-be65-1df631159cb6.jpg","/maquetes/comum/79658d58-b7b3-4850-8671-b95946e3467d.jpg","/maquetes/comum/8535d7ce-182c-4274-baa1-3c6662693ca5.jpg","/maquetes/comum/86ca4ce4-4572-4b3a-bf0e-05aab346c120.jpg","/maquetes/comum/8c059708-58d6-486b-87c0-90af7450d542.jpg","/maquetes/comum/8c0ea3d5-818f-40df-82f9-cd0ac63b0b5b.jpg","/maquetes/comum/97a82b78-feed-4e0b-b051-2c08aa6c4609.jpg","/maquetes/comum/9d71fc40-a3f5-4116-9b32-7bdd8e2b201d.jpg","/maquetes/comum/9eb45b7b-5281-479f-94df-4c41fbd8d510.jpg","/maquetes/comum/a6b53add-bcfc-4b0b-92ee-bd11068fedc3.jpg","/maquetes/comum/b0d6153f-35ae-4892-bdf3-6de7b4425df2.jpg","/maquetes/comum/b1ef54a0-2a01-4b3e-a605-90262fb635f2.jpg","/maquetes/comum/b7bfae06-4a9b-4f5b-bcf2-ce78301fdf3b.jpg","/maquetes/comum/b83f81df-9a1a-4c31-9b8b-465f29842a61.jpg","/maquetes/comum/ba501514-df61-480f-8cbe-34e4a30dddcc.jpg","/maquetes/comum/bcdb762a-d507-49d0-8aba-1eb395885ab7.jpg","/maquetes/comum/bd5d5dc5-8e75-4b7f-8015-3deeb57c08fa.jpg","/maquetes/comum/c5244c95-894c-45bf-a0b2-ec6e2e38c9b2.jpg","/maquetes/comum/cb7bfce0-5568-4b0d-9d69-d813d02a5210.jpg"],
};

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
      { title: "Mini Mundo Maquetes | Maquetes escolares sob encomenda" },
      {
        name: "description",
        content:
          "Maquetes escolares sob encomenda para feiras, cursos e projetos. Compare modelos, tamanhos e valores e peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Mini Mundo Maquetes | Maquetes escolares sob encomenda" },
      {
        property: "og:description",
        content: "Maquetes escolares para feiras, cursos e projetos, feitas sob encomenda. Confira modelos e peça seu orçamento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "https://minimundomaquetes.lovable.app/" },
      { property: "og:image", content: new URL(shareLogoAsset.url, "https://minimundomaquetes.lovable.app").href },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logomarca Mini Mundo Maquete" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: new URL(shareLogoAsset.url, "https://minimundomaquetes.lovable.app").href },
    ],
    links: [{ rel: "canonical", href: "https://minimundomaquetes.lovable.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Organization", name: "Mini Mundo Maquetes",
      url: "https://minimundomaquetes.lovable.app/", logo: new URL(logoAsset.url, "https://minimundomaquetes.lovable.app").href,
      description: "Maquetes escolares sob encomenda para feiras, cursos e projetos.",
      contactPoint: { "@type": "ContactPoint", telephone: "+55-21-99418-3376", contactType: "customer service", availableLanguage: "Portuguese" }
    }) }],
  }),
  component: Index,
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const tracks = document.querySelectorAll<HTMLElement>(
      ".animate-maquette-marquee, .animate-info-marquee, .animate-review-marquee",
    );
    const observer = new ResizeObserver((entries) => {
      for (const { target } of entries) {
        if (!(target instanceof HTMLElement)) continue;
        const gap = Number.parseFloat(getComputedStyle(target).columnGap) || 0;
        const distance = (target.getBoundingClientRect().width + gap) / 2;
        target.style.setProperty("--marquee-duration", `${Math.max(distance / 100, 1)}s`);
      }
    });
    tracks.forEach((track) => observer.observe(track));
    return () => observer.disconnect();
  }, []);
  return (
    <main className="site-page min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:flex sm:justify-between lg:px-8">
          <a href="#sobre" aria-label="Mini Mundo Maquetes — início" className="block min-w-0 shrink-0">
            <img src={logoAsset.url} alt="Mini Mundo Maquete" width={1475} height={825} className="h-auto w-24 object-contain sm:w-28" />
          </a>
          <nav aria-label="Menu principal" className="hidden items-center gap-5 font-semibold lg:flex">
            {[['#sobre', 'Sobre'], ['#modelos', 'Modelos'], ['#como-funciona', 'Como funciona'], ['#avaliacoes', 'Avaliações'], ['#duvidas', 'Dúvidas']].map(([href, label]) => <a key={href} href={href} className="hover:text-brand">{label}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild size="sm" className="h-9 px-3 text-sm font-bold"><a href={WHATSAPP} target="_blank" rel="noreferrer">Pedir orçamento</a></Button>
            <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-menu" aria-label="Menu do celular" className="grid border-t border-border bg-surface px-5 py-2 lg:hidden">
          {[['#sobre', 'Sobre'], ['#modelos', 'Modelos e valores'], ['#como-funciona', 'Como funciona'], ['#avaliacoes', 'Avaliações'], ['#duvidas', 'Dúvidas']].map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3 font-semibold text-foreground hover:text-brand">{label}</a>)}
        </nav>}
      </header>

      <section id="sobre" className="relative scroll-mt-24 pt-24 text-center">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -right-24 top-28 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 pb-10 pt-6 lg:px-8 lg:pb-12 lg:pt-8">
          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Sparkles size={15} /> Feitas sob encomenda
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="text-brand">Mini Mundo Maquetes</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
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
                  <span className="text-sm font-semibold text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="overflow-hidden bg-orange-500 py-3 text-white"><div className="flex w-max animate-info-marquee whitespace-nowrap font-extrabold uppercase tracking-[0.14em]"><span className="mx-8">✦ Maquetes sob encomenda</span><span className="mx-8">✦ Prazo padrão de até 8 dias</span><span className="mx-8">✦ 30% de sinal para iniciar</span><span className="mx-8">✦ Modelos simples, comuns, grandes e mega</span><span className="mx-8">✦ Peça seu orçamento pelo WhatsApp</span><span className="mx-8">✦ Maquetes sob encomenda</span><span className="mx-8">✦ Prazo padrão de até 8 dias</span><span className="mx-8">✦ 30% de sinal para iniciar</span><span className="mx-8">✦ Modelos simples, comuns, grandes e mega</span><span className="mx-8">✦ Peça seu orçamento pelo WhatsApp</span></div></div>


      </section>

      <section id="modelos" className="scroll-mt-24 bg-[#f7fbff] py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <div>
              <p className="font-extrabold uppercase tracking-[0.18em] text-blue-600">
                Modelos e valores
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">
                Escolha o nível da sua maquete
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Confira o tamanho, indicação e média de valor de cada modelo. Abaixo de cada
              categoria, deixamos um carrossel preparado para mostrar as maquetes reais daquele
              tipo.
            </p>
          </div>
          <div className="mt-7 space-y-8">
            {plans.map((p, i) => (
              <article key={p.name} className="overflow-visible bg-transparent text-center">
                <div className="block">
                  <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                    <div className={"absolute inset-x-0 top-0 h-2 " + p.color} />
                    <span className="text-sm font-extrabold text-muted-foreground">MODELO 0{i + 1}</span>
                    <h3 className="mt-4 text-3xl font-black">{p.name}</h3>
                    <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground">
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
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          Tamanho
                        </span>
                        <strong className="mt-1 block text-lg">{p.size}</strong>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          Indicado para
                        </span>
                        <strong className="mt-1 block text-base leading-6">{p.audience}</strong>
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                      <span className="text-sm font-bold uppercase tracking-wider text-brand">
                        Média de valor
                      </span>
                      <strong className="mt-1 block text-2xl font-black text-blue-700">
                        {p.price}
                      </strong>
                      <p className="mt-1 text-sm text-brand">
                        O valor final pode variar conforme detalhes, materiais e exigências do
                        projeto.
                      </p>
                    </div>
                    <a
                      href={
                        "https://wa.me/5521994183376?text=Quero%20um%20or%C3%A7amento%20para%20uma%20maquete%20" +
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
                        <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-orange-500">
                          Fotos do modelo
                        </span>
                        <h4 className="mt-1 font-black text-slate-900">
                          Exemplos de {p.name.toLowerCase()}
                        </h4>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex w-max gap-4 animate-maquette-marquee">
                        {[...(i === 0 ? carouselImages.simples : i === 1 ? carouselImages.comum : []), ...(i === 0 ? carouselImages.simples : i === 1 ? carouselImages.comum : [])].map((src, carouselIndex) => (
                          <div key={carouselIndex} className="min-w-[82vw] shrink-0 sm:min-w-[420px]">
                            {(i === 0 || i === 1) ? (
                              <img
                                src={src}
                                alt={`Foto da maquete ${p.name.toLowerCase()}`}
                                loading={carouselIndex < 3 ? "eager" : "lazy"}
                                decoding="async"
                                className="block h-auto w-auto max-h-[420px] max-w-[82vw] rounded-2xl object-contain sm:max-w-[420px]"
                              />
                            ) : (
                              <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-white shadow-sm">
                                <div className="text-center">
                                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                                    {carouselIndex + 1}
                                  </div>
                                  <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-orange-500">
                                    Espaço para foto
                                  </p>
                                  <p className="mt-1 text-sm font-bold text-slate-700">
                                    Maquete {p.name.toLowerCase()}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-base leading-7 text-orange-950">
            <strong>Materiais novos ou réplicas:</strong> quando o projeto exige somente materiais
            novos, sem reciclados, ou uma réplica, o valor é definido conforme as exigências e
            combinado diretamente com o cliente.
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 bg-[#fff8ee] py-10 text-foreground lg:py-14">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div>
              <p className="font-extrabold uppercase tracking-[0.18em] text-orange-500">
                Como funciona
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
                Do pedido à retirada, tudo explicado.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink">
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
                  <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-muted-foreground">{d}</p>
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
          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5 text-base text-foreground">
            <div className="flex flex-col items-center gap-4 text-center">
              <span>
                <strong className="text-slate-900">Pagamento via Pix</strong>
                <br />
                <span className="text-muted-foreground">
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
          <div className="mt-8 flex flex-col gap-4 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
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
                  <span className="mx-auto block max-w-xl text-sm text-muted-foreground">{d as string}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="scroll-mt-24 overflow-hidden bg-[#f7fbff] py-10 lg:py-14"><div className="mx-auto max-w-7xl px-5 text-center lg:px-8"><p className="font-extrabold uppercase tracking-[0.18em] text-blue-600">Avaliações</p><h2 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">Quem já pediu, recomenda.</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Espaço preparado para avaliações reais dos clientes da Mini Mundo Maquetes.</p><div className="relative left-1/2 mt-7 w-screen -translate-x-1/2 overflow-hidden"><div className="flex w-max animate-review-marquee gap-5">{[1,2,3,4,5,6].map((i)=><div key={i} className="w-[82vw] max-w-md shrink-0 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-lg"><div className="text-2xl tracking-[0.2em] text-yellow-400">★★★★★</div><p className="mt-6 text-lg font-semibold leading-8 text-slate-700">“Espaço para uma avaliação real e detalhada do cliente, contando como foi o atendimento, a produção e o resultado da maquete.”</p><div className="mt-6 flex flex-col items-center"><div className="grid h-14 w-14 place-items-center rounded-full bg-slate-100 text-muted-foreground"><UserRound size={27}/></div><span className="mt-3 text-sm font-extrabold text-slate-900">{["Mariana Alves","Carlos Henrique","Fernanda Martins","Rafael Oliveira","Juliana Costa","André Souza"][i-1]}</span><span className="text-sm font-semibold text-muted-foreground">Cliente Mini Mundo</span></div></div>)}</div></div><a href={WHATSAPP} target="_blank" rel="noreferrer" className="mx-auto mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-extrabold text-white shadow-lg hover:bg-blue-700">Quero encomendar minha maquete <MessageCircle size={18}/></a></div></section>

      <section className="bg-surface py-10">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border-2 border-blue-100 bg-blue-50 p-7 text-blue-950 shadow-sm">
              <span className="text-sm font-extrabold text-blue-700">Para quem é</span>
              <h3 className="mt-2 text-2xl font-black">Escolas, alunos e cursos</h3>
              <p className="mt-3 text-base leading-7 text-blue-800">
                Do trabalho escolar ao projeto acadêmico que precisa chamar atenção na apresentação.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-orange-100 bg-orange-50 p-7 text-orange-950 shadow-sm">
              <span className="text-sm font-extrabold text-orange-700">Para apresentar</span>
              <h3 className="mt-2 text-2xl font-black">Feiras e projetos</h3>
              <p className="mt-3 text-base leading-7 text-orange-800">
                Modelos maiores para explicar estruturas, ambientes e ideias de forma visual.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-red-100 bg-red-50 p-7 text-red-950 shadow-sm">
              <span className="text-sm font-extrabold text-red-700">Projeto especial</span>
              <h3 className="mt-2 text-2xl font-black">Materiais novos</h3>
              <p className="mt-3 text-base leading-7 text-red-800">
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

      <section id="duvidas" className="scroll-mt-24 bg-background py-10 lg:py-14">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <div>
            <p className="font-extrabold uppercase text-brand">
              Perguntas frequentes
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-normal">
              Antes de pedir, tire suas dúvidas.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Transparência é parte do nosso processo. Veja as principais informações sobre
              produção, pagamento e retirada.
            </p>
          </div>
          <div className="w-full border-t border-border text-left">
            {faqs.map(([q, a], i) => (
              <div key={q} className="border-b border-border">
                <Button
                  variant="ghost"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="h-auto min-h-16 w-full justify-between gap-4 whitespace-normal rounded-none px-1 py-4 text-left text-lg font-semibold leading-7 text-foreground [&_svg]:size-5"
                >
                  <span className="min-w-0">{q}</span>
                  <ChevronDown
                    className={
                      "shrink-0 transition-transform motion-reduce:transition-none " +
                      (openFaq === i ? "rotate-180 text-brand" : "text-muted-foreground")
                    }
                    size={19}
                  />
                </Button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={openFaq !== i}
                  className="px-1 pb-5 pr-9 text-lg leading-7 text-muted-foreground"
                >
                  {a}
                </div>
              </div>
            ))}
          </div>
          <Button asChild className="mt-2 h-auto max-w-full whitespace-normal bg-orange-500 px-5 py-3 text-base font-bold text-white hover:bg-orange-600">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              Tirar dúvidas pelo WhatsApp <MessageCircle size={18} />
            </a>
          </Button>
        </div>
      </section>

      <section className="px-5 pb-12 pt-4 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-blue-600 px-7 py-12 text-center text-white shadow-2xl sm:px-12">
          <p className="font-extrabold uppercase tracking-[0.18em] text-blue-100">Vamos criar?</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-5 text-center text-sm text-muted-foreground lg:px-8">
          <img src={logoAsset.url} alt="Mini Mundo Maquete" width={1475} height={825} className="h-auto w-32 object-contain sm:w-36" />
          <div>
            <strong className="text-slate-900">MINI MUNDO MAQUETES</strong>
            <p className="mt-1">Maquetes escolares, feiras, cursos e projetos.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:text-blue-600"
            >
              WhatsApp: +55 21 99418-3376
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
