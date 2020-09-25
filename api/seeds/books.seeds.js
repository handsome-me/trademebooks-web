const faker = require('faker');
const db = require('../utils/db');
require('../domain/models/book.model');

const numberOfBooksPerUser = 10;
let books = [];

module.exports = async (users) => {
	const dbConnection = await db();
	const Book = dbConnection.model('book');

	await Book.deleteMany({});

	books = [...[new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #1 - Air",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #2 - Water",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #3 - Earth",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #4 - Fire",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #5 - Legend of Korra",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #6- Air",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	}),
	new Book({
		userId: '5e11e9d8eded1d23742c1c6d',
		title: "Book #7 - Air",
		description: "This is a great description fo the book.",
		authors: [
			"John Doe",
			"Jane Doe",
			"Henry The 3rd"
		],
		condition: "Good",
		location: "UofT",
		price: 100,
		edition: 1,
		image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
		date_posted: "Jan 7, 2020",
	})]];
	for (const book of books) {
		await new Book(book).save();;
	}

	for (const user of users) {
		for (let i = 1; i <= numberOfBooksPerUser; i++) {
			const book = {
				userId: user.id,
				title: faker.lorem.words(),
				description: faker.lorem.sentences(),
				authors: [
					faker.lorem.words(),
					faker.lorem.words(),
					faker.lorem.words()
				],
				condition: [
					'Poor',
					'Fair',
					'Good',
					'Very Good',
					'Like New'
				][(Math.round(Math.random(0, 4)) + 1)],
				location: "UofT",
				price: faker.random.number(500),
				edition: (Math.round(Math.random(0, 10)) + 1),
				image: "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
				date_posted: new Date,
			};

			books.push(book);

			await new Book(book).save();;
		}
	}

	await dbConnection.disconnect();

	return users;
};