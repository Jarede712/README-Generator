// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
    if (!license || license === 'None') return '';
    const badges = {
        'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        'GNU GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    };
    return badges[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
    if (!license || license === 'None') return '';
    const links = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
        'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'ISC': 'https://opensource.org/licenses/ISC'
    };
    return links[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
    if (!license || license === 'None') return '';
    return `## License
This project is licensed under the ${license} - see the [LICENSE](${renderLicenseLink(license)}) for details.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Got questions? Reach out to me on [GitHub](https://github.com/${data.github}) or by [email](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;
