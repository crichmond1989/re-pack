const fs = require("fs-extra");

module.exports = (src = ".") => {
    console.log(`Ensure: ${src}`);

    return fs.ensureDir(src);
};