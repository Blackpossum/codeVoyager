import {Command} from 'commander';
import chalk from 'chalk';
import {initMigration} from '@commands/init';

const program = new Command();

program
  .name('migration-helper')
  .description('CLI tool for migrating frameworks and libraries')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize a migration Process')
  .action(() => {
    console.log(chalk.green('starting migration initiatialization.....'));
    initMigration();
  });

program.parse(process.argv);
