/** opcion 1 */
/*
import fs from "node:fs";
const movies = JSON.parse(
  fs.readFileSync("../models/local/movies.json", "utf-8")
);
*/

/** opcion 2 */

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export const movies = require("../models/local/movies.json");
