const fs = require('node:fs');
const path = require('node:path');

const projectRoot = process.cwd();
const nextPath = path.join(projectRoot, '.next');
const localRoot = path.join(process.env.LOCALAPPDATA || projectRoot, 'cv-website-next');

function ensureDirectory(target) {
  fs.mkdirSync(target, { recursive: true });
}

function ensureNextJunction() {
  ensureDirectory(localRoot);

  if (fs.existsSync(nextPath)) {
    const stats = fs.lstatSync(nextPath);

    if (stats.isSymbolicLink()) {
      const resolved = fs.realpathSync(nextPath);
      if (path.normalize(resolved) === path.normalize(localRoot)) {
        return;
      }
      fs.rmSync(nextPath, { recursive: true, force: true });
    } else {
      fs.rmSync(nextPath, { recursive: true, force: true });
    }
  }

  fs.symlinkSync(localRoot, nextPath, 'junction');
}

ensureNextJunction();
