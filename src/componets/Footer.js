import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../componets/images/logo.svg';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="container-fluid">
                    <Link className="Footer__brand" to="/">
                        <img className="Footer__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-ligth">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer;