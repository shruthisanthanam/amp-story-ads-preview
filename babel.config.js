/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const localBabelPlugin = plugin => `./lib/babel/babel-plugin-${plugin}`;

export default {
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
    // ['template-html-minifier', {htmlMinifier, modules: {'lit-html': ['html']}}],
    // // TODO: uncomment this line when normalize licenses plugin is added.
    // local('normalize-licenses'),
    // // =======
    // //     //local('normalize-licenses'),
    // // >>>>>>> Stashed changes
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        exclude: ['@babel/plugin-transform-template-literals'],
        // Browser support policy similar to @ampproject/amphtml's
        targets: {browsers: 'last 2 years and > 1%'},
      },
    ],
  ],
};
