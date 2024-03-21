// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// {} importo algo dentro de algo

// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Mi página de inicio'>
    <p>Esta es la página de inicio de todos los unicornios</p>
  </Layout>
)
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
