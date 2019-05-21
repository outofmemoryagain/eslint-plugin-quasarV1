# eslint-plugin-quasarv1

ESLint plugin to assist with the conversion of a Quasar Framework V0.17 to to V1.0 project

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-quasarv1`:

```
$ npm install eslint-plugin-quasarv1 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-quasarv1` globally.

## Usage

Add `quasarv1` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "quasarv1"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "quasarv1/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





