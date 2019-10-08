import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page twthreeo" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
