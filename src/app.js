const fs = require("fs-extra");

module.exports = async () => {
    await fs.copy(__dirname + "/../temps/readme.md", "./readme.md");
}