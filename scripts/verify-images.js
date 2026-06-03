const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const paths = [...new Set([...app.matchAll(/images\/[^"]+/g)].map((m) => m[0]))];
let missing = 0;

for (const rel of paths) {
  if (!fs.existsSync(path.join(root, rel))) {
    console.log("MISSING", rel);
    missing += 1;
  }
}

console.log(`checked ${paths.length} paths, missing ${missing}`);
process.exit(missing ? 1 : 0);
