const { User, Thought } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
    .select('-__v')
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    })
},


  // get user by user id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate([
      {   path: 'thoughts', 
          select: "-__v" 
      },
      {   path: 'friends', 
          select: "-__v" 
      }
    ])
    .select('-__v')
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
},

 // create user
  createUser({ body }, res) {
    User.create(body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err));
},

  // update user by user id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id' });
          return;
      }
      res.json(data);
  })
  .catch(err => res.json(err));
},
  
  // delete user by user ID
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id'});
          return;
      }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err));
},
  
  // add friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
    .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No user found with this userId' });
            return;
      }
    User.findOneAndUpdate(
      { _id: params.friendId },
      { $addToSet: { friends: params.userId } },
      { new: true, runValidators: true }
    )
       .then(data => {
          if(!data) {
            res.status(404).json({ message: 'No user found with this friendId' })
              return;
          }
          res.json(data);
      })
      .catch(err => res.json(err));
    })
      .catch(err => res.json(err));
},

  
// delete friend by friend ID
deleteFriend({ params }, res) {
  User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true, runValidators: true }
    )
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'No user found with this userId' });
            return;
        }
        User.findOneAndUpdate(
            { _id: params.friendId },
            { $pull: { friends: params.userId } },
            { new: true, runValidators: true }
        )
        .then(data => {
            if(!data) {
                res.status(404).json({ message: 'No user found with this friendId' })
                return;
            }
            res.json(data);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
}
}

module.exports = userController;