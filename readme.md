# read-file-json


<a href="https://raw.githubusercontent.com/jaid/read-file-json/master/license.txt"><img src="https://img.shields.io/github/license/jaid/read-file-json?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor read-file-json"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/read-file-json/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fread-file-json%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/read-file-json/commits"><img src="https://img.shields.io/github/commits-since/jaid/read-file-json/v1.0.2?style=flat-square&logo=github" alt="Commits since v1.0.2"/></a> <a href="https://github.com/jaid/read-file-json/commits"><img src="https://img.shields.io/github/last-commit/jaid/read-file-json?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/read-file-json/issues"><img src="https://img.shields.io/github/issues/jaid/read-file-json?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/npm/v/read-file-json?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/read-file-json/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/read-file-json?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/npm/dm/read-file-json?style=flat-square&logo=npm" alt="Downloads"/></a>

**Reads JSON and JSON5 from a file. Returns null if file does not exist (or is a directory) instead of throwing an Error.**





## Installation

<a href="https://npmjs.com/package/read-file-json"><img src="https://img.shields.io/badge/npm-read--file--json-C23039?style=flat-square&logo=npm" alt="read-file-json on npm"/></a>

```bash
npm install --save read-file-json@^1.0.2
```

<a href="https://yarnpkg.com/package/read-file-json"><img src="https://img.shields.io/badge/Yarn-read--file--json-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="read-file-json on Yarn"/></a>

```bash
yarn add read-file-json@^1.0.2
```

<a href="https://github.com/jaid/read-file-json/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/read--file--json-24282e?style=flat-square&logo=github" alt="@jaid/read-file-json on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/read-file-json@^1.0.2
```



## Example


```javascript
import readFileJson from "read-file-json"

readFileJson("./exists.json5").then(result => {

})

readFileJson("./doesNotExist.json5").then(result2 => {

})
```

Variable `result` will be:

```javascript
["a", "b", "c"]
```
Variable `result2` will be:

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
[MIT License](https://raw.githubusercontent.com/jaid/read-file-json/master/license.txt)  
Copyright © 2021, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
