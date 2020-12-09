const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
// Question Bank
inquirer;
const promptInfo = () => {
  return inquirer.prompt([
    {
      // Title Section

      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your project.");
          return false;
        }
      },
    },
    {
      // Description Section

      type: "input",
      name: "description",
      message: "Please provide a description of the project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a description of your project.");
          return false;
        }
      },
    },
    // {
    //    T.O.C
    // }
    {
      //Installation Section

      type: "input",
      name: "installation",
      message:
        "Please provide installation instructions or attach a helpful link/ file.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please provide installation instructions for your project."
          );
          return false;
        }
      },
    },
    {
      // Utilization Section

      type: "input",
      name: "usage",
      message:
        "Please provide instructions on how the project is meant to be used or attach a helpful link/ file.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide usage instructions for your project.");
          return false;
        }
      },
    },
    {
      // License Section

      type: "checkbox",
      name: "license",
      message: "What license would you like your project covered under?",
      choices: ["UT", "MIT", "Harvard", "Yale"],
    },
    //Contribution Section
    {
      type: "input",
      name: "test",
      message: "Please provide ways to test the project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide ways to test the project.");
          return false;
        }
      },
    },
    //Questions Section
    {
      type: "input",
      name: "email",
      message: "Please provide your contact email.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide your contact email.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "githubusername",
      message: "Please provide your GitHub username.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide your GitHub username.");
          return false;
        }
      },
    },
  ]);
};
// Function That Writes README

promptInfo().then((readmeData) => {
  console.log(readmeData);
  const pageMD = generateMarkdown(readmeData);
  writeToFile("readme.md", pageMD);
});

// Function That Syncs README
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}