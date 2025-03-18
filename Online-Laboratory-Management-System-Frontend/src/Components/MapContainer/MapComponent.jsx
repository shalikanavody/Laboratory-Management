/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function MapComponent() {
	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.3437418776373!2d79.95155180107535!3d6.845573044719268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250457c167e01%3A0x37fd7146ba503a3e!2sFamily%20Care%20Pannipitiya!5e0!3m2!1sen!2slk!4v1665292410123!5m2!1sen!2slk"
			style={{ width: "110%", height: "60%", border: "0" }}
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>
	);
}
