# Team Profile Generator

## Description

This Team Profile Generator task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Also alllows a unit test for every part of the code and ensure that it passes each test.


---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

---

## Installation

1. Open command line to root folder.

2. `npm i` &nbsp; to install dependencies.

3. `npm start` &nbsp; to run the application.


---

## Usage

When the app starts, it will prompt the user for the name, ID, email address, and office number of the Team Manager. After answers are given for these prompts, the user is given the choice to either add an engineer, add an intern, or finish building the team.

Choosing to add an engineer will prompt the user for the name, ID, email address, and GitHub username of the engineer that is being added. Choosing to add an intern will bring up the same prompts but instead of a GitHub username, the application asks for the name of the school that the intern attended.

As many engineers and interns as needed can be added before choosing "Finish building team". When this is selected, an HTML file will be generated and placed in the "dist" directory of the root folder. This page shows the team members' profiles in neatly arranged cards.


## Example
 Video of working project
<iframe src="https://drive.google.com/file/d/1AY8Vadr6ModTXJ2kk_BfwF6pRHQqzJp5/preview" width="640" height="480"></iframe>
---

## Contributors


---

## Tests

This application comes with tests (by way of the Jest npm package) for each respective class model and extension (Employee, Manager, Engineer, and Intern).

To run the tests, execute the command &nbsp; `npm run test`.


---

## License

MIT License

Copyright &copy; 2022 Raymond Estrada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Questions

If you have questions, contact me on [GitHub](https://github.com/raymondjestrada)
