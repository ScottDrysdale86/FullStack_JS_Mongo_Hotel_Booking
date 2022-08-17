import React from "react";
import { deleteBooking } from "../bookingsServices";
import { updateBooking } from "../bookingsServices";

const BookingContainer = ({ bookings, deleteBookingState }) => {
	const handleClick = (_id, index) => {
		deleteBooking(_id).then(() => deleteBookingState(index));
	};

	const handleCheckIn = (_id, checkedIn) => {
		updateBooking(_id, !checkedIn);
	};

	const bookingNodes = bookings.map((booking, index) => {
		return (
			<div
				className={booking.checkedIn ? "booking-true" : "booking-false"}
				key={index}
			>
				<div
					onClick={() =>
						handleCheckIn(booking._id, booking.checkedIn)
					}
				>
					{booking.checkedIn ? (
						<h2 style={{ color: "green" }}>CHECKED IN</h2>
					) : (
						<h2 style={{ color: "red" }}>NOT CHECKED IN</h2>
					)}
				</div>

				<h2>{booking.name}</h2>
				<h2>{booking.email}</h2>
				<button onClick={() => handleClick(booking._id, index)}>
					❌
				</button>
			</div>
		);
	});

	return <div className="booking-wrapper">{bookingNodes}</div>;
};

export default BookingContainer;
