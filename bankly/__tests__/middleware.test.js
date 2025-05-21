process.env.NODE_ENV = "test";

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { authUser } = require("../middleware/auth");

describe("authUser", function () {
  // TESTS BUG #3
  test("should reject invalid signatures", function () {
    const payload = { username: "test", admin: false };
    const badToken = jwt.sign(payload, "wrong_secret");

    const req = { body: { _token: badToken } };
    const res = {};
    const next = function (err) {
      expect(err).toBeTruthy();
      expect(err.status).toBe(401);
    };

    authUser(req, res, next);
  });
});
