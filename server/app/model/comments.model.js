module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    body: {
      type: Sequelize.TEXT
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    },
    commentDate: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    }
  });

  return Comment;
};
