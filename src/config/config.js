import dotenv from "dotenv";
import ParsedArgs from "minimist";

dotenv.config();

const args = ParsedArgs(process.argv.slice(2), {
  alias: {
    p: "port",
    m: "mode",
    e: "env",
  },
  default: {
    port: process.env.PORT,
    mode: "FORK",
    env: "DEV",
  },
});

export const options = {
  server: {
    PORT: args.port,
    MODE: args.mode,
    NODE_ENV: args.env,
  },
  mongo: {
    url: process.env.MONGO_URL,
  }
};
