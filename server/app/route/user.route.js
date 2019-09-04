const verifySignUp = require("./verifySignUp");

module.exports = function(app) {
  const users = require("../controller/user.controller");

  // Retrieve all Users
  app.get("/api/users", users.findAll);

  // Retrieve a single User by Id
  app.get("/api/users/:userId", users.findById);

  // Update a User with Id
  app.put("/api/users/:userId", users.update);

  // Delete a User with Id
  app.delete("/api/users/:userId", users.delete);
  // Create a new User
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUserNameOrEmail],
    users.signUp
  );
  //User sign in
  app.post("/api/auth/signin", users.signIn);
};
