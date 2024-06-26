

```markdown
# Project: 0x01. ES6 Promises

![ES6-Promises](./main_files/es6-promises.jpeg)

Here's how you can format the README.md to display active links without using code blocks:

## Resources

### Texts:-

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

These links will appear as active texts that can be clicked to navigate to the respective resources. If you have any more formatting preferences or other requests, feel free to let me know!

## Resources

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

These links will appear as active texts that can be clicked to navigate to the respective resources. If you have any more formatting preferences or other requests, feel free to let me know!
## Project Setup

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify NodeJS and npm versions:-

```bash
nodejs -v
npm -v
```

### Install Jest, Babel, and ESLint

Run the following command in your project directory to install `Jest`, `Babel`, and `ESLint`:

```bash
npm install
```

## Configuration Files

### `package.json`

<details>
<summary>Click to show/hide file contents</summary>

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

</details>

### `babel.config.js`

<details>
<summary>Click to show/hide file contents</summary>

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

</details>

### `utils.js`

<details>
<summary>Click to show/hide file contents</summary>

```js
export function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

</details>

### `.eslintrc.js`

<details>
<summary>Click to show/hide file contents</summary>

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

</details>

- Don't forget to run npm install to install the dependencies specified in package.json.

## Response Data Format

`uploadPhoto` returns a promise rejecting with an error:

```json
{
  "error": "filename cannot be processed"
}
```

`createUser` returns a response with the format:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Tasks

0. [Keep every promise you make and only make promises you can keep](./0-promise.js) :

Return a Promise using this prototype function getResponseFromAPI()

```bash
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

1. [Don't make a promise...if you know you can't keep it](./1-promise.js) :

Using the prototype below, return a promise. The parameter is a boolean.

```bash
getFullResponseFromAPI(success)
```

- When the argument is:
  - true
    - resolve the promise by passing an object with 2 attributes:
      - `status`: `200`
      - `body`: `'Success'`

  - false
    - reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself

```bash
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

2. [Catch me if you can!](./2-then.js) :

Using the function prototype below

```bash
function handleResponseFromAPI(promise)
```

Append three handlers to the function:

- When the Promise resolves, return an object with the following attributes
  - `status`: `200`
  - `body`: `success`

- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console

```bash
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ 
```

3. [Handle multiple successful promises](./3-all.js) :

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```bash
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

```bash
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```

4. [Simple promise](./4-user-promise.js) :

Using the following prototype

```bash
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:

```bash
{
  firstName: value,
  lastName: value,
}
```

```bash
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$ 
```

5. [Reject the promises](./5-photo-reject.js) :

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

```bash
export default function uploadPhoto(filename) {

}
```

```bash
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$ 
```

6. [Handle multiple promises](./6-final-user.js) :

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```bash
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
