const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  //get
  read(name, path) {
    return database(path)
      .select()
      .where("managers", managers);
    // .first();
  },
  // post
  create(body, path) {
    return database(path)
      .insert(body)
      .returning("*")
      .then(record => record[0]);
  },
  // put
  update(managers, body, path) {
    return database(path)
      .update(body)
      .where("managers", managers)
      .returning("*")
      .then(record => record[0]);
  },
  delete(managers, path) {
    return database(path)
      .delete()
      .where("managers", managers);
  }
};

