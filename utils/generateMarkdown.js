// Generate Markdown Function README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${getLicense(data.license)}

  ## **Description**
  ${data.description}

  ## **Table of Contents**

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Contributions](#Contributions)

  * [Testing](#Testing)

  * [Questions](#Questions)


  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **Contributions**
  Various ways you can contribute to this project, for paradigm:
  - Submit Feature/Bugs 
  - Review Code Changes 
  - Review Documentation For Errors

  ## **Testing**
  ${data.test}

  ## **Questions** 
  Should you have any inqueries RE this project please advise me: 
  - My email: ${getEmail(data.email)}
  - My GitHub username: ${getContact(data.githubusername)}


  **Awesome!** :upside_down_face:


  *Licensed under the ${data.license}.*
  
`;
};

let getLicense = (license) => {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
};

let getContact = (github) => {
  return `[${github}](https://github.com/${github})`
};

let getEmail = (email) => {
  return `${email}`
};
// Export File To Generate Index.js

module.exports = generateMarkdown;
