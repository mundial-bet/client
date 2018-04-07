import React from 'react'
import { Menu } from 'semantic-ui-react'

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
                        <Menu.Item>
                            Profile
                        </Menu.Item>
                        <Menu.Item>
                            LogOut
                        </Menu.Item>
                        <Menu.Item>
                            How it works?
                        </Menu.Item>
                    </div>
                </Menu>
                <style jsx>{`
                    .mainContainer {
                        position: absolute;
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