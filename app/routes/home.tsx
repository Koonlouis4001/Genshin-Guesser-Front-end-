import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { MainPage } from "~/page/mainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: import.meta.env.VITE_PROJECT_TITLE },
    { name: "description", content: "Lets Play Genshin Guessor!" },
  ];
}

export default function Home() {
  return <MainPage/>;
}
