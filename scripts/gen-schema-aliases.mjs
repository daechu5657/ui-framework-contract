// scripts/gen-schema-aliases.mjs
import fs from "node:fs";

const swagger = JSON.parse(fs.readFileSync("swagger.json", "utf8"));
const names = Object.keys(swagger.components?.schemas ?? {});

const lines = [
  `import type { components } from "./schema";`,
  ``,
  `export type SchemaMap = components["schemas"];`,
  ...names.map((n) => `export type ${n} = SchemaMap["${n}"];`),
  ``,
];

fs.writeFileSync("./src/component-shared-models.ts", lines.join("\n"));
console.log(`Generated ${names.length} model aliases`);

// npx openapi-typescript ./swagger.json -o ./src/schema.ts
// node scripts/gen-schema-aliases.mjs
