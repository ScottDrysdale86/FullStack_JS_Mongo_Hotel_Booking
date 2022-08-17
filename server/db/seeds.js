use hotel;
db.dropDatabase()

db.bookings.insertMany([
    {name: "Stu", email:"stu@yahoo.com", checkedIn: false}, 
    {name: "Andy", email:"andy@toystory.com", checkedIn: false},
    {name: "Bob", email:"bob@bobbies.com", checkedIn: false}
])