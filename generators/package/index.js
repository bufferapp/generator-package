'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log('Welcome to the awesome ' + chalk.blue('generator-bufferapp') + ' generator!');
    const done = this.async();

    const prompts = [{
      type: 'input',
      name: 'packageName',
      message: 'Your package name',
      default: 'example-package'
    }, {
      type: 'input',
      name: 'description',
      message: 'Description'
    }, {
      type: 'input',
      name: 'presentationalComponentName',
      message: 'Your presentational component name'
    }];

    return this.prompt(prompts).then(props => {
      this.packageName = props.packageName;
      this.description = props.description;
      this.containerName = props.packageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
      this.presentationalComponentName = props.presentationalComponentName;
      this.email = this.user.git.email();
      done();
    });
  }
  _copyFile(filename, output = null) {
    if (!output) {
      output = filename;
    }
    this.fs.copyTpl(
      this.templatePath(filename),
      this.destinationPath(`packages/${this.packageName}/${output}`),
      {
        packageName: this.packageName,
        description: this.description,
        containerName: this.containerName,
        presentationalComponentName: this.presentationalComponentName,
        email: this.email
      }
    );
  }
  copyFiles() {
    this._copyFile('README.md');
    this._copyFile('package.json');
    this._copyFile('index.js');
    this._copyFile('index.test.jsx');
    this._copyFile('middleware.js');
    this._copyFile('middleware.test.js');
    this._copyFile('reducer.js');
    this._copyFile('reducer.test.js');
    this._copyFile('snapshot.test.js');
    this._copyFile('components/component/index.jsx', `components/${this.presentationalComponentName}/index.jsx`);
    this._copyFile('components/component/story.jsx', `components/${this.presentationalComponentName}/story.jsx`);
    this._copyFile('.babelrc');
    this._copyFile('.storybook');
  }
};
