import React, { useEffect } from "react";
import { Helmet } from "react-helmet";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import TechStackComponent from "../components/techstack/TechStack";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/techstack.css";

const TechStack = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "techstack");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Tech Stack | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO?.description || "My technology skills and expertise"} />
                <meta
                    name="keywords"
                    content={currentSEO?.keywords?.join(", ") || "tech, skills, technologies"}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="techstack" />
                <div className="content-wrapper">
                    <div className="techstack-page-container">
                        <div className="techstack-page-header">
                            <h1>My Tech Stack</h1>
                            <p>Technologies and tools I work with</p>
                        </div>

                        <div className="techstack-page-content">
                            <TechStackComponent />
                        </div>

                        <div className="techstack-skills-details">
                            <div className="skills-breakdown">
                                <div className="skill-category">
                                    <h2>Frontend Technologies</h2>
                                    <div className="skill-list">
                                        <span className="skill-tag">HTML</span>
                                        <span className="skill-tag">CSS</span>
                                        <span className="skill-tag">JavaScript</span>
                                        <span className="skill-tag">React</span>
                                        <span className="skill-tag">React Native</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h2>Backend Technologies</h2>
                                    <div className="skill-list">
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">C</span>
                                        <span className="skill-tag">C#</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h2>Databases</h2>
                                    <div className="skill-list">
                                        <span className="skill-tag">MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TechStack;
