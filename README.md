# CodeVoyager

**CodeVoyager** is a CLI tool designed to simplify framework and library migrations in JavaScript and TypeScript projects. With its modular design and interactive migration wizard, CodeVoyager helps you seamlessly transition to the latest tools and frameworks without breaking your project.

---

## **Features**

### Core Features
- **Modular Plugin System**: Support for multiple frameworks and libraries like Webpack, Babel, React, Storybook, etc.
- **Version-Aware Migration**: Automatically applies migration rules specific to version transitions (e.g., Webpack 4 to Webpack 5).
- **Project Type Detection**: Detects tools and frameworks in your project and applies appropriate migration plugins.
- **Interactive Migration Wizard**: Guides you through the migration process step by step.
- **Backup Configuration**: Automatically backs up your current configuration before applying changes.
- **Customizable Tasks**: Select specific migration steps (e.g., dependencies, configurations).

### Advanced Features
- **Storybook & UI Support**: Updates Storybook configurations and migrates UI-related tools.
- **JavaScript Module Awareness**: Detects CommonJS or ES Modules and updates configurations accordingly.
- **Configuration Merge & Diff**: Provides a diff view of configuration changes before applying them.
- **Testing Compatibility**: Updates Jest, Cypress, and other testing setups for compatibility.

### Usability Features
- **Comprehensive Logs**: Detailed reports on applied changes and skipped steps.
- **Error Handling**: Rolls back changes if migration fails.
- **Pre/Post-Migration Hooks**: Run custom scripts before or after migration.

---

## **Installation**

Install CodeVoyager globally using npm or yarn:

```bash
npm install -g codeVoyager
# or
yarn global add codeVoyager
```

---

## **Usage**

### Basic Commands

1. **Initialize Migration**:
   ```bash
   codeVoyager init
   ```
   Initializes the migration process and detects the project's current setup.

2. **Run Migration**:
   ```bash
   codeVoyager migrate
   ```
   Applies migration changes based on detected frameworks and plugins.

3. **Check Dependencies**:
   ```bash
   codeVoyager check-dependencies
   ```
   Scans your project for outdated dependencies and suggests updates.

4. **Rollback Changes**:
   ```bash
   codeVoyager rollback
   ```
   Restores your project to its previous state if a migration fails.

### Additional Options
- **View Help**:
  ```bash
  codeVoyager --help
  ```
- **Specify a Config File**:
  ```bash
  codeVoyager migrate --config custom-config.json
  ```

---

## **Configuration**

CodeVoyager allows you to customize migrations using a configuration file. Example `codeVoyager.config.json`:

```json
{
  "backup": true,
  "tasks": ["dependencies", "configuration"],
  "targetFramework": "latest"
}
```

---

## **Examples**

### Example 1: Migrating from Webpack 4 to Webpack 5
```bash
codeVoyager init
codeVoyager migrate
```
This will:
- Detect Webpack in the project.
- Backup the current `webpack.config.js`.
- Update dependencies and configurations to Webpack 5.

### Example 2: Updating React to the Latest Version
```bash
codeVoyager check-dependencies
codeVoyager migrate --framework react
```
This will:
- Identify outdated React dependencies.
- Migrate deprecated APIs (e.g., `componentWillMount` to `useEffect`).

---

## **Development**

If you'd like to contribute or develop CodeVoyager, clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/codeVoyager.git
cd codeVoyager
npm install
```

### Run Locally
```bash
npm run build
node dist/index.js --help
```

### Testing
Run tests using Jest:
```bash
npm test
```

---

## **Contributing**

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or feedback, feel free to reach out:
- Email: support@codevoyager.dev
- GitHub: [https://github.com/your-repo/codeVoyager](https://github.com/your-repo/codeVoyager)

