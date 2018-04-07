import React from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'
const items = [
    { 
        title: 'Login',
        route: '/login'
    },
    { 
        title: 'Sign Up',
        route: '/signup'
    },
    { 
        title: 'Log Out',
        route: '/index'
    },
    { 
        title: 'How it works?',
        route: '/how-it-works'
    },
    { 
        title: 'Profile',
        route: '/profile'
    }
]
export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        const { open } = this.state
        return (
            <div className='mainContainer'>
                <Menu vertical fluid>
                    <Menu.Item onClick={()=> this.setState({open: !open})}>
                        Home
                        </Menu.Item>
                    <div className={ open ? '' : 'menuHide'}>
                        {items.map((e,i) => (
                            <Menu.Item key={i}>
                                <Link href={e.route}><a>{e.title}</a></Link>
                            </Menu.Item>
                        ))}
                    </div>
                </Menu>
                <style jsx>{`
                    .mainContainer {
                        position: absolute;
                        z-index: 2;
                        width: 100%;
                    }
                    .menuHide{
                        display: none;
                    }
                    
                `}
                </style>
            </div>
        )
    }
}