function generateMarkdown(data) {
    return `# ${data.title}
    ![badge](https://img.shields.io/badge/license-${data.license}-informational)
  
    ## Description:
    ${data.description}
  
    ---
  
    ## Table of Contents:
    * ### [Installation](#installation)
    * ### [Usage](#usage)
    * ### [Contributors](#contributors)
    * ### [License](#license)
    * ### [Questions](#questions)
  
  ---
  
    
  ## Installation:
  #### ${data.installation}
  
  ## Usage:
  #### ${data.usage}
  ![alt text](assets/images/${data.screenshot}.PNG)
  
  ## Contributors:
  #### ${data.contributors}
  
  ## License:
  #### More on the ${data.license} license:
  [${data.license}](https://opensource.org/licenses/${data.license})
  
  ---
  
  ## Questions:
  * For any question or comments about this project, please email me at: ${data.email}
  * To see more of my projects, follow me on Github at: [${data.github}](http://github.com/${data.github})
  `;
  }
  
  module.exports = generateMarkdown;