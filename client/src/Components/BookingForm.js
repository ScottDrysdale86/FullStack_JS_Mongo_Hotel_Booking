import React, { useState } from "react";
import { postBooking } from "../bookingsServices";

const BookingForm = ({ addBooking }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [checkedIn, setCheckedIn] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "name") {
			setName(value);
		} else if (name === "email") {
			setEmail(value);
		} else if (name === "checkedIn") {
			setCheckedIn(!checkedIn);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newBooking = {
			name: name,
			email: email,
			checkedIn: checkedIn,
		};
		postBooking(newBooking).then((data) => {
			addBooking(data);
		});
		setName("");
		setEmail("");
		setCheckedIn(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="name"
				type="text"
				value={name}
				placeholder="Enter guests name"
				required
				onChange={handleChange}
			/>
			<input
				name="email"
				type="email"
				placeholder="Enter guests e-mail address"
				required
				onChange={handleChange}
				value={email}
			/>
			<label htmlFor="checkedIn">Have they checked in?</label>
			<input
				type="checkbox"
				value={checkedIn}
				name="checkedIn"
				onChange={handleChange}
			/>
			<input type="submit" />
		</form>
	);
};

export default BookingForm;
