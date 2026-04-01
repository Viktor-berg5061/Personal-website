const path = require('node:path');
const { spawn } = require('node:child_process');

const command = process.argv[2];

if (!command) {
  throw new Error('Missing Next.js command');
}

const projectRoot = process.cwd();
const nodeModulesPath = path.join(projectRoot, 'node_modules');
const nextBin = path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

const child = spawn(
  process.execPath,
  [nextBin, command],
  {
    stdio: 'inherit',
    cwd: projectRoot,
    env: {
      ...process.env,
      NODE_PATH: process.env.NODE_PATH
        ? `${nodeModulesPath}${path.delimiter}${process.env.NODE_PATH}`
        : nodeModulesPath,
    },
  }
);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
