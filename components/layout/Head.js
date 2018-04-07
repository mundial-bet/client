import React from 'react'
import NextHead from 'next/head'

export const Head = (props) => (
  <NextHead>
    <title>{props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
  </NextHead>
)