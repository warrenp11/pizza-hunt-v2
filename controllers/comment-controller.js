const { Comment, Pizza } = require("../models");

const commentController = {
  // add comment to pizza
  addComment({ params, body }, res) {
    console.log(body);
    Comment.create(body)
    .then(({ _id }) => {
      console.log(_id);
      // Now that we've got an _id, we can use this to add the comment to a pizza. Do that by updating the addComment() method
    });
  },


  // remove comment
  removeComment() {},
};

module.exports = commentController;
