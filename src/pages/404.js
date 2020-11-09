import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import svg from "../images/hand.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <div className="fourZeroFour">
    	<h1>
    	<span>404 </span>
    	<span>Page </span>
    	<span>Not </span>
    	<span>Found</span>


    	</h1>
    	<img alt="spinng hand icon" className="arrow-fourZeroFour"src={svg}/>
    </div>
  </Layout>
)

export default NotFoundPage
