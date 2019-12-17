# Project base

The project was created using [create-react-app](https://github.com/facebook/create-react-app).

# 👋 Setup project

create project step by step

```git clone [https://github.com/STU-React-Team/exercise-trannamhai.git](https://github.com/STU-React-Team/source-base-cra.git)
```

```
   cd <your_project>
```

## 💻 Start

Don't forget install your dependencies first

```
  npm install
  or
  yarn
```

```
  npm start
  or
  yarn start
```

if you need change something see [create-react-app](https://github.com/facebook/create-react-app) docs.

## 🌈 ESLint + Prettier

This project contains the basic configuration to use the base airbnb rules. You'll find this inside the `.eslintrc.json` file. Feel free to change to use custom rules.

If you use VSCode, install the `eslint` and `prettier` extensions to format your code on save and get the lint errors inside the editor.

# 🚧 Project folder structure

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── modules
        └── home
        │   └── Home.jsx
        │   └── HomeActions.js
        │   └── HomeReducer.js
        └── commons
        │   └── ViewsContainer.js
    ├── store
    │   └── Store.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
```

# 📚 Libraries included

## REDUX:

- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

## ROUTER:

- [react-router](https://www.npmjs.com/package/react-router)
- [connected-react-router](https://github.com/supasate/connected-react-router)

  ## UTILS

  - [ESLint](https://eslint.org)
  - [Prettier](https://prettier.io)
  - [Airbnb Rules](https://www.npmjs.com/package/eslint-config-airbnb)

# 👉 Redux project conventions

## Reducers

### - Reducers locations

The reducers files should be located inside the `modules/[module_name]/` folders.

### - Reducers names

The file name should be created with `the name of the module (or not)` + `Reducer`.
E.g: `HomeReducer.js` inside `modules/home/HomeReducer.js`

### - Reducers tip

Always use `combineReducers` to manage little parts of the store (https://redux.js.org/api/combinereducers);

## Actions

### - Actions locations

The reducers files should be located inside the `modules/[module_name]/` folders.

### - Actions names

The file name should be created with `the name of the module (or not)` + `Actions`.
E.g: `HomeActions.js` inside `modules/home/HomeActions.js`

### - Actions tips

Create your actions using FSA standard : https://github.com/redux-utilities/flux-standard-action
Remember that you're using `redux-thunk` in this projects.

# 🛣️ Router

See the full documentation of used router in [react-router](https://www.npmjs.com/package/react-router) and [connected-react-router](https://github.com/supasate/connected-react-router).

You've a redirect example in `HomeActions.js` and `Home.jsx` files.

```
export const redirectExample = () => dispatch => {
    dispatch(push('/another'))
}
```

## All your views should be placed in commons/ViewsContainer.jsx file

```
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/another" component={Another} />
    <Route render={() => <div>DEFAULT</div>} />
  </Switch>
```
