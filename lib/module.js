import consola from "consola";
import "reflect-metadata";
import { createConnection } from "typeorm";
export default async function(moduleOptions) {
  const config = await Object.assign({}, moduleOptions, this.options.typeorm);

  this.nuxt.hook("build:before", async () => {
    let connection;
    try {
      connection = await createConnection(config);
      consola.success(`Connected to ${connection.name} database`);
    } catch (error) {
      consola.error(error);
    }
  });
  this.nuxt.hook("close", async () => {
    await connection.close();
    consola.success(`Disconnected from ${connection.name} database`);
  });
}
