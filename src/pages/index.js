import * as React from "react"
import { Link } from "gatsby"

import '../styles/index.css'
import Header from '../components/Header.js'

const IndexPage = () => {
  return (
    <main className="home">
      <title>Home Page</title>
      <Header/>
    </main>
  )
}

export default IndexPage
