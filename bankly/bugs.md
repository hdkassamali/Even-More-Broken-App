# Bugs in Bankly Application

## Bug 1: Missing await in auth.js login route
The login route is missing an await when calling User.authenticate(), making it return a Promise instead of the actual user data.

## Bug 2: User.get() not throwing error correctly
In the User.get() method, the error is instantiated but not thrown with the throw keyword.

## Bug 3: JWT token verification using decode instead of verify
In the middleware/auth.js file, jwt.decode() is used instead of jwt.verify(), which doesn't validate if the token has been tampered with.

## Bug 4: PATCH /users/:username has incorrect middleware
The patch route has requireAdmin middleware, which prevents regular users from updating their own data.

## Bug 5: User.getAll has unused parameters
The User.getAll() method accepts username and password parameters that are never used.

## Bug 6: Missing await in delete route
In the users.js routes file, the DELETE endpoint is missing an await when calling User.delete(), potentially causing timing issues.