const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const creds = require("../../config/creds");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(creds.PASSWORD, salt);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{
			id: v4(),
			name: "Chew",
			surname: "Mew",
			DOB: "1999-03-15",
			email: "chew@test.com",
			password: "paste",
		},
	]);
};
