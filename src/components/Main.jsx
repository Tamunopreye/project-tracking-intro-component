import React from "react";
import imgWrapper from "../images/illustration-devices.svg";
const Main = () => {
	return (
		<main className="main">
			<div className="img-wrapper">
				<img src={imgWrapper} alt="illustration-devices" />
			</div>
			<div className="content-wrapper">
				<p className="paragraph">
					<span id="new">New</span> Monograph design
				</p>
				<h1>powerful insights into your team</h1>
				<p className="second-paragraph">
					Project planning and time tracking for agile teams
				</p>
				<div className="last-text-container">
					<button className="btn">schedule a demo</button>{" "}
					<span> to see a preview</span>{" "}
				</div>
			</div>
		</main>
	);
};

export default Main;
