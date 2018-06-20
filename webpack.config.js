/*
 * https://github.com/rochars/endianness
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview webpack configuration file.
 * Three dist files are created:
 * - endianness.cjs.js, CommonJS dist for Node. No dependencies included.
 * - endianness.umd.js, UMD with dependencies included.
 * - endianness.min.js, Compiled for browsers. All dependencies included.
 */

const ClosureCompiler = require('google-closure-compiler-js').webpack;

module.exports = [
  // CommonJS dist, no dependencies in the bundle.
  // Will be the one in the "main" field of package.json.
  {
    target: 'node',
    entry: './index.js',
    output: {
      filename: './dist/endianness.cjs.js',
      libraryTarget: "commonjs"
    },
    externals: {
      'byte-data': 'byte-data',
      "alawmulaw": "alawmulaw",
      "base64-arraybuffer": "base64-arraybuffer",
      "bitdepth": "bitdepth",
      "byte-data": "byte-data",
      "imaadpcm": "imaadpcm",
      "riff-chunks": "riff-chunks"
    },
  },
  // UMD with dependencies in the bundle.
  // Will be the one in the "browser" field of package.json.
  {
    entry: './index.js',
    resolve: {
      mainFields: ['module', 'main']
    },
    output: {
      filename: './dist/endianness.umd.js',
      library: "endianness",
      libraryTarget: "umd"
    }
  },
  // Browser dist with dependencies, compiled.
  {
    entry: './index.js',
    resolve: {
      mainFields: ['module', 'main']
    },
    output: {
      filename: './dist/endianness.min.js',
      library: "endianness",
      libraryTarget: "window"
    },
    plugins: [
      new ClosureCompiler({
        options: {
          languageIn: 'ECMASCRIPT6',
          languageOut: 'ECMASCRIPT5',
          compilationLevel: 'ADVANCED',
          warningLevel: 'VERBOSE',
          exportLocalPropertyDefinitions: true,
          generateExports: true
        },
      })
    ]
  },
];
