import React from 'react' 
import Header from '../components/header'
import Container from '../components/container'

export default () => (
<Container> 
  <div style={{color:`teal`}}>
    <Header headerText='About Gatsby'/>
    <Header headerText='Wow Gatsby is awesome!'/>
    <p>React is cool!</p>
  </div>
</Container>
)