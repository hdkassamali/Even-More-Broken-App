process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const User = require("../models/user");

const tokens = {};

/** before each test, insert u1, u2, and u3  [u3 is admin] */

beforeEach(async function () {
  async function _pwd(password) {
    return await bcrypt.hash(password, 1);
  }

  let sampleUsers = [
    ["u1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
    ["u2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
    ["u3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true],
  ];

  for (let user of sampleUsers) {
    await db.query(
      `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      user
    );
    tokens[user[0]] = createToken(user[0], user[6]);
  }
});

describe("GET /users/:username", function () {
  // TESTS BUG #2
  test("should return 404 for non-existent user", async function () {
    const response = await request(app)
      .get("/users/nonexistent")
      .send({ _token: tokens.u1 });
    expect(response.statusCode).toBe(404);
  });
});

afterEach(async function () {
  await db.query("DELETE FROM users");
});

afterAll(function () {
  db.end();
});
