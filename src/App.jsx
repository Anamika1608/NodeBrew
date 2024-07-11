import { NavbarDemo } from './components/Navbar/Navbar'
import './App.css'
import { FlipWordsDemo } from './components/Hero/Hero'
import FeatureDisplay from './components/Feature/Feature';
import TestimonialWall from "./components/Testimonial/Testimonial"
import CommunitySection from './components/Community/Community';
import Newsletter from './components/NewsLetter/NewsLetter';
function App() {
  return (
    <>
      <NavbarDemo/>
      <FlipWordsDemo/>
      <FeatureDisplay/>
      <TestimonialWall/>
      <CommunitySection/>
      <Newsletter/>
    </>
  )
}

export default App
