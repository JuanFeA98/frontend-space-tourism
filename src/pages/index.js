import * as React from "react"

import '../styles/index.css'
import Header from '../components/Header.js'

const IndexPage = () => {
  return (
    <main className="home">
      <title>Home Page</title>
      <Header/>
      <div className="home__content">
        <p>
          So, you want to travel to
        </p>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
        <div className="home__explore">
          <h2>
            EXPLORE
          </h2>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
