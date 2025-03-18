import React, { useState } from "react";
import aboutImage from "../../Assests/AboutUs-Image2.jpg";
import { Card } from "antd";

export default function AboutUs() {
	const [visible, setVisible] = useState(false);

	var sectionStyle = {
		width: "100%",
		height: "600px",
		// opacity: "0.6",
		backgroundImage: `url(${aboutImage})`,
	};

	const VisibleClick = () => {
		if (visible === false) {
			setVisible(true);
			document.getElementById("visible").innerHTML =
				"Click Here to Hide Read More";
		} else {
			setVisible(false);
			document.getElementById("visible").innerHTML =
				"Click Here to Read More";
		}
	};

	return (
		<div>
			<div style={sectionStyle}>
				<div className="text-opacity-100">
					<h1 className="font-bold text-5xl text-white px-32 pt-40 pb-5">
						We are Care For You
					</h1>
					<h1 className="font-normal text-xl text-white px-32 pb-5 tracking-[0.3rem]">
						The Best Laboratory Link in Sri Lanka
					</h1>
					<button
						id="visible"
						onClick={VisibleClick}
						className="bg-button-blue text-lg text-white rounded-lg px-5 py-2 font-normal ml-32">
						Click Here to Read More
					</button>
				</div>
			</div>

			{visible ? (
				<div className="bg-main-blue">
					<div className="text-lg font-semibold px-16 py-5 text-justify flex justify-center items-center">
						Care For You Medical Laboratory was established in
						2000 as the third private medical laboratory in the
						town of Pannipitiya. Previously named after the
						town it was founded, the laboratory was then
						renamed to Care For You Medical Laboratory.
					</div>
					<div className="site-card-border-less-wrapper ml-5 pt-1 flex justify-center items-center">
						<Card
							title="Our Mission"
							bordered={false}
							style={{
								width: 800,
								position: "relative",
								display: "inline-block",
								margin: "20px",
								boxShadow: "1px 1px 5px black",
							}}>
							<p>
								To be the leading medical laboratory in Sri
								Lanka by offering high quality, efficient
								and accurate testing with fast and reliable
								turnaround times.
							</p>
						</Card>

						<Card
							title="Our Vision"
							bordered={false}
							style={{
								width: 800,
								position: "relative",
								display: "inline-block",
								margin: "20px",
								boxShadow: "1px 1px 5px black",
							}}>
							<p>
								We strive to make healthcare accessible to
								everyone to ensure the well-being of the
								communities we serve.
							</p>
						</Card>

						<Card
							title="Our Values"
							bordered={false}
							style={{
								width: 800,
								position: "relative",
								display: "inline-block",
								margin: "20px",
								boxShadow: "1px 1px 5px black",
							}}>
							<p>
								1. We strive to provide every client with
								high quality products and services.
							</p>
							<p>
								2. We deliver our promises in essence of
								the way we do business.
							</p>
						</Card>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
