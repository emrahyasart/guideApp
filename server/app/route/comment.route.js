module.exports = function(app) {
  const comments = require("../controller/comments.controller");

  // Create a new Comment
  app.post("/api/comments/create", comments.create);

  // Retrieve all Comments
  app.get("/api/comments", comments.findAll);

  // Retrieve a single Comment by Id
  app.get("/api/comments/:commentId", comments.findById);

  // Update a Comment with Id
  app.put("/api/comments/:commentId", comments.update);

  // Delete a Comment with Id
  app.delete("/api/comments/:commentId", comments.delete);
};
