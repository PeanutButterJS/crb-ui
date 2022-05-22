import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import gzipPlugin from 'rollup-plugin-gzip';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';

const exclude = ['node_modules', 'lib', 'src/**/*stories.tsx', 'src/**/*test.*'];
const tsConfig = { declaration: true, declarationDir: './lib', rootDir: 'src/', exclude };

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    plugins: [
      // Delete existing build files.
      del({ targets: 'lib/*' }),
      // Leave out third-party dependencies (listed under `package.json`'s `dependencies` option) from the bundled outputs. For example, this library hosts components written with React. We can assume that developers using this library will already have React imported in their applications. And so, why include React in the bundled output and add unnecessary bloat?
      /*  externals({ deps: true }), */
      peerDepsExternal(),

      // Find third-party modules within `node_modules` with any one of the following file extensions: `.js`, `.ts` and `.tsx`.
      resolve({
        extensions: ['.js', '.ts', '.tsx']
      }),
      // Convert CommonJS modules into ES modules.
      commonjs(),
      // Compile the library's code into a format that is consumable by a wider set of browsers. The library's code lives inside `.js`, `.jsx`, `.ts` and `.tsx` files. Do not compile any files from `node_modules`. The `runtime` helper makes Babel's injected helper code reusable for all modules, which greatly reduces bundle size.

      typescript(tsConfig),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      terser(),

      gzipPlugin()
    ],
    output: [
      { file: packageJson.main, format: 'cjs' },
      { sourcemap: true, dir: 'lib', preserveModules: true, format: 'esm' }
    ]
  },
  {
    input: 'lib/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
