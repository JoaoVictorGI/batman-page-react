import { ActorCards } from '../components/actor-cards/actor-cards.tsx'
import { Banner } from '../components/banner/banner.tsx'
import { Footer } from '../components/footer/footer.tsx'
import { Header } from '../components/header/header.tsx'
import { Trailer } from '../components/trailer/trailer.tsx'
import { loader } from '../loader.ts'

loader('Homepage')

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Trailer />
      <ActorCards />
      <Footer />
    </>
  )
}
