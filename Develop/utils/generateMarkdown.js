// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    (https://opensource.org/licenses/Apache-2.0)`};

  if (license === 'GNU General Public License v3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
    (https://www.gnu.org/licenses/gpl-3.0)`};

  if (license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    (https://opensource.org/licenses/MIT)`};

  if (license === 'BSD 3-Clause License') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
    (https://opensource.org/licenses/BSD-3-Clause)`

  } else {
    return ('');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `![${license} license]().split(' ').join('')}.json`;
  } else {
    return ('');
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `![${license} license]().split(' ').join('')}.json`;
  } else {
    return ('');
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  #Description
  ${data.description}
  #Table of Contents
  -[License](#license) 
  -[Dependencies](#dependencies)
  -[Test](#test)
  -[Repo](#repo)
  -[Contribution](#contribution)
  #Installation
  The following dependencies must be installed in order to run the application:
  #Dependencies
  This application is licensed under ${data.license}.
  #Contributiions
  Contributors: ${data.contribution}
  #Tests
  The following command is required in order to run the test: ${data.test}
  `;
    
}

module.exports = generateMarkdown;
