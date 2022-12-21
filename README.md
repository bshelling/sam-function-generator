<p align="center">
  <a href="#">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/bshelling/sam-function-generator/blob/main/images/generator.png">
      <img src="https://github.com/bshelling/sam-function-generator/blob/main/images/generator.png" height="380">
    </picture>
  </a>
</p>


## AWS SAM Lambda Function Generator
A script that generates the necessary files to create a Lambda function for building serverless applications using AWS Serverless Application Model (AWS SAM) based on the `sam init` Typescript example. This doesn't include any testing configurations.

## Getting Started
```
npx aws-sam-function-generator --funcName [function-name]
```
The script creates a directory based on the function name entered. If a function name isn't provided  a random name will be provided. 

Example executes from within the project folder

```
| Root directory
|
| example-app
| - template.yml
| - examplefunction
| --|-fn
| ---- index.ts
| --|.eslintrc.js
| --|.eslintignore
| --| ..

```

![alt text](https://github.com/bshelling/sam-function-generator/blob/main/images/screenshot.png "Logo Title Text 1")


## Author
- B.Shelling ([@bshelling](https://twitter.com/bshelling))

