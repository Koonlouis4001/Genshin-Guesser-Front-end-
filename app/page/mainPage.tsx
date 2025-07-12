import fullLogo from "~/image/fullLogo.png";
import { GenshinGuesser } from "~/component/GenshinGuesser";

export function MainPage() {
  return (
    <main className="items-center justify-center">
      <div className="background" />
      {/* <div className="foreground flex-1 flex flex-col items-center gap-16 min-h-0"> */}
      <header className="header">
        <div className="header_logo">
          <img
            src={fullLogo}
            alt="Genshin Guessor"
            className="block h-full"
          />
        </div>
      </header>
      <div className="foreground">
        <GenshinGuesser />
      </div>
    </main>
  );
}
