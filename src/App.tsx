import { ActorCards } from "./components/actor-cards/actor-cards.tsx";
import { Banner } from "./components/banner/banner.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { Header } from "./components/header/header.tsx";
import { Trailer } from "./components/trailer/trailer.tsx";

export function App() {
  return (
    <>
    <Header />
    <Banner />
    <Trailer />
    <ActorCards />
    <Footer />
    </>
  );
}