const preons = require("preons/src/lib/stylesheet");

module.exports = function (source) {
  let set = JSON.parse(source);
  let css = preons({ set });
  return `module.exports = ${css}`;
};
