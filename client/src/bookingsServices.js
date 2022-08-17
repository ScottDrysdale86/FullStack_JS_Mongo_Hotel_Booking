const baseURL = "http://localhost:9000/api/bookings/";

export const getBookings = () => {
	return fetch(baseURL).then((res) => res.json());
};

export const postBooking = (newBooking) => {
	return fetch(baseURL, {
		method: "POST",
		body: JSON.stringify(newBooking),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
};

export const deleteBooking = (_id) => {
	return fetch(baseURL + _id, {
		method: "DELETE",
	});
};

export const updateBooking = (_id, checkedIn) => {
	return fetch(baseURL + _id, {
		method: "PUT",
		body: JSON.stringify({ checkedIn }),
		headers: { "Content-Type": "application/json" },
	}).then((res) => res.json());
	// .then((data) => {
	// 	console.log(data);
	// });
};
