import React from 'react' 
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
  <div style={{color:`teal`}}>
  <Layout>
    <Link to="/">Home</Link>
    <Header headerText="Contact"/>
    <p>send us a message</p>
  </Layout>
  </div>
)