const { spawn } = require("child-process-async");
const fs = require("fs-extra");
const path = require("path");

const tempDir = `${__dirname}/../temps`;

const copy = (root, relPath) => {
    const file = path.basename(relPath);

    const dest = path.join(root, relPath);
    const src = path.join(tempDir, file);

    console.log(`Copy: ${dest}`);

    return fs.copy(src, dest);
};

const ensureDir = (root, relPath = ".") => {
    const fullPath = path.join(root, relPath);

    console.log(`Ensure: ${fullPath}`);

    return fs.ensureDir(fullPath);
};

const npmInit = async (root) => {
    const exists = await fs.pathExists(path.join(root, "package.json"));

    if (exists)
        return;

    console.log("npm init -y");

    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    const proc = spawn(npmCommand, ["init", "-y"]);

    proc.stderr.pipe(process.stderr);

    return spawn;
}

const npmInstall = (package) => {
    console.log(`Install: ${package}`);

    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

    const proc = spawn(npmCommand, ["install", package]);

    proc.stderr.pipe(process.stderr);

    return spawn;
};

module.exports = async (root) => {
    if (!root) {
        throw new Error("Root is required.");
    }

    ensureDir(root);
    ensureDir(root, "src");
    ensureDir(root, "src/api");
    ensureDir(root, "src/comps");

    //copy(root, "src/api/server.js");
    copy(root, ".babelrc");
    //copy(root, "webpack.config.js");

    await npmInstall("hello.world");
}