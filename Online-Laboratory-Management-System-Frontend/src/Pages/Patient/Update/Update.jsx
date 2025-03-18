/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";

import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navbar2";
import axios from "axios";

export default function PatientUpdate() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [nic, setNic] = useState("");
	const [address, setAddress] = useState("");
	const [dateOfBirth, setDOB] = useState(new Date("2000/01/01"));
	const [gender, setGender] = useState("male");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const id = window.location.pathname.split("/")[3];

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const res = await axios.get("api/patient/" + id);
	// 		setFirstName(res.data.firstName);
	// 		setLastName(res.data.lastName);
	// 		setEmail(res.data.email);
	// 		setPhoneNumber(res.data.phoneNumber);
	// 		setNic(res.data.nic);
	// 		setAddress(res.data.address);
	// 		setDOB(res.data.dateOfBirth);
	// 		setGender(res.data.gender);
	// 		setUsername(res.data.username);
	// 		setPassword(res.data.password);
	// 	};
	// 	getData();
	// }, []);

	const roleData = localStorage.getItem("roleDate");

	setFirstName(roleData.firstName);
	setLastName(roleData.lastName);
	setEmail(roleData.email);
	setPhoneNumber(roleData.phoneNumber);
	setNic(roleData.nic);
	setAddress(roleData.address);
	setDOB(roleData.dateOfBirth);
	setGender(roleData.gender);
	setUsername(roleData.username);
	setPassword(roleData.password);

	console.log("firstName", firstName);

	//setting radio buttons
	// const maleRadio = document.getElementById("radio-Male");
	// const femaleRadio = document.getElementById("radio-Female");

	// if (gender === "male") {
	// 	maleRadio.checked = true;
	// 	femaleRadio.checked = false;
	// } else if (gender === "female") {
	// 	femaleRadio.checked = true;
	// 	maleRadio.checked = false;
	// }

	// on update function
	// const update = async (e) => {
	// 	e.preventDefault();
	// 	const data = {
	// 		firstName: firstName,
	// 		lastName: lastName,
	// 		email: email,
	// 		phoneNumber: phoneNumber,
	// 		nic: nic,
	// 		address: address,
	// 		dateOfBirth: dateOfBirth,
	// 		gender: gender,
	// 		username: username,
	// 		password: password,
	// 	};

	// 	try {
	// 		await axios
	// 			.put("api/patient/update/" + id, {
	// 				headers: {
	// 					authentication:
	// 						localStorage.getItem("authentication"),
	// 				},
	// 				data,
	// 			})
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// password show hide toggler
	const PasswordToggler = () => {
		const password = document.getElementById("floating_password");
		const label = document.getElementById("toggle_password");

		if (password.type === "password") {
			password.type = "text";
			label.innerHTML = "Hide";
		} else {
			password.type = "password";
			label.innerHTML = "Show";
		}

		password.focus();
	};

	return (
		<div className="bg-main-blue w-[100%] h-full">
			{/* NavBar Holder */}
			<div>
				<NavBar />
			</div>

			{/* Form Holder */}

			<div className="w-[100%] mb-10 mt-10">
				<h1 className="text-button-blue font-semibold text-3xl text-center">
					Patient Profile Update Portal
				</h1>
			</div>
			<div className="ml-20 flex flex-10 justify-center items-center">
				<form
					// onSubmit={update}
					className="bg-white w-[65%] h-auto p-14 rounded-xl">
					<p
						className="text-red-600 mb-10 text-sm"
						id="errorMessage"
					/>
					<div>
						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="floating_first_name"
									id="floating_first_name"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									value={firstName}
									// onChange={(e) =>
									// 	setFirstName(e.target.value)
									// }
								/>
								<label
									for="floating_first_name"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									First name
								</label>
							</div>
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="floating_last_name"
									id="floating_last_name"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									value={lastName}
									// onChange={(e) =>
									// 	setLastName(e.target.value)
									// }
								/>
								<label
									for="floating_last_name"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Last name
								</label>
							</div>
						</div>
						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="email"
									name="floating_email"
									id="floating_email"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									disabled="true"
									value={email}
								/>
								<label
									for="floating_email"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Email address
								</label>
							</div>
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="floating_phone"
									id="floating_phone"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									value={phoneNumber}
									// onChange={(e) =>
									// 	setPhoneNumber(e.target.value)
									// }
								/>
								<label
									for="floating_phone"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Phone Number
								</label>
							</div>
						</div>
						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="floating_NIC"
									id="floating_NIC"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									disabled="true"
									value={nic}
								/>
								<label
									for="floating_NIC"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									NIC
								</label>
							</div>
							<div class="relative z-0 mb- w-full group">
								<Space
									direction="vertical"
									style={{ width: "100%" }}>
									<DatePicker
										placeholder="Select Date of Birth"
										value={dateOfBirth}
										// onChange={(date) => setDOB(date)}
										style={{
											background: "transparent",
											border: "none",
											borderBottom:
												"2px solid #265673",
											marginTop: "10px",
											width: "100%",
											color: "#265673",
										}}
									/>
								</Space>
							</div>
						</div>
						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<h3 class="mb-4 font-regular text-sm text-button-blue">
									Select Gender
								</h3>
								<ul class="items-center w-full text-sm font-medium rounded-xl border sm:flex text-white bg-cyan-800">
									<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
										<div class="flex items-center pl-3">
											<input
												id="radio-Male"
												type="radio"
												value="male"
												name="list-radio"
												// onChange={(e) =>
												// 	setGender(
												// 		e.target.value,
												// 	)
												// }
												class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
											/>
											<label
												for="horizontal-list-radio-license"
												class="py-3 ml-2 w-full text-sm font-medium text-white">
												Male
											</label>
										</div>
									</li>
									<li class="w-full border-b border-white sm:border-b-0 sm:border-">
										<div class="flex items-center pl-3">
											<input
												id="radio-Female"
												type="radio"
												value="female"
												name="list-radio"
												// onChange={(e) =>
												// 	setGender(
												// 		e.target.value,
												// 	)
												// }
												class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
											/>
											<label
												for="horizontal-list-radio-id"
												class="py-3 ml-2 w-full text-sm font-medium text-white">
												Female
											</label>
										</div>
									</li>
								</ul>
							</div>
							<div class="relative z-0 mb-6 w-full mt-8 group">
								<input
									type="text"
									name="floating_adress"
									id="floating_address"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									value={address}
									// onChange={(e) =>
									// 	setAddress(e.target.value)
									// }
								/>
								<label
									for="floating_address"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Address
								</label>
							</div>
						</div>
						<div class="grid md:grid-cols-2 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="floating_username"
									id="floating_username"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
									placeholder=" "
									required=""
									disabled="true"
									value={username}
								/>
								<label
									for="floating_username"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Username
								</label>
							</div>
							<div class="relative z-0 mb-6 w-full group">
								<input
									type="password"
									name="floating_password"
									id="floating_password"
									class="block py-2.5 px-0 w-full text-sm text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer js-password"
									placeholder=" "
									required=""
									value={password}
									// onChange={(e) =>
									// 	setPassword(e.target.value)
									// }
								/>
								<label
									for="floating_password"
									class="peer-focus:font-medium absolute text-sm text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Password
								</label>
								<div class="absolute inset-y-0 right-0 flex items-center px-2">
									<label
										class="bg-button-hover-blue hover:bg-button-blue rounded px-2 py-1 text-sm text-white font-mono cursor-pointer js-password-label"
										id="toggle_password"
										onClick={PasswordToggler}
										for="toggle">
										show
									</label>
								</div>
							</div>
						</div>
						<div class="grid md:grid-cols-1 md:gap-6">
							<div class="relative z-0 mb-6 w-full group">
								<div class="flex justify-center items-center w-full">
									<label
										for="dropzone-file"
										class="flex flex-col justify-center items-center w-full h-30 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
										<div class="flex flex-col justify-center items-center pt-5 pb-6">
											<svg
												aria-hidden="true"
												class="mb-3 w-10 h-10 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
											</svg>
											<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
												<span class="font-semibold">
													Click to upload Profile
													Photo
												</span>{" "}
											</p>
											<p class="text-xs text-gray-500 dark:text-gray-400">
												JPG or PNG (MAX. 800x400px)
											</p>
										</div>
										<input
											id="dropzone-file"
											type="file"
											class="hidden"
										/>
									</label>
								</div>
							</div>
						</div>
						<div class="w-[50%] flex items-center justify-center">
							<button
								type="submit"
								class="text-white ml-[550px] bg-button-blue hover:bg-button-hover-blue focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-[234px] py-2.5 text-center dark:bg-button-blue dark:hover:bg-button-hover-blue mt-5">
								Update
							</button>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
