export const makeFileData = (args) => {
  return `
build-${args[3].toUpperCase()}:
\tcp -a dist/* "$(ARTIFACTS_DIR)/"
`;
};

export const esbuildConfig = () => {
  return `import {build} from 'esbuild'

build({
		target: "es2022",
        format: "cjs",
        platform: "node",
        minify: true,
        entryPoints: ["fn/index.ts"],
        bundle: true,
		outdir: 'dist',
		assetNames: "[name]",
        loader: {".ts":"ts"},
		outExtension: {'.js':'.cjs'}
    }).then(() => {
        console.log("Done")
})
`;
};

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
`;
};

export const pretty = () => {
  return `
module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4
};
`;
};

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
.aws-sam`;
};

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
}`;
};

export const pkgJson = () => {
  return `{
        "scripts": {
          "build": "node build.config.js"
        },
        "type": "module",
        "author": "",
        "license": "ISC",
        "dependencies": {
          "@aws-sdk/client-dynamodb": "^3.235.0",
          "aws-lambda": "^1.0.7",
          "aws-sdk": "^2.1279.0",
          "esbuild": "^0.16.10",
          "eslint-import-resolver-typescript": "^3.5.2"
        },
        "devDependencies": {
          "@aws-sdk/types": "^3.226.0",
          "@types/aws-lambda": "^8.10.109",
          "typescript": "^4.9.4"
        }
      }`;
};
