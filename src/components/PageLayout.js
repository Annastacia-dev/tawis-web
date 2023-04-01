import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import BestSellers from "./BestSellers"
import Gallery from "./Gallery"
import Blog from "./Blog"
import Whatsapp from "./Whatsapp"

const PageLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <BestSellers />
      <Gallery />
      <Blog />
      <Whatsapp />
    </div>
  )
}

export default PageLayout