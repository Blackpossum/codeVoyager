import fs from 'fs';
import path from 'path';

export function detectConfigFiles(): string[] {
    const configs = ['webpack.config.js', '.storybook', 'vite.config.js'];
    const foundConfigs = configs.filter((config) =>
        fs.existsSync(path.resolve(process.cwd(), config))
    );

    return foundConfigs;
}
