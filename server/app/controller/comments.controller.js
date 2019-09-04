const db = require("../config/db.config.js");
const Comments = db.comments;

// Post a Comment
exports.create = (req, res) => {
  // Save to MySQL database
  Comments.create({
    body: req.body.body,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userId: req.body.userId,
    commentDate: req.body.commentDate,
    language: req.body.language
  })
    .then(comment => {
      // Send created Comment to client
      console.log(comment);
      res.send(comment);
    })
    .catch(err => {
      res.status(500).send("Error ->" + err);
    });
};

// FETCH all comments
exports.findAll = (req, res) => {
  Comments.findAll()
    .then(comments => {
      // Send all comments to Client
      res.send(comments);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Find a Comment by Id
exports.findById = (req, res) => {
  Comments.findById(req.params.commentId)
    .then(comment => {
      res.send(comment);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a Comment
exports.update = (req, res) => {
  var comment = req.body;
  const id = req.params.commentId;
  Comments.update(
    {
      body: req.body.body
    },
    { where: { id: req.params.commentId } }
  )
    .then(() => {
      console.log(req.body);
      res.status(200).send("updated successfully a Comment with id = " + id);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a Comment by Id
exports.delete = (req, res) => {
  console.log("hello");
  const id = req.params.commentId;
  console.log(req.params.commentId);
  Comments.destroy({
    where: { id: id }
  })
    .then(comment => {
      console.log(comment);
      res.status(200).send("deleted successfully a Comment with id = " + id);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
