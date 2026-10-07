import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Página em branco" },
      { name: "description", content: "Página vazia, sem conteúdo." },
      { property: "og:title", content: "Página em branco" },
      { property: "og:description", content: "Página vazia, sem conteúdo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return null;
}
