import React from 'react';
import './styles/Badges.css';
import confLogo from '../componets/images/badge-header.svg';
import BadgesList from '../componets/BadgesList';
import { Link } from 'react-router-dom';
import PageLoading from '../componets/PageLoading';
import api from '../api';
import PageError from '../componets/PageError';
import MiniMyLoader from '../componets/MiniMyLoader'


class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };


    componentDidMount () {
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({loading: true, error: null })

        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render() {

        if(this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if(this.state.error) {
            return  <PageError error={this.state.error} />;
        }


        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                            {this.state.loading && <MiniMyLoader />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;