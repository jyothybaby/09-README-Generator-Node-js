// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [question](#questions)

## Installation
To install necessary dependencies, run the following command : "${data.command}"

## Usage
In order to use this application, " ${data.usage}" 

## License

This project is licenced under the "${data.license}" license

## Contributing

 contributors: "${data.contributing}"
## Tests

To run tests, run this command : "${data.test}"

## Questions

If you have any questions about the repo, open an issue or contact me directly at " ${data.email}". You can find more of my work at
 [${data.username}](https://github.com/${data.username}/).

 https://github.com/${data.username}/${data.title}

`;
}

module.exports = generateMarkdown;
