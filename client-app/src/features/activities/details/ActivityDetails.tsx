import React from 'react'
import { Button } from 'semantic-ui-react'

export const ActivityDetails = () => {
    return (
        <div className="ui card fluid">
        <div className="image">
            <img src="assets/placeholder.png" />
        </div>
        <div className="content">
            <a className="header">Title</a>
            <div className="meta">
            <span className="date">Date</span>
            </div>
            <div className="description">
            Description
            </div>
        </div>
        <div className="extra content">
            <Button.Group widths={2}>
                <Button basic color='blue' content='Edit' />
                <Button basic color='grey' content='Cancel' />
            </Button.Group>
            {/* <a>
            <i className="user icon"></i>
            22 Friends
            </a> */}
        </div>
        </div>
    )
}
