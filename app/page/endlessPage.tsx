import { Header } from "~/component/Header";
import { GenshinGuesserEndless } from "~/component/GenshinGuesserEndless";

export function EndlessPage() {

  return (
    <main className="items-center justify-center">
      <div className="background" />
      {/* <div className="foreground flex-1 flex flex-col items-center gap-16 min-h-0"> */}
      <Header/>
      <div className="foreground">
        <GenshinGuesserEndless />
      </div>
    </main>
    );
}