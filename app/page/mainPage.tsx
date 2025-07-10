import fullLogo from "~/image/fullLogo.png";
import { GenshinGuesser } from "~/component/GenshinGuesser";

export function MainPage() {
  return (
    <main className="items-center justify-center pt-16 pb-4">
      <div className="background"/>
      {/* <div className="foreground flex-1 flex flex-col items-center gap-16 min-h-0"> */}
      <div className="foreground">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={fullLogo}
              alt="Genshin Guessor"
              className="block w-full dark:block"
            />
          </div>
        </header>
        <GenshinGuesser />
      </div>
    </main>
  );
}
