// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'none'){
    return '[License](#license)'
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none'){
    return `## License 
    
    This project is licensed under ${license}`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
\n## Table of Contents
\n*[Description](#description)
\n*[Installation](#installation)
\n*[Usage](#usage)
\n*[Contact Me](#contact-me)
\n*[Contributions](#contributions)
\n*[Testing](#testing)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github - ${data.creator}
## Contributions
${data.contributions}
## Testing
${data.test}
${renderLicenseSection(data.license)}
`
}

module.exports = generateMarkdown;
