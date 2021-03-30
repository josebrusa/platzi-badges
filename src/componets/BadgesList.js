import React from 'react';
import '../componets/styles/BadgesList.css';
import twitLogo from './images/gorjeo.png';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className = "list-unstyled BadgesList" > {
                this.props.badges.map((badge) => {
                    return (
                        <li key = {badge.id } className = "BadgesListItem" >
                            <img src = {badge.avatarUrl} alt = "Avatar" className = "BadgesListItem__avatar" />
                            <div>
                                <div>
                                    <strong> {badge.firstName} {badge.lastName} </strong>
                                </div>
                                <div className = "Twitter__name">
                                    <img src={twitLogo} className ="Twitter__logo" alt="twitLogo" />
                                    <span>@{badge.twitter}</span>
                                </div>
                                        <h6>
                                            {badge.jobTitle}
                                        </h6>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        )
    }
}

export default BadgesList;