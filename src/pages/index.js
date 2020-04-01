import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'


export default () => (
  <div style={{ color: `purple`, margin: `3 rem auto`, maxWidth: 600}}>
    <Link to="/contact">Contact</Link>
    <Header headerText="Hello Gatsby!"></Header>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <button>Click me</button>
  </div>
)