import React from 'react'

import { FlipWordsDemo } from '../components/Hero/Hero'
import FeatureDisplay from '../components/Feature/Feature'
import TestimonialWall from '../components/Testimonial/Testimonial'
import CommunitySection from '../components/Community/Community'
import Newsletter from '../components/NewsLetter/NewsLetter'
function HomePage() {
  return (
    <div>
      <FlipWordsDemo/>
      <FeatureDisplay/>
      <TestimonialWall/>
      <CommunitySection/>
      <Newsletter/>
    </div>
  )
}

export default HomePage