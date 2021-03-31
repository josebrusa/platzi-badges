import React from 'react';
import './styles/Home.css';
import rocket from './styles/static/rocket.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container__home">
                    <div className="container__wellHome-button">
                        <Link to="/badges" className="btn btn-primary">Badges</Link>
                    </div>
                    <div className="container__wellHome">
                        <h1 className="title__platziconf">Bienvenidos a Platzi Conf!</h1>
                    <div className="rocket__container">
                        <img className="rocket__conatiner-logo"  src={rocket} alt="rocket" />
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;