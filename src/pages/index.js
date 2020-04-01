import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'


export default () => (
  <Layout> 
    <div style={{ color: `purple`, margin: `3 rem auto`, maxWidth: 600}}>
    <Header headerText="Hello Gatsby!"></Header>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" /> 
    <img
    src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
    alt="Group of pandas eating bamboo"
  />
    <button>Click me</button>
    </div>
  </Layout>
    // <Link to="/contact">Contact</Link>
)