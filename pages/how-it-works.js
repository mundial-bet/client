import React from 'react'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'

export default () => (
  <Layout>
    <div className='mainContainer'>
      <Link href="/index">
        <Button>Go Home</Button>
      </Link>
      <p>How it works?</p>
    </div>
    <style jsx>{`
      .mainContainer{
        position: relative;
        top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
      }
      `}</style>
  </Layout>
)