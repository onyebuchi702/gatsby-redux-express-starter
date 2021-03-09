import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from '../state/action/toggleAction'

const IndexPage = () => {
  const { isDarkMode } = useSelector(state => state.isDarkMode)
  const dispatch = useDispatch()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <button
        style={isDarkMode ? { background: 'black', color: 'white' } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
        Dark Mode
        {isDarkMode ? 'On' : 'Off'}
      </button>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
