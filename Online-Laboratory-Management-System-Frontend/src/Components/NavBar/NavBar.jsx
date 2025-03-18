/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import LabLogo from "../../Assests/Laboratories.png";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";
import axios from "axios";
import "./nav.css";

function NavBar() {
	const navigate = useNavigate();

	const login = localStorage.getItem("isLoggedIn");
	const id = localStorage.getItem("id");

	console.log("id", id);

	const navigateProfile = () => {
		navigate("/patient/update/" + id);
	};

	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const logout = async () => {
		console.log("logout");
		localStorage.clear();
		navigate("/login");
		console.log("logout");
		window.location.reload();
		await axios
			.post("api/login/logout", {
				headers: {
					authentication: localStorage.getItem("authentication"),
				},
			})
			.then((res) => {
				localStorage.clear();
			});
	};

	const onNavigate = () => {
		navigate("/login");
	};

	const activePage = window.location.pathname;
	console.log(activePage);

	const navLinks = document.querySelectorAll("nav a").forEach((link) => {
		if (link.href.includes(`${activePage}`)) {
			// console.log(`${activePage}`);
			link.classList.add("active");
		}
	});
	return (
		<>
			<nav class="bg-main-blue border-b-4 border-button-blue px-2 sm:px-4 xxs:px-0 py-2.5">
				<div class="container flex flex-wrap justify-between items-center mx-auto xxs:inline-block">
					<a href="/" class="flex items-center">
						<img
							src={LabLogo}
							class="mr-3 h-6 md:h-16 sm:h-12 md:ml-10 xxs:h-12 xxs:ml-28"
							alt="CareForYou Logo"
						/>
					</a>
					<div class="flex md:order-2 xxs:order-2 xxs:mt-4 xxs:ml-10 xxs:w-screen">
						{!login ? (
							<button
								type="button"
								onClick={onNavigate}
								class="text-white border-2 text-lg border-transparent hover:border-white bg-button-blue hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full px-8 py-2.5 text-center mr-3 md:mr-0">
								Login | Register
							</button>
						) : (
							<button
								onClick={navigateProfile}
								type="button"
								class="text-white border-2 text-lg border-transparent hover:border-white bg-button-blue hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full px-8 py-2.5 text-center mr-3 md:mr-0">
								{/* {fname + " " + lname} */}
								Profile
							</button>
						)}
						<button
							data-collapse-toggle="navbar-cta"
							type="button"
							class="inline-flex xxs:top-8 xxs:ml-20 items-center p-2 text-sm text-white rounded-lg md:hidden bg-button-blue focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-controls="navbar-cta"
							aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg
								class="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
					</div>
					<div
						class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
						id="navbar-cta">
						<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold md:border-0 md:bg-main-blue">
							<li>
								<a
									href="/"
									class="active block md:border-b-4 md:border-transparent text-lg py-2 pr-4 pl-3 text-white bg-button-blue md:hover:bg-sky-900 md:hover:border-white rounded-full md:bg-button-blue md:pr-6 md:pl-6 hover:text-white"
									aria-current="page">
									Home
								</a>
							</li>
							<li>
								<a
									href="/about"
									class="block md:border-b-4 md:border-transparent text-lg md:hover:border-button-blue py-2 pr-4 pl-3 text-button-blue rounded-full hover:bg-gray-100 md:hover:bg-white md:pr-6 md:pl-6 hover:text-button-blue">
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block md:border-b-4 md:border-transparent text-lg md:hover:border-button-blue py-2 pr-4 pl-3 text-button-blue rounded-full hover:bg-gray-100 md:hover:bg-white md:pr-6 md:pl-6 hover:text-button-blue">
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block md:border-b-4 md:border-transparent text-lg md:hover:border-button-blue py-2 pr-4 pl-3 text-button-blue rounded-full hover:bg-gray-100 md:hover:bg-white md:pr-6 md:pl-6 hover:text-button-blue">
									Services
								</a>
							</li>
							{login ? (
								<li>
									<a
										onClick={logout}
										href="#"
										class="block md:border-b-4 md:border-transparent text-lg md:hover:border-button-blue py-2 pr-4 pl-3 text-button-blue rounded-full hover:bg-gray-100 md:hover:bg-white md:pr-6 md:pl-6 hover:text-button-blue">
										Log Out
									</a>
								</li>
							) : (
								<></>
							)}
						</ul>
					</div>
				</div>
			</nav>
			<Notification notify={notify} setNotify={setNotify} />
		</>
	);
}

export default NavBar;
