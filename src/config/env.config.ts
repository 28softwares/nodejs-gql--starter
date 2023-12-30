import dotenv from "dotenv";

dotenv.config();
class EnvConfiguration {
  static PORT = process.env.PORT;

  static DB_TYPE = process.env.DB_TYPE;
  static DB_HOST = process.env.DB_HOST;
  static DB_PORT = process.env.DB_PORT || 5432;
  static DB_USERNAME = process.env.DB_USERNAME;
  static DB_PASSWORD = process.env.DB_PASSWORD;
  static DB_NAME = process.env.DB_NAME;
}

export { EnvConfiguration };
