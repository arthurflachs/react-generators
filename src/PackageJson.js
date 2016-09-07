import fs from 'fs';
import path from 'path';
import paramCase from 'param-case';
import spawn from 'cross-spawn';

export function create(directory, applicationName) {
  const template = require('../templates/package.json');

  const appPackage = Object.assign({}, template, {
    name: paramCase(applicationName),
  });

  fs.writeFileSync(path.resolve(directory, 'package.json'), JSON.stringify(appPackage, null, 2) + '\n');
}

export function runInstall(directory) {
  const previousDirectory = process.cwd();

  process.chdir(directory);

  spawn.sync('npm', ['install'], { stdio: 'inherit' });

  process.chdir(previousDirectory);
}

export default { create, runInstall };
