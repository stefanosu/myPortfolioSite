import React from 'react' 
// import Header from '../components/header'
import Container from '../components/container'
import Layout from '../components/layout'
import {graphql} from 'gatsby'


export default ({ data }) => {
  console.log(data)
  return (
    <Layout> 
      <Container> 
        <div style={{color:`teal`}}>
          <h1>My site's files</h1>
            <p>React is cool!</p>
              <table>
                <thead>
                  <tr> 
                    <th>relativePath</th>
                    <th>prettySize</th>
                    <th>extension</th>
                    <th>birthTime</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.allFile.edges.map(({ node }, index) => (
                    <tr key={index}>
                      <td>{node.relativePath}</td>
                      <td>{node.prettySize}</td>
                      <td>{node.extension}</td>
                      <td>{node.birthTime}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </Container>
    </Layout>  
  )
}
    
    


export const query = graphql `
  query{
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow:true) 
        }
      }
    }
  }
`