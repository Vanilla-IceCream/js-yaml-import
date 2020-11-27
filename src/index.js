const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const _ = require('lodash');

const AtImport = '@import';

class Yaml {
  constructor(searchPaths) {
    if (searchPaths) {
      searchPaths = Array.isArray(searchPaths) ? searchPaths : [searchPaths];
      this.searchPaths = searchPaths.map(path.normalize);
    } else {
      this.searchPaths = ['.'];
    }
  }

  read(fileName) {
    const json = yaml.load(fs.readFileSync(fileName, 'utf8'));
    const paths = this.searchPaths.filter(fs.existsSync);

    if (json[AtImport]?.length) {
      let result = {};

      for (let i = 0; i < json[AtImport].length; i += 1) {
        const yamlImports = json[AtImport][i];

        for (let j = 0; j < paths.length; j += 1) {
          const dir = paths[j];
          const input = path.join(dir, yamlImports);

          if (fs.existsSync(input)) {
            const data = yaml.load(fs.readFileSync(input, 'utf8'));
            result = _.merge(result, data);
          }
        }
      }

      if (json[AtImport]) {
        delete json[AtImport];
      }

      return _.merge(result, json);
    }

    return json;
  }
}

module.exports = Yaml;
