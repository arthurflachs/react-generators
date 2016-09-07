/**
* scripts/create-app.js
*
* Usage: react-generate create-app [ApplicationName]
*/

import path from 'path';
import pascalCase from 'pascal-case';
import Logger from '../Logger';
import Directory from '../Directory';
import PackageJson from '../PackageJson';
import Files from '../Files';

function CreateApp(ApplicationName, extraGenerators = []) {

  const basePath = process.cwd();
  const applicationPath = pascalCase(ApplicationName);

  Logger.spacing();

  //
  // Directory creation
  //

  Logger.info(`Generating app ${ApplicationName}...`);

  const mkdirApp = Directory.mkdir(basePath, ApplicationName);
  const appDirectory = mkdirApp.target;
  mkdirApp.err && mkdirError(mkdirApp.err, appDirectory);

  Logger.success(`Succesfully created directory ${appDirectory}.`);
  Logger.spacing();

  //
  // Generate package.json
  //
  Logger.info('Genering package.json file...');
  PackageJson.create(appDirectory, ApplicationName, extraGenerators);
  Logger.success('Successfully wrote package.json.');
  Logger.spacing();

  //
  // Run npm install
  //
  Logger.info('Running npm install...');
  PackageJson.runInstall(appDirectory);
  Logger.success('Successfully installed npm dependencies.');
  Logger.spacing();

  //
  // Copy module templates
  //
  Logger.info('Copying project files...');
  const copyServer = Files.copyTemplate(
    path.resolve(__dirname, '../../templates/server.js'),
    path.resolve(appDirectory, './server.js')
  );
  copyServer.err && copyError(copyServer);
  Logger.success(`Copied server files to ${copyServer.target}.`);

  const copyWepbackConfig = Files.copyTemplate(
    path.resolve(__dirname, '../../templates/webpack.config.js'),
    path.resolve(appDirectory, 'webpack.config.js')
  );
  copyWepbackConfig.err && copyError(copyWepbackConfig.err);
  Logger.success(`Copied Webpack config to ${copyWepbackConfig.target}.`)

  const mkdirSrc = Directory.mkdir(appDirectory, 'src');
  const srcDirectory = mkdirSrc.target;
  mkdirSrc.err && mkdirError(mkdirSrc.err, srcDirectory);

  const copyIndexJs = Files.copyTemplate(
    path.resolve(__dirname, '../../templates/src/index.js'),
    path.resolve(appDirectory, 'src', 'index.js')
  );
  copyIndexJs.err && copyError(copyIndexJs.err);
  Logger.success(`Copied app entry file to ${copyIndexJs.target}.`);

  const copyIndexHtml = Files.copyTemplate(
    path.resolve(__dirname, '../../templates/index.html'),
    path.resolve(appDirectory, 'index.html')
  );
  copyIndexHtml.err && copyError(copyIndexHtml.err);
  Logger.success(`Copied index.html file to ${copyIndexHtml.target}.`);
}

function mkdirError(err, target) {
    return err === Directory.ALREADY_EXISTS_ERROR ?
      Logger.error(`Folder ${target} already exists.`) :
      Logger.error(`Unable to create directory ${target}.`);


    throw mkdirApp.err.originalError;
}

function copyError(err) {
  throw err.originalError;
}

CreateApp('Test');
