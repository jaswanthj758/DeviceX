import { useTitle } from '../../Hooks/useTitle.js'
import { Hero } from "./components/Hero.js"
import { FeaturedProducts } from "./components/FeaturedProducts.js"
import { Testimonials } from "./components/Testimonials.js"

export const HomePage = () => {
  useTitle("Home")
  return (
    <main >
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
    
      
    </main>
  )
}

