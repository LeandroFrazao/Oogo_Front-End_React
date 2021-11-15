const db = require("../db")();
const { v4: uuidv4 } = require("uuid");

const COLLECTION = "users";
module.exports = () => {
  const get = async (id = null) => {
    if (!id) {
      const authors = await db.get(COLLECTION);
      return authors;
    }
    const author = await db.get(COLLECTION, { id });
    return author;
  };

  const add = async (name) => {
    const results = await db.add(COLLECTION, {
      id: uuidv4(),
      name: name,
    });
    return results.result;
  };

  return {
    get,
    add,
  };
};
