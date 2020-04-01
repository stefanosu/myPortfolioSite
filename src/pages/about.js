import React from 'react' 
import Header from '../components/header'
import Container from '../components/container'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default ({ data }) => (
<Layout> 
  <Container> 
    <div style={{color:`teal`}}>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>React is cool!</p>
    </div>
    </Container>
    </Layout>  
    )
    
    


export const query = graphql `
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
`