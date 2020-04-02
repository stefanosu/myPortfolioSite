import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'


export default ({data}) => {
  return (
    <Layout> 
      <div style={{ color: `purple`, margin: `3 rem auto`, maxWidth: 600}}>
      <Header headerText="Hello Gatsby!"></Header>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" /> 
      <img
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
      />
      <h4>{data.allMarkdownRemark.edges.totalCount}Posts</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
        <Link to={node.fields.slug}>
        <h3
        >
        {node.frontmatter.title}{" "}
        <span
        >
        — {node.frontmatter.description}
                  {node.frontmatter.date}
                  </span>
                    </h3>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
      ))}
        <button>Click me</button>
      </div>
    </Layout>
  )
}

export const query =  graphql `
  query {
    allMarkdownRemark {
      totalCount 
      edges {
        node {
          id 
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`