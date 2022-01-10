import React, {Component} from 'react';

class Resume extends Component {
    render() {

        let skillMessage;
        let education;
        let work;
        let skills;

        if (this.props.data) {
            skillMessage = this.props.data.skillMessage;
            education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em
                        className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            })
            
            work = this.props.data.work.map(function (work) {


                let bullets = work.bullets.map(function (bullet, index) {
                    return <li key={index}>{bullet}</li>
                })


                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                    {bullets}
                </div>
            })
            
            skills = this.props.data.skills.map(function (skills) {
                let className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width: skills.level}}
                                                   className={className}/><em>{skills.name}</em></li>
            })
        }

        return (
            <section id="resume">

                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p>{skillMessage}
                        </p>

                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
