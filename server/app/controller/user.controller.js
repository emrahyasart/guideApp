const db = require("../config/db.config.js");
const config = require("../config/config.js");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signUp = (req, res) => {
  // Save User to Database
  console.log("Processing func -> SignUp");

  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    about: req.body.about,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      res.send("User registered successfully!" + user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    })
    .catch(err => {
      res.status(500).send("Fail! Error -> " + err);
    });
};

exports.signIn = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send("User Not Found.");
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, accessToken: token, id: user.id });
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all users
exports.findAll = (req, res) => {
  console.log(User);
  User.findAll()
    .then(users => {
      // Send all users to Client
      res.send(users);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Find a User by Id
exports.findById = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a User
exports.update = (req, res) => {
  var user = req.body;
  const id = req.params.userId;
  User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      about: req.body.about
    },
    { where: { id: req.params.userId } }
  )
    .then(() => {
      console.log(req.body);
      res.status(200).send("updated successfully a User with id = " + id);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a User by Id
exports.delete = (req, res) => {
  console.log("hello");
  const id = req.params.userId;
  console.log(req.params.userId);
  User.destroy({
    where: { id: id }
  })
    .then(user => {
      console.log(user);
      res.status(200).send("deleted successfully a User with id = " + id);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
