import React from 'react';
import './styles/BadgeDetails.css';
import confLogo from '../componets/images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import Badge from '../componets/Badge';



function BadgeDetails(props) {
    const badge = props.badge;

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jobTitle={badge.jobTitle} />
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <div>
                            <Link className="btn btn-outline-success mb-4" to={`/badge/${badge.id}/edit`}>Edit</Link>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BadgeDetails;