const copy = require("./copy.js");
const npm = require("./npm.js");

module.exports = async () => {
    await copy("src/pages/home.jsx");

    npm.add("react", "-D");
    npm.add("react-dom", "-D");
}