import React from 'react'
import { Container, Button } from 'semantic-ui-react'

export const NavBar = () => {
    return (
        
        <div className="ui inverted menu">
            <Container>
        <a className="active item header">
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            ReactMedia
        </a>
        <a className="item">
            Messages
        </a>
        <a className="item">
            Friends
        </a>
        <Button positive content='Create Activity'></Button>
        </Container>
        </div>
    )
}
