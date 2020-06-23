import consola from "consola";
import "reflect-metadata";
import { createConnection } from "typeorm";
import _ from "lodash";
export default async function(moduleOptions) {
  const config = await Object.assign({}, moduleOptions, this.options.typeorm);

  this.nuxt.hook("build:before", async () => {
    try {
      if (_.isEmpty(config)) {
        const connection = await createConnection();
      } else {
        const connection = await createConnection(config);
      }
      consola.success(`Connected to ${connection.name} database`);
      this.nuxt.hook("close", async () => {
        await connection.close();
        consola.success(`Disconnected from ${connection.name} database`);
      });
    } catch (error) {
      consola.error(error);
    }
  });
}
