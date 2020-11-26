const path = require('path');

const Yaml = require('../');

const yaml = new Yaml(path.join(__dirname));
const yamlFile = yaml.read(path.join(__dirname, './data.yaml'));

console.log('data =', yamlFile);
