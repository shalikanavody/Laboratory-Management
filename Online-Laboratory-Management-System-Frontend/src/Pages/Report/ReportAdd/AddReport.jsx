import React from "react";
import ReportAdd from "../../../Components/ReportAdd/ReportAdd";
import Footer from "./../../../Components/Footer/footer";
import NavBar from "./../../../Components/NavBar/navbar2";

const AddReportPage = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<ReportAdd />
				<Footer />
			</div>
		</>
	);
};

export default AddReportPage;
