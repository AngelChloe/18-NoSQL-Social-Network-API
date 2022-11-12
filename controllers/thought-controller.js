const { Thought, User } = require("../models");

const thoughtController = {
  // get all Thoughts
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
    .populate({
      path: "reactions",
      select: "-__v",
    })
    .select("-__v")
    .then((dbThoughtData) => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(dbThoughtData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
},
// create Thought
  // push the created thought's _id to the associated user's thoughts array field
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .Json({ message: "Thought creat but no user with this id!" });
        }

        res.json({ message: "Thought successfully created!" });
      })
      .catch((err) => res.json(err));
  },
 

module.exports = thoughtController;