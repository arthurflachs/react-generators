import path from 'path';
import fs from 'fs';

export function copyTemplate(templatePath, target) {
  try {
    var template = fs.readFileSync(templatePath);
    fs.writeFileSync(target, template);
  } catch (e) {
    return {
      target,
      err: {
        originalError: e,
      },
    };
  }

  return { target };
};

export default { copyTemplate };
