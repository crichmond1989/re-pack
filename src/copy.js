const path = require("path");
const fs = require("fs-extra");

const tempDir = `${__dirname}/../temps`;

module.exports = (dest) => {
    const file = path.basename(dest);

    const src = path.join(tempDir, file);

    console.log(`Copy: ${dest}`);

    return fs.copy(src, dest);
}