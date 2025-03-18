import React from "react";

import Login from "../../Components/Login/Login";
import NavBar from "../../Components/NavBar/navbar2";
import Footer from "./../../Components/Footer/footer";

const LoginPage = () => {
	return (
		<>
			<div className="bg-main-blue">
				<NavBar />
				<div className="flex items-center justify-center">
					<Login />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default LoginPage;
