import Intro from "./_components/Intro/Index";
import Landingpage from "./_components/Landingpage/Index";

export default function Home() {
  return (
    <main className=" mx-auto h-screen">
      <div className="relative overflow-hidden">
        <Landingpage />
        <Intro />
      </div>
    </main>
  );
}
