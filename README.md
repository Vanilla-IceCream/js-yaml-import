# js-yaml-import [![Build Status](https://travis-ci.org/Vanilla-IceCream/js-yaml-import.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/js-yaml-import) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/js-yaml-import/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/js-yaml-import?branch=master)

Allows import files in YAML.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+).

## Install

Using npm:

```sh
$ npm i js-yaml js-yaml-import -D
```

Using yarn:

```sh
$ yarn add js-yaml js-yaml-import -D
```

## Usage

```yaml
# ./src/foo.yaml

media:
  video_games: foo
```

```yaml
# ./src/bar.yaml

media:
  film_adaptation: bar
```

```yaml
# ./src/data.yaml

'@import':
  - foo.yaml
  - bar.yaml

media:
  webcomic: aaa
  manga: bbb
  anime: ccc
```

```js
const path = require('path');
const Yaml = require('js-yaml-import');

const yaml = new Yaml(path.join(__dirname, 'src'));
const yamlFile = yaml.read(path.join(__dirname, './src/data.yaml'));

console.log('data =', yamlFile);
// data = {
//   media: {
//     video_games: 'foo',
//     film_adaptation: 'bar',
//     webcomic: 'aaa',
//     manga: 'bbb',
//     anime: 'ccc'
//   }
// }
```

## Options

### `searchPaths`

Type: `string | string[]`

## [Example](./example)
