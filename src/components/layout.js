import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
