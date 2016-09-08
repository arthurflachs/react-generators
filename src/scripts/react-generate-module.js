import { argv } from 'yargs';
import Logger from '../Logger';
import Directory from '../Directory';
import Files from '../Files';

const { _: args } = argv;

if (args.length !== 1) {
  Logger.error('create-module requires the module name as its first argument.');
  Logger.spacing();
  Logger.info('Usage:\treactors create-module [ModuleName] [options]');

  process.exit(1);
}

CreateModule(args[0]);

function CreateModule(ModuleName) {
  Logger.spacing();

  Logger.info(`Generating module ${ModuleName}.`);

  // Generate module directories
  Logger.info('Generating module architecture...')
  const mkdirModule = Directory.mkdir(process.cwd(), ModuleName);
  const moduleDirectory = mkdirModule.target;
  // TODO: error
  Logger.success(`Directory ${moduleDirectory} successfully created.`)

  const mkdirComponents = Directory.mkdir(moduleDirectory, 'components');
  // TODO: error
  Logger.success(`Directory ${mkdirComponents.target} successfully created.`);

  const mkdirReducers = Directory.mkdir(moduleDirectory, 'reducers');
  // TODO: error
  Logger.success(`Directory ${mkdirReducers.target} successfully created.`);

  const mkdirActions = Directory.mkdir(moduleDirectory, 'actions');
  // TODO: error
  Logger.success(`Directory ${mkdirActions.target} successfully created.`);

  Logger.spacing();
}
