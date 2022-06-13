# Frontend React-TypeScript-Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};

```

### .prettierrc

```json
{
  "parser": "typescript",
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}

```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "noImplicitAny": true,
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "jsx": "react-jsx",
    "outDir": "./dist",
    "typeRoots": [
      "./@types",
      "./node_modules/@types",
    ],
    "isolatedModules": true,
    "noEmit": true
  },
  "include": [
    "./src/**/*"
  ]
}
```

### Directory
```
src
 ├─components
 │  │  
 │  ├─atoms
 │  ├─molecules     
 │  └─organisms
 │                  
 ├─commons
 ├─hooks
 ├─network
 ├─pages 
 ├─styles
 ├─types
```
