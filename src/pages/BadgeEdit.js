import React from "react";
import "./styles/BadgeEdit.css";
import header from "../componets/images/platziconf-logo.svg";
import Badge from "../componets/Badge";
import BadgeForm from "../componets/BadgeForm";
import PageLoading from "../componets/PageLoading";
import api from "../api";

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
        },
    };
    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, form: data })
        }catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    handleChange = (e) => {
        this.setState({
        form: {
            ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try {
        await api.badges.update(this.props.match.params.badgeId, this.state.form);
        this.setState({ loading: false });

        this.props.history.push("/badges");
        } catch (error) {
        this.setState({ loading: false, error: error });
        }
    };

    render() {
        //   if(this.state.loading === true) {
        //     return <PageLoading />;
        // }

        // if(this.state.error) {
        //     return `Error: ${this.state.error.message}`;
        // }

        if (this.state.loading) {
        return <PageLoading />;
        }

        return (
        <React.Fragment>
            <div className="BadgeEdit__hero">
            <img
                className="BadgeEdit__hero-image img-fluid"
                src={header}
                alt="Logo"
            />
            </div>

            <div className="container">
            <div className="row">
                <div className="col">
                <Badge
                    firstName={this.state.form.firstName || "FRIST_NAME"}
                    lastName={this.state.form.lastName || "LAST_NAME"}
                    twitter={this.state.form.twitter || "twitter"}
                    email={this.state.form.email || "EMAIL"}
                    jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                    avatarUrl="https://s.gravatar.com/avatar/4133e43f063b9e916b24835664fa19e4?s=80"
                />
                </div>

                <div className="col-6">
                <h1>Edit Attendant</h1>
                <BadgeForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                />
                </div>
            </div>
            </div>
        </React.Fragment>
        );
    }
    }

export default BadgeEdit;
