import React from 'react'
import { Layout } from '../components/layout/Layout'
import Link from 'next/link'

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { url } = this.props
        return (
            <Layout>
                <div className='mainContainer'>
                    <h2>{url.query.id}</h2>
                    <p>My Bets</p>
                </div>
                <style jsx>{`
                .mainContainer{
                    position: relative;
                    top: 40px;
                    width: 90%;
                    margin: auto;
                }
                `}</style>
            </Layout>
        )
    }

}

