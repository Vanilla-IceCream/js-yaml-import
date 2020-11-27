import path from 'path';

import Yaml from '../src';

process.chdir(__dirname);

describe('js-yaml-import', () => {
  it('should handle @import', async () => {
    const yaml = new Yaml(path.join(__dirname, 'fixtures'));
    const yamlFile = yaml.read(path.join(__dirname, './fixtures/data.yaml'));

    expect(yamlFile).toEqual({
      media: {
        video_games: 'foo',
        film_adaptation: 'bar',
        webcomic: 'aaa',
        manga: 'bbb',
        anime: 'ccc',
      },
    });
  });
});
