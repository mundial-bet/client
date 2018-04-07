import React from 'react'
import NextHead from 'next/head'

export const Head = (props) => (
  <NextHead>
    <title>{props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
  </NextHead>
)
