import React from "react";
import "../componets/styles/BadgesList.css";
import twitLogo from "./images/gorjeo.png";
import { Link } from "react-router-dom";
import Gravatar from './Gravatar';

// class BadgesList extends React.Component {
//     render() {
//         if(this.props.badges.length === 0) {
//             return (
//                 <div>
//                     <h3>Not Badges Were found </h3>
//                     <Link className="btn btn-primary" to="/badges/new">Create New Badges</Link>
//                 </div>
//             )
//         }
//         return (
//             <ul className = "list-unstyled BadgesList" > {
//                 this.props.badges.map((badge) => {
//                     return (
//                         <li key = {badge.id } className = "BadgesListItem" >
//                             <img src = {badge.avatarUrl} alt = "Avatar" className = "BadgesListItem__avatar" />
//                             <div>
//                                 <div>
//                                     <strong> {badge.firstName} {badge.lastName} </strong>
//                                 </div>
//                                 <div className = "Twitter__name">
//                                     <img src={twitLogo} className ="Twitter__logo" alt="twitLogo" />
//                                     <span>@{badge.twitter}</span>
//                                 </div>
//                                         <h6>
//                                             {badge.jobTitle}
//                                         </h6>
//                             </div>
//                         </li>
//                     );
//                 })
//             }
//         </ul>
//         )
//     }
// }

    class BadgesListItem extends React.Component {
    render() {
        return (
        <div className="BadgesListItem">
            <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
            />

            <div>
            <strong>
                {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br/>{this.props.badge.jobTitle}
            <br/><img src={twitLogo} className ="Twitter__logo" alt="twitLogo" />
            @{this.props.badge.twitter}
            </div>
        </div>
        );
    }
    }

    class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
        return (
            <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
                Create new badge
            </Link>
            </div>
        );
        }

        return (
        <div className="BadgesList">
            <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                return (
                <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                    <BadgesListItem badge={badge} />
                </Link>
                </li>
                );
            })}
            </ul>
        </div>
        );
    }
}


export default BadgesList;
