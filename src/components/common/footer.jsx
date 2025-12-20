import React from "react";

import "./styles/footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-credits">
                    <div className="footer-credits-text">
                        © 2025 Modem Uday Kiran Kumar. All Rights Reserved.
                    </div>

                    <div className="footer-divider" />

                    <div className="footer-text-links">
                        <a
                            href="https://github.com/Uday-modem"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/modem-uday-kiran-kumar-ab367b2aa/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a href="mailto:udaykirankumar9701@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
