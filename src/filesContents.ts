export const makeFileData = (args) => {
    return `
build-${args}:
cp -a dist/* "$(ARTIFACTS_DIR)"
    `    
}

export const esbuildConfig = () => {
    return `import {build} from 'esbuild'

build({
        target: "es2020",
        format: "cjs",
        platform: "node",
        minify: true,
        entryPoints: ["fn/index.ts"],
        bundle: true,
        outfile: "dist",
        loader: {".ts":"ts"}
    }).then(() => {
        console.log("Done")
})
`    
}


export const functionFile = () => {

    return `import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (event: APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
        try {

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'hello world',
                }),
            };

        } catch (err) {

            console.log(err);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'some error happened',
                }),
            };

        }
};
`
}


export const pretty = () => {

    return `
module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4
};
`
}


export const esLint = () => {
  return `module.exports = {
parser: "@typescript-eslint/parser",
    parserOptions: {
          ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
          sourceType: "module" 
    },
        extends: [
          "plugin:@typescript-eslint/recommended", // recommended rules from the @typescript-eslint/eslint-plugin
          "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        ],
        rules: {
          // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
          // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        }
      };`;
};

export const esLintIg = () => {
    return `node_modules
.aws-sam`
}


export const tsConfig = () => {

    return `{
"compilerOptions": {
    "target": "es2020",
    "strict": true,
    "preserveConstEnums": true,
    "noEmit": true,
    "sourceMap": false,
    "module":"es2015",
    "moduleResolution":"node",
    "esModuleInterop": true, 
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,  
    },
    "exclude": ["node_modules", "**/*.test.ts"]
}`
}