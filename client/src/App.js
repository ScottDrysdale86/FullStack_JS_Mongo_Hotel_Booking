import "./App.css";
import BookingContainer from "./Containers/BookingContainer";
import Navbar from "./Containers/Navbar";
import BookingForm from "./Components/BookingForm";
import { useState, useEffect } from "react";
import { getBookings } from "./bookingsServices";

function App() {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		getBookings().then((allBookings) => {
			setBookings(allBookings);
		});
	}, []);

	const addBooking = (booking) => {
		const copyArr = [...bookings, booking];
		setBookings(copyArr);
	};

	const deleteBookingState = (index) => {
		const copyArr = [...bookings];
		copyArr.splice(index, 1);
		setBookings(copyArr);
	};

	return (
		<div>
			<Navbar />
			<BookingForm addBooking={addBooking} />
			{bookings.length && (
				<BookingContainer
					bookings={bookings}
					deleteBookingState={deleteBookingState}
				/>
			)}
		</div>
	);
}

export default App;
