import path from 'path';
import fs from 'fs';

export const ALREADY_EXISTS_ERROR = 'ALREADY_EXISTS_ERROR';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

export function mkdir(basePath, target) {
  const targetPath = path.resolve(basePath, target);
  const baseReturn = {
    target: targetPath,
  };

  try {
    fs.mkdirSync(targetPath);
  } catch (e) {
    return Object.assign({}, baseReturn, {
      err: e.code === 'EEXIST' ? ALREADY_EXISTS_ERROR : UNKNOWN_ERROR,
    });
  }

  return baseReturn;
}

export default { mkdir, ALREADY_EXISTS_ERROR, UNKNOWN_ERROR };
