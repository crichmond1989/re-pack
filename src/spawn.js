const { spawn } = require("child-process-async");

module.exports = async (command, ...args) => {
    console.log(`CMD: ${command} ${args.join(" ")}`);

    const proc = spawn(command, args);

    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);

    return await proc;
}