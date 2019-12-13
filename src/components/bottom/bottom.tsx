import React from 'react'
import Link from 'gatsby-link'
import email from '../../images/email.png'
import logo from '../../images/logo-bw.png'

class BottomSection extends React.Component {
    render() {
        return (
            <section className="bottom">
                <div className="container">
                    <div className="col-sm-12 col-md-4">
                        <img src={logo}  alt="" className="center-block" />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="row-fluid">
                            <div className="col-xs-4 col-sm-3">
                                <p><strong>LINKS</strong></p>
                            </div>
                            <div className="col-xs-8 col-sm-9">
                                <ul>
                                    <li>< Link to="/">Tutorials</Link></li>
                                    <li>< Link to="/">Calendar</Link></li>
                                    <li>< Link to="/">Training</Link></li>
                                    <li>< Link to="/">Java</Link></li>
                                    <li>< Link to="/">Javascript</Link></li>
                                    <li>< Link to="/">Serverless</Link></li>

                                </ul></div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="row-fluid">
                            <div className="col-xs-4 col-sm-3">
                                <p><strong>CONTACT</strong></p>
                            </div>
                            <div className="col-xs-8 col-sm-9">
                                <p>
                                    <img  src={email} alt="" />
                                    <a href="mailto:nz@robusta.io">nz@robusta.io</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default BottomSection