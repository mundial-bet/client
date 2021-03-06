import React from 'react'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'

export default () => (
  <Layout>
    <div className='mainContainer'>
      <Link href="/login">
        <Button fluid>Login</Button>
      </Link>
      <Link href="/signup">
        <Button fluid>Sign up</Button>
      </Link>
    </div>
    <style jsx>{`
      .mainContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
      }
      `}</style>
  </Layout>
)