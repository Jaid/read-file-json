# read-file-json


<a href="https://raw.githubusercontent.com/jaid/read-file-json/master/license.txt"><img src="https://img.shields.io/github/license/jaid/read-file-json?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor read-file-json"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/read-file-json/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fread-file-json%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/read-file-json/commits"><img src="https://img.shields.io/github/commits-since/jaid/read-file-json/v1.0.1?style=flat-square&logo=github" alt="Commits since v1.0.1"/></a> <a href="https://github.com/jaid/read-file-json/commits"><img src="https://img.shields.io/github/last-commit/jaid/read-file-json?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/read-file-json/issues"><img src="https://img.shields.io/github/issues/jaid/read-file-json?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/npm/v/read-file-json?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/read-file-json/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/read-file-json?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/npm/dm/read-file-json?style=flat-square&logo=npm" alt="Downloads"/></a>

**Reads JSON and JSON5 from a file. Returns null if file does not exist (or is a directory) instead of throwing an Error.**





## Installation

<a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/badge/npm-read--file--json-C23039?style=flat-square&logo=npm" alt="read-file-json on npm"/></a>

```bash
npm install --save read-file-json@^1.0.1
```

<a href="https://yarnpkg.com/package/read-file-json"><img src="https://img.shields.io/badge/Yarn-read--file--json-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="read-file-json on Yarn"/></a>

```bash
yarn add read-file-json@^1.0.1
```

<a href="https://github.com/jaid/read-file-json/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/read--file--json-24282e?style=flat-square&logo=github" alt="@jaid/read-file-json on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/read-file-json@^1.0.1
```



## Example

```javascript
import readFileJson from "read-file-json"

readFileJson("./doesNotExist.json5").then(result => {

})
```

Variable `result` will now be:

```javascript
null
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/read-file-json.git
cd read-file-json
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
```
