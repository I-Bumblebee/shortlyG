const { ApolloError } = require("apollo-server-express");
const Url = require("./model/url.model")

const resolvers = {
  Query: {
    everyUrl: async () => await Url.find(),
    shortSpecificUrl: async (_, {shortUrl}) => await Url.find({shortUrl}).then((v) => v[0])
  },
  Mutation: {
    addUrl: async (_, { longUrl, id, shortUrl }) => {
      const res = new Url({
        longUrl: longUrl,
        id: id,
        shortUrl: shortUrl,
      });
      await res.save();
      return shortUrl;
    },
    delete: async () => {
      await Url.deleteMany();
      return "Done";
    },
    myUrls: async (_, {id}) => {
      const found = await Url.find({id})
      return found;
    }
  },
};

module.exports = resolvers;
