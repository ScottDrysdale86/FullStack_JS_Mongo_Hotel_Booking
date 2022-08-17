const express = require("express");
const { ObjectId } = require("mongodb");

const createRouter = function (collection) {
	const router = express.Router();

	router.get("/", (req, res) => {
		collection
			.find()
			.toArray()
			.then((docs) => res.json(docs))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	router.post("/", (req, res) => {
		const newBooking = req.body;
		collection
			.insertOne(newBooking)
			.then((result) => res.json(result.ops[0]))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	router.delete("/:id", (req, res) => {
		const id = req.params.id;
		collection
			.deleteOne({ _id: ObjectId(id) })
			.then((result) => res.json(result))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	router.put("/:id", (req, res) => {
		const id = req.params.id;
		const { checkedIn } = req.body;
		collection
			.updateOne(
				{ _id: ObjectId(id) },
				{ $set: { checkedIn: checkedIn } }
			)
			.then((result) => res.json(result))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	return router;
};

module.exports = createRouter;
