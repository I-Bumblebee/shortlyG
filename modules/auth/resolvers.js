const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./model/user.model");

const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    deleteUsers: async () => {
      await User.deleteMany();
      return "Done";
    },
    registerUser: async (
      _,
      { registerInput: { username, email, password } }
    ) => {
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        throw new ApolloError(
          `A User is already registered with the email ${email} `,
          "USER_ALREADY_EXISTS"
        );
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign(
        { user_id: newUser._id, email, username:username },
        process.env.SECURE_STRING,
        {
          expiresIn: "2h",
        }
      );

      await newUser.save();

      newUser.token = token;

      return newUser;
    },
    loginUser: async (_, { loginInput: { email, password } }) => {
      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD");
      }

      const token = jwt.sign(
        { user_id: user._id, email, username:user.username },
        process.env.SECURE_STRING,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return user;
    },
  },
};

module.exports = resolvers;
