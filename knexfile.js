module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///bsfb"
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
