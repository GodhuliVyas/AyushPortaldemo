import react from "react";
import './footer.css';
import twitter from '../assets/facebook.svg'
import fb from '../assets/facebook.svg'
import linkedIn from '../assets/linkedin.svg'
import Instagram from '../assets/square-instagram.svg'

const Footer=() =>{
    return(
            <div className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links=div">
                            <h4>Who We Are</h4>
                            <a href="/company">
                                <p>Company</p>
                            </a>
                            <a href="/careers">
                                <p>Careers</p>
                            </a>
                            <a href="/partners">
                                <p>Partners</p>
                            </a>
                            <a href="/blog">
                                <p>Blog</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/contact us">
                                <p>Contact Us</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>What We Do</h4>
                            <a href="/WhatWeDo">
                                <p>Starter</p>
                            </a>
                            <a href="/WhatWeDo">
                                <p>Pro</p>
                            </a>
                            <a href="/WhatWeDo">
                                <p>Enterprise</p>
                            </a>
                            <a href="/WhatWeDo">
                                <p>Data Licencing</p>
                            </a>
                            <a href="/WhatWeDo">
                                <p>Stories</p>
                            </a>
                            <a href="/WhatWeDo">
                                <p>Pricing</p>
                            </a>
                    </div>
                    <div className="sb__fotter-links_div">
                        <h4>Popular Links</h4>
                            <a href="/popularlinks">
                                <p>Latest Product Updates</p>
                            </a>
                            <a href="/company">
                                <p>Featured Searches and Links</p>
                            </a>
                            <a href="/company">
                                <p>Knowledge Center</p>
                            </a>
                            <a href="/company">
                                <p>Create a Profile</p>
                            </a>
                            <a href="/company">
                                <p>Sales Intelligence</p>
                            </a>
                            <a href="/company">
                                <p>Sales Intelligence</p>
                            </a>
                        </div>
                        <div className="sb_footer=links_div">
                        <h4>Browse by:</h4>
                            <a href="/company">
                                <p>Organisations</p>
                            </a>
                            <a href="/company">
                                <p>People</p>
                            </a>
                            <a href="/company">
                                <p>Events</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Stay connected</h4>
                            <div className="socialmedia">
                                <p><img src={twitter} alt=""/></p>
                                <p><img src={fb} alt=""/></p>
                                <p><img src={linkedIn} alt=""/></p>
                                <p><img src={Instagram} alt=""/></p>
                            </div>
                        </div>
                        </div>
                        <hr>Ayush POrtal</hr>
                        <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>@{ newdate().getFullYear()} Ayush Portal Inc. All rights reserved</p>
                        </div>
                        <div className="sb__footer-links">
                            <a href="/terms"><div><p>Terms and service</p></div></a>
                            <a href="/terms"><div><p>Privacy POlicy</p></div></a>
                            <a href="/terms"><div><p>Editorial Partners:xyz</p></div></a>
                        </div>
                        </div>
                    </div>
                </div>
    )

}

export default Footer;