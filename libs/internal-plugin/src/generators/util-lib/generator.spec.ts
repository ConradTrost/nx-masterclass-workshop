import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { utilLibGenerator } from './generator';
import { UtilLibGeneratorSchema } from './schema';

describe('util-lib generator', () => {
  let tree: Tree;
  const options: UtilLibGeneratorSchema = { name: 'test', directory: 'movies' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await utilLibGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'movies-util-test');
    console.log(config);
    expect(config).toBeDefined();
    expect(config.sourceRoot).toEqual('libs/movies/util-test/src');
    expect(config.tags).toEqual(['type:util', 'scope:movies']);
  });
});
