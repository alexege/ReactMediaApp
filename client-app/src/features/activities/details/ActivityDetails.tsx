import React from 'react'
import { Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activity: IActivity;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        <div className="ui card fluid">
        <div className="image">
            <img src={`/assets/categoryImages/${activity.category}.jpg`} />
        </div>
        <div className="content">
            <a className="header">{activity.title}</a>
            <div className="meta">
            <span className="date">{activity.date}</span>
            </div>
            <div className="description">
            {activity.description}
            </div>
        </div>
        <div className="extra content">
            <Button.Group widths={2}>
                <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit' />
                <Button onClick={() => setSelectedActivity(null)} basic color='grey' content='Cancel' />
            </Button.Group>
            {/* <a>
            <i className="user icon"></i>
            22 Friends
            </a> */}
        </div>
        </div>
    )
}
