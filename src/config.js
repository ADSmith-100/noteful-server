module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_URL || "postgresql://postgre@localhost/noteful",
};

//We can add API_TOKENS and other secrets to this file in the future if and when needed.
