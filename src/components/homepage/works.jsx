import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internships"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./codesoft.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Codesoft</div>
							<div className="work-subtitle">
								web development
							</div>
							<div className="work-duration">1-4-2024 to 30-4-2024</div>
						</div>

						<div className="work">
							<img
								src="./internpe.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title"> Internpe</div>
							<div className="work-subtitle">
								java development
							</div>
							<div className="work-duration">29-7-2024 to 25-8-2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
