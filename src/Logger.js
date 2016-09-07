import { dim, green, red } from 'chalk';

const logFunction = console.log.bind(console);

export const info = text => logFunction(dim(text));

export const success = text => logFunction(green(text));

export const error = text => logFunction(red(text));

export const spacing = () => logFunction('\n');

export default { info, success, error, spacing };
