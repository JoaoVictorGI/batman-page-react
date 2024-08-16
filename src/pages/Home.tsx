import { ActorCards } from "../components/actor-cards/actor-cards.tsx"
import { Banner } from "../components/banner/banner.tsx"
import { Trailer } from "../components/trailer/trailer.tsx"

export function Home() {
  return (
    <>
      <Banner />
      <Trailer />
      <ActorCards />
    </>
  )
}
