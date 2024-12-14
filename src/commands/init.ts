import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

interface InitAnswer {
  framework: string;
  backup: boolean;
}

export async function initMigration(): Promise<void> {
  try {
    const answer: InitAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'framework',
        message: 'Which framework/ library are you migrating ? ',
        choices: ['Webpack', 'Storybook', 'Other'],
      },
      {
        type: 'confirm',
        name: 'backup',
        message:
          'Do you want to create a backup of your current configuration?',
        default: true,
      },
    ]);

    console.log(chalk.blue(`Framework selected: ${answer.framework}`));

    if (answer.backup) {
      createBackup();
    }

    console.log(chalk.green('Migration initialization complete!'));
  } catch (error: any) {
    console.error(chalk.red(`Error during initialization: ${error.message}`));
  }
}

function createBackup(): void {
  const backupDir = path.resolve(process.cwd(), 'config_backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
    console.log(chalk.green('backup folder created'));
  }
  console.log(chalk.yellow('Backing Up configuration file to rollback .....'));
}
