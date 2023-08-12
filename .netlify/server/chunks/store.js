import { w as writable } from "./index.js";
const currentRoute = writable("index");
const theme = writable("system");
const language = writable("english");
export {
  currentRoute as c,
  language as l,
  theme as t
};
