import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>

      <div className='about-what'>
        <div>
          <h1>What are Crypto Dervish?</h1>
          <p>Crypto Dervish are a collection of NFTs on the Solana blockchain. The project consists of vsrious unique dervish. Crypto Dervish that have a
            variety of outfits, faces and colors - all dervish
            are cool, but completed outfit dervish are the coolest.
            Each Crypto Dervish is comprised of a unique body, hat, face and outfit - the possibilities are endless!</p>
        </div>

        <img src='Dervish1.png' className='about-img' />
      </div>

      <div className='about-why'>
        <img src='Dervish3.png' className='about-img' />
        <div>
          <h1>Why Crypto Dervish?</h1>
          <p>Aside from participating in one the freaking coolest, curated but randomized NFT projects to date and getting a kick butt profile picture - you can help us evolve and 
            build the future of Crypto Dervish. We’re giving back 20% of all SOL raised to the community (through contests, raffles, and more) - because we genuinely want Crypto Dervish to be a community driven and centric project. By getting a
            Crypto Dervish you have a voice in the community and can help guide the direction of
            the project. We’ll need help from you guys to
            determining specifics for future developments like
            breeding, next generation Dervish, the app, and much more!</p>
        </div>

      </div>

    </div>
  )
}

export default About
