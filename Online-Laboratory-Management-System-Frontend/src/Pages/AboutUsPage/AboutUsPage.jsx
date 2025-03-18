import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/NavBar/navbar2";

export default function AboutUsPage() {
	return (
		<div className="h-screen">
			<NavBar />
			<AboutUs />
			<Footer />
		</div>
	);
}
