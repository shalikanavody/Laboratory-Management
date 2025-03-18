import React from "react";
import Footer from "../../../../Components/Footer/footer";
import NavBar from "../../../../Components/NavBar/navbar2";
import PatientTableView from "../../../../Components/PatientTableView/PatientTableView";

export default function PatientTableList() {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<PatientTableView />
				<Footer />
			</div>
		</>
	);
}
