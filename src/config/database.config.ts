import { DataSource } from "typeorm";
import { EnvConfiguration } from "./env.config";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const AppDataSource = new DataSource({
  type: EnvConfiguration.DB_TYPE as "postgres",
  host: EnvConfiguration.DB_HOST,
  port: +EnvConfiguration.DB_PORT,
  username: EnvConfiguration.DB_USERNAME,
  password: EnvConfiguration.DB_PASSWORD,
  database: EnvConfiguration.DB_NAME,
  entities: [`${__dirname}/../entities/*.entity.ts`],
  synchronize: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  // path.join() , for windows
  // dropSchema: true,
});

export { AppDataSource };
