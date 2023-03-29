import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import BestSellers from "./BestSellers"
import Whatsapp from "./Whatsapp"

const PageLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <BestSellers />
      <Whatsapp />
    </div>
  )
}

export default PageLayout