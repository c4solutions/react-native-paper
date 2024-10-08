module.exports = [
  (function () {
    var e = require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/0.index.js");
    var c = e.__esModule ? e.default : e;
    var m = c.meta || {};
    return {
      title: m.title || "Home",
      path: m.permalink || "index",
      description: m.description,
      type: "custom",
      data: c,
    };
  })(),
  (function () {
    var e = require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/1.showcase.js");
    var c = e.__esModule ? e.default : e;
    var m = c.meta || {};
    return {
      title: m.title || "Showcase",
      path: m.permalink || "showcase",
      description: m.description,
      type: "custom",
      data: c,
    };
  })(),
  {
    title: "Getting Started",
    description: "",
    path: "getting-started",
    data: "\n## Installation\n\nOpen a Terminal in your project's folder and run,\n\n```sh\nyarn add react-native-paper\n```\n\nIf you're on a vanilla React Native project, you also need to install and link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).\n\n```sh\nyarn add react-native-vector-icons\nreact-native link react-native-vector-icons\n```\n\nIf you don't want to install vector icons, you can use [babel-plugin-optional-require](https://github.com/satya164/babel-plugin-optional-require) to opt-out.\n\nIf you use CRNA or Expo, you don't need to install vector icons. But you will need to make sure that your `.babelrc` includes `babel-preset-expo`:\n\n```json\n{\n  \"presets\": [\"babel-preset-expo\"]\n}\n```\n\nTo get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add `react-native-paper/babel` to the `plugins` section in your `.babelrc` for production environment. It should look like this:\n\n```json\n{\n  \"presets\": [\"babel-preset-react-native\"],\n  \"env\": {\n    \"production\": {\n      \"plugins\": [\"react-native-paper/babel\"]\n    }\n  }\n}\n```\n\nIf you created your project using CRNA or Expo, it'll look something like this:\n\n```json\n{\n  \"presets\": [\"babel-preset-expo\"],\n  \"env\": {\n    \"development\": {\n      \"plugins\": [\"transform-react-jsx-source\"]\n    },\n    \"production\": {\n      \"plugins\": [\"react-native-paper/babel\"]\n    }\n  }\n}\n```\n\n**Note:** The plugin only works if you are importing the library using ES2015 import statements and not with `require`.\n\nIf you're using Flow for typechecking your code, you need to add the following under the `[options]` section in your `.flowconfig`:\n\n```ini\nmodule.file_ext=.js\nmodule.file_ext=.android.js\nmodule.file_ext=.ios.js\n```\n\n## Usage\n\nWrap your root component in `Provider` from `react-native-paper`. If you have a vanilla React Native project, it's a good idea to add it in the component which is passed to `AppRegistry.registerComponent`. This will usually be in the `index.js` file. If you have a CRNA or Expo project, you can do this inside the exported component in the `App.js` file.\n\nExample:\n\n```js\nimport * as React from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n\nAppRegistry.registerComponent('main', () => Main);\n```\n\nThe `PaperProvider` component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.\n\nIf you have another provider (such as `Redux`), wrap it outside `PaperProvider` so that the context is available to components rendered inside a `Modal` from the library:\n\n```js\nimport * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport { Provider as StoreProvider } from 'react-redux';\nimport App from './src/App';\nimport store from './store';\n\nexport default function Main() {\n  return (\n    <StoreProvider store={store}>\n      <PaperProvider>\n        <App />\n      </PaperProvider>\n    </StoreProvider>\n  );\n}\n```\n\n## Customization\n\nYou can provide a custom theme to customize the colors, fonts etc. with the `Provider` component. Check the [default theme](https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.js) to see what customization options are supported.\n\nExample:\n\n```js\nimport * as React from 'react';\nimport { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  colors: {\n    ...DefaultTheme.colors,\n    primary: 'tomato',\n    accent: 'yellow',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n",
    type: "markdown",
  },
  {
    title: "Theming",
    description: "",
    path: "theming",
    data: "\n## Applying a theme to the whole app\n\nTo support custom themes, paper exports a `Provider` component. You need to wrap your root component with the provider to be able to support themes.\n\n```js\nimport * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n\nIf no prop is specified, this will apply the [default theme](https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.js) to the components. You can also provide a `theme` prop with a theme object with same properties as the default theme:\n\n```js\nimport * as React from 'react';\nimport { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  roundness: 2,\n  colors: {\n    ...DefaultTheme.colors,\n    primary: '#3498db',\n    accent: '#f1c40f',\n  }\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n\nYou can change the theme prop dynamically and all the components will automatically update to reflect the new theme.\n\nA theme usually contains the following properties:\n\n- `dark` (`boolean`): whether this is a dark theme or light theme.\n- `roundness` (`number`): roundness of common elements, such as buttons.\n- `colors` (`object`): various colors used throught different elements.\n  - `primary` - primary color for your app, usually your brand color.\n  - `accent` - secondary color for your app which complements the primary color.\n  - `background` - background color for pages, such as lists.\n  - `paper` - background color for elements containing content, such as cards.\n  - `text` - text color for content.\n  - `disabled` - color for disabled elements.\n  - `placeholder` - color for placeholder text, such as input placeholder.\n- `fonts` (`object`): various fonts used throught different elements.\n  - `regular`\n  - `medium`\n  - `light`\n  - `thin`\n\nWhen creating a custom theme, you will need to provide all of these properties.\n\n## Applying a theme to a paper component\n\nIf you want to change the theme for a certain component from the library, you can directly pass the `theme` prop to the component. The theme passed as the prop is merged with the theme from the `Provider`.\n\n```js\nimport * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function ButtonExample() {\n  return (\n    <Button raised theme={{ roundness: 3 }}>\n      Press me\n    </Button>\n  );\n}\n```\n\n## Using the theme in your own components\n\nTo access the theme in your own components, you can use the `withTheme` HOC exported from the library. If you wrap your component with the HOC, you'll receive the theme as a prop.\n\n```js\nimport * as React from 'react';\nimport { withTheme } from 'react-native-paper';\n\nfunction MyComponent(props) {\n  const { colors } = props.theme;\n  return <Text style={{ color: colors.primary }}>Yo!</Text>;\n}\n\nexport default withTheme(MyComponent);\n```\n\nComponents wrapped with `withTheme` support the theme from the `Provider` as well as from the `theme` prop.\n\n## Customizing all instances of a component\n\nSometimes you want to style a component in a different way everywhere and don't want to change the properties in the theme so that other components are not affected. For example, say you want to change the font for all your buttons, but don't want to change `theme.fonts.medium` because it affects other components.\n\nWe don't have an API to do this, because you can already do it with components:\n\n```js\nimport * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function FancyButton(props) {\n  return <Button theme={{ fonts: { medium: 'Open Sans' } }} {...props} />;\n}\n```\n\nNow you can use your `FancyButton` component everywhere instead of using `Button` from Paper.\n\n## Gotchas\n\nThe `Provider` exposes the theme to the components via [React's context API](https://reactjs.org/docs/context.html), which means that the component must be in the same tree as the `Provider`. Some React Native components will render a different tree such as a `Modal`, in which case the components inside the `Modal` won't be able to access the theme. The work around is to get the theme using the `withTheme` HOC and pass it down to the components as props, or expose it again with the exported `ThemeProvider` component.\n\nThe `Modal` component from the library already handles this edge case, so you won't need to do anything.\n",
    type: "markdown",
  },
  {
    title: "Icons",
    description: "",
    path: "icons",
    data: "\n## Configuring icons\n\nMany of the components require the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library to render correctly. If you're using CRNA or Expo, you don't need to do anything extra, but if it's vanilla React Native project, you need link the library as described in the getting started guide.\n\nIf you opted out of vector icons support using [babel-plugin-optional-require](https://github.com/satya164/babel-plugin-optional-require), you won't be able to use icon names for the icon prop anymore. Some components may not look correct without vector icons and might need extra configuration.\n\n## Using the `icon` prop\n\nMany components such as `Button` accept an `icon` prop which is used to display an icon. The `icon` prop supports the following type of values:\n\n### 1. An icon name\n\nYou can pass the name of an icon from [`MaterialIcon`](https://material.io/icons/). This will use the [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons) library to display the icon.\n\nExample:\n\n```js\n<Button icon=\"add-a-photo\">\n  Press me\n</Button>\n```\n\n### 2. An image source\n\nYou can pass an image source, such as an object of shape `{ uri: 'https://path.to' }` or a local image: `require('../path/to/image.png')` to use as an icon. The image might be rendered with a different color than the one provided depending on the component. If don't want this behavior, see the next example to pass an `Image` element.\n\nRemote image:\n\n```js\n<Button icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}>\n  Press me\n</Button>\n```\n\nLocal image:\n\n```js\n<Button icon={require('../assets/chameleon.jpg')}>\n  Press me\n</Button>\n```\n\n### 3. A render function\n\nYou can pass a function which returns a react element to be used an icon. The function receives an object with `size` and `color` properties as it's argument. element is used as is without any modification. However, it might get clipped if the provided element's size are bigger than what the component renders. It's upto you to make sure that the size of the element is correct.\n\nExample:\n\n```js\n<Button\n  icon={({ size, color }) => (\n    <Image\n      source={require('../assets/chameleon.jpg')}\n      style={{ width: size, height: size, tintColor: color }}\n    />\n  )}\n>\n  Press me\n</Button>\n```\n",
    type: "markdown",
  },
  {
    title: "Contributing",
    description: "",
    path: "contributing",
    data: "\n# Contributing to React Native Paper\n\n## [Code of Conduct](/CODE_OF_CONDUCT.md)\n\nWe want this community to be friendly and respectful to each other. Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.\n\n## Our Development Process\n\nThe core team works directly on GitHub and all work is public.\n\n### Development workflow\n\n> **Working on your first pull request?** You can learn how from this *free* series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).\n\n1. Fork the repo and create your branch from `master` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).\n2. Run `yarn bootstrap` to setup the developement environment.\n3. Do the changes you want and test them out in the example app before sending a pull request.\n\n### Commit message convention\n\nWe prefix our commit messages with one of the following to signify the kind of change:\n\n* `fix`: bug fixes, e.g. fix Button color on DarkTheme.\n* `feat`: new features, e.g. add Snackbar component.\n* `refactor`: code/structure refactor, e.g. new structure folder for components.\n* `docs`: changes into documentation, e.g. add usage example for Button.\n* `test`: adding or updating tests, eg unit, snapshot testing.\n* `chore`: tooling changes, e.g. change circle ci config.\n* `BREAKING`: for changes that break existing usage, e.g. change API of a component.\n\nOur pre-commit hooks verify that your commit message matches this format when committing.\n\n### Linting and tests\n\nWe use `flow` for type checking, `eslint` with `prettier` for linting and formatting the code, and `jest` for testing. Our pre-commit hooks verify that the linter and tests pass when commiting. You can also run the following commands manually:\n\n* `yarn flow`: run flow on all files.\n* `yarn lint`: run eslint and prettier.\n* `yarn test`: run tests.\n\n### Sending a pull request\n\nWhen you're sending a pull request:\n\n* Prefer small pull requests focused on one change.\n* Verify that `flow`, `eslint` and tests are passing.\n* Preview the documentation to make sure it looks good.\n* Follow the pull request template when opening a pull request.\n\nWhen you're working on a component:\n\n* Follow the guidelines described in the [official material design docs](https://material.io/guidelines/).\n* Write a brief description of every prop when defining `type Props` to aid with documentation.\n* Provide an example usage for the component (check other components to get a idea).\n\n### Running the example\n\nThe example app uses [Expo](https://expo.io/). You will need to install the Expo app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://itunes.apple.com/app/apple-store/id982107779) to start developing.\n\nAfter you're done, you can run `yarn start` in the `example/` folder and scan the QR code to launch it on your device.\n\n### Working on documentation\n\nThe documentation is automatically generated from the [flowtype](https://flowtype.org) annotations in the components. You can add comments above the type annotations to add descriptions. To preview the generated documentation, run `yarn start` in the `docs/` folder.\n\n## Reporting issues\n\nYou can report issues on our [bug tracker](https://github.com/callstack/react-native-paper/issues). Please follow the issue template when opening an issue.\n\n## Get in touch\n\n* Callstack Open Source Slack - [#react-native-paper](https://slack.callstack.io/).\n\n## License\n\nBy contributing to React Native Paper, you agree that your contributions will be licensed under its **MIT** license.\n\n",
    type: "markdown",
  },
  { type: "separator" },
  {
    title: "BottomNavigation",
    description:
      "Bottom navigation provides quick navigation between top-level views of an app with a bottom tab bar.\nIt is primarily designed for use on mobile.\n\nFor integration with React Navigation, you can use [react-navigation-material-bottom-tab-navigator](https://github.com/react-navigation/react-navigation-material-bottom-tab-navigator).\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/bottom-navigation.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { BottomNavigation } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    index: 0,\n    routes: [\n      { key: 'music', title: 'Music', icon: 'queue-music' },\n      { key: 'albums', title: 'Albums', icon: 'album' },\n      { key: 'recents', title: 'Recents', icon: 'history' },\n    ],\n  };\n\n  _handleIndexChange = index => this.setState({ index });\n\n  _renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n  });\n\n  render() {\n    return (\n      <BottomNavigation\n        navigationState={this.state}\n        onIndexChange={this._handleIndexChange}\n        renderScene={this._renderScene}\n      />\n    );\n  }\n}\n```",
    path: "bottom-navigation",
    data: {
      description:
        "Bottom navigation provides quick navigation between top-level views of an app with a bottom tab bar.\nIt is primarily designed for use on mobile.\n\nFor integration with React Navigation, you can use [react-navigation-material-bottom-tab-navigator](https://github.com/react-navigation/react-navigation-material-bottom-tab-navigator).\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/bottom-navigation.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { BottomNavigation } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    index: 0,\n    routes: [\n      { key: 'music', title: 'Music', icon: 'queue-music' },\n      { key: 'albums', title: 'Albums', icon: 'album' },\n      { key: 'recents', title: 'Recents', icon: 'history' },\n    ],\n  };\n\n  _handleIndexChange = index => this.setState({ index });\n\n  _renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n  });\n\n  render() {\n    return (\n      <BottomNavigation\n        navigationState={this.state}\n        onIndexChange={this._handleIndexChange}\n        renderScene={this._renderScene}\n      />\n    );\n  }\n}\n```",
      displayName: "BottomNavigation",
      methods: [
        {
          name: "SceneMap",
          docblock:
            "Function which takes a map of route keys to components.\nPure components are used to minmize re-rendering of the pages.\nThis drastically improves the animation performance.",
          modifiers: ["static"],
          params: [
            {
              name: "scenes",
              type: {
                name: "signature",
                type: "object",
                raw: "{\n  [key: string]: React.ComponentType<{\n    route: T,\n    jumpTo: (key: string) => mixed,\n  }>,\n}",
                signature: {
                  properties: [
                    {
                      key: { name: "string" },
                      value: {
                        name: "ReactComponentType",
                        raw: "React.ComponentType<{\n  route: T,\n  jumpTo: (key: string) => mixed,\n}>",
                        elements: [
                          {
                            name: "signature",
                            type: "object",
                            raw: "{\n  route: T,\n  jumpTo: (key: string) => mixed,\n}",
                            signature: {
                              properties: [
                                {
                                  key: "route",
                                  value: { name: "T", required: true },
                                },
                                {
                                  key: "jumpTo",
                                  value: {
                                    name: "signature",
                                    type: "function",
                                    raw: "(key: string) => mixed",
                                    signature: {
                                      arguments: [
                                        {
                                          name: "key",
                                          type: { name: "string" },
                                        },
                                      ],
                                      return: { name: "mixed" },
                                    },
                                    required: true,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        required: true,
                      },
                    },
                  ],
                },
              },
            },
          ],
          returns: null,
          description:
            "Function which takes a map of route keys to components.\nPure components are used to minmize re-rendering of the pages.\nThis drastically improves the animation performance.",
        },
        {
          name: "getDerivedStateFromProps",
          docblock: null,
          modifiers: ["static"],
          params: [
            { name: "nextProps", type: null },
            { name: "prevState", type: null },
          ],
          returns: null,
        },
        {
          name: "_handleLayout",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
          returns: null,
        },
        {
          name: "_handleTabPress",
          docblock: null,
          modifiers: [],
          params: [{ name: "index", type: { name: "number" } }],
          returns: null,
        },
        {
          name: "_jumpTo",
          docblock: null,
          modifiers: [],
          params: [{ name: "key", type: { name: "string" } }],
          returns: null,
        },
      ],
      statics: [],
      props: {
        shifting: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label.\nBy default, this is `true` when you have more than 3 tabs.",
        },
        navigationState: {
          flowType: {
            name: "NavigationState",
            elements: [{ name: "T" }],
            raw: "NavigationState<T>",
          },
          required: true,
          description:
            "State for the bottom navigation. The state should contain the following properties:\n\n- `index`: a number reprsenting the index of the active route in the `routes` array\n- `routes`: an array containing a list of route objects used for rendering the tabs\n\nEach route object should contain the following properties:\n\n- `key`: a unique key to identify the route (required)\n- `title`: title of the route to use as the tab label\n- `icon`: icon to use as the tab icon, can be a string, an image source or a react component\n- `color`: color to use as background color for shifting bottom navigation\n\nExample:\n\n```js\n{\n  index: 1,\n  routes: [\n    { key: 'music', title: 'Music', icon: 'queue-music', color: '#3F51B5' },\n    { key: 'albums', title: 'Albums', icon: 'album', color: '#009688' },\n    { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },\n    { key: 'purchased', title: 'Purchased', icon: 'shopping-cart', color: '#607D8B' },\n  ]\n}\n```\n\n`BottomNavigation` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback.",
        },
        onIndexChange: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(index: number) => mixed",
            signature: {
              arguments: [{ name: "index", type: { name: "number" } }],
              return: { name: "mixed" },
            },
          },
          required: true,
          description:
            "Callback which is called on tab change, receives the index of the new tab as argument.\nThe navigation state needs to be updated when it's called, otherwise the change is dropped.",
        },
        renderScene: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: {\n  route: T,\n  jumpTo: (key: string) => mixed,\n}) => ?React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{\n  route: T,\n  jumpTo: (key: string) => mixed,\n}",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                        {
                          key: "jumpTo",
                          value: {
                            name: "signature",
                            type: "function",
                            raw: "(key: string) => mixed",
                            signature: {
                              arguments: [
                                { name: "key", type: { name: "string" } },
                              ],
                              return: { name: "mixed" },
                            },
                            required: true,
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node", nullable: true },
            },
          },
          required: true,
          description:
            "Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:\n\n```js\nrenderScene = ({ route, jumpTo }) => {\n  switch (route.key) {\n    case 'music':\n      return <MusicRoute jumpTo={jumpTo} />;\n    case 'albums':\n      return <AlbumsRoute jumpTo={jumpTo} />;\n  }\n}\n```\n\nPages are lazily rendered, which means that a page will be rendered the first time you navigate to it.\nAfter initial render, all the pages stay rendered to preserve their state.\n\nYou need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance.\nTo make it easier to specify the components, you can use the `SceneMap` helper:\n\n```js\nrenderScene = BottomNavigation.SceneMap({\n  music: MusicRoute,\n  albums: AlbumsRoute,\n});\n```\n\nSpecifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.\nEach component will receive the current route and a `jumpTo` method as it's props.\nThe `jumpTo` method can be used to navigate to other tabs programmatically:\n\n```js\nthis.props.jumpTo('albums')\n```",
        },
        renderIcon: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: {\n  route: T,\n  focused: boolean,\n  tintColor: string,\n}) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{\n  route: T,\n  focused: boolean,\n  tintColor: string,\n}",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                        {
                          key: "focused",
                          value: { name: "boolean", required: true },
                        },
                        {
                          key: "tintColor",
                          value: { name: "string", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          required: false,
          description:
            "Callback which returns a React Element to be used as tab icon.",
        },
        renderLabel: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: {\n  route: T,\n  focused: boolean,\n  tintColor: string,\n}) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{\n  route: T,\n  focused: boolean,\n  tintColor: string,\n}",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                        {
                          key: "focused",
                          value: { name: "boolean", required: true },
                        },
                        {
                          key: "tintColor",
                          value: { name: "string", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          required: false,
          description: "Callback which React Element to be used as tab label.",
        },
        getLabelText: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => string",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ route: T }",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                      ],
                    },
                  },
                },
              ],
              return: { name: "string" },
            },
          },
          required: false,
          description:
            "Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component.",
        },
        getAccessibilityLabel: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => ?string",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ route: T }",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                      ],
                    },
                  },
                },
              ],
              return: { name: "string", nullable: true },
            },
          },
          required: false,
          description:
            "Get accessibility label for the tab button. This is read by the screen reader when the user taps the tab.\nThe label for the tab is used as the accessibility label by default.",
        },
        getTestID: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => ?string",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ route: T }",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                      ],
                    },
                  },
                },
              ],
              return: { name: "string", nullable: true },
            },
          },
          required: false,
          description: "Get the id to locate this tab button in tests.",
        },
        getColor: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => string",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ route: T }",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                      ],
                    },
                  },
                },
              ],
              return: { name: "string" },
            },
          },
          required: false,
          description: "Get color for the tab, uses `route.color` by default.",
        },
        onTabPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => mixed",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ route: T }",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                      ],
                    },
                  },
                },
              ],
              return: { name: "mixed" },
            },
          },
          required: false,
          description:
            "Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top.",
        },
        barStyle: {
          flowType: { name: "any" },
          required: false,
          description:
            "Style for the bottom navigation bar.\nYou can set a bottom padding here if you have a translucent navigation bar on Android:\n\n```js\nbarStyle={{ paddingBottom: 48 }}\n```",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Button",
    description:
      'A button is component that the user can press to trigger an action.\n\n<div class="screenshots">\n  <img src="screenshots/button-1.png" />\n  <img src="screenshots/button-2.png" />\n  <img src="screenshots/button-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Button } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Button raised onPress={() => console.log(\'Pressed\')}>\n    Press me\n  </Button>\n);\n```',
    path: "button",
    data: {
      description:
        'A button is component that the user can press to trigger an action.\n\n<div class="screenshots">\n  <img src="screenshots/button-1.png" />\n  <img src="screenshots/button-2.png" />\n  <img src="screenshots/button-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Button } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Button raised onPress={() => console.log(\'Pressed\')}>\n    Press me\n  </Button>\n);\n```',
      displayName: "Button",
      methods: [
        {
          name: "_handlePressIn",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handlePressOut",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        compact: {
          flowType: { name: "boolean" },
          required: false,
          description: "Use a compact look, useful for flat buttons in a row.",
        },
        raised: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Add elevation to button, as opposed to default flat appearance. Typically used on a flat surface.",
        },
        primary: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Use to primary color from theme. Typically used to emphasize an action.",
        },
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Text color of button, a dark button will render light text and vice-versa.",
        },
        loading: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to show a loading indicator.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: false,
          description: "Icon to display for the `Button`.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description:
            "Custom text color for flat button, or background color for raised button.",
        },
        children: {
          flowType: {
            name: "union",
            raw: "string | Array<string>",
            elements: [
              { name: "string" },
              {
                name: "Array",
                elements: [{ name: "string" }],
                raw: "Array<string>",
              },
            ],
          },
          required: true,
          description: "Label text of the button.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Caption",
    description:
      "Typography component for showing a caption.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/caption.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Caption } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Caption>Caption</Caption>\n);\n```",
    path: "caption",
    data: {
      description:
        "Typography component for showing a caption.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/caption.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Caption } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Caption>Caption</Caption>\n);\n```",
      methods: [],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "Card",
    description:
      'A card is a sheet of material that serves as an entry point to more detailed information.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-1.png" />\n  <img class="medium" src="screenshots/card-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport {\n  Button,\n  Card,\n  CardActions,\n  CardContent,\n  CardCover,\n  Title,\n  Paragraph\n} from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card>\n    <CardContent>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </CardContent>\n    <CardCover source={{ uri: \'https://picsum.photos/700\' }} />\n    <CardActions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </CardActions>\n  </Card>\n);\n```',
    path: "card",
    data: {
      description:
        'A card is a sheet of material that serves as an entry point to more detailed information.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-1.png" />\n  <img class="medium" src="screenshots/card-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport {\n  Button,\n  Card,\n  CardActions,\n  CardContent,\n  CardCover,\n  Title,\n  Paragraph\n} from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card>\n    <CardContent>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </CardContent>\n    <CardCover source={{ uri: \'https://picsum.photos/700\' }} />\n    <CardActions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </CardActions>\n  </Card>\n);\n```',
      displayName: "Card",
      methods: [
        {
          name: "_handlePressIn",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handlePressOut",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        elevation: {
          flowType: { name: "number" },
          required: false,
          description:
            "Resting elevation of the card which controls the drop shadow.",
          defaultValue: { value: "2", computed: false },
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `Card`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "CardActions",
    description:
      "A component to show a list of actions inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Card, CardActions } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardActions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </CardActions>\n  </Card>\n);\n```",
    path: "card-actions",
    data: {
      description:
        "A component to show a list of actions inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Card, CardActions } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardActions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </CardActions>\n  </Card>\n);\n```",
      displayName: "CardActions",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `CardActions`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "CardContent",
    description:
      "A component to show content inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, CardContent, Title, Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardContent>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </CardContent>\n  </Card>\n);\n```",
    path: "card-content",
    data: {
      description:
        "A component to show content inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, CardContent, Title, Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardContent>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </CardContent>\n  </Card>\n);\n```",
      displayName: "CardContent",
      methods: [],
      statics: [],
      props: {
        index: {
          flowType: { name: "number" },
          required: false,
          description: "@internal",
        },
        total: {
          flowType: { name: "number" },
          required: false,
          description: "@internal",
        },
        siblings: {
          flowType: {
            name: "Array",
            elements: [{ name: "string" }],
            raw: "Array<string>",
          },
          required: false,
          description: "@internal",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "CardCover",
    description:
      "A component to show a cover image inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, CardCover } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardCover source={{ uri: 'https://picsum.photos/700' }} />\n  </Card>\n);\n```\n\n@extends Image props https://facebook.github.io/react-native/docs/image.html#props",
    path: "card-cover",
    data: {
      description:
        "A component to show a cover image inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, CardCover } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <CardCover source={{ uri: 'https://picsum.photos/700' }} />\n  </Card>\n);\n```\n\n@extends Image props https://facebook.github.io/react-native/docs/image.html#props",
      displayName: "CardCover",
      methods: [],
      statics: [],
      props: {
        index: {
          flowType: { name: "number" },
          required: false,
          description: "@internal",
        },
        total: {
          flowType: { name: "number" },
          required: false,
          description: "@internal",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Checkbox",
    description:
      'Checkboxes allow the selection of multiple options from a set.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Checkbox } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  render() {\n    const { checked } = this.state;\n    return (\n      <Checkbox\n        checked={checked}\n        onPress={() => { this.setState({ checked: !checked }); }}\n      />\n    );\n  }\n}\n```',
    path: "checkbox",
    data: {
      description:
        'Checkboxes allow the selection of multiple options from a set.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Checkbox } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  render() {\n    const { checked } = this.state;\n    return (\n      <Checkbox\n        checked={checked}\n        onPress={() => { this.setState({ checked: !checked }); }}\n      />\n    );\n  }\n}\n```',
      displayName: "Checkbox",
      methods: [],
      statics: [],
      props: {
        checked: {
          flowType: { name: "boolean" },
          required: true,
          description: "Whether checkbox is checked.",
        },
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether checkbox is disabled.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for unchecked checkbox.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for checkbox.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Chip",
    description:
      'A Chip can be used to display entities in small blocks.\n\n<div class="screenshots">\n  <img src="screenshots/chip-1.png" />\n  <img src="screenshots/chip-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Chip } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Chip icon="info" onPress={() => {}}>Example Chip</Chip>\n);\n```',
    path: "chip",
    data: {
      description:
        'A Chip can be used to display entities in small blocks.\n\n<div class="screenshots">\n  <img src="screenshots/chip-1.png" />\n  <img src="screenshots/chip-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Chip } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Chip icon="info" onPress={() => {}}>Example Chip</Chip>\n);\n```',
      displayName: "Chip",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Text content of the `Chip`.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: false,
          description: "Icon to display for the `Chip`.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        onDelete: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description:
            "Function to execute on delete. The delete button appears only when this prop is specified.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Dialog",
    description:
      'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/dialog-1.png" />\n  <img class="medium" src="screenshots/dialog-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paragraph } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showDialog = () => this.setState({ visible: true });\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View>\n        <Button onPress={this._showDialog}>Show Dialog</Button>\n        <Dialog\n           visible={visible}\n           onDismiss={this._hideDialog}\n        >\n          <DialogTitle>Alert</DialogTitle>\n          <DialogContent>\n            <Paragraph>This is simple dialog</Paragraph>\n          </DialogContent>\n          <DialogActions>\n            <Button onPress={this._hideDialog}>Done</Button>\n          </DialogActions>\n        </Dialog>\n      </View>\n    );\n  }\n}\n```',
    path: "dialog",
    data: {
      description:
        'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/dialog-1.png" />\n  <img class="medium" src="screenshots/dialog-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paragraph } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showDialog = () => this.setState({ visible: true });\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View>\n        <Button onPress={this._showDialog}>Show Dialog</Button>\n        <Dialog\n           visible={visible}\n           onDismiss={this._hideDialog}\n        >\n          <DialogTitle>Alert</DialogTitle>\n          <DialogContent>\n            <Paragraph>This is simple dialog</Paragraph>\n          </DialogContent>\n          <DialogActions>\n            <Button onPress={this._hideDialog}>Done</Button>\n          </DialogActions>\n        </Dialog>\n      </View>\n    );\n  }\n}\n```',
      displayName: "Dialog",
      methods: [],
      statics: [],
      props: {
        dismissable: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Determines whether clicking outside the dialog dismiss it.",
          defaultValue: { value: "true", computed: false },
        },
        onDismiss: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: true,
          description:
            "Callback that is called when the user dismisses the dialog.",
        },
        visible: {
          flowType: { name: "boolean" },
          required: true,
          description: "Determines Whether the dialog is visible.",
          defaultValue: { value: "false", computed: false },
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `Dialog`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "DialogActions",
    description:
      "A component to show a list of actions in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Dialog, DialogActions } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogActions>\n          <Button onPress={() => console.log(\"Cancel\")}>Cancel</Button>\n          <Button onPress={() => console.log(\"Ok\")}>Ok</Button>\n        </DialogActions>\n      </Dialog>\n    );\n  }\n}\n```",
    path: "dialog-actions",
    data: {
      description:
        "A component to show a list of actions in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Dialog, DialogActions } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogActions>\n          <Button onPress={() => console.log(\"Cancel\")}>Cancel</Button>\n          <Button onPress={() => console.log(\"Ok\")}>Ok</Button>\n        </DialogActions>\n      </Dialog>\n    );\n  }\n}\n```",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `DialogActions`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "DialogContent",
    description:
      "A component to show content in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Dialog, DialogContent, Paragraph } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogContent>\n          <Paragraph>This is simple dialog</Paragraph>\n        </DialogContent>\n      </Dialog>\n    );\n  }\n}\n```",
    path: "dialog-content",
    data: {
      description:
        "A component to show content in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Dialog, DialogContent, Paragraph } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogContent>\n          <Paragraph>This is simple dialog</Paragraph>\n        </DialogContent>\n      </Dialog>\n    );\n  }\n}\n```",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `DialogContent`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "DialogScrollArea",
    description:
      "A component to show a scrollable content in a Dialog. The component only provides appropriate styling.\nFor the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { Dialog, DialogScrollArea } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogScrollArea>\n          <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>\n            This is a scrollable area\n          </ScrollView>\n        </DialogScrollArea>\n      </Dialog>\n    );\n  }\n}\n```",
    path: "dialog-scroll-area",
    data: {
      description:
        "A component to show a scrollable content in a Dialog. The component only provides appropriate styling.\nFor the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { Dialog, DialogScrollArea } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogScrollArea>\n          <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>\n            This is a scrollable area\n          </ScrollView>\n        </DialogScrollArea>\n      </Dialog>\n    );\n  }\n}\n```",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `DialogScrollArea`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "DialogTitle",
    description:
      "A component to show a title in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Dialog, DialogContent, DialogTitle, Paragraph } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogTitle>This is a title</DialogTitle>\n        <DialogContent>\n          <Paragraph>This is simple dialog</Paragraph>\n        </DialogContent>\n      </Dialog>\n    );\n  }\n}\n```",
    path: "dialog-title",
    data: {
      description:
        "A component to show a title in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Dialog, DialogContent, DialogTitle, Paragraph } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Dialog\n        visible={this.state.visible}\n        onDismiss={this._hideDialog}>\n        <DialogTitle>This is a title</DialogTitle>\n        <DialogContent>\n          <Paragraph>This is simple dialog</Paragraph>\n        </DialogContent>\n      </Dialog>\n    );\n  }\n}\n```",
      displayName: "DialogTitle",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Title text for the `DialogTitle`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Divider",
    description:
      "A divider is a thin, lightweight separator that groups content in lists and page layouts.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Divider, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <View>\n    <Text>Apple</Text>\n    <Divider />\n    <Text>Orange</Text>\n    <Divider />\n  </View>\n);\n```",
    path: "divider",
    data: {
      description:
        "A divider is a thin, lightweight separator that groups content in lists and page layouts.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Divider, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <View>\n    <Text>Apple</Text>\n    <Divider />\n    <Text>Orange</Text>\n    <Divider />\n  </View>\n);\n```",
      displayName: "Divider",
      methods: [],
      statics: [],
      props: {
        inset: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether divider has a left inset.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "DrawerItem",
    description:
      "DrawerItem is a component used to show an action item with an icon and a label in a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { DrawerItem } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <DrawerItem label=\"First Item\" />\n);\n```",
    path: "drawer-item",
    data: {
      description:
        "DrawerItem is a component used to show an action item with an icon and a label in a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { DrawerItem } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <DrawerItem label=\"First Item\" />\n);\n```",
      displayName: "DrawerItem",
      methods: [],
      statics: [],
      props: {
        label: {
          flowType: { name: "string" },
          required: true,
          description: "The label text of the item.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: false,
          description: "Icon to display for the `DrawerItem`.",
        },
        active: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to highlight the drawer item as active.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for the drawer text and icon.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "DrawerSection",
    description:
      "A DrawerSection groups content inside a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { DrawerSection, DrawerItem } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    active: 'First Item',\n  };\n\n  render() {\n    const { active } = this.state;\n    return (\n      <DrawerSection title=\"Some title\">\n        <DrawerItem\n          label=\"First Item\"\n          active={active === 'First Item'}\n          onPress={() => { this.setState({ active: 'First Item' }); }}\n       />\n        <DrawerItem\n          label=\"Second Item\"\n          active={active === 'Second Item'}\n          onPress={() => { this.setState({ active: 'Second Item' }); }}\n       />\n     </DrawerSection>\n    );\n  }\n}\n```",
    path: "drawer-section",
    data: {
      description:
        "A DrawerSection groups content inside a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { DrawerSection, DrawerItem } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    active: 'First Item',\n  };\n\n  render() {\n    const { active } = this.state;\n    return (\n      <DrawerSection title=\"Some title\">\n        <DrawerItem\n          label=\"First Item\"\n          active={active === 'First Item'}\n          onPress={() => { this.setState({ active: 'First Item' }); }}\n       />\n        <DrawerItem\n          label=\"Second Item\"\n          active={active === 'Second Item'}\n          onPress={() => { this.setState({ active: 'Second Item' }); }}\n       />\n     </DrawerSection>\n    );\n  }\n}\n```",
      displayName: "DrawerSection",
      methods: [],
      statics: [],
      props: {
        title: {
          flowType: { name: "string" },
          required: false,
          description: "Title to show as the header for the section.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `DrawerSection`.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "FAB",
    description:
      'A floating action button represents the primary action in an application.\n\n<div class="screenshots">\n  <img src="screenshots/fab-1.png" />\n  <img src="screenshots/fab-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { FAB } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <FAB\n    small\n    icon="add"\n    onPress={() => {}}\n  />\n);\n```',
    path: "fab",
    data: {
      description:
        'A floating action button represents the primary action in an application.\n\n<div class="screenshots">\n  <img src="screenshots/fab-1.png" />\n  <img src="screenshots/fab-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { FAB } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <FAB\n    small\n    icon="add"\n    onPress={() => {}}\n  />\n);\n```',
      displayName: "FAB",
      methods: [],
      statics: [],
      props: {
        icon: {
          flowType: { name: "IconSource" },
          required: true,
          description: "Icon to display for the `FAB`.",
        },
        label: {
          flowType: { name: "string" },
          required: false,
          description: "Optional label for extended `FAB`.",
        },
        small: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.",
        },
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Icon color of button, a dark button will render light text and vice-versa.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for the `FAB`.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "FABGroup",
    description:
      "FABGroup displays a stack of FABs with related actions in a speed dial.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-group.png\" />\n</div>\n\n## Usage\n```js\nimport React from 'react';\nimport { FABGroup, StyleSheet } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    open: false,\n  };\n\n  render() {\n    return (\n      <FABGroup\n        open={this.state.open}\n        icon={this.state.open ? 'today' : 'add'}\n        actions={[\n          { icon: 'add', onPress: () => {} },\n          { icon: 'star', label: 'Star', onPress: () => {} },\n          { icon: 'email', label: 'Email', onPress: () => {} },\n          { icon: 'notifications', label: 'Remind', onPress: () => {} },\n        ]}\n        onStateChange={({ open }) => this.setState({ open })}\n        onPress={() => {\n          if (this.state.open) {\n            // do something if the speed dial is open\n          }\n        }}\n      />\n    );\n  }\n}\n```",
    path: "fabgroup",
    data: {
      description:
        "FABGroup displays a stack of FABs with related actions in a speed dial.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-group.png\" />\n</div>\n\n## Usage\n```js\nimport React from 'react';\nimport { FABGroup, StyleSheet } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    open: false,\n  };\n\n  render() {\n    return (\n      <FABGroup\n        open={this.state.open}\n        icon={this.state.open ? 'today' : 'add'}\n        actions={[\n          { icon: 'add', onPress: () => {} },\n          { icon: 'star', label: 'Star', onPress: () => {} },\n          { icon: 'email', label: 'Email', onPress: () => {} },\n          { icon: 'notifications', label: 'Remind', onPress: () => {} },\n        ]}\n        onStateChange={({ open }) => this.setState({ open })}\n        onPress={() => {\n          if (this.state.open) {\n            // do something if the speed dial is open\n          }\n        }}\n      />\n    );\n  }\n}\n```",
      displayName: "FABGroup",
      methods: [
        {
          name: "getDerivedStateFromProps",
          docblock: null,
          modifiers: ["static"],
          params: [
            { name: "nextProps", type: null },
            { name: "prevState", type: null },
          ],
          returns: null,
        },
        {
          name: "_close",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_toggle",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        actions: {
          flowType: {
            name: "Array",
            elements: [
              {
                name: "signature",
                type: "object",
                raw: "{\n  icon: string,\n  label?: string,\n  color?: string,\n  onPress: () => mixed,\n}",
                signature: {
                  properties: [
                    { key: "icon", value: { name: "string", required: true } },
                    {
                      key: "label",
                      value: { name: "string", required: false },
                    },
                    {
                      key: "color",
                      value: { name: "string", required: false },
                    },
                    {
                      key: "onPress",
                      value: {
                        name: "signature",
                        type: "function",
                        raw: "() => mixed",
                        signature: { arguments: [], return: { name: "mixed" } },
                        required: true,
                      },
                    },
                  ],
                },
              },
            ],
            raw: "Array<{\n  icon: string,\n  label?: string,\n  color?: string,\n  onPress: () => mixed,\n}>",
          },
          required: true,
          description:
            "Action items to display in the form of a speed dial.\nAn action item should contain the following properties:\n- `icon`: icon to display (required)\n- `label`: optional label text\n- `color`: custom icon color of the action item\n- `onPress`: callback that is called when `FAB` is pressed (required)",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: true,
          description:
            "Icon to display for the `FAB`.\nYou can toggle it based on whether the speed dial is open to display a different icon.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom icon color for the `FAB`.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on pressing the `FAB`.",
        },
        open: {
          flowType: { name: "boolean" },
          required: true,
          description: "Whether the speed dial is open.",
        },
        onStateChange: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(state: { open: boolean }) => mixed",
            signature: {
              arguments: [
                {
                  name: "state",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ open: boolean }",
                    signature: {
                      properties: [
                        {
                          key: "open",
                          value: { name: "boolean", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "mixed" },
            },
          },
          required: true,
          description:
            "Callback which is called on opening and closing the speed dial.\nThe open state needs to be updated when it's called, otherwise the change is dropped.",
        },
        style: {
          flowType: { name: "any" },
          required: false,
          description:
            "Style for the group. You can use it to pass additional styles if you need.\nFor example, you can set an additional margin if you have a tab bar at the bottom.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Headline",
    description:
      "Typography component for showing a headline.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/headline.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Headline } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Headline>Headline</Headline>\n);\n```",
    path: "headline",
    data: {
      description:
        "Typography component for showing a headline.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/headline.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Headline } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Headline>Headline</Headline>\n);\n```",
      methods: [],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "HelperText",
    description:
      'Helper text is used in conjuction with input elements to provide additional hints for the user.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/helper-text.gif" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { HelperText, TextInput } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  state = {\n    text: \'\'\n  };\n\n  render(){\n    return (\n      <View>\n        <TextInput\n          label="Email"\n          value={this.state.text}\n          onChangeText={text => this.setState({ text })}\n        />\n        <HelperText\n          type="error"\n          visible={!this.state.text.includes(\'@\')}\n        >\n          Email address is invalid!\n        </HelperText>\n      </View>\n    );\n  }\n}\n```',
    path: "helper-text",
    data: {
      description:
        'Helper text is used in conjuction with input elements to provide additional hints for the user.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/helper-text.gif" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { HelperText, TextInput } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  state = {\n    text: \'\'\n  };\n\n  render(){\n    return (\n      <View>\n        <TextInput\n          label="Email"\n          value={this.state.text}\n          onChangeText={text => this.setState({ text })}\n        />\n        <HelperText\n          type="error"\n          visible={!this.state.text.includes(\'@\')}\n        >\n          Email address is invalid!\n        </HelperText>\n      </View>\n    );\n  }\n}\n```',
      displayName: "HelperText",
      methods: [
        {
          name: "_animateFocus",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_animateBlur",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handleTextLayout",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
          returns: null,
        },
      ],
      statics: [],
      props: {
        type: {
          flowType: {
            name: "union",
            raw: "'error' | 'info'",
            elements: [
              { name: "literal", value: "'error'" },
              { name: "literal", value: "'info'" },
            ],
          },
          required: true,
          description: "Type of the helper text.",
          defaultValue: { value: "'info'", computed: false },
        },
        visible: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to display the helper text.",
          defaultValue: { value: "true", computed: false },
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Text content of the HelperText.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "ListAccordion",
    description:
      '`ListAccordion` can be used to display an expandable list item.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-accordion-1.png" />\n  <img class="medium" src="screenshots/list-accordion-2.png" />\n  <img class="medium" src="screenshots/list-accordion-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListAccordion, ListItem, Checkbox } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ListAccordion\n    title="Accordion"\n    icon="folder"\n  >\n    <ListItem title="First item" />\n    <ListItem title="Second item" />\n  </ListAccordion>\n);\n```',
    path: "list-accordion",
    data: {
      description:
        '`ListAccordion` can be used to display an expandable list item.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-accordion-1.png" />\n  <img class="medium" src="screenshots/list-accordion-2.png" />\n  <img class="medium" src="screenshots/list-accordion-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListAccordion, ListItem, Checkbox } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ListAccordion\n    title="Accordion"\n    icon="folder"\n  >\n    <ListItem title="First item" />\n    <ListItem title="Second item" />\n  </ListAccordion>\n);\n```',
      displayName: "ListAccordion",
      methods: [
        {
          name: "_handlePress",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        title: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Title text for the list accordion.",
        },
        description: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: false,
          description: "Description text for the list accordion.",
        },
        icon: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: false,
          description: "Icon to display for the `ListAccordion`.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the section.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ListItem",
    description:
      'ListItem can be used to show tiles inside a List.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-item-1.png" />\n  <img class="medium" src="screenshots/list-item-2.png" />\n  <img class="medium" src="screenshots/list-item-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListItem } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ListItem title="First Item" description="Item description" icon="folder" />\n);\n```',
    path: "list-item",
    data: {
      description:
        'ListItem can be used to show tiles inside a List.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-item-1.png" />\n  <img class="medium" src="screenshots/list-item-2.png" />\n  <img class="medium" src="screenshots/list-item-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListItem } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ListItem title="First Item" description="Item description" icon="folder" />\n);\n```',
      displayName: "ListItem",
      methods: [],
      statics: [],
      props: {
        title: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Title text for the list item.",
        },
        description: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: false,
          description: "Description text for the list item.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: false,
          description: "Icon to display for the `ListItem`.",
        },
        avatar: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: false,
          description: "Component to display as avatar image.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ListSection",
    description:
      '`ListSection` groups items, usually `ListItem`.\n\n<div class="screenshots">\n  <img src="screenshots/list-section.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListSection, ListItem } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <ListSection title="Some title">\n        <ListItem\n          title="First Item"\n          icon="folder"\n       />\n        <ListItem\n          title="Second Item"\n          icon="folder"\n       />\n     </ListSection>\n    );\n  }\n}\n```',
    path: "list-section",
    data: {
      description:
        '`ListSection` groups items, usually `ListItem`.\n\n<div class="screenshots">\n  <img src="screenshots/list-section.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ListSection, ListItem } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <ListSection title="Some title">\n        <ListItem\n          title="First Item"\n          icon="folder"\n       />\n        <ListItem\n          title="Second Item"\n          icon="folder"\n       />\n     </ListSection>\n    );\n  }\n}\n```',
      displayName: "ListSection",
      methods: [],
      statics: [],
      props: {
        title: {
          flowType: { name: "string" },
          required: false,
          description: "Title text for the section.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the section.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "Modal",
    description:
      "The Modal component is a simple way to present content above an enclosing view.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Modal, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showModal = () => this.setState({ visible: true });\n  _hideModal = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <Modal visible={visible} onDismiss={this._hideModal}>\n        <Text>Example Modal</Text>\n      </Modal>\n    );\n  }\n}\n```",
    path: "modal",
    data: {
      description:
        "The Modal component is a simple way to present content above an enclosing view.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Modal, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showModal = () => this.setState({ visible: true });\n  _hideModal = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <Modal visible={visible} onDismiss={this._hideModal}>\n        <Text>Example Modal</Text>\n      </Modal>\n    );\n  }\n}\n```",
      displayName: "Modal",
      methods: [
        {
          name: "getDerivedStateFromProps",
          docblock: null,
          modifiers: ["static"],
          params: [
            {
              name: "nextProps",
              type: {
                name: "signature",
                type: "object",
                raw: "{\n  /**\n   * Determines whether clicking outside the modal dismiss it.\n   */\n  dismissable?: boolean,\n  /**\n   * Callback that is called when the user dismisses the modal.\n   */\n  onDismiss: () => mixed,\n  /**\n   * Determines Whether the modal is visible.\n   */\n  visible: boolean,\n  /**\n   * Content of the `Modal`.\n   */\n  children: React.Node,\n}",
                signature: {
                  properties: [
                    {
                      key: "dismissable",
                      value: { name: "boolean", required: false },
                    },
                    {
                      key: "onDismiss",
                      value: {
                        name: "signature",
                        type: "function",
                        raw: "() => mixed",
                        signature: { arguments: [], return: { name: "mixed" } },
                        required: true,
                      },
                    },
                    {
                      key: "visible",
                      value: { name: "boolean", required: true },
                    },
                    {
                      key: "children",
                      value: {
                        name: "ReactNode",
                        raw: "React.Node",
                        required: true,
                      },
                    },
                  ],
                },
                alias: "Props",
              },
            },
            {
              name: "prevState",
              type: {
                name: "signature",
                type: "object",
                raw: "{\n  opacity: Animated.Value,\n  rendered: boolean,\n}",
                signature: {
                  properties: [
                    {
                      key: "opacity",
                      value: { name: "unknown", required: true },
                    },
                    {
                      key: "rendered",
                      value: { name: "boolean", required: true },
                    },
                  ],
                },
                alias: "State",
              },
            },
          ],
          returns: null,
        },
        {
          name: "_handleBack",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_showModal",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hideModal",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        dismissable: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Determines whether clicking outside the modal dismiss it.",
          defaultValue: { value: "true", computed: false },
        },
        onDismiss: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: true,
          description:
            "Callback that is called when the user dismisses the modal.",
        },
        visible: {
          flowType: { name: "boolean" },
          required: true,
          description: "Determines Whether the modal is visible.",
          defaultValue: { value: "false", computed: false },
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `Modal`.",
        },
      },
    },
    type: "component",
  },
  {
    title: "Paper",
    description:
      "Paper is a basic container that can give depth to an element with elevation shadow.\nA shadow can be applied by specifying the `elevation` property both on Android and iOS.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paper.1_2.png\" />\n  <img src=\"screenshots/paper.4_6.png\" />\n  <img src=\"screenshots/paper.9_12.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paper, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paper style={styles.paper}>\n     <Text>Paper</Text>\n  </Paper>\n);\n\nconst styles = StyleSheet.create({\n  paper: {\n    padding: 8,\n    height: 80,\n    width: 80,\n    alignItems: 'center',\n    justifyContent: 'center',\n    elevation: 4,\n  },\n});\n```",
    path: "paper",
    data: {
      description:
        "Paper is a basic container that can give depth to an element with elevation shadow.\nA shadow can be applied by specifying the `elevation` property both on Android and iOS.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paper.1_2.png\" />\n  <img src=\"screenshots/paper.4_6.png\" />\n  <img src=\"screenshots/paper.9_12.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paper, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paper style={styles.paper}>\n     <Text>Paper</Text>\n  </Paper>\n);\n\nconst styles = StyleSheet.create({\n  paper: {\n    padding: 8,\n    height: 80,\n    width: 80,\n    alignItems: 'center',\n    justifyContent: 'center',\n    elevation: 4,\n  },\n});\n```",
      displayName: "Paper",
      methods: [],
      statics: [],
      props: {
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `Paper`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Paragraph",
    description:
      "Typography component for showing a paragraph.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paragraph.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paragraph>Paragraph</Paragraph>\n);\n```",
    path: "paragraph",
    data: {
      description:
        "Typography component for showing a paragraph.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paragraph.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paragraph>Paragraph</Paragraph>\n);\n```",
      methods: [],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ProgressBar",
    description:
      "Progress bar is an indicator used to present progress of some activity in the app.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/progress-bar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ProgressBar } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <ProgressBar progress={0.5} color={Colors.red800} />\n);\n```",
    path: "progress-bar",
    data: {
      description:
        "Progress bar is an indicator used to present progress of some activity in the app.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/progress-bar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ProgressBar } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <ProgressBar progress={0.5} color={Colors.red800} />\n);\n```",
      displayName: "ProgressBar",
      methods: [],
      statics: [],
      props: {
        progress: {
          flowType: { name: "number" },
          required: true,
          description: "Progress value (between 0 and 1).",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Color of the progress bar.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "RadioButton",
    description:
      "Radio buttons allow the selection a single option from a set.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/radio-enabled.android.png\" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.android.png\" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-enabled.ios.png\" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.ios.png\" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: 'first',\n  };\n\n  render() {\n    const { checked } = this.state;\n\n    return (\n      <View>\n        <RadioButton\n          value=\"first\"\n          checked={checked === 'first'}\n          onPress={() => { this.setState({ checked: 'firstOption' }); }}\n        />\n        <RadioButton\n          value=\"second\"\n          checked={checked === 'second'}\n          onPress={() => { this.setState({ checked: 'secondOption' }); }}\n        />\n      </View>\n    );\n  }\n}\n```",
    path: "radio-button",
    data: {
      description:
        "Radio buttons allow the selection a single option from a set.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/radio-enabled.android.png\" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.android.png\" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-enabled.ios.png\" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.ios.png\" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: 'first',\n  };\n\n  render() {\n    const { checked } = this.state;\n\n    return (\n      <View>\n        <RadioButton\n          value=\"first\"\n          checked={checked === 'first'}\n          onPress={() => { this.setState({ checked: 'firstOption' }); }}\n        />\n        <RadioButton\n          value=\"second\"\n          checked={checked === 'second'}\n          onPress={() => { this.setState({ checked: 'secondOption' }); }}\n        />\n      </View>\n    );\n  }\n}\n```",
      displayName: "RadioButton",
      methods: [],
      statics: [],
      props: {
        value: {
          flowType: { name: "string" },
          required: true,
          description: "Value of the radio button",
        },
        checked: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether radio is checked.",
        },
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether radio is disabled.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for unchecked radio.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for radio.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "RadioButtonGroup",
    description:
      "Radio button group allows to control a group of radio buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButtonGroup, RadioButton, Text } from 'react-native-paper';\n\nexport default class MyComponent extends Component {\n  state = {\n    value: 'first',\n  };\n\n  render() {\n    return(\n      <RadioButtonGroup\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n        <View>\n          <Text>First</Text>\n          <RadioButton value=\"first\" />\n        </View>\n        <View>\n          <Text>Second</Text>\n          <RadioButton value=\"second\" />\n        </View>\n      </RadioButtonGroup>\n    )\n  }\n}\n```",
    path: "radio-button-group",
    data: {
      description:
        "Radio button group allows to control a group of radio buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButtonGroup, RadioButton, Text } from 'react-native-paper';\n\nexport default class MyComponent extends Component {\n  state = {\n    value: 'first',\n  };\n\n  render() {\n    return(\n      <RadioButtonGroup\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n        <View>\n          <Text>First</Text>\n          <RadioButton value=\"first\" />\n        </View>\n        <View>\n          <Text>Second</Text>\n          <RadioButton value=\"second\" />\n        </View>\n      </RadioButtonGroup>\n    )\n  }\n}\n```",
      displayName: "RadioButtonGroup",
      methods: [],
      statics: [],
      props: {
        onValueChange: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(value: string) => mixed",
            signature: {
              arguments: [{ name: "value", type: { name: "string" } }],
              return: { name: "mixed" },
            },
          },
          required: true,
          description: "Function to execute on selection change.",
        },
        value: {
          flowType: { name: "string" },
          required: true,
          description: "Value of the currently selected radio button.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "React elements containing radio buttons.",
        },
      },
    },
    type: "component",
  },
  {
    title: "Searchbar",
    description:
      'Searchbar is a simple input box where users can type search queries.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/searchbar.png" />\n</div>\n\n## Usage\n```js\nimport React from \'react\';\nimport { Searchbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    firstQuery: \'\',\n  };\n\n  render() {\n    const { firstQuery } = this.state;\n    return (\n      <Searchbar\n        placeholder="Search"\n        onChangeText={query => { this.setState({ firstQuery: query }); }}\n        value={firstQuery}\n      />\n    );\n  }\n}\n```',
    path: "searchbar",
    data: {
      description:
        'Searchbar is a simple input box where users can type search queries.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/searchbar.png" />\n</div>\n\n## Usage\n```js\nimport React from \'react\';\nimport { Searchbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    firstQuery: \'\',\n  };\n\n  render() {\n    const { firstQuery } = this.state;\n    return (\n      <Searchbar\n        placeholder="Search"\n        onChangeText={query => { this.setState({ firstQuery: query }); }}\n        value={firstQuery}\n      />\n    );\n  }\n}\n```',
      displayName: "Searchbar",
      methods: [
        {
          name: "_handleClearPress",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "setNativeProps",
          docblock: "@internal",
          modifiers: [],
          params: [{ name: "...args" }],
          returns: null,
          description: null,
        },
        {
          name: "isFocused",
          docblock:
            "Returns `true` if the input is currently focused, `false` otherwise.",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Returns `true` if the input is currently focused, `false` otherwise.",
        },
        {
          name: "clear",
          docblock: "Removes all text from the TextInput.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Removes all text from the TextInput.",
        },
        {
          name: "focus",
          docblock: "Focuses the input.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Focuses the input.",
        },
        {
          name: "blur",
          docblock: "Removes focus from the input.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Removes focus from the input.",
        },
      ],
      statics: [],
      props: {
        placeholder: {
          flowType: { name: "string" },
          required: false,
          description: "Hint text shown when the input is empty.",
        },
        value: {
          flowType: { name: "string" },
          required: true,
          description: "The value of the text input.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: false,
          description:
            "Icon name for the left icon button (see `onIconPress`).",
        },
        onChangeText: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "(query: string) => void",
            signature: {
              arguments: [{ name: "query", type: { name: "string" } }],
              return: { name: "void" },
            },
          },
          required: false,
          description:
            "Callback that is called when the text input's text changes.",
        },
        onIconPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description:
            "Callback to execute if we want the left icon to act as button.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Snackbar",
    description:
      "Snackbar provide brief feedback about an operation through a message at the bottom of the screen.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/snackbar.gif\" />\n</div>\n\n## Usage\n```js\nimport React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Snackbar } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View style={styles.container}>\n        <Button\n          raised\n          onPress={() => this.setState(state => ({ visible: !state.visible }))}\n        >\n          {this.state.visible ? 'Hide' : 'Show'}\n        </Button>\n        <Snackbar\n          visible={this.state.visible}\n          onDismiss={() => this.setState({ visible: false })}\n          action={{\n            label: 'Undo',\n            onPress: () => {\n              // Do something\n            },\n          }}\n        >\n          Hey there! I'm a Snackbar.\n        </Snackbar>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-between',\n  },\n});\n```",
    path: "snackbar",
    data: {
      description:
        "Snackbar provide brief feedback about an operation through a message at the bottom of the screen.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/snackbar.gif\" />\n</div>\n\n## Usage\n```js\nimport React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Snackbar } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View style={styles.container}>\n        <Button\n          raised\n          onPress={() => this.setState(state => ({ visible: !state.visible }))}\n        >\n          {this.state.visible ? 'Hide' : 'Show'}\n        </Button>\n        <Snackbar\n          visible={this.state.visible}\n          onDismiss={() => this.setState({ visible: false })}\n          action={{\n            label: 'Undo',\n            onPress: () => {\n              // Do something\n            },\n          }}\n        >\n          Hey there! I'm a Snackbar.\n        </Snackbar>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-between',\n  },\n});\n```",
      displayName: "Snackbar",
      methods: [
        {
          name: "_handleLayout",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
          returns: null,
        },
        {
          name: "_toggle",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_show",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hide",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [
        {
          name: "DURATION_SHORT",
          description: "Show the Snackbar for a short duration.",
          docblock: "Show the Snackbar for a short duration.",
          type: null,
        },
        {
          name: "DURATION_LONG",
          description: "Show the Snackbar for a long duration.",
          docblock: "Show the Snackbar for a long duration.",
          type: null,
        },
        {
          name: "DURATION_INDEFINITE",
          description: "Show the Snackbar for indefinite amount of time.",
          docblock: "Show the Snackbar for indefinite amount of time.",
          type: null,
        },
      ],
      props: {
        visible: {
          flowType: { name: "boolean" },
          required: true,
          description: "Whether the Snackbar is currently visible.",
        },
        action: {
          flowType: {
            name: "signature",
            type: "object",
            raw: "{\n  label: string,\n  onPress: () => mixed,\n}",
            signature: {
              properties: [
                { key: "label", value: { name: "string", required: true } },
                {
                  key: "onPress",
                  value: {
                    name: "signature",
                    type: "function",
                    raw: "() => mixed",
                    signature: { arguments: [], return: { name: "mixed" } },
                    required: true,
                  },
                },
              ],
            },
          },
          required: false,
          description:
            "Label and press callback for the action button. It should contain the following properties:\n- `label` - Label of the action button\n- `onPress` - Callback that is called when action button is pressed.",
        },
        duration: {
          flowType: { name: "number" },
          required: false,
          description: "The duration for which the Snackbar is shown.",
          defaultValue: { value: "3500", computed: false },
        },
        onDismiss: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: true,
          description:
            "Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Text content of the Snackbar.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Subheading",
    description:
      "Typography component for showing a subheading.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/subheading.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Subheading } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Subheading>Subheading</Subheading>\n);\n```",
    path: "subheading",
    data: {
      description:
        "Typography component for showing a subheading.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/subheading.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Subheading } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Subheading>Subheading</Subheading>\n);\n```",
      methods: [],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "Switch",
    description:
      'Switch is a visual toggle between two mutually exclusive states — on and off.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/switch-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Switch } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    isSwitchOn: false,\n  };\n\n  render() {\n    const { isSwitchOn } = this.state;\n    return (\n      <Switch\n        value={isSwitchOn}\n        onValueChange={() =>\n          { this.setState({ isSwitchOn: !isSwitchOn }); }\n        }\n      />\n    );\n  }\n}\n```',
    path: "switch",
    data: {
      description:
        'Switch is a visual toggle between two mutually exclusive states — on and off.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/switch-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Switch } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    isSwitchOn: false,\n  };\n\n  render() {\n    const { isSwitchOn } = this.state;\n    return (\n      <Switch\n        value={isSwitchOn}\n        onValueChange={() =>\n          { this.setState({ isSwitchOn: !isSwitchOn }); }\n        }\n      />\n    );\n  }\n}\n```',
      displayName: "Switch",
      methods: [],
      statics: [],
      props: {
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description: "Disable toggling the switch.",
        },
        value: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Value of the switch, true means 'on', false means 'off'.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for switch.",
        },
        onValueChange: {
          flowType: { name: "Function" },
          required: false,
          description: "Callback called with the new value when it changes.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Text",
    description:
      "Text component which follows styles from the theme.\n\n@extends Text props https://facebook.github.io/react-native/docs/text.html#props",
    path: "text",
    data: {
      description:
        "Text component which follows styles from the theme.\n\n@extends Text props https://facebook.github.io/react-native/docs/text.html#props",
      displayName: "Text",
      methods: [
        {
          name: "setNativeProps",
          docblock: "@internal",
          modifiers: [],
          params: [{ name: "...args" }],
          returns: null,
          description: null,
        },
      ],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "TextInput",
    description:
      "TextInputs allow users to input text.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/textinput.unfocused.png\" />\n    <figcaption>Unfocused</span>\n  </figure>\n  <figure>\n    <img src=\"screenshots/textinput.focused.png\" />\n    <figcaption>Focused</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { TextInput } from 'react-native-paper';\n\nclass MyComponent extends React.Component {\n  state = {\n    text: ''\n  };\n\n  render(){\n    return (\n      <TextInput\n        label='Email'\n        value={this.state.text}\n        onChangeText={text => this.setState({ text })}\n      />\n    );\n  }\n}\n```\n\n@extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props",
    path: "text-input",
    data: {
      description:
        "TextInputs allow users to input text.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/textinput.unfocused.png\" />\n    <figcaption>Unfocused</span>\n  </figure>\n  <figure>\n    <img src=\"screenshots/textinput.focused.png\" />\n    <figcaption>Focused</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { TextInput } from 'react-native-paper';\n\nclass MyComponent extends React.Component {\n  state = {\n    text: ''\n  };\n\n  render(){\n    return (\n      <TextInput\n        label='Email'\n        value={this.state.text}\n        onChangeText={text => this.setState({ text })}\n      />\n    );\n  }\n}\n```\n\n@extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props",
      displayName: "TextInput",
      methods: [
        {
          name: "getDerivedStateFromProps",
          docblock: null,
          modifiers: ["static"],
          params: [
            { name: "nextProps", type: null },
            { name: "prevState", type: null },
          ],
          returns: null,
        },
        {
          name: "_handleShowPlaceholder",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hidePlaceholder",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_showError",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hideError",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_restoreLabel",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_minmizeLabel",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_showUnderline",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hideUnderline",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_showColor",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hideColor",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handleFocus",
          docblock: null,
          modifiers: [],
          params: [{ name: "...args", type: null }],
          returns: null,
        },
        {
          name: "_handleBlur",
          docblock: null,
          modifiers: [],
          params: [{ name: "...args", type: null }],
          returns: null,
        },
        {
          name: "_handleChangeText",
          docblock: null,
          modifiers: [],
          params: [{ name: "value", type: { name: "string" } }],
          returns: null,
        },
        {
          name: "_getBottomLineStyle",
          docblock: null,
          modifiers: [],
          params: [
            { name: "backgroundColor", type: { name: "string" } },
            { name: "animatedValue", type: { name: "unknown" } },
          ],
          returns: null,
        },
        {
          name: "setNativeProps",
          docblock: "@internal",
          modifiers: [],
          params: [{ name: "...args" }],
          returns: null,
          description: null,
        },
        {
          name: "isFocused",
          docblock:
            "Returns `true` if the input is currently focused, `false` otherwise.",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Returns `true` if the input is currently focused, `false` otherwise.",
        },
        {
          name: "clear",
          docblock: "Removes all text from the TextInput.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Removes all text from the TextInput.",
        },
        {
          name: "focus",
          docblock: "Focuses the input.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Focuses the input.",
        },
        {
          name: "blur",
          docblock: "Removes focus from the input.",
          modifiers: [],
          params: [],
          returns: null,
          description: "Removes focus from the input.",
        },
      ],
      statics: [],
      props: {
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "If true, user won't be able to interact with the component.",
          defaultValue: { value: "false", computed: false },
        },
        label: {
          flowType: { name: "string" },
          required: false,
          description: "The text to use for the floating label.",
        },
        placeholder: {
          flowType: { name: "string" },
          required: false,
          description: "Placeholder for the input.",
        },
        error: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to style the TextInput with error style.",
          defaultValue: { value: "false", computed: false },
        },
        onChangeText: {
          flowType: { name: "Function" },
          required: false,
          description:
            "Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.",
        },
        underlineColor: {
          flowType: { name: "string" },
          required: false,
          description: "Underline color of the input.",
        },
        selectionColor: {
          flowType: { name: "string" },
          required: false,
          description:
            "Color for the text selection background. Defaults to the theme's primary color.",
        },
        multiline: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether the input can have multiple lines.",
          defaultValue: { value: "false", computed: false },
        },
        numberOfLines: {
          flowType: { name: "number" },
          required: false,
          description:
            "The number of lines to show in the input (Android only).",
        },
        onFocus: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description:
            "Callback that is called when the text input is focused.",
        },
        onBlur: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description:
            "Callback that is called when the text input is blurred.",
        },
        value: {
          flowType: { name: "string" },
          required: false,
          description: "Value of the text input.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "Title",
    description:
      "Typography component for showing a title.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/title.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Title } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Title>Title</Title>\n);\n```",
    path: "title",
    data: {
      description:
        "Typography component for showing a title.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/title.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Title } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Title>Title</Title>\n);\n```",
      methods: [],
      statics: [],
      props: {
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "Toolbar",
    description:
      'Toolbar is usually used as a header placed at the top of the screen.\nIt can contain the screen title, controls such as navigation buttons, menu button etc.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/toolbar.android.png" />\n    <figcaption>Android</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/toolbar.ios.png" />\n    <figcaption>iOS</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Toolbar>\n        <ToolbarBackAction\n          onPress={this._goBack}\n        />\n        <ToolbarContent\n          title="Title"\n          subtitle="Subtitle"\n        />\n        <ToolbarAction icon="search" onPress={this._onSearch} />\n        <ToolbarAction icon="more-vert" onPress={this._onMore} />\n      </Toolbar>\n    );\n  }\n}\n```',
    path: "toolbar",
    data: {
      description:
        'Toolbar is usually used as a header placed at the top of the screen.\nIt can contain the screen title, controls such as navigation buttons, menu button etc.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/toolbar.android.png" />\n    <figcaption>Android</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/toolbar.ios.png" />\n    <figcaption>iOS</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Toolbar>\n        <ToolbarBackAction\n          onPress={this._goBack}\n        />\n        <ToolbarContent\n          title="Title"\n          subtitle="Subtitle"\n        />\n        <ToolbarAction icon="search" onPress={this._onSearch} />\n        <ToolbarAction icon="more-vert" onPress={this._onMore} />\n      </Toolbar>\n    );\n  }\n}\n```',
      displayName: "Toolbar",
      methods: [],
      statics: [],
      props: {
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Theme color for the toolbar, a dark toolbar will render light text and vice-versa\nChild elements can override this prop independently.",
        },
        statusBarHeight: {
          flowType: { name: "number" },
          required: false,
          description:
            "Extra padding to add at the top of toolbar to account for translucent status bar.\nThis is automatically handled on iOS including iPhone X.\nIf you are using Android and use Expo, we assume translucent status bar and set a height for status bar automatically.\nPass `0` or a custom value to disable the default behaviour.",
          defaultValue: {
            value:
              "Platform.select({\n  android: DEFAULT_STATUSBAR_HEIGHT_EXPO,\n  ios:\n    Platform.Version < 11\n      ? DEFAULT_STATUSBAR_HEIGHT_EXPO === undefined\n        ? StatusBar.currentHeight\n        : DEFAULT_STATUSBAR_HEIGHT_EXPO\n      : undefined,\n})",
            computed: true,
          },
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `Toolbar`.",
        },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ToolbarAction",
    description:
      "The ToolbarAction component is used for displaying an action item in the toolbar.",
    path: "toolbar-action",
    data: {
      description:
        "The ToolbarAction component is used for displaying an action item in the toolbar.",
      displayName: "ToolbarAction",
      methods: [],
      statics: [],
      props: {
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "A dark action icon will render a light icon and vice-versa.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for action icon.",
        },
        icon: {
          flowType: { name: "IconSource" },
          required: true,
          description: "Name of the icon to show.",
        },
        size: {
          flowType: { name: "number" },
          required: false,
          description: "Optional icon size.",
          defaultValue: { value: "24", computed: false },
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ToolbarBackAction",
    description:
      "The ToolbarBackAction component is used for displaying a back button in the toolbar.",
    path: "toolbar-back-action",
    data: {
      description:
        "The ToolbarBackAction component is used for displaying a back button in the toolbar.",
      methods: [],
      statics: [],
      props: {
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "A dark action icon will render a light icon and vice-versa.",
        },
        color: {
          flowType: { name: "string" },
          required: false,
          description: "Custom color for back icon.",
        },
        onPress: {
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          required: false,
          description: "Function to execute on press.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
      },
    },
    type: "component",
  },
  {
    title: "ToolbarContent",
    description:
      "The ToolbarContent component is used for displaying a title and optional subtitle in a toolbar.",
    path: "toolbar-content",
    data: {
      description:
        "The ToolbarContent component is used for displaying a title and optional subtitle in a toolbar.",
      displayName: "ToolbarContent",
      methods: [],
      statics: [],
      props: {
        dark: {
          flowType: { name: "boolean" },
          required: false,
          description:
            "Theme color for the text, a dark toolbar will render light text and vice-versa.",
        },
        title: {
          flowType: {
            name: "union",
            raw: "string | React.Node",
            elements: [
              { name: "string" },
              { name: "ReactNode", raw: "React.Node" },
            ],
          },
          required: true,
          description: "Text for the title.",
        },
        titleStyle: {
          flowType: { name: "any" },
          required: false,
          description: "Style for the title.",
        },
        subtitle: {
          flowType: {
            name: "union",
            raw: "string | React.Node",
            elements: [
              { name: "string" },
              { name: "ReactNode", raw: "React.Node" },
            ],
          },
          required: false,
          description: "Text for the subtitle.",
        },
        subtitleStyle: {
          flowType: { name: "any" },
          required: false,
          description: "Style for the subtitle.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
  {
    title: "TouchableRipple",
    description:
      "A wrapper for views that should respond to touches.\nProvides a material \"ink ripple\" interaction effect for supported platforms (>= Android Lollipop).\nOn unsupported platforms, it falls back to a highlight effect.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Text, TouchableRipple } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <TouchableRipple\n    onPress={() => console.log('Pressed')}\n    rippleColor=\"rgba(0, 0, 0, .32)\"\n  >\n    <Text>Press me</Text>\n  </TouchableRipple>\n);\n```",
    path: "touchable-ripple",
    data: {
      description:
        "A wrapper for views that should respond to touches.\nProvides a material \"ink ripple\" interaction effect for supported platforms (>= Android Lollipop).\nOn unsupported platforms, it falls back to a highlight effect.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Text, TouchableRipple } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <TouchableRipple\n    onPress={() => console.log('Pressed')}\n    rippleColor=\"rgba(0, 0, 0, .32)\"\n  >\n    <Text>Press me</Text>\n  </TouchableRipple>\n);\n```",
      displayName: "TouchableRipple",
      methods: [],
      statics: [
        {
          name: "supported",
          description: "Whether ripple effect is supported.",
          docblock: "Whether ripple effect is supported.",
          type: null,
        },
      ],
      props: {
        borderless: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to render the ripple outside the view bounds.",
          defaultValue: { value: "false", computed: false },
        },
        background: {
          flowType: { name: "Object" },
          required: false,
          description:
            "Type of background drawabale to display the feedback.\nhttps://facebook.github.io/react-native/docs/touchablenativefeedback.html#background",
        },
        disabled: {
          flowType: { name: "boolean" },
          required: false,
          description: "Whether to prevent interaction with the touchable.",
        },
        onPress: {
          flowType: { name: "Function", nullable: true },
          required: false,
          description:
            "Function to execute on press. If not set, will cause the touchable to be disabled.",
        },
        rippleColor: {
          flowType: { name: "string" },
          required: false,
          description: "Color of the ripple effect.",
        },
        underlayColor: {
          flowType: { name: "string" },
          required: false,
          description: "Color of the underlay for the highlight effect.",
        },
        children: {
          flowType: { name: "ReactNode", raw: "React.Node" },
          required: true,
          description: "Content of the `TouchableRipple`.",
        },
        style: { flowType: { name: "any" }, required: false, description: "" },
        theme: {
          flowType: { name: "Theme" },
          required: true,
          description: "@optional",
        },
      },
    },
    type: "component",
  },
];
