const { getOptions } = require("loader-utils");
const preons = require("preons/src/lib/stylesheet");
// import { validate } from "schema-utils";

// const schema = {
//   type: "object",
//   properties: {
//     test: {
//       type: "string",
//     },
//   },
// };

module.exports = function (source) {
  const options = getOptions(this);

  //   validate(schema, options, {
  //     name: "Example Loader",
  //     baseDataPath: "options",
  //   });

  // Apply some transformations to the source...

  console.log("Gemma!");
  console.log(source, "source");
  let set = JSON.parse(source);
  console.log(set.preons.baseline);
  console.log(preons({ set }));
  let css = preons({ set });
  // return `module.exports = ${JSON.stringify(css)}`;
  return `module.exports = ${css}`;
};
