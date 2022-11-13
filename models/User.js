const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    // looking for correct username requirements
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    // looking for correct email requirements
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'must match an email address!']
    },

    // looking for password requirements
    password: {
      type: String,
      required: true,
      minlength: 5
    },

    // looking for thought requirements
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],

     // looking for friend requirements
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

schemaUser.virtual('friendCount').get(function() {
    return this.friends.length;
  });

schemaUser.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

schemaUser.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

schemaUser.virtual('friendCount').get(function() {
  return this.friends.length;
});

// ./model/user
const User = model('User', schemaUser);

module.exports = User;