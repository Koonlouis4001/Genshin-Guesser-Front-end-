import type { Route } from "./+types/home";
import { EndlessPage } from "~/page/endlessPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: import.meta.env.VITE_PROJECT_TITLE },
    { name: "description", content: "Lets Play Genshin Guessor!" },
  ];
}

export default function Endless() {
  return (
    <EndlessPage />
  )
}
