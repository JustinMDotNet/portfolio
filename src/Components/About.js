import React, {Component} from 'react';

class About extends Component {
    render() {

        let resumeDownload = "Justin_Moran_Resume.pdf";
        let name;
        let profilePic;
        let bio;
        let city;
        let state;
        let email;
        let twitter;
        
        
        if (this.props.data) {
            name = this.props.data.name;
            profilePic = "images/" + this.props.data.image;
            bio = this.props.data.bio;
            city = this.props.data.address.city;
            state = this.props.data.address.state;
            email = this.props.data.email;
            twitter = this.props.data.twitter;
        }

        let twitterUrl = "https://www.twitter.com/" + twitter;

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilePic} alt="Justin Moran Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{city}, {state}</span><br/>
                                    <span>{email}</span><br/>
                                    <span><a href={twitterUrl} target="_blank">@{twitter}</a></span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"/>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
