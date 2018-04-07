import React from 'react'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'

export default () => (
  <Layout>
    <div className='mainContainer'>
      <h2>Mundial Bet</h2>
      <Link href="/register">
        <Button>Start</Button>
      </Link>
      <p>How it works?</p>
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