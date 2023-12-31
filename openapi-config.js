/** @type {import("@rtk-query/codegen-openapi").ConfigFile} */

module.exports = {
  schemaFile: "https://petstore3.swagger.io/api/v3/openapi.json",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./src/store/petApi.ts",
  exportName: "petApi",
  hooks: true,
};
