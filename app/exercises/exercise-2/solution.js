// Exercise 2 solution: CRUD
import { Server, Model, RestSerializer } from "miragejs";

export default function makeServer() {
  return new Server({
    serializers: { application: RestSerializer },

    models: {
      user: Model
    },

    seeds(server) {
      server.create("user", { name: "Sam" });
    },

    routes() {
      this.resource("users");
    }
  });
}
