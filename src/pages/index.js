import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
      <>
        <main>
          <title>Home Page</title>
          <h1>Welcome to IBC Dev!</h1>
          <Link to="/about">About</Link>
          <p>This resource is being made with Gatsby.js</p>
        </main>
      </>
      )
    }

export default IndexPage
