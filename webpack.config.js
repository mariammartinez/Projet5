const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: "./front/index.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "front/dist")
  }
};