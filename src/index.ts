#!/usr/bin/env node

import * as fs from `node:fs`
import * as buff from `node:buffer`
import { makeFileData, esbuildConfig,functionFile,pretty, esLint, tsConfig, esLintIg } from `./filesContents`

let args = process.argv

if(args[3] !== undefined){
    const fnName = args[3].toLowerCase()

    fs.mkdirSync(`${fnName}`)

    fs.mkdirSync(`${fnName}/fn`)

    fs.writeFileSync(`${fnName}/Makefile`,makeFileData(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/build.config.js`,esbuildConfig(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/fn/index.ts`,functionFile(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/.prettierrc.js`,pretty(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/.eslintrc.js`,esLint(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/.eslintignore`,esLintIg(),{
        "encoding": "utf-8"
    })

    fs.writeFileSync(`${fnName}/tsconfig.json`,tsConfig(),{
        "encoding": "utf-8"
    })


}
else{
    console.log("A function name is required please try again \nExample: 'npx gen-sam-func --funcName example' ")
}

