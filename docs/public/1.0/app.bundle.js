!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (n.r = function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = "./dist/1.0/app.src.js"));
})({
  "./.linaria-cache/pages/src/Home.css": function (e, t, n) {},
  "./.linaria-cache/pages/src/Showcase.css": function (e, t, n) {},
  "./assets/styles.css": function (e, t, n) {},
  "./dist/1.0/app.data.js": function (e, t, n) {
    var r, o, i;
    e.exports = [
      ((r = n("./pages/0.index.js")),
      (o = r.__esModule ? r.default : r),
      (i = o.meta || {}),
      {
        title: i.title || "Home",
        path: i.permalink || "index",
        description: i.description,
        type: "custom",
        data: o,
      }),
      (function () {
        var e = n("./pages/1.showcase.js"),
          t = e.__esModule ? e.default : e,
          r = t.meta || {};
        return {
          title: r.title || "Showcase",
          path: r.permalink || "showcase",
          description: r.description,
          type: "custom",
          data: t,
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
                                      value: { name: "T", required: !0 },
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
                                        required: !0,
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                            required: !0,
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
              required: !1,
              description:
                "Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label.\nBy default, this is `true` when you have more than 3 tabs.",
            },
            navigationState: {
              flowType: {
                name: "NavigationState",
                elements: [{ name: "T" }],
                raw: "NavigationState<T>",
              },
              required: !0,
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
              required: !0,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
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
                                required: !0,
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: {
                    name: "ReactNode",
                    raw: "React.Node",
                    nullable: !0,
                  },
                },
              },
              required: !0,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                            {
                              key: "focused",
                              value: { name: "boolean", required: !0 },
                            },
                            {
                              key: "tintColor",
                              value: { name: "string", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "ReactNode", raw: "React.Node" },
                },
              },
              required: !1,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                            {
                              key: "focused",
                              value: { name: "boolean", required: !0 },
                            },
                            {
                              key: "tintColor",
                              value: { name: "string", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "ReactNode", raw: "React.Node" },
                },
              },
              required: !1,
              description:
                "Callback which React Element to be used as tab label.",
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "string" },
                },
              },
              required: !1,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "string", nullable: !0 },
                },
              },
              required: !1,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "string", nullable: !0 },
                },
              },
              required: !1,
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "string" },
                },
              },
              required: !1,
              description:
                "Get color for the tab, uses `route.color` by default.",
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
                            {
                              key: "route",
                              value: { name: "T", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "mixed" },
                },
              },
              required: !1,
              description:
                "Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top.",
            },
            barStyle: {
              flowType: { name: "any" },
              required: !1,
              description:
                "Style for the bottom navigation bar.\nYou can set a bottom padding here if you have a translucent navigation bar on Android:\n\n```js\nbarStyle={{ paddingBottom: 48 }}\n```",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description:
                "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
            },
            compact: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Use a compact look, useful for flat buttons in a row.",
            },
            raised: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Add elevation to button, as opposed to default flat appearance. Typically used on a flat surface.",
            },
            primary: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Use to primary color from theme. Typically used to emphasize an action.",
            },
            dark: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Text color of button, a dark button will render light text and vice-versa.",
            },
            loading: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether to show a loading indicator.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !1,
              description: "Icon to display for the `Button`.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
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
              required: !0,
              description: "Label text of the button.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description:
                "Resting elevation of the card which controls the drop shadow.",
              defaultValue: { value: "2", computed: !1 },
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the `Card`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Content of the `CardActions`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description: "@internal",
            },
            total: {
              flowType: { name: "number" },
              required: !1,
              description: "@internal",
            },
            siblings: {
              flowType: {
                name: "Array",
                elements: [{ name: "string" }],
                raw: "Array<string>",
              },
              required: !1,
              description: "@internal",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description: "@internal",
            },
            total: {
              flowType: { name: "number" },
              required: !1,
              description: "@internal",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Whether checkbox is checked.",
            },
            disabled: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether checkbox is disabled.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            uncheckedColor: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for unchecked checkbox.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for checkbox.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Text content of the `Chip`.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !1,
              description: "Icon to display for the `Chip`.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            onDelete: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description:
                "Function to execute on delete. The delete button appears only when this prop is specified.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description:
                "Determines whether clicking outside the dialog dismiss it.",
              defaultValue: { value: "true", computed: !1 },
            },
            onDismiss: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !0,
              description:
                "Callback that is called when the user dismisses the dialog.",
            },
            visible: {
              flowType: { name: "boolean" },
              required: !0,
              description: "Determines Whether the dialog is visible.",
              defaultValue: { value: "false", computed: !1 },
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the `Dialog`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Content of the `DialogActions`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Content of the `DialogContent`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Content of the `DialogScrollArea`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Title text for the `DialogTitle`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description: "Whether divider has a left inset.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "The label text of the item.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !1,
              description: "Icon to display for the `DrawerItem`.",
            },
            active: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether to highlight the drawer item as active.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for the drawer text and icon.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description: "Title to show as the header for the section.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the `DrawerSection`.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Icon to display for the `FAB`.",
            },
            label: {
              flowType: { name: "string" },
              required: !1,
              description: "Optional label for extended `FAB`.",
            },
            small: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.",
            },
            dark: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Icon color of button, a dark button will render light text and vice-versa.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for the `FAB`.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
                        {
                          key: "icon",
                          value: { name: "string", required: !0 },
                        },
                        {
                          key: "label",
                          value: { name: "string", required: !1 },
                        },
                        {
                          key: "color",
                          value: { name: "string", required: !1 },
                        },
                        {
                          key: "onPress",
                          value: {
                            name: "signature",
                            type: "function",
                            raw: "() => mixed",
                            signature: {
                              arguments: [],
                              return: { name: "mixed" },
                            },
                            required: !0,
                          },
                        },
                      ],
                    },
                  },
                ],
                raw: "Array<{\n  icon: string,\n  label?: string,\n  color?: string,\n  onPress: () => mixed,\n}>",
              },
              required: !0,
              description:
                "Action items to display in the form of a speed dial.\nAn action item should contain the following properties:\n- `icon`: icon to display (required)\n- `label`: optional label text\n- `color`: custom icon color of the action item\n- `onPress`: callback that is called when `FAB` is pressed (required)",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !0,
              description:
                "Icon to display for the `FAB`.\nYou can toggle it based on whether the speed dial is open to display a different icon.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom icon color for the `FAB`.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on pressing the `FAB`.",
            },
            open: {
              flowType: { name: "boolean" },
              required: !0,
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
                              value: { name: "boolean", required: !0 },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "mixed" },
                },
              },
              required: !0,
              description:
                "Callback which is called on opening and closing the speed dial.\nThe open state needs to be updated when it's called, otherwise the change is dropped.",
            },
            style: {
              flowType: { name: "any" },
              required: !1,
              description:
                "Style for the group. You can use it to pass additional styles if you need.\nFor example, you can set an additional margin if you have a tab bar at the bottom.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Type of the helper text.",
              defaultValue: { value: "'info'", computed: !1 },
            },
            visible: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether to display the helper text.",
              defaultValue: { value: "true", computed: !1 },
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Text content of the HelperText.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Title text for the list accordion.",
            },
            description: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !1,
              description: "Description text for the list accordion.",
            },
            icon: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !1,
              description: "Icon to display for the `ListAccordion`.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the section.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
              description: "@optional",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Title text for the list item.",
            },
            description: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !1,
              description: "Description text for the list item.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !1,
              description: "Icon to display for the `ListItem`.",
            },
            avatar: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !1,
              description: "Component to display as avatar image.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
              description: "@optional",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description: "Title text for the section.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the section.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
              description: "@optional",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
                          value: { name: "boolean", required: !1 },
                        },
                        {
                          key: "onDismiss",
                          value: {
                            name: "signature",
                            type: "function",
                            raw: "() => mixed",
                            signature: {
                              arguments: [],
                              return: { name: "mixed" },
                            },
                            required: !0,
                          },
                        },
                        {
                          key: "visible",
                          value: { name: "boolean", required: !0 },
                        },
                        {
                          key: "children",
                          value: {
                            name: "ReactNode",
                            raw: "React.Node",
                            required: !0,
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
                          value: { name: "unknown", required: !0 },
                        },
                        {
                          key: "rendered",
                          value: { name: "boolean", required: !0 },
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
              required: !1,
              description:
                "Determines whether clicking outside the modal dismiss it.",
              defaultValue: { value: "true", computed: !1 },
            },
            onDismiss: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !0,
              description:
                "Callback that is called when the user dismisses the modal.",
            },
            visible: {
              flowType: { name: "boolean" },
              required: !0,
              description: "Determines Whether the modal is visible.",
              defaultValue: { value: "false", computed: !1 },
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
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
              required: !0,
              description: "Content of the `Paper`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !0,
              description: "Progress value (between 0 and 1).",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Color of the progress bar.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Value of the radio button",
            },
            checked: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether radio is checked.",
            },
            disabled: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether radio is disabled.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            uncheckedColor: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for unchecked radio.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for radio.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Function to execute on selection change.",
            },
            value: {
              flowType: { name: "string" },
              required: !0,
              description: "Value of the currently selected radio button.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
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
              required: !1,
              description: "Hint text shown when the input is empty.",
            },
            value: {
              flowType: { name: "string" },
              required: !0,
              description: "The value of the text input.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !1,
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
              required: !1,
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
              required: !1,
              description:
                "Callback to execute if we want the left icon to act as button.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !0,
              description: "Whether the Snackbar is currently visible.",
            },
            action: {
              flowType: {
                name: "signature",
                type: "object",
                raw: "{\n  label: string,\n  onPress: () => mixed,\n}",
                signature: {
                  properties: [
                    { key: "label", value: { name: "string", required: !0 } },
                    {
                      key: "onPress",
                      value: {
                        name: "signature",
                        type: "function",
                        raw: "() => mixed",
                        signature: { arguments: [], return: { name: "mixed" } },
                        required: !0,
                      },
                    },
                  ],
                },
              },
              required: !1,
              description:
                "Label and press callback for the action button. It should contain the following properties:\n- `label` - Label of the action button\n- `onPress` - Callback that is called when action button is pressed.",
            },
            duration: {
              flowType: { name: "number" },
              required: !1,
              description: "The duration for which the Snackbar is shown.",
              defaultValue: { value: "3500", computed: !1 },
            },
            onDismiss: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !0,
              description:
                "Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Text content of the Snackbar.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description: "Disable toggling the switch.",
            },
            value: {
              flowType: { name: "boolean" },
              required: !1,
              description:
                "Value of the switch, true means 'on', false means 'off'.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for switch.",
            },
            onValueChange: {
              flowType: { name: "Function" },
              required: !1,
              description:
                "Callback called with the new value when it changes.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description:
                "If true, user won't be able to interact with the component.",
              defaultValue: { value: "false", computed: !1 },
            },
            label: {
              flowType: { name: "string" },
              required: !1,
              description: "The text to use for the floating label.",
            },
            placeholder: {
              flowType: { name: "string" },
              required: !1,
              description: "Placeholder for the input.",
            },
            error: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether to style the TextInput with error style.",
              defaultValue: { value: "false", computed: !1 },
            },
            onChangeText: {
              flowType: { name: "Function" },
              required: !1,
              description:
                "Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.",
            },
            underlineColor: {
              flowType: { name: "string" },
              required: !1,
              description: "Underline color of the input.",
            },
            selectionColor: {
              flowType: { name: "string" },
              required: !1,
              description:
                "Color for the text selection background. Defaults to the theme's primary color.",
            },
            multiline: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether the input can have multiple lines.",
              defaultValue: { value: "false", computed: !1 },
            },
            numberOfLines: {
              flowType: { name: "number" },
              required: !1,
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
              required: !1,
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
              required: !1,
              description:
                "Callback that is called when the text input is blurred.",
            },
            value: {
              flowType: { name: "string" },
              required: !1,
              description: "Value of the text input.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description:
                "Theme color for the toolbar, a dark toolbar will render light text and vice-versa\nChild elements can override this prop independently.",
            },
            statusBarHeight: {
              flowType: { name: "number" },
              required: !1,
              description:
                "Extra padding to add at the top of toolbar to account for translucent status bar.\nThis is automatically handled on iOS including iPhone X.\nIf you are using Android and use Expo, we assume translucent status bar and set a height for status bar automatically.\nPass `0` or a custom value to disable the default behaviour.",
              defaultValue: {
                value:
                  "Platform.select({\n  android: DEFAULT_STATUSBAR_HEIGHT_EXPO,\n  ios:\n    Platform.Version < 11\n      ? DEFAULT_STATUSBAR_HEIGHT_EXPO === undefined\n        ? StatusBar.currentHeight\n        : DEFAULT_STATUSBAR_HEIGHT_EXPO\n      : undefined,\n})",
                computed: !0,
              },
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the `Toolbar`.",
            },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
              description: "@optional",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description:
                "A dark action icon will render a light icon and vice-versa.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for action icon.",
            },
            icon: {
              flowType: { name: "IconSource" },
              required: !0,
              description: "Name of the icon to show.",
            },
            size: {
              flowType: { name: "number" },
              required: !1,
              description: "Optional icon size.",
              defaultValue: { value: "24", computed: !1 },
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
              description:
                "A dark action icon will render a light icon and vice-versa.",
            },
            color: {
              flowType: { name: "string" },
              required: !1,
              description: "Custom color for back icon.",
            },
            onPress: {
              flowType: {
                name: "signature",
                type: "function",
                raw: "() => mixed",
                signature: { arguments: [], return: { name: "mixed" } },
              },
              required: !1,
              description: "Function to execute on press.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
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
              required: !1,
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
              required: !0,
              description: "Text for the title.",
            },
            titleStyle: {
              flowType: { name: "any" },
              required: !1,
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
              required: !1,
              description: "Text for the subtitle.",
            },
            subtitleStyle: {
              flowType: { name: "any" },
              required: !1,
              description: "Style for the subtitle.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
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
              required: !1,
              description:
                "Whether to render the ripple outside the view bounds.",
              defaultValue: { value: "false", computed: !1 },
            },
            background: {
              flowType: { name: "Object" },
              required: !1,
              description:
                "Type of background drawabale to display the feedback.\nhttps://facebook.github.io/react-native/docs/touchablenativefeedback.html#background",
            },
            disabled: {
              flowType: { name: "boolean" },
              required: !1,
              description: "Whether to prevent interaction with the touchable.",
            },
            onPress: {
              flowType: { name: "Function", nullable: !0 },
              required: !1,
              description:
                "Function to execute on press. If not set, will cause the touchable to be disabled.",
            },
            rippleColor: {
              flowType: { name: "string" },
              required: !1,
              description: "Color of the ripple effect.",
            },
            underlayColor: {
              flowType: { name: "string" },
              required: !1,
              description: "Color of the underlay for the highlight effect.",
            },
            children: {
              flowType: { name: "ReactNode", raw: "React.Node" },
              required: !0,
              description: "Content of the `TouchableRipple`.",
            },
            style: { flowType: { name: "any" }, required: !1, description: "" },
            theme: {
              flowType: { name: "Theme" },
              required: !0,
              description: "@optional",
            },
          },
        },
        type: "component",
      },
    ];
  },
  "./dist/1.0/app.src.js": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("./node_modules/react/index.js"),
      o = n.n(r),
      i = n("./node_modules/react-dom/index.js"),
      a = n.n(i),
      s = n("./node_modules/redbox-react/lib/index.js"),
      l = n.n(s),
      c = n("./node_modules/component-docs/dist/templates/App.js"),
      u = n.n(c),
      p = n("./node_modules/component-docs/dist/templates/Layout.js"),
      d = n.n(p),
      f = n("./dist/1.0/app.data.js"),
      m = n.n(f),
      h =
        (n("./node_modules/component-docs/dist/styles/reset.css"),
        n("./node_modules/component-docs/dist/styles/globals.css"),
        n("./assets/styles.css"),
        document.getElementById("root"));
    (function () {
      try {
        a.a.hydrate(
          o.a.createElement(u.a, {
            name: window.__INITIAL_PATH__,
            data: m.a,
            layout: d.a,
          }),
          h,
        );
      } catch (e) {
        a.a.render(o.a.createElement(l.a, { error: e }), h);
      }
    })();
  },
  "./node_modules/array-differ/index.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [].concat.apply([], [].slice.call(arguments, 1));
      return e.filter(function (e) {
        return -1 === t.indexOf(e);
      });
    };
  },
  "./node_modules/autolinker/dist/Autolinker.js": function (e, t, n) {
    var r, o;
    (o = this),
      void 0 ===
        (r = function () {
          return (o.Autolinker =
            (((e = function (t) {
              e.Util.assign(this, t);
            }).prototype = {
              constructor: e,
              urls: !0,
              email: !0,
              twitter: !0,
              newWindow: !0,
              stripPrefix: !0,
              truncate: void 0,
              className: "",
              htmlParser: void 0,
              matchParser: void 0,
              tagBuilder: void 0,
              link: function (e) {
                for (
                  var t = this.getHtmlParser().parse(e),
                    n = 0,
                    r = [],
                    o = 0,
                    i = t.length;
                  o < i;
                  o++
                ) {
                  var a = t[o],
                    s = a.getType(),
                    l = a.getText();
                  if ("element" === s)
                    "a" === a.getTagName() &&
                      (a.isClosing() ? (n = Math.max(n - 1, 0)) : n++),
                      r.push(l);
                  else if ("entity" === s) r.push(l);
                  else if (0 === n) {
                    var c = this.linkifyStr(l);
                    r.push(c);
                  } else r.push(l);
                }
                return r.join("");
              },
              linkifyStr: function (e) {
                return this.getMatchParser().replace(
                  e,
                  this.createMatchReturnVal,
                  this,
                );
              },
              createMatchReturnVal: function (t) {
                var n;
                return (
                  this.replaceFn && (n = this.replaceFn.call(this, this, t)),
                  "string" == typeof n
                    ? n
                    : !1 === n
                      ? t.getMatchedText()
                      : n instanceof e.HtmlTag
                        ? n.toString()
                        : this.getTagBuilder().build(t).toString()
                );
              },
              getHtmlParser: function () {
                var t = this.htmlParser;
                return (
                  t || (t = this.htmlParser = new e.htmlParser.HtmlParser()), t
                );
              },
              getMatchParser: function () {
                var t = this.matchParser;
                return (
                  t ||
                    (t = this.matchParser =
                      new e.matchParser.MatchParser({
                        urls: this.urls,
                        email: this.email,
                        twitter: this.twitter,
                        stripPrefix: this.stripPrefix,
                      })),
                  t
                );
              },
              getTagBuilder: function () {
                var t = this.tagBuilder;
                return (
                  t ||
                    (t = this.tagBuilder =
                      new e.AnchorTagBuilder({
                        newWindow: this.newWindow,
                        truncate: this.truncate,
                        className: this.className,
                      })),
                  t
                );
              },
            }),
            (e.link = function (t, n) {
              return new e(n).link(t);
            }),
            (e.match = {}),
            (e.htmlParser = {}),
            (e.matchParser = {}),
            (e.Util = {
              abstractMethod: function () {
                throw "abstract";
              },
              assign: function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e;
              },
              extend: function (t, n) {
                var r,
                  o = t.prototype,
                  i = function () {};
                i.prototype = o;
                var a = ((r = n.hasOwnProperty("constructor")
                  ? n.constructor
                  : function () {
                      o.constructor.apply(this, arguments);
                    }).prototype = new i());
                return (
                  (a.constructor = r),
                  (a.superclass = o),
                  delete n.constructor,
                  e.Util.assign(a, n),
                  r
                );
              },
              ellipsis: function (e, t, n) {
                return (
                  e.length > t &&
                    ((n = null == n ? ".." : n),
                    (e = e.substring(0, t - n.length) + n)),
                  e
                );
              },
              indexOf: function (e, t) {
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              splitAndCapture: function (e, t) {
                if (!t.global)
                  throw new Error("`splitRegex` must have the 'g' flag set");
                for (var n, r = [], o = 0; (n = t.exec(e)); )
                  r.push(e.substring(o, n.index)),
                    r.push(n[0]),
                    (o = n.index + n[0].length);
                return r.push(e.substring(o)), r;
              },
            }),
            (e.HtmlTag = e.Util.extend(Object, {
              whitespaceRegex: /\s+/,
              constructor: function (t) {
                e.Util.assign(this, t),
                  (this.innerHtml = this.innerHtml || this.innerHTML);
              },
              setTagName: function (e) {
                return (this.tagName = e), this;
              },
              getTagName: function () {
                return this.tagName || "";
              },
              setAttr: function (e, t) {
                return (this.getAttrs()[e] = t), this;
              },
              getAttr: function (e) {
                return this.getAttrs()[e];
              },
              setAttrs: function (t) {
                var n = this.getAttrs();
                return e.Util.assign(n, t), this;
              },
              getAttrs: function () {
                return this.attrs || (this.attrs = {});
              },
              setClass: function (e) {
                return this.setAttr("class", e);
              },
              addClass: function (t) {
                for (
                  var n,
                    r = this.getClass(),
                    o = this.whitespaceRegex,
                    i = e.Util.indexOf,
                    a = r ? r.split(o) : [],
                    s = t.split(o);
                  (n = s.shift());

                )
                  -1 === i(a, n) && a.push(n);
                return (this.getAttrs().class = a.join(" ")), this;
              },
              removeClass: function (t) {
                for (
                  var n,
                    r = this.getClass(),
                    o = this.whitespaceRegex,
                    i = e.Util.indexOf,
                    a = r ? r.split(o) : [],
                    s = t.split(o);
                  a.length && (n = s.shift());

                ) {
                  var l = i(a, n);
                  -1 !== l && a.splice(l, 1);
                }
                return (this.getAttrs().class = a.join(" ")), this;
              },
              getClass: function () {
                return this.getAttrs().class || "";
              },
              hasClass: function (e) {
                return (
                  -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ")
                );
              },
              setInnerHtml: function (e) {
                return (this.innerHtml = e), this;
              },
              getInnerHtml: function () {
                return this.innerHtml || "";
              },
              toString: function () {
                var e = this.getTagName(),
                  t = this.buildAttrsStr();
                return [
                  "<",
                  e,
                  (t = t ? " " + t : ""),
                  ">",
                  this.getInnerHtml(),
                  "</",
                  e,
                  ">",
                ].join("");
              },
              buildAttrsStr: function () {
                if (!this.attrs) return "";
                var e = this.getAttrs(),
                  t = [];
                for (var n in e)
                  e.hasOwnProperty(n) && t.push(n + '="' + e[n] + '"');
                return t.join(" ");
              },
            })),
            (e.AnchorTagBuilder = e.Util.extend(Object, {
              constructor: function (t) {
                e.Util.assign(this, t);
              },
              build: function (t) {
                return new e.HtmlTag({
                  tagName: "a",
                  attrs: this.createAttrs(t.getType(), t.getAnchorHref()),
                  innerHtml: this.processAnchorText(t.getAnchorText()),
                });
              },
              createAttrs: function (e, t) {
                var n = { href: t },
                  r = this.createCssClass(e);
                return (
                  r && (n.class = r), this.newWindow && (n.target = "_blank"), n
                );
              },
              createCssClass: function (e) {
                var t = this.className;
                return t ? t + " " + t + "-" + e : "";
              },
              processAnchorText: function (e) {
                return (e = this.doTruncate(e));
              },
              doTruncate: function (t) {
                return e.Util.ellipsis(
                  t,
                  this.truncate || Number.POSITIVE_INFINITY,
                );
              },
            })),
            (e.htmlParser.HtmlParser = e.Util.extend(Object, {
              htmlRegex:
                ((r = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/),
                (i =
                  /[^\s\0"'>\/=\x01-\x1F\x7F]+/.source +
                  "(?:\\s*=\\s*" +
                  r.source +
                  ")?"),
                new RegExp(
                  [
                    "(?:",
                    "<(!DOCTYPE)",
                    "(?:",
                    "\\s+",
                    "(?:",
                    i,
                    "|",
                    r.source + ")",
                    ")*",
                    ">",
                    ")",
                    "|",
                    "(?:",
                    "<(/)?",
                    "(" + /[0-9a-zA-Z][0-9a-zA-Z:]*/.source + ")",
                    "(?:",
                    "\\s+",
                    i,
                    ")*",
                    "\\s*/?",
                    ">",
                    ")",
                  ].join(""),
                  "gi",
                )),
              htmlCharacterEntitiesRegex:
                /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
              parse: function (e) {
                for (
                  var t, n, r = this.htmlRegex, o = 0, i = [];
                  null !== (t = r.exec(e));

                ) {
                  var a = t[0],
                    s = t[1] || t[3],
                    l = !!t[2],
                    c = e.substring(o, t.index);
                  c &&
                    ((n = this.parseTextAndEntityNodes(c)), i.push.apply(i, n)),
                    i.push(this.createElementNode(a, s, l)),
                    (o = t.index + a.length);
                }
                if (o < e.length) {
                  var u = e.substring(o);
                  u &&
                    ((n = this.parseTextAndEntityNodes(u)), i.push.apply(i, n));
                }
                return i;
              },
              parseTextAndEntityNodes: function (t) {
                for (
                  var n = [],
                    r = e.Util.splitAndCapture(
                      t,
                      this.htmlCharacterEntitiesRegex,
                    ),
                    o = 0,
                    i = r.length;
                  o < i;
                  o += 2
                ) {
                  var a = r[o],
                    s = r[o + 1];
                  a && n.push(this.createTextNode(a)),
                    s && n.push(this.createEntityNode(s));
                }
                return n;
              },
              createElementNode: function (t, n, r) {
                return new e.htmlParser.ElementNode({
                  text: t,
                  tagName: n.toLowerCase(),
                  closing: r,
                });
              },
              createEntityNode: function (t) {
                return new e.htmlParser.EntityNode({ text: t });
              },
              createTextNode: function (t) {
                return new e.htmlParser.TextNode({ text: t });
              },
            })),
            (e.htmlParser.HtmlNode = e.Util.extend(Object, {
              text: "",
              constructor: function (t) {
                e.Util.assign(this, t);
              },
              getType: e.Util.abstractMethod,
              getText: function () {
                return this.text;
              },
            })),
            (e.htmlParser.ElementNode = e.Util.extend(e.htmlParser.HtmlNode, {
              tagName: "",
              closing: !1,
              getType: function () {
                return "element";
              },
              getTagName: function () {
                return this.tagName;
              },
              isClosing: function () {
                return this.closing;
              },
            })),
            (e.htmlParser.EntityNode = e.Util.extend(e.htmlParser.HtmlNode, {
              getType: function () {
                return "entity";
              },
            })),
            (e.htmlParser.TextNode = e.Util.extend(e.htmlParser.HtmlNode, {
              getType: function () {
                return "text";
              },
            })),
            (e.matchParser.MatchParser = e.Util.extend(Object, {
              urls: !0,
              email: !0,
              twitter: !0,
              stripPrefix: !0,
              matcherRegex:
                ((t = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/),
                (n =
                  /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/),
                new RegExp(
                  [
                    "(",
                    /(^|[^\w])@(\w{1,15})/.source,
                    ")",
                    "|",
                    "(",
                    /(?:[\-;:&=\+\$,\w\.]+@)/.source,
                    t.source,
                    n.source,
                    ")",
                    "|",
                    "(",
                    "(?:",
                    "(",
                    /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/
                      .source,
                    t.source,
                    ")",
                    "|",
                    "(?:",
                    "(.?//)?",
                    /(?:www\.)/.source,
                    t.source,
                    ")",
                    "|",
                    "(?:",
                    "(.?//)?",
                    t.source,
                    n.source,
                    ")",
                    ")",
                    "(?:" +
                      /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/
                        .source +
                      ")?",
                    ")",
                  ].join(""),
                  "gi",
                )),
              charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
              constructor: function (t) {
                e.Util.assign(this, t),
                  (this.matchValidator = new e.MatchValidator());
              },
              replace: function (e, t, n) {
                var r = this;
                return e.replace(
                  this.matcherRegex,
                  function (e, o, i, a, s, l, c, u, p) {
                    var d = r.processCandidateMatch(e, o, i, a, s, l, c, u, p);
                    if (d) {
                      var f = t.call(n, d.match);
                      return d.prefixStr + f + d.suffixStr;
                    }
                    return e;
                  },
                );
              },
              processCandidateMatch: function (t, n, r, o, i, a, s, l, c) {
                var u,
                  p = l || c,
                  d = "",
                  f = "";
                if (
                  (n && !this.twitter) ||
                  (i && !this.email) ||
                  (a && !this.urls) ||
                  !this.matchValidator.isValidMatch(a, s, p)
                )
                  return null;
                if (
                  (this.matchHasUnbalancedClosingParen(t) &&
                    ((t = t.substr(0, t.length - 1)), (f = ")")),
                  i)
                )
                  u = new e.match.Email({ matchedText: t, email: i });
                else if (n)
                  r && ((d = r), (t = t.slice(1))),
                    (u = new e.match.Twitter({
                      matchedText: t,
                      twitterHandle: o,
                    }));
                else {
                  if (p) {
                    var m =
                      p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                    m && ((d = m), (t = t.slice(1)));
                  }
                  u = new e.match.Url({
                    matchedText: t,
                    url: t,
                    protocolUrlMatch: !!s,
                    protocolRelativeMatch: !!p,
                    stripPrefix: this.stripPrefix,
                  });
                }
                return { prefixStr: d, suffixStr: f, match: u };
              },
              matchHasUnbalancedClosingParen: function (e) {
                if (")" === e.charAt(e.length - 1)) {
                  var t = e.match(/\(/g),
                    n = e.match(/\)/g);
                  if (((t && t.length) || 0) < ((n && n.length) || 0))
                    return !0;
                }
                return !1;
              },
            })),
            (e.MatchValidator = e.Util.extend(Object, {
              invalidProtocolRelMatchRegex: /^[\w]\/\//,
              hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
              uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
              hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
              isValidMatch: function (e, t, n) {
                return !(
                  (t && !this.isValidUriScheme(t)) ||
                  this.urlMatchDoesNotHaveProtocolOrDot(e, t) ||
                  this.urlMatchDoesNotHaveAtLeastOneWordChar(e, t) ||
                  this.isInvalidProtocolRelativeMatch(n)
                );
              },
              isValidUriScheme: function (e) {
                var t = e.match(this.uriSchemeRegex)[0].toLowerCase();
                return "javascript:" !== t && "vbscript:" !== t;
              },
              urlMatchDoesNotHaveProtocolOrDot: function (e, t) {
                return !(
                  !e ||
                  (t && this.hasFullProtocolRegex.test(t)) ||
                  -1 !== e.indexOf(".")
                );
              },
              urlMatchDoesNotHaveAtLeastOneWordChar: function (e, t) {
                return !(
                  !e ||
                  !t ||
                  this.hasWordCharAfterProtocolRegex.test(e)
                );
              },
              isInvalidProtocolRelativeMatch: function (e) {
                return !!e && this.invalidProtocolRelMatchRegex.test(e);
              },
            })),
            (e.match.Match = e.Util.extend(Object, {
              constructor: function (t) {
                e.Util.assign(this, t);
              },
              getType: e.Util.abstractMethod,
              getMatchedText: function () {
                return this.matchedText;
              },
              getAnchorHref: e.Util.abstractMethod,
              getAnchorText: e.Util.abstractMethod,
            })),
            (e.match.Email = e.Util.extend(e.match.Match, {
              getType: function () {
                return "email";
              },
              getEmail: function () {
                return this.email;
              },
              getAnchorHref: function () {
                return "mailto:" + this.email;
              },
              getAnchorText: function () {
                return this.email;
              },
            })),
            (e.match.Twitter = e.Util.extend(e.match.Match, {
              getType: function () {
                return "twitter";
              },
              getTwitterHandle: function () {
                return this.twitterHandle;
              },
              getAnchorHref: function () {
                return "https://twitter.com/" + this.twitterHandle;
              },
              getAnchorText: function () {
                return "@" + this.twitterHandle;
              },
            })),
            (e.match.Url = e.Util.extend(e.match.Match, {
              urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
              protocolRelativeRegex: /^\/\//,
              protocolPrepended: !1,
              getType: function () {
                return "url";
              },
              getUrl: function () {
                var e = this.url;
                return (
                  this.protocolRelativeMatch ||
                    this.protocolUrlMatch ||
                    this.protocolPrepended ||
                    ((e = this.url = "http://" + e),
                    (this.protocolPrepended = !0)),
                  e
                );
              },
              getAnchorHref: function () {
                return this.getUrl().replace(/&amp;/g, "&");
              },
              getAnchorText: function () {
                var e = this.getUrl();
                return (
                  this.protocolRelativeMatch &&
                    (e = this.stripProtocolRelativePrefix(e)),
                  this.stripPrefix && (e = this.stripUrlPrefix(e)),
                  (e = this.removeTrailingSlash(e))
                );
              },
              stripUrlPrefix: function (e) {
                return e.replace(this.urlPrefixRegex, "");
              },
              stripProtocolRelativePrefix: function (e) {
                return e.replace(this.protocolRelativeRegex, "");
              },
              removeTrailingSlash: function (e) {
                return (
                  "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
                );
              },
            })),
            e));
          var e, t, n, r, i;
        }.apply(t, [])) || (e.exports = r);
  },
  "./node_modules/color-convert/conversions.js": function (e, t, n) {
    var r = n("./node_modules/color-name/index.js"),
      o = {};
    for (var i in r) r.hasOwnProperty(i) && (o[r[i]] = i);
    var a = (e.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    });
    for (var s in a)
      if (a.hasOwnProperty(s)) {
        if (!("channels" in a[s]))
          throw new Error("missing channels property: " + s);
        if (!("labels" in a[s]))
          throw new Error("missing channel labels property: " + s);
        if (a[s].labels.length !== a[s].channels)
          throw new Error("channel and label counts mismatch: " + s);
        var l = a[s].channels,
          c = a[s].labels;
        delete a[s].channels,
          delete a[s].labels,
          Object.defineProperty(a[s], "channels", { value: l }),
          Object.defineProperty(a[s], "labels", { value: c });
      }
    (a.rgb.hsl = function (e) {
      var t,
        n,
        r = e[0] / 255,
        o = e[1] / 255,
        i = e[2] / 255,
        a = Math.min(r, o, i),
        s = Math.max(r, o, i),
        l = s - a;
      return (
        s === a
          ? (t = 0)
          : r === s
            ? (t = (o - i) / l)
            : o === s
              ? (t = 2 + (i - r) / l)
              : i === s && (t = 4 + (r - o) / l),
        (t = Math.min(60 * t, 360)) < 0 && (t += 360),
        (n = (a + s) / 2),
        [
          t,
          100 * (s === a ? 0 : n <= 0.5 ? l / (s + a) : l / (2 - s - a)),
          100 * n,
        ]
      );
    }),
      (a.rgb.hsv = function (e) {
        var t,
          n,
          r = e[0],
          o = e[1],
          i = e[2],
          a = Math.min(r, o, i),
          s = Math.max(r, o, i),
          l = s - a;
        return (
          (n = 0 === s ? 0 : ((l / s) * 1e3) / 10),
          s === a
            ? (t = 0)
            : r === s
              ? (t = (o - i) / l)
              : o === s
                ? (t = 2 + (i - r) / l)
                : i === s && (t = 4 + (r - o) / l),
          (t = Math.min(60 * t, 360)) < 0 && (t += 360),
          [t, n, ((s / 255) * 1e3) / 10]
        );
      }),
      (a.rgb.hwb = function (e) {
        var t = e[0],
          n = e[1],
          r = e[2];
        return [
          a.rgb.hsl(e)[0],
          100 * ((1 / 255) * Math.min(t, Math.min(n, r))),
          100 * (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))),
        ];
      }),
      (a.rgb.cmyk = function (e) {
        var t,
          n = e[0] / 255,
          r = e[1] / 255,
          o = e[2] / 255;
        return [
          100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0),
          100 * ((1 - r - t) / (1 - t) || 0),
          100 * ((1 - o - t) / (1 - t) || 0),
          100 * t,
        ];
      }),
      (a.rgb.keyword = function (e) {
        var t = o[e];
        if (t) return t;
        var n,
          i,
          a,
          s = 1 / 0;
        for (var l in r)
          if (r.hasOwnProperty(l)) {
            var c = r[l],
              u =
                ((i = e),
                (a = c),
                Math.pow(i[0] - a[0], 2) +
                  Math.pow(i[1] - a[1], 2) +
                  Math.pow(i[2] - a[2], 2));
            u < s && ((s = u), (n = l));
          }
        return n;
      }),
      (a.keyword.rgb = function (e) {
        return r[e];
      }),
      (a.rgb.xyz = function (e) {
        var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255;
        return [
          100 *
            (0.4124 *
              (t =
                t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92) +
              0.3576 *
                (n =
                  n > 0.04045
                    ? Math.pow((n + 0.055) / 1.055, 2.4)
                    : n / 12.92) +
              0.1805 *
                (r =
                  r > 0.04045
                    ? Math.pow((r + 0.055) / 1.055, 2.4)
                    : r / 12.92)),
          100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
          100 * (0.0193 * t + 0.1192 * n + 0.9505 * r),
        ];
      }),
      (a.rgb.lab = function (e) {
        var t = a.rgb.xyz(e),
          n = t[0],
          r = t[1],
          o = t[2];
        return (
          (r /= 100),
          (o /= 108.883),
          (n =
            (n /= 95.047) > 0.008856
              ? Math.pow(n, 1 / 3)
              : 7.787 * n + 16 / 116),
          [
            116 *
              (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) -
              16,
            500 * (n - r),
            200 *
              (r -
                (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116)),
          ]
        );
      }),
      (a.hsl.rgb = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a = e[0] / 360,
          s = e[1] / 100,
          l = e[2] / 100;
        if (0 === s) return [(i = 255 * l), i, i];
        (t = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
          (o = [0, 0, 0]);
        for (var c = 0; c < 3; c++)
          (r = a + (1 / 3) * -(c - 1)) < 0 && r++,
            r > 1 && r--,
            (i =
              6 * r < 1
                ? t + 6 * (n - t) * r
                : 2 * r < 1
                  ? n
                  : 3 * r < 2
                    ? t + (n - t) * (2 / 3 - r) * 6
                    : t),
            (o[c] = 255 * i);
        return o;
      }),
      (a.hsl.hsv = function (e) {
        var t = e[0],
          n = e[1] / 100,
          r = e[2] / 100,
          o = n,
          i = Math.max(r, 0.01);
        return (
          (n *= (r *= 2) <= 1 ? r : 2 - r),
          (o *= i <= 1 ? i : 2 - i),
          [
            t,
            100 * (0 === r ? (2 * o) / (i + o) : (2 * n) / (r + n)),
            100 * ((r + n) / 2),
          ]
        );
      }),
      (a.hsv.rgb = function (e) {
        var t = e[0] / 60,
          n = e[1] / 100,
          r = e[2] / 100,
          o = Math.floor(t) % 6,
          i = t - Math.floor(t),
          a = 255 * r * (1 - n),
          s = 255 * r * (1 - n * i),
          l = 255 * r * (1 - n * (1 - i));
        switch (((r *= 255), o)) {
          case 0:
            return [r, l, a];
          case 1:
            return [s, r, a];
          case 2:
            return [a, r, l];
          case 3:
            return [a, s, r];
          case 4:
            return [l, a, r];
          case 5:
            return [r, a, s];
        }
      }),
      (a.hsv.hsl = function (e) {
        var t,
          n,
          r,
          o = e[0],
          i = e[1] / 100,
          a = e[2] / 100,
          s = Math.max(a, 0.01);
        return (
          (r = (2 - i) * a),
          (n = i * s),
          [
            o,
            100 * (n = (n /= (t = (2 - i) * s) <= 1 ? t : 2 - t) || 0),
            100 * (r /= 2),
          ]
        );
      }),
      (a.hwb.rgb = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          l = e[0] / 360,
          c = e[1] / 100,
          u = e[2] / 100,
          p = c + u;
        switch (
          (p > 1 && ((c /= p), (u /= p)),
          (n = 1 - u),
          (r = 6 * l - (t = Math.floor(6 * l))),
          0 != (1 & t) && (r = 1 - r),
          (o = c + r * (n - c)),
          t)
        ) {
          default:
          case 6:
          case 0:
            (i = n), (a = o), (s = c);
            break;
          case 1:
            (i = o), (a = n), (s = c);
            break;
          case 2:
            (i = c), (a = n), (s = o);
            break;
          case 3:
            (i = c), (a = o), (s = n);
            break;
          case 4:
            (i = o), (a = c), (s = n);
            break;
          case 5:
            (i = n), (a = c), (s = o);
        }
        return [255 * i, 255 * a, 255 * s];
      }),
      (a.cmyk.rgb = function (e) {
        var t = e[0] / 100,
          n = e[1] / 100,
          r = e[2] / 100,
          o = e[3] / 100;
        return [
          255 * (1 - Math.min(1, t * (1 - o) + o)),
          255 * (1 - Math.min(1, n * (1 - o) + o)),
          255 * (1 - Math.min(1, r * (1 - o) + o)),
        ];
      }),
      (a.xyz.rgb = function (e) {
        var t,
          n,
          r,
          o = e[0] / 100,
          i = e[1] / 100,
          a = e[2] / 100;
        return (
          (n = -0.9689 * o + 1.8758 * i + 0.0415 * a),
          (r = 0.0557 * o + -0.204 * i + 1.057 * a),
          (t =
            (t = 3.2406 * o + -1.5372 * i + -0.4986 * a) > 0.0031308
              ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
              : 12.92 * t),
          (n =
            n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
          (r =
            r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
          [
            255 * (t = Math.min(Math.max(0, t), 1)),
            255 * (n = Math.min(Math.max(0, n), 1)),
            255 * (r = Math.min(Math.max(0, r), 1)),
          ]
        );
      }),
      (a.xyz.lab = function (e) {
        var t = e[0],
          n = e[1],
          r = e[2];
        return (
          (n /= 100),
          (r /= 108.883),
          (t =
            (t /= 95.047) > 0.008856
              ? Math.pow(t, 1 / 3)
              : 7.787 * t + 16 / 116),
          [
            116 *
              (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
              16,
            500 * (t - n),
            200 *
              (n -
                (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
          ]
        );
      }),
      (a.lab.xyz = function (e) {
        var t,
          n,
          r,
          o = e[0],
          i = e[1],
          a = e[2];
        (t = i / 500 + (n = (o + 16) / 116)), (r = n - a / 200);
        var s = Math.pow(n, 3),
          l = Math.pow(t, 3),
          c = Math.pow(r, 3);
        return (
          (n = s > 0.008856 ? s : (n - 16 / 116) / 7.787),
          (t = l > 0.008856 ? l : (t - 16 / 116) / 7.787),
          (r = c > 0.008856 ? c : (r - 16 / 116) / 7.787),
          [(t *= 95.047), (n *= 100), (r *= 108.883)]
        );
      }),
      (a.lab.lch = function (e) {
        var t,
          n = e[0],
          r = e[1],
          o = e[2];
        return (
          (t = (360 * Math.atan2(o, r)) / 2 / Math.PI) < 0 && (t += 360),
          [n, Math.sqrt(r * r + o * o), t]
        );
      }),
      (a.lch.lab = function (e) {
        var t,
          n = e[0],
          r = e[1];
        return (
          (t = (e[2] / 360) * 2 * Math.PI),
          [n, r * Math.cos(t), r * Math.sin(t)]
        );
      }),
      (a.rgb.ansi16 = function (e) {
        var t = e[0],
          n = e[1],
          r = e[2],
          o = 1 in arguments ? arguments[1] : a.rgb.hsv(e)[2];
        if (0 === (o = Math.round(o / 50))) return 30;
        var i =
          30 +
          ((Math.round(r / 255) << 2) |
            (Math.round(n / 255) << 1) |
            Math.round(t / 255));
        return 2 === o && (i += 60), i;
      }),
      (a.hsv.ansi16 = function (e) {
        return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
      }),
      (a.rgb.ansi256 = function (e) {
        var t = e[0],
          n = e[1],
          r = e[2];
        return t === n && n === r
          ? t < 8
            ? 16
            : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
          : 16 +
              36 * Math.round((t / 255) * 5) +
              6 * Math.round((n / 255) * 5) +
              Math.round((r / 255) * 5);
      }),
      (a.ansi16.rgb = function (e) {
        var t = e % 10;
        if (0 === t || 7 === t)
          return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t];
        var n = 0.5 * (1 + ~~(e > 50));
        return [
          (1 & t) * n * 255,
          ((t >> 1) & 1) * n * 255,
          ((t >> 2) & 1) * n * 255,
        ];
      }),
      (a.ansi256.rgb = function (e) {
        if (e >= 232) {
          var t = 10 * (e - 232) + 8;
          return [t, t, t];
        }
        var n;
        return (
          (e -= 16),
          [
            (Math.floor(e / 36) / 5) * 255,
            (Math.floor((n = e % 36) / 6) / 5) * 255,
            ((n % 6) / 5) * 255,
          ]
        );
      }),
      (a.rgb.hex = function (e) {
        var t = (
          ((255 & Math.round(e[0])) << 16) +
          ((255 & Math.round(e[1])) << 8) +
          (255 & Math.round(e[2]))
        )
          .toString(16)
          .toUpperCase();
        return "000000".substring(t.length) + t;
      }),
      (a.hex.rgb = function (e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        var n = t[0];
        3 === t[0].length &&
          (n = n
            .split("")
            .map(function (e) {
              return e + e;
            })
            .join(""));
        var r = parseInt(n, 16);
        return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
      }),
      (a.rgb.hcg = function (e) {
        var t,
          n,
          r = e[0] / 255,
          o = e[1] / 255,
          i = e[2] / 255,
          a = Math.max(Math.max(r, o), i),
          s = Math.min(Math.min(r, o), i),
          l = a - s;
        return (
          (t = l < 1 ? s / (1 - l) : 0),
          (n =
            l <= 0
              ? 0
              : a === r
                ? ((o - i) / l) % 6
                : a === o
                  ? 2 + (i - r) / l
                  : 4 + (r - o) / l + 4),
          (n /= 6),
          [360 * (n %= 1), 100 * l, 100 * t]
        );
      }),
      (a.hsl.hcg = function (e) {
        var t = e[1] / 100,
          n = e[2] / 100,
          r = 1,
          o = 0;
        return (
          (r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n)) < 1 &&
            (o = (n - 0.5 * r) / (1 - r)),
          [e[0], 100 * r, 100 * o]
        );
      }),
      (a.hsv.hcg = function (e) {
        var t = e[1] / 100,
          n = e[2] / 100,
          r = t * n,
          o = 0;
        return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
      }),
      (a.hcg.rgb = function (e) {
        var t = e[0] / 360,
          n = e[1] / 100,
          r = e[2] / 100;
        if (0 === n) return [255 * r, 255 * r, 255 * r];
        var o,
          i = [0, 0, 0],
          a = (t % 1) * 6,
          s = a % 1,
          l = 1 - s;
        switch (Math.floor(a)) {
          case 0:
            (i[0] = 1), (i[1] = s), (i[2] = 0);
            break;
          case 1:
            (i[0] = l), (i[1] = 1), (i[2] = 0);
            break;
          case 2:
            (i[0] = 0), (i[1] = 1), (i[2] = s);
            break;
          case 3:
            (i[0] = 0), (i[1] = l), (i[2] = 1);
            break;
          case 4:
            (i[0] = s), (i[1] = 0), (i[2] = 1);
            break;
          default:
            (i[0] = 1), (i[1] = 0), (i[2] = l);
        }
        return (
          (o = (1 - n) * r),
          [255 * (n * i[0] + o), 255 * (n * i[1] + o), 255 * (n * i[2] + o)]
        );
      }),
      (a.hcg.hsv = function (e) {
        var t = e[1] / 100,
          n = t + (e[2] / 100) * (1 - t),
          r = 0;
        return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
      }),
      (a.hcg.hsl = function (e) {
        var t = e[1] / 100,
          n = (e[2] / 100) * (1 - t) + 0.5 * t,
          r = 0;
        return (
          n > 0 && n < 0.5
            ? (r = t / (2 * n))
            : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))),
          [e[0], 100 * r, 100 * n]
        );
      }),
      (a.hcg.hwb = function (e) {
        var t = e[1] / 100,
          n = t + (e[2] / 100) * (1 - t);
        return [e[0], 100 * (n - t), 100 * (1 - n)];
      }),
      (a.hwb.hcg = function (e) {
        var t = e[1] / 100,
          n = 1 - e[2] / 100,
          r = n - t,
          o = 0;
        return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
      }),
      (a.apple.rgb = function (e) {
        return [
          (e[0] / 65535) * 255,
          (e[1] / 65535) * 255,
          (e[2] / 65535) * 255,
        ];
      }),
      (a.rgb.apple = function (e) {
        return [
          (e[0] / 255) * 65535,
          (e[1] / 255) * 65535,
          (e[2] / 255) * 65535,
        ];
      }),
      (a.gray.rgb = function (e) {
        return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
      }),
      (a.gray.hsl = a.gray.hsv =
        function (e) {
          return [0, 0, e[0]];
        }),
      (a.gray.hwb = function (e) {
        return [0, 100, e[0]];
      }),
      (a.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
      }),
      (a.gray.lab = function (e) {
        return [e[0], 0, 0];
      }),
      (a.gray.hex = function (e) {
        var t = 255 & Math.round((e[0] / 100) * 255),
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return "000000".substring(n.length) + n;
      }),
      (a.rgb.gray = function (e) {
        return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
      });
  },
  "./node_modules/color-convert/index.js": function (e, t, n) {
    var r = n("./node_modules/color-convert/conversions.js"),
      o = n("./node_modules/color-convert/route.js"),
      i = {};
    Object.keys(r).forEach(function (e) {
      (i[e] = {}),
        Object.defineProperty(i[e], "channels", { value: r[e].channels }),
        Object.defineProperty(i[e], "labels", { value: r[e].labels });
      var t = o(e);
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        (i[e][n] = (function (e) {
          var t = function (t) {
            if (void 0 === t || null === t) return t;
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
            var n = e(t);
            if ("object" == typeof n)
              for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
            return n;
          };
          return "conversion" in e && (t.conversion = e.conversion), t;
        })(r)),
          (i[e][n].raw = (function (e) {
            var t = function (t) {
              return void 0 === t || null === t
                ? t
                : (arguments.length > 1 &&
                    (t = Array.prototype.slice.call(arguments)),
                  e(t));
            };
            return "conversion" in e && (t.conversion = e.conversion), t;
          })(r));
      });
    }),
      (e.exports = i);
  },
  "./node_modules/color-convert/route.js": function (e, t, n) {
    var r = n("./node_modules/color-convert/conversions.js");
    function o(e) {
      var t = (function () {
          for (var e = {}, t = Object.keys(r), n = t.length, o = 0; o < n; o++)
            e[t[o]] = { distance: -1, parent: null };
          return e;
        })(),
        n = [e];
      for (t[e].distance = 0; n.length; )
        for (
          var o = n.pop(), i = Object.keys(r[o]), a = i.length, s = 0;
          s < a;
          s++
        ) {
          var l = i[s],
            c = t[l];
          -1 === c.distance &&
            ((c.distance = t[o].distance + 1), (c.parent = o), n.unshift(l));
        }
      return t;
    }
    function i(e, t) {
      return function (n) {
        return t(e(n));
      };
    }
    function a(e, t) {
      for (
        var n = [t[e].parent, e], o = r[t[e].parent][e], a = t[e].parent;
        t[a].parent;

      )
        n.unshift(t[a].parent),
          (o = i(r[t[a].parent][a], o)),
          (a = t[a].parent);
      return (o.conversion = n), o;
    }
    e.exports = function (e) {
      for (
        var t = o(e), n = {}, r = Object.keys(t), i = r.length, s = 0;
        s < i;
        s++
      ) {
        var l = r[s];
        null !== t[l].parent && (n[l] = a(l, t));
      }
      return n;
    };
  },
  "./node_modules/color-name/index.js": function (e, t, n) {
    "use strict";
    e.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  },
  "./node_modules/color-string/index.js": function (e, t, n) {
    var r = n("./node_modules/color-name/index.js"),
      o = n("./node_modules/simple-swizzle/index.js"),
      i = {};
    for (var a in r) r.hasOwnProperty(a) && (i[r[a]] = a);
    var s = (e.exports = { to: {} });
    function l(e, t, n) {
      return Math.min(Math.max(t, e), n);
    }
    function c(e) {
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t;
    }
    (s.get = function (e) {
      var t, n;
      switch (e.substring(0, 3).toLowerCase()) {
        case "hsl":
          (t = s.get.hsl(e)), (n = "hsl");
          break;
        case "hwb":
          (t = s.get.hwb(e)), (n = "hwb");
          break;
        default:
          (t = s.get.rgb(e)), (n = "rgb");
      }
      return t ? { model: n, value: t } : null;
    }),
      (s.get.rgb = function (e) {
        if (!e) return null;
        var t,
          n,
          o,
          i = [0, 0, 0, 1];
        if ((t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
          for (o = t[2], t = t[1], n = 0; n < 3; n++) {
            var a = 2 * n;
            i[n] = parseInt(t.slice(a, a + 2), 16);
          }
          o && (i[3] = Math.round((parseInt(o, 16) / 255) * 100) / 100);
        } else if ((t = e.match(/^#([a-f0-9]{3,4})$/i))) {
          for (o = (t = t[1])[3], n = 0; n < 3; n++)
            i[n] = parseInt(t[n] + t[n], 16);
          o && (i[3] = Math.round((parseInt(o + o, 16) / 255) * 100) / 100);
        } else if (
          (t = e.match(
            /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
          ))
        ) {
          for (n = 0; n < 3; n++) i[n] = parseInt(t[n + 1], 0);
          t[4] && (i[3] = parseFloat(t[4]));
        } else {
          if (
            !(t = e.match(
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            ))
          )
            return (t = e.match(/(\D+)/))
              ? "transparent" === t[1]
                ? [0, 0, 0, 0]
                : (i = r[t[1]])
                  ? ((i[3] = 1), i)
                  : null
              : null;
          for (n = 0; n < 3; n++)
            i[n] = Math.round(2.55 * parseFloat(t[n + 1]));
          t[4] && (i[3] = parseFloat(t[4]));
        }
        for (n = 0; n < 3; n++) i[n] = l(i[n], 0, 255);
        return (i[3] = l(i[3], 0, 1)), i;
      }),
      (s.get.hsl = function (e) {
        if (!e) return null;
        var t = e.match(
          /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        );
        if (t) {
          var n = parseFloat(t[4]);
          return [
            ((parseFloat(t[1]) % 360) + 360) % 360,
            l(parseFloat(t[2]), 0, 100),
            l(parseFloat(t[3]), 0, 100),
            l(isNaN(n) ? 1 : n, 0, 1),
          ];
        }
        return null;
      }),
      (s.get.hwb = function (e) {
        if (!e) return null;
        var t = e.match(
          /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
        );
        if (t) {
          var n = parseFloat(t[4]);
          return [
            ((parseFloat(t[1]) % 360) + 360) % 360,
            l(parseFloat(t[2]), 0, 100),
            l(parseFloat(t[3]), 0, 100),
            l(isNaN(n) ? 1 : n, 0, 1),
          ];
        }
        return null;
      }),
      (s.to.hex = function () {
        var e = o(arguments);
        return (
          "#" +
          c(e[0]) +
          c(e[1]) +
          c(e[2]) +
          (e[3] < 1 ? c(Math.round(255 * e[3])) : "")
        );
      }),
      (s.to.rgb = function () {
        var e = o(arguments);
        return e.length < 4 || 1 === e[3]
          ? "rgb(" +
              Math.round(e[0]) +
              ", " +
              Math.round(e[1]) +
              ", " +
              Math.round(e[2]) +
              ")"
          : "rgba(" +
              Math.round(e[0]) +
              ", " +
              Math.round(e[1]) +
              ", " +
              Math.round(e[2]) +
              ", " +
              e[3] +
              ")";
      }),
      (s.to.rgb.percent = function () {
        var e = o(arguments),
          t = Math.round((e[0] / 255) * 100),
          n = Math.round((e[1] / 255) * 100),
          r = Math.round((e[2] / 255) * 100);
        return e.length < 4 || 1 === e[3]
          ? "rgb(" + t + "%, " + n + "%, " + r + "%)"
          : "rgba(" + t + "%, " + n + "%, " + r + "%, " + e[3] + ")";
      }),
      (s.to.hsl = function () {
        var e = o(arguments);
        return e.length < 4 || 1 === e[3]
          ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
          : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
      }),
      (s.to.hwb = function () {
        var e = o(arguments),
          t = "";
        return (
          e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]),
          "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
        );
      }),
      (s.to.keyword = function (e) {
        return i[e.slice(0, 3)];
      });
  },
  "./node_modules/color/index.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/color-string/index.js"),
      o = n("./node_modules/color-convert/index.js"),
      i = [].slice,
      a = ["keyword", "gray", "hex"],
      s = {};
    Object.keys(o).forEach(function (e) {
      s[i.call(o[e].labels).sort().join("")] = e;
    });
    var l = {};
    function c(e, t) {
      if (!(this instanceof c)) return new c(e, t);
      if ((t && t in a && (t = null), t && !(t in o)))
        throw new Error("Unknown model: " + t);
      var n, u;
      if (e)
        if (e instanceof c)
          (this.model = e.model),
            (this.color = e.color.slice()),
            (this.valpha = e.valpha);
        else if ("string" == typeof e) {
          var p = r.get(e);
          if (null === p)
            throw new Error("Unable to parse color from string: " + e);
          (this.model = p.model),
            (u = o[this.model].channels),
            (this.color = p.value.slice(0, u)),
            (this.valpha = "number" == typeof p.value[u] ? p.value[u] : 1);
        } else if (e.length) {
          (this.model = t || "rgb"), (u = o[this.model].channels);
          var f = i.call(e, 0, u);
          (this.color = d(f, u)),
            (this.valpha = "number" == typeof e[u] ? e[u] : 1);
        } else if ("number" == typeof e)
          (e &= 16777215),
            (this.model = "rgb"),
            (this.color = [(e >> 16) & 255, (e >> 8) & 255, 255 & e]),
            (this.valpha = 1);
        else {
          this.valpha = 1;
          var m = Object.keys(e);
          "alpha" in e &&
            (m.splice(m.indexOf("alpha"), 1),
            (this.valpha = "number" == typeof e.alpha ? e.alpha : 0));
          var h = m.sort().join("");
          if (!(h in s))
            throw new Error(
              "Unable to parse color from object: " + JSON.stringify(e),
            );
          this.model = s[h];
          var g = o[this.model].labels,
            b = [];
          for (n = 0; n < g.length; n++) b.push(e[g[n]]);
          this.color = d(b);
        }
      else (this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1);
      if (l[this.model])
        for (u = o[this.model].channels, n = 0; n < u; n++) {
          var y = l[this.model][n];
          y && (this.color[n] = y(this.color[n]));
        }
      (this.valpha = Math.max(0, Math.min(1, this.valpha))),
        Object.freeze && Object.freeze(this);
    }
    function u(e, t, n) {
      return (
        (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
          (l[e] || (l[e] = []))[t] = n;
        }),
        (e = e[0]),
        function (r) {
          var o;
          return arguments.length
            ? (n && (r = n(r)), ((o = this[e]()).color[t] = r), o)
            : ((o = this[e]().color[t]), n && (o = n(o)), o);
        }
      );
    }
    function p(e) {
      return function (t) {
        return Math.max(0, Math.min(e, t));
      };
    }
    function d(e, t) {
      for (var n = 0; n < t; n++) "number" != typeof e[n] && (e[n] = 0);
      return e;
    }
    (c.prototype = {
      toString: function () {
        return this.string();
      },
      toJSON: function () {
        return this[this.model]();
      },
      string: function (e) {
        var t = this.model in r.to ? this : this.rgb(),
          n =
            1 === (t = t.round("number" == typeof e ? e : 1)).valpha
              ? t.color
              : t.color.concat(this.valpha);
        return r.to[t.model](n);
      },
      percentString: function (e) {
        var t = this.rgb().round("number" == typeof e ? e : 1),
          n = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
        return r.to.rgb.percent(n);
      },
      array: function () {
        return 1 === this.valpha
          ? this.color.slice()
          : this.color.concat(this.valpha);
      },
      object: function () {
        for (
          var e = {},
            t = o[this.model].channels,
            n = o[this.model].labels,
            r = 0;
          r < t;
          r++
        )
          e[n[r]] = this.color[r];
        return 1 !== this.valpha && (e.alpha = this.valpha), e;
      },
      unitArray: function () {
        var e = this.rgb().color;
        return (
          (e[0] /= 255),
          (e[1] /= 255),
          (e[2] /= 255),
          1 !== this.valpha && e.push(this.valpha),
          e
        );
      },
      unitObject: function () {
        var e = this.rgb().object();
        return (
          (e.r /= 255),
          (e.g /= 255),
          (e.b /= 255),
          1 !== this.valpha && (e.alpha = this.valpha),
          e
        );
      },
      round: function (e) {
        return (
          (e = Math.max(e || 0, 0)),
          new c(
            this.color
              .map(
                (function (e) {
                  return function (t) {
                    return (function (e, t) {
                      return Number(e.toFixed(t));
                    })(t, e);
                  };
                })(e),
              )
              .concat(this.valpha),
            this.model,
          )
        );
      },
      alpha: function (e) {
        return arguments.length
          ? new c(this.color.concat(Math.max(0, Math.min(1, e))), this.model)
          : this.valpha;
      },
      red: u("rgb", 0, p(255)),
      green: u("rgb", 1, p(255)),
      blue: u("rgb", 2, p(255)),
      hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
        return ((e % 360) + 360) % 360;
      }),
      saturationl: u("hsl", 1, p(100)),
      lightness: u("hsl", 2, p(100)),
      saturationv: u("hsv", 1, p(100)),
      value: u("hsv", 2, p(100)),
      chroma: u("hcg", 1, p(100)),
      gray: u("hcg", 2, p(100)),
      white: u("hwb", 1, p(100)),
      wblack: u("hwb", 2, p(100)),
      cyan: u("cmyk", 0, p(100)),
      magenta: u("cmyk", 1, p(100)),
      yellow: u("cmyk", 2, p(100)),
      black: u("cmyk", 3, p(100)),
      x: u("xyz", 0, p(100)),
      y: u("xyz", 1, p(100)),
      z: u("xyz", 2, p(100)),
      l: u("lab", 0, p(100)),
      a: u("lab", 1),
      b: u("lab", 2),
      keyword: function (e) {
        return arguments.length ? new c(e) : o[this.model].keyword(this.color);
      },
      hex: function (e) {
        return arguments.length ? new c(e) : r.to.hex(this.rgb().round().color);
      },
      rgbNumber: function () {
        var e = this.rgb().color;
        return ((255 & e[0]) << 16) | ((255 & e[1]) << 8) | (255 & e[2]);
      },
      luminosity: function () {
        for (var e = this.rgb().color, t = [], n = 0; n < e.length; n++) {
          var r = e[n] / 255;
          t[n] = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
      },
      contrast: function (e) {
        var t = this.luminosity(),
          n = e.luminosity();
        return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
      },
      level: function (e) {
        var t = this.contrast(e);
        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
      },
      dark: function () {
        var e = this.rgb().color;
        return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
      },
      light: function () {
        return !this.dark();
      },
      negate: function () {
        for (var e = this.rgb(), t = 0; t < 3; t++)
          e.color[t] = 255 - e.color[t];
        return e;
      },
      lighten: function (e) {
        var t = this.hsl();
        return (t.color[2] += t.color[2] * e), t;
      },
      darken: function (e) {
        var t = this.hsl();
        return (t.color[2] -= t.color[2] * e), t;
      },
      saturate: function (e) {
        var t = this.hsl();
        return (t.color[1] += t.color[1] * e), t;
      },
      desaturate: function (e) {
        var t = this.hsl();
        return (t.color[1] -= t.color[1] * e), t;
      },
      whiten: function (e) {
        var t = this.hwb();
        return (t.color[1] += t.color[1] * e), t;
      },
      blacken: function (e) {
        var t = this.hwb();
        return (t.color[2] += t.color[2] * e), t;
      },
      grayscale: function () {
        var e = this.rgb().color,
          t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
        return c.rgb(t, t, t);
      },
      fade: function (e) {
        return this.alpha(this.valpha - this.valpha * e);
      },
      opaquer: function (e) {
        return this.alpha(this.valpha + this.valpha * e);
      },
      rotate: function (e) {
        var t = this.hsl(),
          n = t.color[0];
        return (n = (n = (n + e) % 360) < 0 ? 360 + n : n), (t.color[0] = n), t;
      },
      mix: function (e, t) {
        var n = e.rgb(),
          r = this.rgb(),
          o = void 0 === t ? 0.5 : t,
          i = 2 * o - 1,
          a = n.alpha() - r.alpha(),
          s = ((i * a == -1 ? i : (i + a) / (1 + i * a)) + 1) / 2,
          l = 1 - s;
        return c.rgb(
          s * n.red() + l * r.red(),
          s * n.green() + l * r.green(),
          s * n.blue() + l * r.blue(),
          n.alpha() * o + r.alpha() * (1 - o),
        );
      },
    }),
      Object.keys(o).forEach(function (e) {
        if (-1 === a.indexOf(e)) {
          var t = o[e].channels;
          (c.prototype[e] = function () {
            if (this.model === e) return new c(this);
            if (arguments.length) return new c(arguments, e);
            var n,
              r = "number" == typeof arguments[t] ? t : this.valpha;
            return new c(
              ((n = o[this.model][e].raw(this.color)),
              Array.isArray(n) ? n : [n]).concat(r),
              e,
            );
          }),
            (c[e] = function (n) {
              return (
                "number" == typeof n && (n = d(i.call(arguments), t)),
                new c(n, e)
              );
            });
        }
      }),
      (e.exports = c);
  },
  "./node_modules/component-docs/components.js": function (e, t, n) {
    t.Link = n("./node_modules/component-docs/dist/templates/Link.js").default;
  },
  "./node_modules/component-docs/dist/styles/build/src/templates/Content.css":
    function (e, t, n) {},
  "./node_modules/component-docs/dist/styles/build/src/templates/Documentation.css":
    function (e, t, n) {},
  "./node_modules/component-docs/dist/styles/build/src/templates/Layout.css":
    function (e, t, n) {},
  "./node_modules/component-docs/dist/styles/build/src/templates/Markdown.css":
    function (e, t, n) {},
  "./node_modules/component-docs/dist/styles/build/src/templates/Sidebar.css":
    function (e, t, n) {},
  "./node_modules/component-docs/dist/styles/globals.css": function (
    e,
    t,
    n,
  ) {},
  "./node_modules/component-docs/dist/styles/reset.css": function (e, t, n) {},
  "./node_modules/component-docs/dist/templates/App.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function (e) {
      var t = e.path,
        n = e.data,
        r = e.layout,
        a = p(n, r);
      return o.createElement(i.default, { path: t, routes: a });
    };
    var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n("./node_modules/react/index.js")),
      i = u(n("./node_modules/component-docs/dist/templates/Router.js")),
      a = u(n("./node_modules/component-docs/dist/templates/Documentation.js")),
      s = u(n("./node_modules/component-docs/dist/templates/Markdown.js")),
      l = u(n("./node_modules/component-docs/dist/templates/Sidebar.js")),
      c = u(n("./node_modules/component-docs/dist/templates/Content.js"));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var p = function (e, t) {
      var n = t;
      return e
        .filter(function (e) {
          return "separator" !== e.type;
        })
        .map(function (t) {
          var i = void 0;
          switch (t.type) {
            case "markdown":
              var u = t.data;
              i = function (t) {
                return o.createElement(
                  n,
                  r({}, t, { data: e, Sidebar: l.default, Content: c.default }),
                  o.createElement(s.default, { source: u }),
                );
              };
              break;
            case "component":
              var p = t.data;
              i = function (i) {
                return o.createElement(
                  n,
                  r({}, i, { data: e, Sidebar: l.default, Content: c.default }),
                  o.createElement(a.default, { name: t.title, info: p }),
                );
              };
              break;
            case "custom":
              var d = t.data;
              i = function (t) {
                return o.createElement(
                  n,
                  r({}, t, { data: e, Sidebar: l.default, Content: d }),
                );
              };
              break;
            default:
              throw new Error("Unknown type " + t.type);
          }
          return r({}, t, { render: i });
        });
    };
  },
  "./node_modules/component-docs/dist/templates/Content.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        var t = e.children;
        return r.createElement(
          "div",
          { className: o },
          r.createElement("main", { className: i }, t),
        );
      });
    var r = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n("./node_modules/react/index.js"));
    n("./node_modules/linaria/build/index.runtime.js");
    n(
      "./node_modules/component-docs/dist/styles/build/src/templates/Content.css",
    );
    var o = "_container__z02bld",
      i = "_content__z02bld";
  },
  "./node_modules/component-docs/dist/templates/Documentation.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function (e) {
      var t = e.name,
        n = e.info,
        o = [],
        s = n.description
          .split("\n")
          .filter(function (e) {
            if (e.startsWith(v)) {
              var t = e.split(" ").slice(1),
                n = t.pop();
              return o.push({ name: t.join(" "), link: n }), !1;
            }
            return !0;
          })
          .join("\n"),
        f = Object.keys(n.props).filter(function (e) {
          return !w(n.props[e], y);
        }),
        h = n.methods.filter(function (e) {
          return !(
            e.name.startsWith("_") ||
            e.modifiers.includes("static") ||
            w(e, y)
          );
        }),
        _ = n.statics
          .map(function (e) {
            return { type: "property", info: e };
          })
          .concat(
            n.methods
              .filter(function (e) {
                return e.modifiers.includes("static") && !b.includes(e.name);
              })
              .map(function (e) {
                return {
                  type: "method",
                  info: r({}, e, { type: { raw: "Function" } }),
                };
              }),
          )
          .filter(function (e) {
            return !(e.info.name.startsWith("_") || w(e.info, y));
          });
      return i.createElement(
        "div",
        { className: c },
        i.createElement("h1", { className: u }, t),
        i.createElement(l.default, {
          className: p,
          source: s,
          options: { linkify: !0 },
        }),
        f.length || o.length
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement("h2", { className: d }, "Props"),
              f.map(function (e) {
                return i.createElement(k, r({ key: e, name: e }, n.props[e]));
              }),
              o.map(function (e) {
                return i.createElement(
                  "a",
                  { className: (0, a.names)(m, g), key: e.name, href: e.link },
                  i.createElement("code", null, "...", e.name),
                );
              }),
            )
          : null,
        h.length
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement("h2", { className: d }, "Methods"),
              h.map(function (e) {
                return i.createElement(x, r({ key: e.name, type: null }, e));
              }),
            )
          : null,
        _.length
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement("h2", { className: d }, "Static properties"),
              _.map(function (e) {
                return "method" === e.type
                  ? i.createElement(x, r({ key: e.info.name }, e.info))
                  : i.createElement(C, r({ key: e.info.name }, e.info));
              }),
            )
          : null,
      );
    };
    var o,
      i = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n("./node_modules/react/index.js")),
      a = n("./node_modules/linaria/build/index.runtime.js"),
      s = n("./node_modules/component-docs/dist/templates/Markdown.js"),
      l = (o = s) && o.__esModule ? o : { default: o };
    n(
      "./node_modules/component-docs/dist/styles/build/src/templates/Documentation.css",
    );
    var c = "_container__vv20rl",
      u = "_title__vv20rl",
      p = "_markdown__vv20rl",
      d = "_propsHeader__vv20rl",
      f = "_propInfo__vv20rl",
      m = "_propLabel__vv20rl",
      h = "_propItem__vv20rl",
      g = "_rest__vv20rl",
      b = ["getDerivedStateFromProps"],
      y = "@internal",
      v = "@extends",
      _ = function (e) {
        return e.raw || e.name || "";
      },
      w = function (e, t) {
        return e.description
          ? e.description.startsWith(t)
          : !!e.docblock && e.docblock.startsWith(t);
      },
      k = function (e) {
        var t = e.name,
          n = e.description,
          r = e.flowType,
          o = e.type,
          s = e.required,
          c = e.defaultValue,
          u = s && !n.startsWith("@optional"),
          d = r ? _(r) : o ? _(o) : null;
        return i.createElement(
          "div",
          { className: f },
          i.createElement(
            "a",
            { className: m, name: t, href: "#" + t },
            i.createElement("code", null, t),
            u ? " (required)" : "",
          ),
          d && "unknown" !== d
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Type: "),
                i.createElement("code", null, d),
              )
            : null,
          c
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Default value: "),
                i.createElement("code", null, c.value),
              )
            : null,
          n
            ? i.createElement(l.default, {
                className: (0, a.names)(h, p),
                source: n.replace(/^@optional/, "").trim(),
              })
            : null,
        );
      },
      x = function (e) {
        var t = e.name,
          n = e.description,
          r = e.type,
          o = e.params,
          s = e.returns,
          c = r ? _(r) : null;
        return i.createElement(
          "div",
          { className: f, key: t },
          i.createElement(
            "a",
            { className: m, name: t, href: "#" + t },
            i.createElement("code", null, t),
          ),
          c && "unknown" !== c
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Type: "),
                i.createElement("code", null, c),
              )
            : null,
          o.length
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Params: "),
                i.createElement(
                  "code",
                  null,
                  o
                    .map(function (e) {
                      return e.name + (e.type ? ": " + _(e.type) : "");
                    })
                    .join(", "),
                ),
              )
            : null,
          s && s.type
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Returns: "),
                i.createElement("code", null, _(s.type)),
              )
            : null,
          n
            ? i.createElement(l.default, {
                className: (0, a.names)(h, p),
                source: n.trim(),
              })
            : null,
        );
      },
      C = function (e) {
        var t = e.name,
          n = e.description,
          r = e.type,
          o = e.value,
          s = r ? _(r) : null;
        return i.createElement(
          "div",
          { className: f },
          i.createElement(
            "a",
            { className: m, name: t, href: "#" + t },
            i.createElement("code", null, t),
          ),
          s && "unknown" !== s
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Type: "),
                i.createElement("code", null, s),
              )
            : null,
          "string" == typeof o || "number" == typeof o
            ? i.createElement(
                "div",
                { className: h },
                i.createElement("span", null, "Value: "),
                i.createElement("code", null, o),
              )
            : null,
          n
            ? i.createElement(l.default, {
                className: (0, a.names)(h, p),
                source: n.replace(/^@optional/, "").trim(),
              })
            : null,
        );
      };
  },
  "./node_modules/component-docs/dist/templates/Layout.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        var t = e.path,
          n = e.data,
          i = e.children,
          a = e.Sidebar,
          s = e.Content;
        return r.createElement(
          "div",
          { className: o },
          r.createElement(a, { path: t, data: n }),
          r.createElement(s, null, i),
        );
      });
    var r = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n("./node_modules/react/index.js"));
    n("./node_modules/linaria/build/index.runtime.js");
    n(
      "./node_modules/component-docs/dist/styles/build/src/templates/Layout.css",
    );
    var o = "_wrapper__1nbmuhq";
  },
  "./node_modules/component-docs/dist/templates/Link.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = n("./node_modules/react/index.js"),
      s = (r = a) && r.__esModule ? r : { default: r },
      l = n("./node_modules/component-docs/dist/templates/Router.js");
    function c(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = (function (e) {
      function t() {
        var e, n, r;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
          i[a] = arguments[a];
        return (
          (n = r =
            c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(i),
              ),
            )),
          (r._handleClick = function (e) {
            e.preventDefault();
            var t = r.props.to + ".html";
            try {
              if (!l.history) throw new Error("");
              l.history.push(t);
            } catch (e) {
              if (
                !e.message.startsWith(
                  "Failed to execute 'pushState' on 'History'",
                )
              )
                throw e;
              var n = window.location.pathname;
              if (n.endsWith("/")) window.location.pathname = n + "/" + t;
              else {
                var o = n.split("/");
                o.pop(), (window.location.pathname = o.join("/") + "/" + t);
              }
            }
            r.props.onClick && r.props.onClick(e);
          }),
          c(r, n)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, a.Component),
        i(t, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.to,
                n = (function (e, t) {
                  var n = {};
                  for (var r in e)
                    t.indexOf(r) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, r) &&
                        (n[r] = e[r]));
                  return n;
                })(e, ["to"]);
              return s.default.createElement(
                "a",
                o({}, n, { href: t + ".html", onClick: this._handleClick }),
              );
            },
          },
        ]),
        t
      );
    })();
    t.default = u;
  },
  "./node_modules/component-docs/dist/templates/Markdown.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function (e) {
      var t = e.source,
        n = e.className,
        o = (function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        })(e, ["source", "className"]);
      return i.createElement(
        "div",
        r({}, o, { className: (0, c.names)(u, n) }),
        i.createElement(s.default, {
          source: t,
          options: {
            linkify: !0,
            html: !0,
            highlight: function (e, t) {
              var n = "js" === t ? "jsx" : t;
              return (0, l.getLanguage)(n) ? (0, l.highlight)(e, n) : null;
            },
          },
        }),
      );
    };
    var o,
      i = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n("./node_modules/react/index.js")),
      a = n("./node_modules/react-remarkable/dist/index.js"),
      s = (o = a) && o.__esModule ? o : { default: o },
      l = n("./node_modules/illuminate-js/lib/index.js"),
      c = n("./node_modules/linaria/build/index.runtime.js");
    n(
      "./node_modules/component-docs/dist/styles/build/src/templates/Markdown.css",
    );
    var u = "_markdown__1e8xr4b";
  },
  "./node_modules/component-docs/dist/templates/Router.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.history = void 0);
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = n("./node_modules/react/index.js"),
      s = n("./node_modules/history/createBrowserHistory.js"),
      l = (r = s) && r.__esModule ? r : { default: r };
    var c = (t.history = void 0);
    try {
      t.history = c = (0, l.default)();
    } catch (e) {
      t.history = c = null;
    }
    var u = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        var n = (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
          (n._parse = function (e) {
            return e.split("/").pop().split(".")[0] || "index";
          }),
          (n.state = { path: c ? n._parse(c.location.pathname) : e.path }),
          n
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, a.Component),
        i(t, [
          {
            key: "componentDidMount",
            value: function () {
              var e = this;
              this._unlisten = c.listen(function (t) {
                return e.setState({ path: e._parse(t.pathname) });
              });
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              var n = this;
              if (t.path !== this.state.path) {
                var r = this.props.routes.find(function (e) {
                  return e.path === n.state.path;
                });
                r && (document.title = r.title || "");
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this._unlisten();
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.routes.find(function (t) {
                  return t.path === e.state.path;
                });
              return t
                ? t.render(o({}, t.props, { path: this.state.path }))
                : null;
            },
          },
        ]),
        t
      );
    })();
    t.default = u;
  },
  "./node_modules/component-docs/dist/templates/Sidebar.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n("./node_modules/react/index.js")),
      s = n("./node_modules/linaria/build/index.runtime.js"),
      l = n("./node_modules/component-docs/dist/templates/Link.js"),
      c = (r = l) && r.__esModule ? r : { default: r };
    function u(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function p(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    n(
      "./node_modules/component-docs/dist/styles/build/src/templates/Sidebar.css",
    );
    var d = "_link__1gt5k1p",
      f = (function (e) {
        function t() {
          var e, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            (n = r =
              p(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(i),
                ),
              )),
            (r.state = {
              query: "",
              open: !1,
              expanded: r.props.data.reduce(function (e, t) {
                if ("separator" === t.type) return e;
                if (t.title.includes(".")) {
                  var n = t.title.split(".")[0];
                  e[n] || (e[n] = { height: null, expanded: !0 });
                }
                return e;
              }, {}),
            }),
            (r._measureHeights = function () {
              return r.setState({
                expanded: r.props.data.reduce(function (e, t) {
                  if ("separator" === t.type) return e;
                  if (t.title.includes(".")) {
                    var n = t.title.split(".")[0],
                      o = e[n],
                      i = r._items[n] ? r._items[n].clientHeight : null;
                    o || (e[n] = { height: i, expanded: !0 });
                  }
                  return e;
                }, {}),
              });
            }),
            (r._items = {}),
            p(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, a.Component),
          i(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._measureHeights();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                e.data !== this.props.data && this._measureHeights();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.path,
                  r = t.data,
                  i = void 0;
                if (this.state.query)
                  i = r.filter(function (t) {
                    return (
                      "separator" !== t.type &&
                      t.title
                        .toLowerCase()
                        .includes(e.state.query.toLowerCase())
                    );
                  });
                else {
                  var l = r.reduce(function (e, t) {
                    if ("separator" === t.type) return e;
                    if (t.title.includes(".")) {
                      var n = t.title.split(".")[0],
                        r = e[n];
                      r
                        ? r.items.push(t)
                        : (e[n] = { type: "section", title: n, items: [t] });
                    }
                    return e;
                  }, {});
                  i = r.reduce(function (e, t) {
                    if ("separator" === t.type) e.push(t);
                    else {
                      var n = t.title.split(".")[0],
                        r = l[n];
                      if (r)
                        e.some(function (e) {
                          return e.title && e.title === n;
                        }) ||
                          (n === t.title
                            ? e.push(o({}, r, { path: t.path }))
                            : e.push(r));
                      else e.push(t);
                    }
                    return e;
                  }, []);
                }
                var p = i.map(function t(r, i) {
                  if ("separator" === r.type)
                    return a.createElement("hr", {
                      key: "separator-" + (i + 1),
                      className: "_separator__1gt5k1p",
                    });
                  if ("section" === r.type) {
                    var l = e.state.expanded[r.title] || {
                      height: null,
                      expanded: !0,
                    };
                    return a.createElement(
                      "div",
                      { key: r.path },
                      a.createElement(
                        "div",
                        { className: "_row__1gt5k1p" },
                        a.createElement(
                          c.default,
                          {
                            to: r.path,
                            className: (0, s.names)(
                              d,
                              n === r.path && "_active__1gt5k1p",
                            ),
                            onClick: function () {
                              return e.setState(function (e) {
                                var t = e.expanded[r.title];
                                return {
                                  expanded: o(
                                    {},
                                    e.expanded,
                                    u(
                                      {},
                                      r.title,
                                      o({}, t, {
                                        expanded:
                                          n === r.path
                                            ? !t.expanded
                                            : t.expanded,
                                      }),
                                    ),
                                  ),
                                  open: !1,
                                  query: "",
                                };
                              });
                            },
                          },
                          r.title,
                        ),
                        a.createElement(
                          "button",
                          {
                            className: (0, s.names)(
                              "_buttonIcon__1gt5k1p",
                              l.expanded
                                ? "_expandedIcon__1gt5k1p"
                                : "_collapsedIcon__1gt5k1p",
                            ),
                            style: {
                              opacity: "number" == typeof l.height ? 1 : 0,
                            },
                            onClick: function () {
                              return e.setState(function (e) {
                                var t = e.expanded[r.title];
                                return {
                                  expanded: o(
                                    {},
                                    e.expanded,
                                    u(
                                      {},
                                      r.title,
                                      o({}, t, { expanded: !t.expanded }),
                                    ),
                                  ),
                                };
                              });
                            },
                          },
                          a.createElement(
                            "svg",
                            {
                              width: "16px",
                              height: "16px",
                              viewBox: "0 0 16 16",
                            },
                            a.createElement("polygon", {
                              stroke: "none",
                              strokeWidth: "1",
                              fillRule: "evenodd",
                              fill: "currentColor",
                              points: "8 4 2 10 3.4 11.4 8 6.8 12.6 11.4 14 10",
                            }),
                          ),
                        ),
                      ),
                      a.createElement(
                        "div",
                        {
                          ref: function (t) {
                            e._items[r.title] = t;
                          },
                          className: (0, s.names)(
                            "_sectionItems__1gt5k1p",
                            l.expanded
                              ? "_sectionItemsVisible__1gt5k1p"
                              : "_sectionItemsHidden__1gt5k1p",
                          ),
                          style:
                            "number" == typeof l.height
                              ? { height: (l.expanded ? l.height : 0) + "px" }
                              : null,
                        },
                        r.items.map(t),
                      ),
                    );
                  }
                  return a.createElement(
                    c.default,
                    {
                      key: r.path,
                      to: r.path,
                      className: (0, s.names)(
                        d,
                        n === r.path && "_active__1gt5k1p",
                      ),
                      onClick: function () {
                        return e.setState({ open: !1, query: "" });
                      },
                    },
                    r.title,
                  );
                });
                return a.createElement(
                  "aside",
                  { className: "_sidebar__1gt5k1p" },
                  a.createElement("input", {
                    className: "_menuButton__1gt5k1p",
                    id: "slide-sidebar",
                    type: "checkbox",
                    role: "button",
                    checked: this.state.open,
                    onChange: function (t) {
                      return e.setState({ open: t.target.checked });
                    },
                  }),
                  a.createElement(
                    "label",
                    {
                      className: "_menuIcon__1gt5k1p",
                      htmlFor: "slide-sidebar",
                    },
                    "☰",
                  ),
                  a.createElement(
                    "div",
                    { className: "_menu__1gt5k1p" },
                    a.createElement("input", {
                      type: "search",
                      value: this.state.query,
                      onChange: function (t) {
                        return e.setState({ query: t.target.value });
                      },
                      placeholder: "Filter…",
                      className: "_searchbar__1gt5k1p",
                    }),
                    a.createElement(
                      "nav",
                      { className: "_navigation__1gt5k1p" },
                      p,
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })();
    t.default = f;
  },
  "./node_modules/extend-shallow/index.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/is-extendable/index.js");
    function o(e, t) {
      for (var n in t) i(t, n) && (e[n] = t[n]);
    }
    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e) {
      r(e) || (e = {});
      for (var t = arguments.length, n = 1; n < t; n++) {
        var i = arguments[n];
        r(i) && o(e, i);
      }
      return e;
    };
  },
  "./node_modules/fbjs/lib/ExecutionEnvironment.js": function (e, t, n) {
    "use strict";
    var r = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      o = {
        canUseDOM: r,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners:
          r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r,
      };
    e.exports = o;
  },
  "./node_modules/fbjs/lib/containsNode.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/fbjs/lib/isTextNode.js");
    e.exports = function e(t, n) {
      return (
        !(!t || !n) &&
        (t === n ||
          (!r(t) &&
            (r(n)
              ? e(t, n.parentNode)
              : "contains" in t
                ? t.contains(n)
                : !!t.compareDocumentPosition &&
                  !!(16 & t.compareDocumentPosition(n)))))
      );
    };
  },
  "./node_modules/fbjs/lib/emptyFunction.js": function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        return e;
      };
    }
    var o = function () {};
    (o.thatReturns = r),
      (o.thatReturnsFalse = r(!1)),
      (o.thatReturnsTrue = r(!0)),
      (o.thatReturnsNull = r(null)),
      (o.thatReturnsThis = function () {
        return this;
      }),
      (o.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = o);
  },
  "./node_modules/fbjs/lib/emptyObject.js": function (e, t, n) {
    "use strict";
    e.exports = {};
  },
  "./node_modules/fbjs/lib/getActiveElement.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    };
  },
  "./node_modules/fbjs/lib/invariant.js": function (e, t, n) {
    "use strict";
    var r = function (e) {};
    e.exports = function (e, t, n, o, i, a, s, l) {
      if ((r(t), !e)) {
        var c;
        if (void 0 === t)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
          );
        else {
          var u = [n, o, i, a, s, l],
            p = 0;
          (c = new Error(
            t.replace(/%s/g, function () {
              return u[p++];
            }),
          )).name = "Invariant Violation";
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  "./node_modules/fbjs/lib/isNode.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = (e ? e.ownerDocument || e : document).defaultView || window;
      return !(
        !e ||
        !("function" == typeof t.Node
          ? e instanceof t.Node
          : "object" == typeof e &&
            "number" == typeof e.nodeType &&
            "string" == typeof e.nodeName)
      );
    };
  },
  "./node_modules/fbjs/lib/isTextNode.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/fbjs/lib/isNode.js");
    e.exports = function (e) {
      return r(e) && 3 == e.nodeType;
    };
  },
  "./node_modules/fbjs/lib/shallowEqual.js": function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function o(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    e.exports = function (e, t) {
      if (o(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (var a = 0; a < n.length; a++)
        if (!r.call(t, n[a]) || !o(e[n[a]], t[n[a]])) return !1;
      return !0;
    };
  },
  "./node_modules/history/DOMUtils.js": function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    (t.canUseDOM = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    )),
      (t.addEventListener = function (e, t, n) {
        return e.addEventListener
          ? e.addEventListener(t, n, !1)
          : e.attachEvent("on" + t, n);
      }),
      (t.removeEventListener = function (e, t, n) {
        return e.removeEventListener
          ? e.removeEventListener(t, n, !1)
          : e.detachEvent("on" + t, n);
      }),
      (t.getConfirmation = function (e, t) {
        return t(window.confirm(e));
      }),
      (t.supportsHistory = function () {
        var e = window.navigator.userAgent;
        return (
          ((-1 === e.indexOf("Android 2.") &&
            -1 === e.indexOf("Android 4.0")) ||
            -1 === e.indexOf("Mobile Safari") ||
            -1 !== e.indexOf("Chrome") ||
            -1 !== e.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history
        );
      }),
      (t.supportsPopStateOnHashChange = function () {
        return -1 === window.navigator.userAgent.indexOf("Trident");
      }),
      (t.supportsGoWithoutReloadUsingHash = function () {
        return -1 === window.navigator.userAgent.indexOf("Firefox");
      }),
      (t.isExtraneousPopstateEvent = function (e) {
        return (
          void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
        );
      });
  },
  "./node_modules/history/LocationUtils.js": function (e, t, n) {
    "use strict";
    (t.__esModule = !0), (t.locationsAreEqual = t.createLocation = void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = s(n("./node_modules/resolve-pathname/index.js")),
      i = s(n("./node_modules/value-equal/index.js")),
      a = n("./node_modules/history/PathUtils.js");
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.createLocation = function (e, t, n, i) {
      var s = void 0;
      "string" == typeof e
        ? ((s = (0, a.parsePath)(e)).state = t)
        : (void 0 === (s = r({}, e)).pathname && (s.pathname = ""),
          s.search
            ? "?" !== s.search.charAt(0) && (s.search = "?" + s.search)
            : (s.search = ""),
          s.hash
            ? "#" !== s.hash.charAt(0) && (s.hash = "#" + s.hash)
            : (s.hash = ""),
          void 0 !== t && void 0 === s.state && (s.state = t));
      try {
        s.pathname = decodeURI(s.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                s.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            )
          : e;
      }
      return (
        n && (s.key = n),
        i
          ? s.pathname
            ? "/" !== s.pathname.charAt(0) &&
              (s.pathname = (0, o.default)(s.pathname, i.pathname))
            : (s.pathname = i.pathname)
          : s.pathname || (s.pathname = "/"),
        s
      );
    }),
      (t.locationsAreEqual = function (e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          (0, i.default)(e.state, t.state)
        );
      });
  },
  "./node_modules/history/PathUtils.js": function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    (t.addLeadingSlash = function (e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }),
      (t.stripLeadingSlash = function (e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      });
    var r = (t.hasBasename = function (e, t) {
      return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e);
    });
    (t.stripBasename = function (e, t) {
      return r(e, t) ? e.substr(t.length) : e;
    }),
      (t.stripTrailingSlash = function (e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }),
      (t.parsePath = function (e) {
        var t = e || "/",
          n = "",
          r = "",
          o = t.indexOf("#");
        -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
        var i = t.indexOf("?");
        return (
          -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
          { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      }),
      (t.createPath = function (e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          o = t || "/";
        return (
          n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
          o
        );
      });
  },
  "./node_modules/history/createBrowserHistory.js": function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = p(n("./node_modules/warning/browser.js")),
      a = p(n("./node_modules/invariant/browser.js")),
      s = n("./node_modules/history/LocationUtils.js"),
      l = n("./node_modules/history/PathUtils.js"),
      c = p(n("./node_modules/history/createTransitionManager.js")),
      u = n("./node_modules/history/DOMUtils.js");
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = function () {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    };
    t.default = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, a.default)(u.canUseDOM, "Browser history needs a DOM");
      var t = window.history,
        n = (0, u.supportsHistory)(),
        p = !(0, u.supportsPopStateOnHashChange)(),
        f = e.forceRefresh,
        m = void 0 !== f && f,
        h = e.getUserConfirmation,
        g = void 0 === h ? u.getConfirmation : h,
        b = e.keyLength,
        y = void 0 === b ? 6 : b,
        v = e.basename
          ? (0, l.stripTrailingSlash)((0, l.addLeadingSlash)(e.basename))
          : "",
        _ = function (e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            o = window.location,
            a = o.pathname + o.search + o.hash;
          return (
            (0, i.default)(
              !v || (0, l.hasBasename)(a, v),
              'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' +
                a +
                '" to begin with "' +
                v +
                '".',
            ),
            v && (a = (0, l.stripBasename)(a, v)),
            (0, s.createLocation)(a, r, n)
          );
        },
        w = function () {
          return Math.random().toString(36).substr(2, y);
        },
        k = (0, c.default)(),
        x = function (e) {
          o(D, e),
            (D.length = t.length),
            k.notifyListeners(D.location, D.action);
        },
        C = function (e) {
          (0, u.isExtraneousPopstateEvent)(e) || E(_(e.state));
        },
        T = function () {
          E(_(d()));
        },
        S = !1,
        E = function (e) {
          S
            ? ((S = !1), x())
            : k.confirmTransitionTo(e, "POP", g, function (t) {
                t ? x({ action: "POP", location: e }) : A(e);
              });
        },
        A = function (e) {
          var t = D.location,
            n = P.indexOf(t.key);
          -1 === n && (n = 0);
          var r = P.indexOf(e.key);
          -1 === r && (r = 0);
          var o = n - r;
          o && ((S = !0), O(o));
        },
        j = _(d()),
        P = [j.key],
        R = function (e) {
          return v + (0, l.createPath)(e);
        },
        O = function (e) {
          t.go(e);
        },
        M = 0,
        L = function (e) {
          1 === (M += e)
            ? ((0, u.addEventListener)(window, "popstate", C),
              p && (0, u.addEventListener)(window, "hashchange", T))
            : 0 === M &&
              ((0, u.removeEventListener)(window, "popstate", C),
              p && (0, u.removeEventListener)(window, "hashchange", T));
        },
        N = !1,
        D = {
          length: t.length,
          action: "POP",
          location: j,
          createHref: R,
          push: function (e, o) {
            (0, i.default)(
              !(
                "object" === (void 0 === e ? "undefined" : r(e)) &&
                void 0 !== e.state &&
                void 0 !== o
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored",
            );
            var a = (0, s.createLocation)(e, o, w(), D.location);
            k.confirmTransitionTo(a, "PUSH", g, function (e) {
              if (e) {
                var r = R(a),
                  o = a.key,
                  s = a.state;
                if (n)
                  if ((t.pushState({ key: o, state: s }, null, r), m))
                    window.location.href = r;
                  else {
                    var l = P.indexOf(D.location.key),
                      c = P.slice(0, -1 === l ? 0 : l + 1);
                    c.push(a.key), (P = c), x({ action: "PUSH", location: a });
                  }
                else
                  (0, i.default)(
                    void 0 === s,
                    "Browser history cannot push state in browsers that do not support HTML5 history",
                  ),
                    (window.location.href = r);
              }
            });
          },
          replace: function (e, o) {
            (0, i.default)(
              !(
                "object" === (void 0 === e ? "undefined" : r(e)) &&
                void 0 !== e.state &&
                void 0 !== o
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored",
            );
            var a = (0, s.createLocation)(e, o, w(), D.location);
            k.confirmTransitionTo(a, "REPLACE", g, function (e) {
              if (e) {
                var r = R(a),
                  o = a.key,
                  s = a.state;
                if (n)
                  if ((t.replaceState({ key: o, state: s }, null, r), m))
                    window.location.replace(r);
                  else {
                    var l = P.indexOf(D.location.key);
                    -1 !== l && (P[l] = a.key),
                      x({ action: "REPLACE", location: a });
                  }
                else
                  (0, i.default)(
                    void 0 === s,
                    "Browser history cannot replace state in browsers that do not support HTML5 history",
                  ),
                    window.location.replace(r);
              }
            });
          },
          go: O,
          goBack: function () {
            return O(-1);
          },
          goForward: function () {
            return O(1);
          },
          block: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = k.setPrompt(e);
            return (
              N || (L(1), (N = !0)),
              function () {
                return N && ((N = !1), L(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = k.appendListener(e);
            return (
              L(1),
              function () {
                L(-1), t();
              }
            );
          },
        };
      return D;
    };
  },
  "./node_modules/history/createTransitionManager.js": function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r,
      o = n("./node_modules/warning/browser.js"),
      i = (r = o) && r.__esModule ? r : { default: r };
    t.default = function () {
      var e = null,
        t = [];
      return {
        setPrompt: function (t) {
          return (
            (0, i.default)(
              null == e,
              "A history supports only one prompt at a time",
            ),
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo: function (t, n, r, o) {
          if (null != e) {
            var a = "function" == typeof e ? e(t, n) : e;
            "string" == typeof a
              ? "function" == typeof r
                ? r(a, o)
                : ((0, i.default)(
                    !1,
                    "A history needs a getUserConfirmation function in order to use a prompt message",
                  ),
                  o(!0))
              : o(!1 !== a);
          } else o(!0);
        },
        appendListener: function (e) {
          var n = !0,
            r = function () {
              n && e.apply(void 0, arguments);
            };
          return (
            t.push(r),
            function () {
              (n = !1),
                (t = t.filter(function (e) {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          t.forEach(function (e) {
            return e.apply(void 0, n);
          });
        },
      };
    };
  },
  "./node_modules/illuminate-js/lib/hooks.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.add = o),
      (t.run = i);
    var r = {};
    function o(e, t) {
      if ("string" != typeof e || e.length < 1)
        throw new Error("Name must be string of length > 1");
      if ("function" != typeof t)
        throw new Error(
          "hooks.add expects a function to be passed as a callback but " +
            (void 0 === t
              ? "undefined"
              : (n = t) &&
                  "undefined" != typeof Symbol &&
                  n.constructor === Symbol
                ? "symbol"
                : typeof n) +
            ":" +
            t +
            " given",
        );
      var n;
      r[e] || (r[e] = []), r[e].push(t);
    }
    function i(e, t) {
      var n = r[e];
      n &&
        n.length &&
        n.forEach(function (e) {
          return e(t);
        });
    }
    t.default = { add: o, run: i };
  },
  "./node_modules/illuminate-js/lib/index.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.tokenize = c),
      (t.getLanguage = u),
      (t.highlight = function (e, t) {
        var n = { grammar: u(t), language: t, code: e };
        i.default.run("before-highlight", n);
        var r = c(n.code, n.grammar),
          s = a.default.stringify(o.encode(r), t);
        return (
          (n.highlightedCode = s),
          i.default.run("after-highlight", n),
          n.highlightedCode
        );
      }),
      (t.addPlugin = function (e) {
        if ("function" != typeof e)
          throw new Error("Given Plugin must be a function");
        e(i.default.add);
      });
    var r = l(n("./node_modules/illuminate-js/lib/languages/index.js")),
      o = l(n("./node_modules/illuminate-js/lib/utils/index.js")),
      i = s(n("./node_modules/illuminate-js/lib/hooks.js")),
      a = s(n("./node_modules/illuminate-js/lib/token.js"));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function c(e, t) {
      if (!t.hasOwnProperty("_order") || !Array.isArray(t._order))
        throw new Error("A grammar must have an _order array");
      var n = [e],
        r = t._order;
      e: for (var o = 0; o < r.length; o++) {
        var i = r[o],
          s = t[i];
        Array.isArray(s)
          ? "keyword" === i &&
            s.every(function (e) {
              return "string" == typeof e;
            }) &&
            ((s = "\b(" + s.join("|") + ")\b"), (s = [new RegExp(s)]))
          : (s = [s]);
        for (var l = 0; l < s.length; ++l) {
          var u = s[l],
            p = u.inside,
            d = Boolean(u.lookbehind),
            f = 0,
            m = u.alias;
          u = u.pattern || u;
          for (var h = 0; h < n.length; h++) {
            var g = n[h];
            if (n.length > e.length) break e;
            if (!(g instanceof a.default)) {
              u.lastIndex = 0;
              var b = u.exec(g);
              if (b) {
                d && (f = b[1].length);
                var y = b.index - 1 + f,
                  v = y + (b = b[0].slice(f)).length,
                  _ = g.slice(0, y + 1),
                  w = g.slice(v + 1),
                  k = [h, 1];
                _ && k.push(_);
                var x = new a.default(i, p ? c(b, p) : b, m);
                k.push(x), w && k.push(w), n.splice.apply(n, k);
              }
            }
          }
        }
      }
      return n;
    }
    function u(e) {
      return r[e] || !1;
    }
  },
  "./node_modules/illuminate-js/lib/languages/apacheconf.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.apacheconf = {
      comment: /#.*/,
      "directive-inline": {
        pattern:
          /^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
        lookbehind: !0,
        alias: "property",
      },
      "directive-block": {
        pattern:
          /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
        inside: {
          "directive-block": {
            pattern: /^<\/?\w+/,
            inside: { punctuation: /^<\/?/, _order: ["punctuation"] },
            alias: "tag",
          },
          "directive-block-parameter": {
            pattern: /.*[^>]/,
            inside: {
              punctuation: /:/,
              string: {
                pattern: /("|').*\1/,
                inside: {
                  variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
                  _order: ["variable"],
                },
              },
              _order: ["punctuation", "string"],
            },
            alias: "attr-value",
          },
          punctuation: />/,
          _order: [
            "directive-block",
            "directive-block-parameter",
            "punctuation",
          ],
        },
        alias: "tag",
      },
      "directive-flags": { pattern: /\[(\w,?)+\]/, alias: "keyword" },
      string: {
        pattern: /("|').*\1/,
        inside: {
          variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
          _order: ["variable"],
        },
      },
      variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
      regex: /\^?.*\$|\^.*\$?/,
      _order: [
        "comment",
        "directive-inline",
        "directive-block",
        "directive-flags",
        "string",
        "variable",
        "regex",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/clike.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.clike = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
      ],
      string: /("|')(\\\n|\\?.)*?\1/,
      "class-name": {
        pattern:
          /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /(\.|\\)/, _order: ["punctuation"] },
      },
      keyword:
        /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(true|false)\b/,
      function: {
        pattern: /[a-z0-9_]+\(/i,
        inside: { punctuation: /\(/, _order: ["punctuation"] },
      },
      number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
      operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
      ignore: /&(lt|gt|amp);/i,
      punctuation: /[{}[\];(),.:]/,
      _order: [
        "comment",
        "string",
        "class-name",
        "keyword",
        "boolean",
        "function",
        "number",
        "operator",
        "ignore",
        "punctuation",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/coffeescript.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.coffeescript = t.coffee = void 0);
    var r = n("./node_modules/illuminate-js/lib/languages/javascript.js"),
      o = n("./node_modules/illuminate-js/lib/utils/index.js"),
      i = /#(?!\{).+/,
      a = { pattern: /#\{[^}]+\}/, alias: "variable" },
      s = o.lang.extend(r.javascript, {
        comment: i,
        string: [
          /'(?:\\?[^\\])*?'/,
          {
            pattern: /"(?:\\?[^\\])*?"/,
            inside: { interpolation: a, _order: ["interpolation"] },
          },
        ],
        keyword:
          /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
        _order: ["string", "keyword", "class-member"],
      });
    o.lang.insertBefore(s, "comment", {
      "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
      "block-regex": {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: "regex",
        inside: {
          comment: i,
          interpolation: a,
          _order: ["comment", "interpolation"],
        },
      },
      _order: ["multiline-comment", "block-regex"],
    }),
      o.lang.insertBefore(s, "string", {
        "inline-javascript": {
          pattern: /`(?:\\?[\s\S])*?`/,
          inside: {
            delimiter: { pattern: /^`|`$/, alias: "punctuation" },
            _order: ["delimiter"],
          },
        },
        "multiline-string": [
          { pattern: /'''[\s\S]*?'''/, alias: "string" },
          {
            pattern: /"""[\s\S]*?"""/,
            alias: "string",
            inside: { interpolation: a, _order: ["interpolation"] },
          },
        ],
        _order: ["inline-javascript", "multiline-string"],
      }),
      o.lang.insertAfter(
        s["inline-javascript"].inside,
        "delimiter",
        o.lang.clone(r.javascript),
      ),
      o.lang.insertBefore(s, "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/,
        _order: ["property"],
      }),
      (t.coffee = s),
      (t.coffeescript = s);
  },
  "./node_modules/illuminate-js/lib/languages/css.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.css = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/markup.js"),
      i = {
        comment: /\/\*[\w\W]*?\*\//,
        atrule: {
          pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
          inside: { rule: /@[\w-]+/, _order: ["rule"] },
        },
        url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: {
          pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
          inside: {
            "pseudo-element":
              /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:\.\w]+/,
            id: /#[-:\.\w]+/,
            _order: ["pseudo-element", "pseudo-class", "class", "id"],
          },
        },
        string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
        property: /(\b|\B)[\w-]+(?=\s*:)/i,
        important: /\B!important\b/i,
        hexcode: /#[\da-f]{3,6}/i,
        entity: /\\[\da-f]{1,8}/i,
        number: /[\d%\.]+/,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/,
        _order: [
          "comment",
          "atrule",
          "url",
          "selector",
          "string",
          "property",
          "important",
          "hexcode",
          "entity",
          "number",
          "function",
          "punctuation",
        ],
      };
    r.lang.insertAfter(i.atrule.inside, "rule", r.lang.clone(i)),
      r.lang.insertBefore(o.markup, "tag", {
        style: {
          pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
          lookbehind: !0,
          inside: r.lang.clone(i),
          alias: "language-css",
        },
        _order: ["style"],
      }),
      r.lang.insertBefore(o.markup.tag.inside, "attr-value", {
        "style-attr": {
          pattern: /\s*style=("|").*?\1/i,
          inside: {
            "attr-name": {
              pattern: /^\s*style/i,
              inside: r.lang.clone(o.markup.tag.inside),
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": { pattern: /.+/i, inside: r.lang.clone(i) },
            _order: ["attr-name", "punctuation", "attr-value"],
          },
          alias: "language-css",
        },
        _order: ["style-attr"],
      }),
      (t.css = i);
  },
  "./node_modules/illuminate-js/lib/languages/diff.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.diff = {
      coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
      deleted: /^[-<].+$/m,
      inserted: /^[+>].+$/m,
      diff: { pattern: /^!(?!!).+$/m, alias: "important" },
      _order: ["coord", "deleted", "inserted", "diff"],
    };
  },
  "./node_modules/illuminate-js/lib/languages/http.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.http = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/javascript.js"),
      i = n("./node_modules/illuminate-js/lib/languages/markup.js");
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var s = {
        "request-line": {
          pattern:
            /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
          inside: {
            property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
            "attr-name": /:\w+/,
            _order: ["property", "attr-name"],
          },
        },
        "response-status": {
          pattern: /^HTTP\/1.[01] [0-9]+.*/m,
          inside: {
            property: { pattern: /(^HTTP\/1.[01] )[0-9]+.*/i, lookbehind: !0 },
            _order: ["property"],
          },
        },
        "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" },
        _order: ["request-line", "response-status", "header-name"],
      },
      l = {
        "application/json": o.javascript,
        "application/xml": i.markup,
        "text/xml": i.markup,
        "text/html": i.markup,
      };
    Object.keys(l).forEach(function (e) {
      var t,
        n =
          (a((t = {}), e, {
            pattern: new RegExp(
              '(content-type:\\s*"' +
                e +
                "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*",
              "i",
            ),
            lookbehind: !0,
            inside: l[e],
          }),
          a(t, "_order", [e]),
          t);
      r.lang.insertBefore(s, "header-name", n);
    }),
      (t.http = s);
  },
  "./node_modules/illuminate-js/lib/languages/index.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("./node_modules/illuminate-js/lib/languages/apacheconf.js"),
      o = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return r[e];
          },
        });
      };
    for (var i in r) o(i);
    var a = n("./node_modules/illuminate-js/lib/languages/clike.js"),
      s = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return a[e];
          },
        });
      };
    for (var l in a) s(l);
    var c = n("./node_modules/illuminate-js/lib/languages/coffeescript.js"),
      u = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return c[e];
          },
        });
      };
    for (var p in c) u(p);
    var d = n("./node_modules/illuminate-js/lib/languages/css.js"),
      f = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return d[e];
          },
        });
      };
    for (var m in d) f(m);
    var h = n("./node_modules/illuminate-js/lib/languages/diff.js"),
      g = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return h[e];
          },
        });
      };
    for (var b in h) g(b);
    var y = n("./node_modules/illuminate-js/lib/languages/http.js"),
      v = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return y[e];
          },
        });
      };
    for (var _ in y) v(_);
    var w = n("./node_modules/illuminate-js/lib/languages/ini.js"),
      k = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return w[e];
          },
        });
      };
    for (var x in w) k(x);
    var C = n("./node_modules/illuminate-js/lib/languages/javascript.js"),
      T = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return C[e];
          },
        });
      };
    for (var S in C) T(S);
    var E = n("./node_modules/illuminate-js/lib/languages/json.js"),
      A = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return E[e];
          },
        });
      };
    for (var j in E) A(j);
    var P = n("./node_modules/illuminate-js/lib/languages/jsx.js"),
      R = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return P[e];
          },
        });
      };
    for (var O in P) R(O);
    var M = n("./node_modules/illuminate-js/lib/languages/less.js"),
      L = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return M[e];
          },
        });
      };
    for (var N in M) L(N);
    var D = n("./node_modules/illuminate-js/lib/languages/makefile.js"),
      I = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return D[e];
          },
        });
      };
    for (var q in D) I(q);
    var U = n("./node_modules/illuminate-js/lib/languages/markup.js"),
      F = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return U[e];
          },
        });
      };
    for (var B in U) F(B);
    var H = n("./node_modules/illuminate-js/lib/languages/php.js"),
      z = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return H[e];
          },
        });
      };
    for (var V in H) z(V);
    var W = n("./node_modules/illuminate-js/lib/languages/python.js"),
      G = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return W[e];
          },
        });
      };
    for (var $ in W) G($);
    var K = n("./node_modules/illuminate-js/lib/languages/ruby.js"),
      Q = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return K[e];
          },
        });
      };
    for (var Y in K) Q(Y);
    var Z = n("./node_modules/illuminate-js/lib/languages/sass.js"),
      X = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return Z[e];
          },
        });
      };
    for (var J in Z) X(J);
    var ee = n("./node_modules/illuminate-js/lib/languages/scss.js"),
      te = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return ee[e];
          },
        });
      };
    for (var ne in ee) te(ne);
    var re = n("./node_modules/illuminate-js/lib/languages/sql.js"),
      oe = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return re[e];
          },
        });
      };
    for (var ie in re) oe(ie);
    var ae = n("./node_modules/illuminate-js/lib/languages/typescript.js"),
      se = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return ae[e];
          },
        });
      };
    for (var le in ae) se(le);
    var ce = n("./node_modules/illuminate-js/lib/languages/yaml.js"),
      ue = function (e) {
        if ("default" === e) return "continue";
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            return ce[e];
          },
        });
      };
    for (var pe in ce) ue(pe);
  },
  "./node_modules/illuminate-js/lib/languages/ini.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.ini = {
      comment: /^[ \t]*;.*$/m,
      important: /\[.*?\]/,
      constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
      "attr-value": {
        pattern: /=.*/,
        inside: { punctuation: /^[=]/, _order: ["punctuation"] },
      },
      _order: ["comment", "important", "constant", "attr-value"],
    };
  },
  "./node_modules/illuminate-js/lib/languages/javascript.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.javascript = t.js = void 0);
    var r = n("./node_modules/illuminate-js/lib/languages/clike.js"),
      o = n("./node_modules/illuminate-js/lib/utils/index.js"),
      i = n("./node_modules/illuminate-js/lib/languages/markup.js"),
      a = o.lang.extend(r.clike, {
        keyword:
          /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number:
          /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
      });
    o.lang.insertBefore(a, "keyword", {
      regex: {
        pattern:
          /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
      },
      _order: ["regex"],
    }),
      o.lang.insertBefore(a, "class-name", {
        "template-string": {
          pattern: /`(?:\\`|\\?[^`])*`/,
          inside: {
            interpolation: {
              pattern: /\$\{[^}]+\}/,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation",
                },
                _order: ["interpolation-punctuation"],
              },
            },
            string: /[\s\S]+/,
            _order: ["interpolation", "string"],
          },
        },
        _order: ["template-string"],
      }),
      o.lang.insertAfter(
        a["template-string"].inside.interpolation.inside,
        "interpolation-punctuation",
        o.lang.clone(a),
      ),
      o.lang.insertBefore(i.markup, "tag", {
        script: {
          pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
          lookbehind: !0,
          inside: o.lang.clone(a),
          alias: "language-javascript",
        },
        _order: ["script"],
      }),
      (t.js = a),
      (t.javascript = a);
  },
  "./node_modules/illuminate-js/lib/languages/json.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.json = {
      property: /"(\b|\B)[\w-]+"(?=\s*:)/gi,
      string: /"(?!:)(\\?[^'"])*?"(?!:)/g,
      number: /-?\d*\.?\d+([Ee]-?\d+)?/g,
      punctuation: /[{}[\]);,]/g,
      operator: /:/g,
      boolean: /\b(true|false)\b/gi,
      null: /\bnull\b/gi,
      _order: [
        "property",
        "string",
        "number",
        "punctuation",
        "operator",
        "boolean",
        "null",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/jsx.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.jsx = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/javascript.js"),
      i = n("./node_modules/illuminate-js/lib/languages/markup.js"),
      a = r.lang.extend(i.markup, o.javascript);
    (a.tag.pattern =
      /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i),
      (a.tag.inside["attr-value"].pattern =
        /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i);
    var s = r.lang.clone(a);
    delete s.punctuation,
      r.lang.insertBefore(s, "operator", {
        punctuation: /=(?={)|[{}[\];(),.:]/,
        _order: ["punctuation"],
      }),
      r.lang.insertBefore(a.tag.inside, "attr-value", {
        script: {
          pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
          inside: s,
          alias: "language-javascript",
        },
        _order: ["script"],
      }),
      (t.jsx = a);
  },
  "./node_modules/illuminate-js/lib/languages/less.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.less = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/css.js"),
      i = r.lang.extend(o.css, {
        comment: [
          /\/\*[\w\W]*?\*\//,
          { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
        ],
        atrule: {
          pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
          inside: { punctuation: /[:()]/, _order: ["punctuation"] },
        },
        selector: {
          pattern:
            /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
          inside: { variable: /@+[\w-]+/, _order: ["variable"] },
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
        punctuation: /[{}();:,]/,
        operator: /[+\-*\/]/,
        _order: [
          "comment",
          "atrule",
          "selector",
          "property",
          "punctuation",
          "operator",
        ],
      });
    r.lang.insertBefore(i, "property", {
      variable: [
        {
          pattern: /@[\w-]+\s*:/,
          inside: { punctuation: /:/, _order: ["punctuation"] },
        },
        /@@?[\w-]+/,
      ],
      "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
        lookbehind: !0,
        alias: "function",
      },
      _order: ["variable", "mixin-usage"],
    }),
      (t.less = i);
  },
  "./node_modules/illuminate-js/lib/languages/makefile.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.makefile = {
      comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,
        lookbehind: !0,
      },
      string: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
      symbol: {
        pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
        inside: {
          variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/,
          _order: ["variable"],
        },
      },
      variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
      keyword: [
        /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
        {
          pattern:
            /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
          lookbehind: !0,
        },
      ],
      operator: /(?:::|[?:+!])?=|[|@]/,
      punctuation: /[:;(){}]/,
      _order: [
        "comment",
        "string",
        "builtin",
        "symbol",
        "variable",
        "keyword",
        "operator",
        "punctuation",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/markup.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.svg = t.html = t.xml = t.markup = void 0);
    var r = {
      comment: /<!--[\w\W]*?-->/,
      prolog: /<\?[\w\W]+?\?>/,
      doctype: /<!DOCTYPE[\w\W]+?>/,
      cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/,
              _order: ["punctuation", "namespace"],
            },
          },
          "attr-value": {
            pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
            inside: { punctuation: /[=>"']/, _order: ["punctuation"] },
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/, _order: ["namespace"] },
          },
          _order: ["tag", "attr-value", "punctuation", "attr-name"],
        },
      },
      entity: /&#?[\da-z]{1,8};/i,
      _order: ["comment", "prolog", "doctype", "cdata", "tag", "entity"],
    };
    (0, n("./node_modules/illuminate-js/lib/hooks.js").add)(
      "wrap",
      function (e) {
        "entity" === e.type &&
          (e.attributes.title = e.content.replace(/&amp;/, "&"));
      },
    ),
      (t.markup = r),
      (t.xml = r),
      (t.html = r),
      (t.svg = r);
  },
  "./node_modules/illuminate-js/lib/languages/php.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.php = void 0);
    var r = n("./node_modules/illuminate-js/lib/languages/clike.js"),
      o = n("./node_modules/illuminate-js/lib/utils/index.js"),
      i = o.lang.extend(r.clike, {
        keyword:
          /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
          lookbehind: !0,
        },
      });
    o.lang.insertBefore(i, "class-name", {
      "shell-comment": {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        alias: "comment",
      },
      _order: ["shell-comment"],
    }),
      o.lang.insertBefore(i, "keyword", {
        delimiter: /\?>|<\?(?:php)?/gi,
        variable: /\$\w+\b/i,
        package: {
          pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
          lookbehind: !0,
          inside: { punctuation: /\\/, _order: ["punctuation"] },
        },
        _order: ["delimiter", "variable", "package"],
      }),
      o.lang.insertBefore(i, "operator", {
        property: { pattern: /(->)[\w]+/, lookbehind: !0 },
        _order: ["property"],
      }),
      o.lang.insertBefore(i, "variable", {
        this: /\$this\b/,
        global:
          /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
        scope: {
          pattern: /\b[\w\\]+::/,
          inside: {
            keyword: /(static|self|parent)/,
            punctuation: /(::|\\)/,
            _order: ["keyword", "punctuation"],
          },
        },
        _order: ["this", "global", "scope"],
      }),
      (t.php = i);
  },
  "./node_modules/illuminate-js/lib/languages/python.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.python = {
      "triple-quoted-string": {
        pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
        alias: "string",
      },
      comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
      string: /("|')(?:\\?.)*?\1/,
      function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
        lookbehind: !0,
      },
      "class-name": { pattern: /(\bclass\s+)[a-z0-9_]+/i, lookbehind: !0 },
      keyword:
        /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
      boolean: /\b(?:True|False)\b/,
      number:
        /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
      operator:
        /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
      punctuation: /[{}[\];(),.:]/,
      _order: [
        "triple-quoted-string",
        "comment",
        "string",
        "function",
        "class-name",
        "keyword",
        "boolean",
        "number",
        "operator",
        "punctuation",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/ruby.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ruby = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/clike.js"),
      i = r.lang.extend(o.clike, {
        comment: /#(?!\{[^\r\n]*?\}).*/,
        keyword:
          /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,
      }),
      a = {
        interpolation: {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: { pattern: /^#\{|\}$/, alias: "tag" },
            _order: ["delimiter"],
          },
        },
        _order: ["interpolation"],
      };
    r.lang.insertAfter(a.interpolation.inside, "delimiter", r.lang.clone(i)),
      r.lang.insertBefore(i, "keyword", {
        regex: [
          {
            pattern:
              /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
            inside: a,
          },
          { pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/, inside: a },
          {
            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
            inside: a,
          },
          { pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/, inside: a },
          { pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/, inside: a },
          {
            pattern:
              /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
          },
        ],
        variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        _order: ["regex", "variable", "symbol"],
      }),
      r.lang.insertBefore(i, "number", {
        builtin:
          /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/,
        _order: ["builtin", "constant"],
      }),
      (i.string = [
        {
          pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
          inside: a,
        },
        { pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/, inside: a },
        {
          pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
          inside: a,
        },
        { pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/, inside: a },
        { pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/, inside: a },
        { pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/, inside: a },
      ]),
      (t.ruby = i);
  },
  "./node_modules/illuminate-js/lib/languages/sass.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/css.js"),
      i = r.lang.extend(o.css, {
        comment: {
          pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
          lookbehind: !0,
        },
        _order: ["comment"],
      });
    r.lang.insertBefore(i, "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: { atrule: /(?:@[\w-]+|[+=])/m, _order: ["atrule"] },
      },
      _order: ["atrule-line"],
    }),
      delete i.atrule;
    var a = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
      s = [
        /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
        { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
      ];
    r.lang.insertBefore(i, "property", {
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        inside: {
          punctuation: /:/,
          variable: a,
          operator: s,
          _order: ["punctuation", "variable", "operator"],
        },
      },
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            { pattern: /(:)[^:\s]+/, lookbehind: !0 },
          ],
          punctuation: /:/,
          variable: a,
          operator: s,
          important: i.important,
          _order: [
            "property",
            "punctuation",
            "variable",
            "operator",
            "important",
          ],
        },
      },
      _order: ["variable-line", "property-line"],
    }),
      delete i.property,
      delete i.important,
      delete i.selector,
      r.lang.insertBefore(i, "punctuation", {
        selector: {
          pattern:
            /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
          lookbehind: !0,
        },
        _order: ["selector"],
      });
  },
  "./node_modules/illuminate-js/lib/languages/scss.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.scss = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/css.js"),
      i = r.lang.extend(o.css, {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
          lookbehind: !0,
        },
        atrule: {
          pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
          inside: { rule: /@[\w-]+/, _order: ["rule"] },
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
          pattern:
            /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
          inside: { placeholder: /%[-_\w]+/, _order: ["placeholder"] },
        },
        _order: ["comment", "atrule", "url", "selector"],
      });
    r.lang.insertBefore(i, "atrule", {
      keyword: [
        /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
        { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
      ],
      _order: ["keyword"],
    }),
      r.lang.insertBefore(i, "property", {
        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/,
        _order: ["variable"],
      }),
      r.lang.insertBefore(i, "function", {
        placeholder: { pattern: /%[-_\w]+/, alias: "selector" },
        statement: /\B!(?:default|optional)\b/i,
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
          lookbehind: !0,
        },
        _order: ["placeholder", "statement", "boolean", "null", "operator"],
      }),
      r.lang.insertAfter(i.atrule.inside, "rule", r.lang.clone(i)),
      (t.scss = i);
  },
  "./node_modules/illuminate-js/lib/languages/sql.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.sql = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0,
      },
      string: { pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/, lookbehind: !0 },
      variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
      function:
        /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
      keyword:
        /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
      boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
      number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
      operator:
        /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
      punctuation: /[;[\]()`,.]/,
      _order: [
        "comment",
        "string",
        "variable",
        "function",
        "keyword",
        "boolean",
        "number",
        "operator",
        "punctuation",
      ],
    };
  },
  "./node_modules/illuminate-js/lib/languages/typescript.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.typescript = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/index.js"),
      o = n("./node_modules/illuminate-js/lib/languages/javascript.js"),
      i = r.lang.extend(o.javascript, {
        keyword:
          /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/,
        _order: ["keyword"],
      });
    t.typescript = i;
  },
  "./node_modules/illuminate-js/lib/languages/yaml.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
      scalar: {
        pattern:
          /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
        lookbehind: !0,
        alias: "string",
      },
      comment: /#.*/,
      key: {
        pattern:
          /(\s*[:\-,[{\r\n?][ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#]+?(?=\s*:\s)/,
        lookbehind: !0,
        alias: "atrule",
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important",
      },
      datetime: {
        pattern:
          /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0,
        alias: "number",
      },
      boolean: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: "important",
      },
      null: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: "important",
      },
      string: {
        pattern:
          /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0,
      },
      number: {
        pattern:
          /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
      },
      tag: /![^\s]+/,
      important: /[&*][\w]+/,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
      _order: [
        "scalar",
        "comment",
        "key",
        "directive",
        "datetime",
        "boolean",
        "null",
        "string",
        "number",
        "tag",
        "important",
        "punctuation",
      ],
    };
    (t.yaml = r), (t.yml = r);
  },
  "./node_modules/illuminate-js/lib/token.js": function (e, t, n) {
    "use strict";
    var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("./node_modules/illuminate-js/lib/hooks.js");
    var i = (function () {
      function e(t, n, r) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.type = t),
          (this.content = n),
          (this.alias = r);
      }
      return (
        r(e, null, [
          {
            key: "stringify",
            value: function (t, n, r) {
              if ("string" == typeof t) return t;
              if (Array.isArray(t))
                return t
                  .map(function (r) {
                    return e.stringify(r, n, t);
                  })
                  .join("");
              var i = {
                type: t.type,
                content: e.stringify(t.content, n, r),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: n,
                parent: r,
              };
              switch (i.type) {
                case "comment":
                  i.attributes.spellcheck = "true";
                  break;
                case "keyword":
                  i.classes.push("keyword-" + i.content.toLowerCase().trim());
                  break;
                case "punctuation":
                  i.content.match(/\(|\)/g)
                    ? i.classes.push("brackets-parentheses")
                    : i.content.match(/<|>/g)
                      ? i.classes.push("brackets-angle")
                      : i.content.match(/\[|\]>/g)
                        ? i.classes.push("brackets-square")
                        : i.content.match(/\{|\}/g) &&
                          i.classes.push("brackets-braces");
              }
              if (t.alias) {
                var a,
                  s = Array.isArray(t.alias) ? t.alias : [t.alias];
                (a = i.classes).push.apply(
                  a,
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(s),
                );
              }
              (0, o.run)("wrap", i);
              var l = Object.keys(i.attributes).reduce(function (e, t) {
                return "" + e + t + '="' + (i.attributes[t] || "") + '" ';
              }, "");
              return (
                "<" +
                i.tag +
                ' class="' +
                i.classes.join(" ") +
                '" ' +
                l +
                ">" +
                i.content +
                "</" +
                i.tag +
                ">"
              );
            },
          },
        ]),
        e
      );
    })();
    t.default = i;
  },
  "./node_modules/illuminate-js/lib/utils/encode.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function e(t) {
        if (t instanceof i.default)
          return new i.default(t.type, e(t.content), t.alias);
        if (Array.isArray(t)) return t.map(e);
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\u00a0/g, " ");
      });
    var r,
      o = n("./node_modules/illuminate-js/lib/token.js"),
      i = (r = o) && r.__esModule ? r : { default: r };
  },
  "./node_modules/illuminate-js/lib/utils/index.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.lang = t.encode = void 0);
    var r = n("./node_modules/illuminate-js/lib/utils/encode.js");
    Object.defineProperty(t, "encode", {
      enumerable: !0,
      get: function () {
        return r.default;
      },
    });
    var o = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n("./node_modules/illuminate-js/lib/utils/lang.js"));
    t.lang = o;
  },
  "./node_modules/illuminate-js/lib/utils/lang.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.clone = c),
      (t.extend = function (e, t) {
        var n = e._order,
          o =
            (t._order,
            (function (e, t) {
              var n = {};
              for (var r in e)
                t.indexOf(r) >= 0 ||
                  (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
              return n;
            })(t, ["_order"])),
          i = Object.keys(o),
          s = (0, a.default)(i, n),
          l = c(e);
        return (0, r.default)(l, t, { _order: n.concat(s) });
      }),
      (t.insertBefore = function (e, t, n) {
        var o;
        if (
          !(0, i.default)(e) ||
          !e.hasOwnProperty("_order") ||
          !Array.isArray(e._order)
        )
          throw new Error(
            "Source does not have required property '_order' as an array.",
          );
        if (
          !(0, i.default)(n) ||
          !n.hasOwnProperty("_order") ||
          !Array.isArray(n._order)
        )
          throw new Error(
            "insert does not have required property '_order' as an array",
          );
        e._order = (0, a.default)(e._order, Object.keys(n));
        var s = e._order.indexOf(t);
        return (
          (o = e._order).splice.apply(o, [s, 0].concat(l(n._order))),
          delete n._order,
          (0, r.default)(e, n)
        );
      }),
      (t.insertAfter = function (e, t, n) {
        var o;
        if (
          !(0, i.default)(e) ||
          !e.hasOwnProperty("_order") ||
          !Array.isArray(e._order)
        )
          throw new Error(
            "Source does not have required property '_order' as an array.",
          );
        if (
          !(0, i.default)(n) ||
          !n.hasOwnProperty("_order") ||
          !Array.isArray(n._order)
        )
          throw new Error(
            "insert does not have required property '_order' as an array",
          );
        var a = e._order.indexOf(t);
        return (
          (o = e._order).splice.apply(o, [a + 1, 0].concat(l(n._order))),
          delete n._order,
          (0, r.default)(e, n)
        );
      });
    var r = s(n("./node_modules/extend-shallow/index.js")),
      o = s(n("./node_modules/lodash.clonedeep/index.js")),
      i = s(n("./node_modules/is-plain-object/index.js")),
      a = s(n("./node_modules/array-differ/index.js"));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function c(e) {
      return (0, o.default)(e);
    }
  },
  "./node_modules/invariant/browser.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o, i, a, s) {
      if (!e) {
        var l;
        if (void 0 === t)
          l = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
          );
        else {
          var c = [n, r, o, i, a, s],
            u = 0;
          (l = new Error(
            t.replace(/%s/g, function () {
              return c[u++];
            }),
          )).name = "Invariant Violation";
        }
        throw ((l.framesToPop = 1), l);
      }
    };
  },
  "./node_modules/is-arrayish/index.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return (
        !(!e || "string" == typeof e) &&
        (e instanceof Array ||
          Array.isArray(e) ||
          (e.length >= 0 &&
            (e.splice instanceof Function ||
              (Object.getOwnPropertyDescriptor(e, e.length - 1) &&
                "String" !== e.constructor.name))))
      );
    };
  },
  "./node_modules/is-extendable/index.js": function (e, t, n) {
    "use strict";
    /*!
     * is-extendable <https://github.com/jonschlinkert/is-extendable>
     *
     * Copyright (c) 2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */ e.exports = function (e) {
      return (
        void 0 !== e &&
        null !== e &&
        ("object" == typeof e || "function" == typeof e)
      );
    };
  },
  "./node_modules/is-plain-object/index.js": function (e, t, n) {
    "use strict";
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */ var r = n("./node_modules/isobject/index.js");
    function o(e) {
      return (
        !0 === r(e) && "[object Object]" === Object.prototype.toString.call(e)
      );
    }
    e.exports = function (e) {
      var t, n;
      return (
        !1 !== o(e) &&
        "function" == typeof (t = e.constructor) &&
        !1 !== o((n = t.prototype)) &&
        !1 !== n.hasOwnProperty("isPrototypeOf")
      );
    };
  },
  "./node_modules/isobject/index.js": function (e, t, n) {
    "use strict";
    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */ e.exports = function (e) {
      return null != e && "object" == typeof e && !1 === Array.isArray(e);
    };
  },
  "./node_modules/linaria/build/index.runtime.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("./node_modules/linaria/build/names.js");
    Object.defineProperty(t, "names", {
      enumerable: !0,
      get: function () {
        return i(r).default;
      },
    });
    var o = n("./node_modules/linaria/build/styles.js");
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "styles", {
      enumerable: !0,
      get: function () {
        return i(o).default;
      },
    }),
      (t.css = s),
      (t.include = function () {
        throw a("include");
      });
    var a = function (e) {
      return new Error(
        "Looks like you tried to use " +
          e +
          " from 'linaria' in runtime, but it's not supported.",
      );
    };
    function s() {
      throw a("css");
    }
    (s.named = function () {
      throw a("css.named");
    }),
      (s.include = function () {
        throw a("css.include");
      });
  },
  "./node_modules/linaria/build/names.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      });
  },
  "./node_modules/linaria/build/styles.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        return { className: i.default.apply(void 0, arguments) };
      });
    var r,
      o = n("./node_modules/linaria/build/names.js"),
      i = (r = o) && r.__esModule ? r : { default: r };
  },
  "./node_modules/lodash.clonedeep/index.js": function (e, t, n) {
    (function (e, n) {
      var r = 200,
        o = "__lodash_hash_undefined__",
        i = 9007199254740991,
        a = "[object Arguments]",
        s = "[object Boolean]",
        l = "[object Date]",
        c = "[object Function]",
        u = "[object GeneratorFunction]",
        p = "[object Map]",
        d = "[object Number]",
        f = "[object Object]",
        m = "[object RegExp]",
        h = "[object Set]",
        g = "[object String]",
        b = "[object Symbol]",
        y = "[object ArrayBuffer]",
        v = "[object DataView]",
        _ = "[object Float32Array]",
        w = "[object Float64Array]",
        k = "[object Int8Array]",
        x = "[object Int16Array]",
        C = "[object Int32Array]",
        T = "[object Uint8Array]",
        S = "[object Uint8ClampedArray]",
        E = "[object Uint16Array]",
        A = "[object Uint32Array]",
        j = /\w*$/,
        P = /^\[object .+?Constructor\]$/,
        R = /^(?:0|[1-9]\d*)$/,
        O = {};
      (O[a] =
        O["[object Array]"] =
        O[y] =
        O[v] =
        O[s] =
        O[l] =
        O[_] =
        O[w] =
        O[k] =
        O[x] =
        O[C] =
        O[p] =
        O[d] =
        O[f] =
        O[m] =
        O[h] =
        O[g] =
        O[b] =
        O[T] =
        O[S] =
        O[E] =
        O[A] =
          !0),
        (O["[object Error]"] = O[c] = O["[object WeakMap]"] = !1);
      var M = "object" == typeof e && e && e.Object === Object && e,
        L = "object" == typeof self && self && self.Object === Object && self,
        N = M || L || Function("return this")(),
        D = "object" == typeof t && t && !t.nodeType && t,
        I = D && "object" == typeof n && n && !n.nodeType && n,
        q = I && I.exports === D;
      function U(e, t) {
        return e.set(t[0], t[1]), e;
      }
      function F(e, t) {
        return e.add(t), e;
      }
      function B(e, t, n, r) {
        var o = -1,
          i = e ? e.length : 0;
        for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
        return n;
      }
      function H(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString)
          try {
            t = !!(e + "");
          } catch (e) {}
        return t;
      }
      function z(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      function V(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      function W(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      var G,
        $ = Array.prototype,
        K = Function.prototype,
        Q = Object.prototype,
        Y = N["__core-js_shared__"],
        Z = (G = /[^.]+$/.exec((Y && Y.keys && Y.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + G
          : "",
        X = K.toString,
        J = Q.hasOwnProperty,
        ee = Q.toString,
        te = RegExp(
          "^" +
            X.call(J)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        ),
        ne = q ? N.Buffer : void 0,
        re = N.Symbol,
        oe = N.Uint8Array,
        ie = V(Object.getPrototypeOf, Object),
        ae = Object.create,
        se = Q.propertyIsEnumerable,
        le = $.splice,
        ce = Object.getOwnPropertySymbols,
        ue = ne ? ne.isBuffer : void 0,
        pe = V(Object.keys, Object),
        de = Ie(N, "DataView"),
        fe = Ie(N, "Map"),
        me = Ie(N, "Promise"),
        he = Ie(N, "Set"),
        ge = Ie(N, "WeakMap"),
        be = Ie(Object, "create"),
        ye = He(de),
        ve = He(fe),
        _e = He(me),
        we = He(he),
        ke = He(ge),
        xe = re ? re.prototype : void 0,
        Ce = xe ? xe.valueOf : void 0;
      function Te(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Se(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Ee(e) {
        var t = -1,
          n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Ae(e) {
        this.__data__ = new Se(e);
      }
      function je(e, t) {
        var n =
            Ve(e) ||
            (function (e) {
              return (
                (function (e) {
                  return (
                    (function (e) {
                      return !!e && "object" == typeof e;
                    })(e) && We(e)
                  );
                })(e) &&
                J.call(e, "callee") &&
                (!se.call(e, "callee") || ee.call(e) == a)
              );
            })(e)
              ? (function (e, t) {
                  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                  return r;
                })(e.length, String)
              : [],
          r = n.length,
          o = !!r;
        for (var i in e)
          (!t && !J.call(e, i)) ||
            (o && ("length" == i || Fe(i, r))) ||
            n.push(i);
        return n;
      }
      function Pe(e, t, n) {
        var r = e[t];
        (J.call(e, t) && ze(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
      }
      function Re(e, t) {
        for (var n = e.length; n--; ) if (ze(e[n][0], t)) return n;
        return -1;
      }
      function Oe(e, t, n, r, o, i, P) {
        var R;
        if ((r && (R = i ? r(e, o, i, P) : r(e)), void 0 !== R)) return R;
        if (!Ke(e)) return e;
        var M = Ve(e);
        if (M) {
          if (
            ((R = (function (e) {
              var t = e.length,
                n = e.constructor(t);
              t &&
                "string" == typeof e[0] &&
                J.call(e, "index") &&
                ((n.index = e.index), (n.input = e.input));
              return n;
            })(e)),
            !t)
          )
            return (function (e, t) {
              var n = -1,
                r = e.length;
              t || (t = Array(r));
              for (; ++n < r; ) t[n] = e[n];
              return t;
            })(e, R);
        } else {
          var L = Ue(e),
            N = L == c || L == u;
          if (Ge(e))
            return (function (e, t) {
              if (t) return e.slice();
              var n = new e.constructor(e.length);
              return e.copy(n), n;
            })(e, t);
          if (L == f || L == a || (N && !i)) {
            if (H(e)) return i ? e : {};
            if (
              ((R = (function (e) {
                return "function" != typeof e.constructor || Be(e)
                  ? {}
                  : ((t = ie(e)), Ke(t) ? ae(t) : {});
                var t;
              })(N ? {} : e)),
              !t)
            )
              return (function (e, t) {
                return Ne(e, qe(e), t);
              })(
                e,
                (function (e, t) {
                  return e && Ne(t, Qe(t), e);
                })(R, e),
              );
          } else {
            if (!O[L]) return i ? e : {};
            R = (function (e, t, n, r) {
              var o = e.constructor;
              switch (t) {
                case y:
                  return Le(e);
                case s:
                case l:
                  return new o(+e);
                case v:
                  return (function (e, t) {
                    var n = t ? Le(e.buffer) : e.buffer;
                    return new e.constructor(n, e.byteOffset, e.byteLength);
                  })(e, r);
                case _:
                case w:
                case k:
                case x:
                case C:
                case T:
                case S:
                case E:
                case A:
                  return (function (e, t) {
                    var n = t ? Le(e.buffer) : e.buffer;
                    return new e.constructor(n, e.byteOffset, e.length);
                  })(e, r);
                case p:
                  return (function (e, t, n) {
                    return B(t ? n(z(e), !0) : z(e), U, new e.constructor());
                  })(e, r, n);
                case d:
                case g:
                  return new o(e);
                case m:
                  return (
                    ((c = new (a = e).constructor(
                      a.source,
                      j.exec(a),
                    )).lastIndex = a.lastIndex),
                    c
                  );
                case h:
                  return (function (e, t, n) {
                    return B(t ? n(W(e), !0) : W(e), F, new e.constructor());
                  })(e, r, n);
                case b:
                  return (i = e), Ce ? Object(Ce.call(i)) : {};
              }
              var i;
              var a, c;
            })(e, L, Oe, t);
          }
        }
        P || (P = new Ae());
        var D = P.get(e);
        if (D) return D;
        if ((P.set(e, R), !M))
          var I = n
            ? (function (e) {
                return (function (e, t, n) {
                  var r = t(e);
                  return Ve(e)
                    ? r
                    : (function (e, t) {
                        for (var n = -1, r = t.length, o = e.length; ++n < r; )
                          e[o + n] = t[n];
                        return e;
                      })(r, n(e));
                })(e, Qe, qe);
              })(e)
            : Qe(e);
        return (
          (function (e, t) {
            for (
              var n = -1, r = e ? e.length : 0;
              ++n < r && !1 !== t(e[n], n, e);

            );
          })(I || e, function (o, i) {
            I && (o = e[(i = o)]), Pe(R, i, Oe(o, t, n, r, i, e, P));
          }),
          R
        );
      }
      function Me(e) {
        return (
          !(!Ke(e) || (Z && Z in e)) && ($e(e) || H(e) ? te : P).test(He(e))
        );
      }
      function Le(e) {
        var t = new e.constructor(e.byteLength);
        return new oe(t).set(new oe(e)), t;
      }
      function Ne(e, t, n, r) {
        n || (n = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
            s = r ? r(n[a], e[a], a, n, e) : void 0;
          Pe(n, a, void 0 === s ? e[a] : s);
        }
        return n;
      }
      function De(e, t) {
        var n,
          r,
          o = e.__data__;
        return (
          "string" == (r = typeof (n = t)) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== n
            : null === n
        )
          ? o["string" == typeof t ? "string" : "hash"]
          : o.map;
      }
      function Ie(e, t) {
        var n = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return Me(n) ? n : void 0;
      }
      (Te.prototype.clear = function () {
        this.__data__ = be ? be(null) : {};
      }),
        (Te.prototype.delete = function (e) {
          return this.has(e) && delete this.__data__[e];
        }),
        (Te.prototype.get = function (e) {
          var t = this.__data__;
          if (be) {
            var n = t[e];
            return n === o ? void 0 : n;
          }
          return J.call(t, e) ? t[e] : void 0;
        }),
        (Te.prototype.has = function (e) {
          var t = this.__data__;
          return be ? void 0 !== t[e] : J.call(t, e);
        }),
        (Te.prototype.set = function (e, t) {
          return (this.__data__[e] = be && void 0 === t ? o : t), this;
        }),
        (Se.prototype.clear = function () {
          this.__data__ = [];
        }),
        (Se.prototype.delete = function (e) {
          var t = this.__data__,
            n = Re(t, e);
          return !(
            n < 0 || (n == t.length - 1 ? t.pop() : le.call(t, n, 1), 0)
          );
        }),
        (Se.prototype.get = function (e) {
          var t = this.__data__,
            n = Re(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (Se.prototype.has = function (e) {
          return Re(this.__data__, e) > -1;
        }),
        (Se.prototype.set = function (e, t) {
          var n = this.__data__,
            r = Re(n, e);
          return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
        }),
        (Ee.prototype.clear = function () {
          this.__data__ = {
            hash: new Te(),
            map: new (fe || Se)(),
            string: new Te(),
          };
        }),
        (Ee.prototype.delete = function (e) {
          return De(this, e).delete(e);
        }),
        (Ee.prototype.get = function (e) {
          return De(this, e).get(e);
        }),
        (Ee.prototype.has = function (e) {
          return De(this, e).has(e);
        }),
        (Ee.prototype.set = function (e, t) {
          return De(this, e).set(e, t), this;
        }),
        (Ae.prototype.clear = function () {
          this.__data__ = new Se();
        }),
        (Ae.prototype.delete = function (e) {
          return this.__data__.delete(e);
        }),
        (Ae.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (Ae.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (Ae.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof Se) {
            var o = n.__data__;
            if (!fe || o.length < r - 1) return o.push([e, t]), this;
            n = this.__data__ = new Ee(o);
          }
          return n.set(e, t), this;
        });
      var qe = ce
          ? V(ce, Object)
          : function () {
              return [];
            },
        Ue = function (e) {
          return ee.call(e);
        };
      function Fe(e, t) {
        return (
          !!(t = null == t ? i : t) &&
          ("number" == typeof e || R.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function Be(e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || Q);
      }
      function He(e) {
        if (null != e) {
          try {
            return X.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function ze(e, t) {
        return e === t || (e != e && t != t);
      }
      ((de && Ue(new de(new ArrayBuffer(1))) != v) ||
        (fe && Ue(new fe()) != p) ||
        (me && "[object Promise]" != Ue(me.resolve())) ||
        (he && Ue(new he()) != h) ||
        (ge && "[object WeakMap]" != Ue(new ge()))) &&
        (Ue = function (e) {
          var t = ee.call(e),
            n = t == f ? e.constructor : void 0,
            r = n ? He(n) : void 0;
          if (r)
            switch (r) {
              case ye:
                return v;
              case ve:
                return p;
              case _e:
                return "[object Promise]";
              case we:
                return h;
              case ke:
                return "[object WeakMap]";
            }
          return t;
        });
      var Ve = Array.isArray;
      function We(e) {
        return (
          null != e &&
          (function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
          })(e.length) &&
          !$e(e)
        );
      }
      var Ge =
        ue ||
        function () {
          return !1;
        };
      function $e(e) {
        var t = Ke(e) ? ee.call(e) : "";
        return t == c || t == u;
      }
      function Ke(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function Qe(e) {
        return We(e)
          ? je(e)
          : (function (e) {
              if (!Be(e)) return pe(e);
              var t = [];
              for (var n in Object(e))
                J.call(e, n) && "constructor" != n && t.push(n);
              return t;
            })(e);
      }
      n.exports = function (e) {
        return Oe(e, !0, !0);
      };
    }).call(
      this,
      n("./node_modules/webpack/buildin/global.js"),
      n("./node_modules/webpack/buildin/module.js")(e),
    );
  },
  "./node_modules/object-assign/index.js": function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (
            var n,
              a,
              s = (function (e) {
                if (null === e || void 0 === e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined",
                  );
                return Object(e);
              })(e),
              l = 1;
            l < arguments.length;
            l++
          ) {
            for (var c in (n = Object(arguments[l])))
              o.call(n, c) && (s[c] = n[c]);
            if (r) {
              a = r(n);
              for (var u = 0; u < a.length; u++)
                i.call(n, a[u]) && (s[a[u]] = n[a[u]]);
            }
          }
          return s;
        };
  },
  "./node_modules/prop-types/factoryWithThrowingShims.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/fbjs/lib/emptyFunction.js"),
      o = n("./node_modules/fbjs/lib/invariant.js"),
      i = n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
    e.exports = function () {
      function e(e, t, n, r, a, s) {
        s !== i &&
          o(
            !1,
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      };
      return (n.checkPropTypes = r), (n.PropTypes = n), n;
    };
  },
  "./node_modules/prop-types/index.js": function (e, t, n) {
    e.exports = n("./node_modules/prop-types/factoryWithThrowingShims.js")();
  },
  "./node_modules/prop-types/lib/ReactPropTypesSecret.js": function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  "./node_modules/react-dom/cjs/react-dom.production.min.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    /** @license React v16.3.2
     * react-dom.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n("./node_modules/fbjs/lib/invariant.js"),
      o = n("./node_modules/react/index.js"),
      i = n("./node_modules/fbjs/lib/ExecutionEnvironment.js"),
      a = n("./node_modules/object-assign/index.js"),
      s = n("./node_modules/fbjs/lib/emptyFunction.js"),
      l = n("./node_modules/fbjs/lib/getActiveElement.js"),
      c = n("./node_modules/fbjs/lib/shallowEqual.js"),
      u = n("./node_modules/fbjs/lib/containsNode.js"),
      p = n("./node_modules/fbjs/lib/emptyObject.js");
    function d(e) {
      for (
        var t = arguments.length - 1,
          n = "http://reactjs.org/docs/error-decoder.html?invariant=" + e,
          o = 0;
        o < t;
        o++
      )
        n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
      r(
        !1,
        "Minified React error #" +
          e +
          "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n,
      );
    }
    o || d("227");
    var f = {
      _caughtError: null,
      _hasCaughtError: !1,
      _rethrowError: null,
      _hasRethrowError: !1,
      invokeGuardedCallback: function (e, t, n, r, o, i, a, s, l) {
        (function (e, t, n, r, o, i, a, s, l) {
          (this._hasCaughtError = !1), (this._caughtError = null);
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            (this._caughtError = e), (this._hasCaughtError = !0);
          }
        }).apply(f, arguments);
      },
      invokeGuardedCallbackAndCatchFirstError: function (
        e,
        t,
        n,
        r,
        o,
        i,
        a,
        s,
        l,
      ) {
        if (
          (f.invokeGuardedCallback.apply(this, arguments), f.hasCaughtError())
        ) {
          var c = f.clearCaughtError();
          f._hasRethrowError ||
            ((f._hasRethrowError = !0), (f._rethrowError = c));
        }
      },
      rethrowCaughtError: function () {
        return function () {
          if (f._hasRethrowError) {
            var e = f._rethrowError;
            throw ((f._rethrowError = null), (f._hasRethrowError = !1), e);
          }
        }.apply(f, arguments);
      },
      hasCaughtError: function () {
        return f._hasCaughtError;
      },
      clearCaughtError: function () {
        if (f._hasCaughtError) {
          var e = f._caughtError;
          return (f._caughtError = null), (f._hasCaughtError = !1), e;
        }
        d("198");
      },
    };
    var m = null,
      h = {};
    function g() {
      if (m)
        for (var e in h) {
          var t = h[e],
            n = m.indexOf(e);
          if ((-1 < n || d("96", e), !y[n]))
            for (var r in (t.extractEvents || d("97", e),
            (y[n] = t),
            (n = t.eventTypes))) {
              var o = void 0,
                i = n[r],
                a = t,
                s = r;
              v.hasOwnProperty(s) && d("99", s), (v[s] = i);
              var l = i.phasedRegistrationNames;
              if (l) {
                for (o in l) l.hasOwnProperty(o) && b(l[o], a, s);
                o = !0;
              } else
                i.registrationName
                  ? (b(i.registrationName, a, s), (o = !0))
                  : (o = !1);
              o || d("98", r, e);
            }
        }
    }
    function b(e, t, n) {
      _[e] && d("100", e), (_[e] = t), (w[e] = t.eventTypes[n].dependencies);
    }
    var y = [],
      v = {},
      _ = {},
      w = {};
    function k(e) {
      m && d("101"), (m = Array.prototype.slice.call(e)), g();
    }
    function x(e) {
      var t,
        n = !1;
      for (t in e)
        if (e.hasOwnProperty(t)) {
          var r = e[t];
          (h.hasOwnProperty(t) && h[t] === r) ||
            (h[t] && d("102", t), (h[t] = r), (n = !0));
        }
      n && g();
    }
    var C = Object.freeze({
        plugins: y,
        eventNameDispatchConfigs: v,
        registrationNameModules: _,
        registrationNameDependencies: w,
        possibleRegistrationNames: null,
        injectEventPluginOrder: k,
        injectEventPluginsByName: x,
      }),
      T = null,
      S = null,
      E = null;
    function A(e, t, n, r) {
      (t = e.type || "unknown-event"),
        (e.currentTarget = E(r)),
        f.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e),
        (e.currentTarget = null);
    }
    function j(e, t) {
      return (
        null == t && d("30"),
        null == e
          ? t
          : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
              ? [e].concat(t)
              : [e, t]
      );
    }
    function P(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var R = null;
    function O(e, t) {
      if (e) {
        var n = e._dispatchListeners,
          r = e._dispatchInstances;
        if (Array.isArray(n))
          for (var o = 0; o < n.length && !e.isPropagationStopped(); o++)
            A(e, t, n[o], r[o]);
        else n && A(e, t, n, r);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function M(e) {
      return O(e, !0);
    }
    function L(e) {
      return O(e, !1);
    }
    var N = { injectEventPluginOrder: k, injectEventPluginsByName: x };
    function D(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = T(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      return e
        ? null
        : (n && "function" != typeof n && d("231", t, typeof n), n);
    }
    function I(e, t) {
      null !== e && (R = j(R, e)),
        (e = R),
        (R = null),
        e && (P(e, t ? M : L), R && d("95"), f.rethrowCaughtError());
    }
    function q(e, t, n, r) {
      for (var o = null, i = 0; i < y.length; i++) {
        var a = y[i];
        a && (a = a.extractEvents(e, t, n, r)) && (o = j(o, a));
      }
      I(o, !1);
    }
    var U = Object.freeze({
        injection: N,
        getListener: D,
        runEventsInBatch: I,
        runExtractedEventsInBatch: q,
      }),
      F = Math.random().toString(36).slice(2),
      B = "__reactInternalInstance$" + F,
      H = "__reactEventHandlers$" + F;
    function z(e) {
      if (e[B]) return e[B];
      for (; !e[B]; ) {
        if (!e.parentNode) return null;
        e = e.parentNode;
      }
      return 5 === (e = e[B]).tag || 6 === e.tag ? e : null;
    }
    function V(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      d("33");
    }
    function W(e) {
      return e[H] || null;
    }
    var G = Object.freeze({
      precacheFiberNode: function (e, t) {
        t[B] = e;
      },
      getClosestInstanceFromNode: z,
      getInstanceFromNode: function (e) {
        return !(e = e[B]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
      },
      getNodeFromInstance: V,
      getFiberCurrentPropsFromNode: W,
      updateFiberProps: function (e, t) {
        e[H] = t;
      },
    });
    function $(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function K(e, t, n) {
      for (var r = []; e; ) r.push(e), (e = $(e));
      for (e = r.length; 0 < e--; ) t(r[e], "captured", n);
      for (e = 0; e < r.length; e++) t(r[e], "bubbled", n);
    }
    function Q(e, t, n) {
      (t = D(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = j(n._dispatchListeners, t)),
        (n._dispatchInstances = j(n._dispatchInstances, e)));
    }
    function Y(e) {
      e && e.dispatchConfig.phasedRegistrationNames && K(e._targetInst, Q, e);
    }
    function Z(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        var t = e._targetInst;
        K((t = t ? $(t) : null), Q, e);
      }
    }
    function X(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = D(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = j(n._dispatchListeners, t)),
        (n._dispatchInstances = j(n._dispatchInstances, e)));
    }
    function J(e) {
      e && e.dispatchConfig.registrationName && X(e._targetInst, null, e);
    }
    function ee(e) {
      P(e, Y);
    }
    function te(e, t, n, r) {
      if (n && r)
        e: {
          for (var o = n, i = r, a = 0, s = o; s; s = $(s)) a++;
          s = 0;
          for (var l = i; l; l = $(l)) s++;
          for (; 0 < a - s; ) (o = $(o)), a--;
          for (; 0 < s - a; ) (i = $(i)), s--;
          for (; a--; ) {
            if (o === i || o === i.alternate) break e;
            (o = $(o)), (i = $(i));
          }
          o = null;
        }
      else o = null;
      for (
        i = o, o = [];
        n && n !== i && (null === (a = n.alternate) || a !== i);

      )
        o.push(n), (n = $(n));
      for (n = []; r && r !== i && (null === (a = r.alternate) || a !== i); )
        n.push(r), (r = $(r));
      for (r = 0; r < o.length; r++) X(o[r], "bubbled", e);
      for (e = n.length; 0 < e--; ) X(n[e], "captured", t);
    }
    var ne = Object.freeze({
        accumulateTwoPhaseDispatches: ee,
        accumulateTwoPhaseDispatchesSkipTarget: function (e) {
          P(e, Z);
        },
        accumulateEnterLeaveDispatches: te,
        accumulateDirectDispatches: function (e) {
          P(e, J);
        },
      }),
      re = null;
    function oe() {
      return (
        !re &&
          i.canUseDOM &&
          (re =
            "textContent" in document.documentElement
              ? "textContent"
              : "innerText"),
        re
      );
    }
    var ie = { _root: null, _startText: null, _fallbackText: null };
    function ae() {
      if (ie._fallbackText) return ie._fallbackText;
      var e,
        t,
        n = ie._startText,
        r = n.length,
        o = se(),
        i = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
      return (
        (ie._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0)),
        ie._fallbackText
      );
    }
    function se() {
      return "value" in ie._root ? ie._root.value : ie._root[oe()];
    }
    var le =
        "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(
          " ",
        ),
      ce = {
        type: null,
        target: null,
        currentTarget: s.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      };
    function ue(e, t, n, r) {
      for (var o in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(o) &&
          ((t = e[o])
            ? (this[o] = t(n))
            : "target" === o
              ? (this.target = r)
              : (this[o] = n[o]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? s.thatReturnsTrue
          : s.thatReturnsFalse),
        (this.isPropagationStopped = s.thatReturnsFalse),
        this
      );
    }
    function pe(e, t, n, r) {
      if (this.eventPool.length) {
        var o = this.eventPool.pop();
        return this.call(o, e, t, n, r), o;
      }
      return new this(e, t, n, r);
    }
    function de(e) {
      e instanceof this || d("223"),
        e.destructor(),
        10 > this.eventPool.length && this.eventPool.push(e);
    }
    function fe(e) {
      (e.eventPool = []), (e.getPooled = pe), (e.release = de);
    }
    a(ue.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = s.thatReturnsTrue));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = s.thatReturnsTrue));
      },
      persist: function () {
        this.isPersistent = s.thatReturnsTrue;
      },
      isPersistent: s.thatReturnsFalse,
      destructor: function () {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        for (t = 0; t < le.length; t++) this[le[t]] = null;
      },
    }),
      (ue.Interface = ce),
      (ue.extend = function (e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t();
        return (
          a(o, n.prototype),
          (n.prototype = o),
          (n.prototype.constructor = n),
          (n.Interface = a({}, r.Interface, e)),
          (n.extend = r.extend),
          fe(n),
          n
        );
      }),
      fe(ue);
    var me = ue.extend({ data: null }),
      he = ue.extend({ data: null }),
      ge = [9, 13, 27, 32],
      be = i.canUseDOM && "CompositionEvent" in window,
      ye = null;
    i.canUseDOM && "documentMode" in document && (ye = document.documentMode);
    var ve = i.canUseDOM && "TextEvent" in window && !ye,
      _e = i.canUseDOM && (!be || (ye && 8 < ye && 11 >= ye)),
      we = String.fromCharCode(32),
      ke = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture",
          },
          dependencies: [
            "topCompositionEnd",
            "topKeyPress",
            "topTextInput",
            "topPaste",
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture",
          },
          dependencies:
            "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " ",
            ),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies:
            "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " ",
            ),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies:
            "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(
              " ",
            ),
        },
      },
      xe = !1;
    function Ce(e, t) {
      switch (e) {
        case "topKeyUp":
          return -1 !== ge.indexOf(t.keyCode);
        case "topKeyDown":
          return 229 !== t.keyCode;
        case "topKeyPress":
        case "topMouseDown":
        case "topBlur":
          return !0;
        default:
          return !1;
      }
    }
    function Te(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Se = !1;
    var Ee = {
        eventTypes: ke,
        extractEvents: function (e, t, n, r) {
          var o = void 0,
            i = void 0;
          if (be)
            e: {
              switch (e) {
                case "topCompositionStart":
                  o = ke.compositionStart;
                  break e;
                case "topCompositionEnd":
                  o = ke.compositionEnd;
                  break e;
                case "topCompositionUpdate":
                  o = ke.compositionUpdate;
                  break e;
              }
              o = void 0;
            }
          else
            Se
              ? Ce(e, n) && (o = ke.compositionEnd)
              : "topKeyDown" === e &&
                229 === n.keyCode &&
                (o = ke.compositionStart);
          return (
            o
              ? (_e &&
                  (Se || o !== ke.compositionStart
                    ? o === ke.compositionEnd && Se && (i = ae())
                    : ((ie._root = r), (ie._startText = se()), (Se = !0))),
                (o = me.getPooled(o, t, n, r)),
                i ? (o.data = i) : null !== (i = Te(n)) && (o.data = i),
                ee(o),
                (i = o))
              : (i = null),
            (e = ve
              ? (function (e, t) {
                  switch (e) {
                    case "topCompositionEnd":
                      return Te(t);
                    case "topKeyPress":
                      return 32 !== t.which ? null : ((xe = !0), we);
                    case "topTextInput":
                      return (e = t.data) === we && xe ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (Se)
                    return "topCompositionEnd" === e || (!be && Ce(e, t))
                      ? ((e = ae()),
                        (ie._root = null),
                        (ie._startText = null),
                        (ie._fallbackText = null),
                        (Se = !1),
                        e)
                      : null;
                  switch (e) {
                    case "topPaste":
                      return null;
                    case "topKeyPress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "topCompositionEnd":
                      return _e ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = he.getPooled(ke.beforeInput, t, n, r)).data = e), ee(t))
              : (t = null),
            null === i ? t : null === t ? i : [i, t]
          );
        },
      },
      Ae = null,
      je = {
        injectFiberControlledHostComponent: function (e) {
          Ae = e;
        },
      },
      Pe = null,
      Re = null;
    function Oe(e) {
      if ((e = S(e))) {
        (Ae && "function" == typeof Ae.restoreControlledState) || d("194");
        var t = T(e.stateNode);
        Ae.restoreControlledState(e.stateNode, e.type, t);
      }
    }
    function Me(e) {
      Pe ? (Re ? Re.push(e) : (Re = [e])) : (Pe = e);
    }
    function Le() {
      return null !== Pe || null !== Re;
    }
    function Ne() {
      if (Pe) {
        var e = Pe,
          t = Re;
        if (((Re = Pe = null), Oe(e), t))
          for (e = 0; e < t.length; e++) Oe(t[e]);
      }
    }
    var De = Object.freeze({
      injection: je,
      enqueueStateRestore: Me,
      needsStateRestore: Le,
      restoreStateIfNeeded: Ne,
    });
    function Ie(e, t) {
      return e(t);
    }
    function qe(e, t, n) {
      return e(t, n);
    }
    function Ue() {}
    var Fe = !1;
    function Be(e, t) {
      if (Fe) return e(t);
      Fe = !0;
      try {
        return Ie(e, t);
      } finally {
        (Fe = !1), Le() && (Ue(), Ne());
      }
    }
    var He = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function ze(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!He[e.type] : "textarea" === t;
    }
    function Ve(e) {
      return (
        (e = e.target || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function We(e, t) {
      return (
        !(!i.canUseDOM || (t && !("addEventListener" in document))) &&
        ((t = (e = "on" + e) in document) ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t)
      );
    }
    function Ge(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function $e(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = Ge(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          )
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return n.get.call(this);
                },
                set: function (e) {
                  (r = "" + e), n.set.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
        })(e));
    }
    function Ke(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = Ge(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    var Qe =
        o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      Ye = "function" == typeof Symbol && Symbol.for,
      Ze = Ye ? Symbol.for("react.element") : 60103,
      Xe = Ye ? Symbol.for("react.call") : 60104,
      Je = Ye ? Symbol.for("react.return") : 60105,
      et = Ye ? Symbol.for("react.portal") : 60106,
      tt = Ye ? Symbol.for("react.fragment") : 60107,
      nt = Ye ? Symbol.for("react.strict_mode") : 60108,
      rt = Ye ? Symbol.for("react.provider") : 60109,
      ot = Ye ? Symbol.for("react.context") : 60110,
      it = Ye ? Symbol.for("react.async_mode") : 60111,
      at = Ye ? Symbol.for("react.forward_ref") : 60112,
      st = "function" == typeof Symbol && Symbol.iterator;
    function lt(e) {
      return null === e || void 0 === e
        ? null
        : "function" == typeof (e = (st && e[st]) || e["@@iterator"])
          ? e
          : null;
    }
    function ct(e) {
      if ("function" == typeof (e = e.type)) return e.displayName || e.name;
      if ("string" == typeof e) return e;
      switch (e) {
        case tt:
          return "ReactFragment";
        case et:
          return "ReactPortal";
        case Xe:
          return "ReactCall";
        case Je:
          return "ReactReturn";
      }
      if ("object" == typeof e && null !== e)
        switch (e.$$typeof) {
          case at:
            return "" !== (e = e.render.displayName || e.render.name || "")
              ? "ForwardRef(" + e + ")"
              : "ForwardRef";
        }
      return null;
    }
    function ut(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 0:
          case 1:
          case 2:
          case 5:
            var n = e._debugOwner,
              r = e._debugSource,
              o = ct(e),
              i = null;
            n && (i = ct(n)),
              (n = r),
              (o =
                "\n    in " +
                (o || "Unknown") +
                (n
                  ? " (at " +
                    n.fileName.replace(/^.*[\\\/]/, "") +
                    ":" +
                    n.lineNumber +
                    ")"
                  : i
                    ? " (created by " + i + ")"
                    : ""));
            break e;
          default:
            o = "";
        }
        (t += o), (e = e.return);
      } while (e);
      return t;
    }
    var pt =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      dt = {},
      ft = {};
    function mt(e, t, n, r, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t);
    }
    var ht = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        ht[e] = new mt(e, 0, !1, e, null);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        ht[t] = new mt(t, 1, !1, e[1], null);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (e) {
          ht[e] = new mt(e, 2, !1, e.toLowerCase(), null);
        },
      ),
      ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(
        function (e) {
          ht[e] = new mt(e, 2, !1, e, null);
        },
      ),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          ht[e] = new mt(e, 3, !1, e.toLowerCase(), null);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        ht[e] = new mt(e, 3, !0, e.toLowerCase(), null);
      }),
      ["capture", "download"].forEach(function (e) {
        ht[e] = new mt(e, 4, !1, e.toLowerCase(), null);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        ht[e] = new mt(e, 6, !1, e.toLowerCase(), null);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        ht[e] = new mt(e, 5, !1, e.toLowerCase(), null);
      });
    var gt = /[\-:]([a-z])/g;
    function bt(e) {
      return e[1].toUpperCase();
    }
    function yt(e, t, n, r) {
      var o = ht.hasOwnProperty(t) ? ht[t] : null;
      (null !== o
        ? 0 === o.type
        : !r &&
          2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1])) ||
        ((function (e, t, n, r) {
          if (
            null === t ||
            void 0 === t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? (function (e) {
              return (
                !!ft.hasOwnProperty(e) ||
                (!dt.hasOwnProperty(e) &&
                  (pt.test(e) ? (ft[e] = !0) : ((dt[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
            ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    function vt(e, t) {
      var n = t.checked;
      return a({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function _t(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = Tt(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function wt(e, t) {
      null != (t = t.checked) && yt(e, "checked", t, !1);
    }
    function kt(e, t) {
      wt(e, t);
      var n = Tt(t.value);
      null != n &&
        ("number" === t.type
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n)),
        t.hasOwnProperty("value")
          ? Ct(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            Ct(e, t.type, Tt(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function xt(e, t) {
      (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) &&
        ("" === e.value && (e.value = "" + e._wrapperState.initialValue),
        (e.defaultValue = "" + e._wrapperState.initialValue)),
        "" !== (t = e.name) && (e.name = ""),
        (e.defaultChecked = !e.defaultChecked),
        (e.defaultChecked = !e.defaultChecked),
        "" !== t && (e.name = t);
    }
    function Ct(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function Tt(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(gt, bt);
        ht[t] = new mt(t, 1, !1, e, null);
      }),
      "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(gt, bt);
          ht[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink");
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(gt, bt);
        ht[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
      }),
      (ht.tabIndex = new mt("tabIndex", 1, !1, "tabindex", null));
    var St = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies:
          "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(
            " ",
          ),
      },
    };
    function Et(e, t, n) {
      return (
        ((e = ue.getPooled(St.change, e, t, n)).type = "change"),
        Me(n),
        ee(e),
        e
      );
    }
    var At = null,
      jt = null;
    function Pt(e) {
      I(e, !1);
    }
    function Rt(e) {
      if (Ke(V(e))) return e;
    }
    function Ot(e, t) {
      if ("topChange" === e) return t;
    }
    var Mt = !1;
    function Lt() {
      At && (At.detachEvent("onpropertychange", Nt), (jt = At = null));
    }
    function Nt(e) {
      "value" === e.propertyName && Rt(jt) && Be(Pt, (e = Et(jt, e, Ve(e))));
    }
    function Dt(e, t, n) {
      "topFocus" === e
        ? (Lt(), (jt = n), (At = t).attachEvent("onpropertychange", Nt))
        : "topBlur" === e && Lt();
    }
    function It(e) {
      if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e)
        return Rt(jt);
    }
    function qt(e, t) {
      if ("topClick" === e) return Rt(t);
    }
    function Ut(e, t) {
      if ("topInput" === e || "topChange" === e) return Rt(t);
    }
    i.canUseDOM &&
      (Mt =
        We("input") && (!document.documentMode || 9 < document.documentMode));
    var Ft = {
        eventTypes: St,
        _isInputEventSupported: Mt,
        extractEvents: function (e, t, n, r) {
          var o = t ? V(t) : window,
            i = void 0,
            a = void 0,
            s = o.nodeName && o.nodeName.toLowerCase();
          if (
            ("select" === s || ("input" === s && "file" === o.type)
              ? (i = Ot)
              : ze(o)
                ? Mt
                  ? (i = Ut)
                  : ((i = It), (a = Dt))
                : (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (i = qt),
            i && (i = i(e, t)))
          )
            return Et(i, n, r);
          a && a(e, o, t),
            "topBlur" === e &&
              null != t &&
              (e = t._wrapperState || o._wrapperState) &&
              e.controlled &&
              "number" === o.type &&
              Ct(o, "number", o.value);
        },
      },
      Bt = ue.extend({ view: null, detail: null }),
      Ht = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function zt(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Ht[e]) && !!t[e];
    }
    function Vt() {
      return zt;
    }
    var Wt = Bt.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Vt,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
      }),
      Gt = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["topMouseOut", "topMouseOver"],
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["topMouseOut", "topMouseOver"],
        },
      },
      $t = {
        eventTypes: Gt,
        extractEvents: function (e, t, n, r) {
          if (
            ("topMouseOver" === e && (n.relatedTarget || n.fromElement)) ||
            ("topMouseOut" !== e && "topMouseOver" !== e)
          )
            return null;
          var o =
            r.window === r
              ? r
              : (o = r.ownerDocument)
                ? o.defaultView || o.parentWindow
                : window;
          if (
            ("topMouseOut" === e
              ? ((e = t),
                (t = (t = n.relatedTarget || n.toElement) ? z(t) : null))
              : (e = null),
            e === t)
          )
            return null;
          var i = null == e ? o : V(e);
          o = null == t ? o : V(t);
          var a = Wt.getPooled(Gt.mouseLeave, e, n, r);
          return (
            (a.type = "mouseleave"),
            (a.target = i),
            (a.relatedTarget = o),
            ((n = Wt.getPooled(Gt.mouseEnter, t, n, r)).type = "mouseenter"),
            (n.target = o),
            (n.relatedTarget = i),
            te(a, n, e, t),
            [a, n]
          );
        },
      };
    function Kt(e) {
      var t = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        if (0 != (2 & t.effectTag)) return 1;
        for (; t.return; ) if (0 != (2 & (t = t.return).effectTag)) return 1;
      }
      return 3 === t.tag ? 2 : 3;
    }
    function Qt(e) {
      return !!(e = e._reactInternalFiber) && 2 === Kt(e);
    }
    function Yt(e) {
      2 !== Kt(e) && d("188");
    }
    function Zt(e) {
      var t = e.alternate;
      if (!t) return 3 === (t = Kt(e)) && d("188"), 1 === t ? null : e;
      for (var n = e, r = t; ; ) {
        var o = n.return,
          i = o ? o.alternate : null;
        if (!o || !i) break;
        if (o.child === i.child) {
          for (var a = o.child; a; ) {
            if (a === n) return Yt(o), e;
            if (a === r) return Yt(o), t;
            a = a.sibling;
          }
          d("188");
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
          a = !1;
          for (var s = o.child; s; ) {
            if (s === n) {
              (a = !0), (n = o), (r = i);
              break;
            }
            if (s === r) {
              (a = !0), (r = o), (n = i);
              break;
            }
            s = s.sibling;
          }
          if (!a) {
            for (s = i.child; s; ) {
              if (s === n) {
                (a = !0), (n = i), (r = o);
                break;
              }
              if (s === r) {
                (a = !0), (r = i), (n = o);
                break;
              }
              s = s.sibling;
            }
            a || d("189");
          }
        }
        n.alternate !== r && d("190");
      }
      return 3 !== n.tag && d("188"), n.stateNode.current === n ? e : t;
    }
    function Xt(e) {
      if (!(e = Zt(e))) return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var Jt = ue.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      en = ue.extend({
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      tn = Bt.extend({ relatedTarget: null });
    function nn(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var rn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      on = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      an = Bt.extend({
        key: function (e) {
          if (e.key) {
            var t = rn[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = nn(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
              ? on[e.keyCode] || "Unidentified"
              : "";
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Vt,
        charCode: function (e) {
          return "keypress" === e.type ? nn(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? nn(e)
            : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
        },
      }),
      sn = Wt.extend({ dataTransfer: null }),
      ln = Bt.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Vt,
      }),
      cn = ue.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      un = Wt.extend({
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: null,
        deltaMode: null,
      }),
      pn = {},
      dn = {};
    function fn(e, t) {
      var n = e[0].toUpperCase() + e.slice(1),
        r = "on" + n;
      (t = {
        phasedRegistrationNames: { bubbled: r, captured: r + "Capture" },
        dependencies: [(n = "top" + n)],
        isInteractive: t,
      }),
        (pn[e] = t),
        (dn[n] = t);
    }
    "blur cancel click close contextMenu copy cut doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play rateChange reset seeked submit touchCancel touchEnd touchStart volumeChange"
      .split(" ")
      .forEach(function (e) {
        fn(e, !0);
      }),
      "abort animationEnd animationIteration animationStart canPlay canPlayThrough drag dragEnter dragExit dragLeave dragOver durationChange emptied encrypted ended error load loadedData loadedMetadata loadStart mouseMove mouseOut mouseOver playing progress scroll seeking stalled suspend timeUpdate toggle touchMove transitionEnd waiting wheel"
        .split(" ")
        .forEach(function (e) {
          fn(e, !1);
        });
    var mn = {
        eventTypes: pn,
        isInteractiveTopLevelEventType: function (e) {
          return void 0 !== (e = dn[e]) && !0 === e.isInteractive;
        },
        extractEvents: function (e, t, n, r) {
          var o = dn[e];
          if (!o) return null;
          switch (e) {
            case "topKeyPress":
              if (0 === nn(n)) return null;
            case "topKeyDown":
            case "topKeyUp":
              e = an;
              break;
            case "topBlur":
            case "topFocus":
              e = tn;
              break;
            case "topClick":
              if (2 === n.button) return null;
            case "topDoubleClick":
            case "topMouseDown":
            case "topMouseMove":
            case "topMouseUp":
            case "topMouseOut":
            case "topMouseOver":
            case "topContextMenu":
              e = Wt;
              break;
            case "topDrag":
            case "topDragEnd":
            case "topDragEnter":
            case "topDragExit":
            case "topDragLeave":
            case "topDragOver":
            case "topDragStart":
            case "topDrop":
              e = sn;
              break;
            case "topTouchCancel":
            case "topTouchEnd":
            case "topTouchMove":
            case "topTouchStart":
              e = ln;
              break;
            case "topAnimationEnd":
            case "topAnimationIteration":
            case "topAnimationStart":
              e = Jt;
              break;
            case "topTransitionEnd":
              e = cn;
              break;
            case "topScroll":
              e = Bt;
              break;
            case "topWheel":
              e = un;
              break;
            case "topCopy":
            case "topCut":
            case "topPaste":
              e = en;
              break;
            default:
              e = ue;
          }
          return ee((t = e.getPooled(o, t, n, r))), t;
        },
      },
      hn = mn.isInteractiveTopLevelEventType,
      gn = [];
    function bn(e) {
      var t = e.targetInst;
      do {
        if (!t) {
          e.ancestors.push(t);
          break;
        }
        var n;
        for (n = t; n.return; ) n = n.return;
        if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
        e.ancestors.push(t), (t = z(n));
      } while (t);
      for (n = 0; n < e.ancestors.length; n++)
        (t = e.ancestors[n]),
          q(e.topLevelType, t, e.nativeEvent, Ve(e.nativeEvent));
    }
    var yn = !0;
    function vn(e) {
      yn = !!e;
    }
    function _n(e, t, n) {
      if (!n) return null;
      (e = (hn(e) ? kn : xn).bind(null, e)), n.addEventListener(t, e, !1);
    }
    function wn(e, t, n) {
      if (!n) return null;
      (e = (hn(e) ? kn : xn).bind(null, e)), n.addEventListener(t, e, !0);
    }
    function kn(e, t) {
      qe(xn, e, t);
    }
    function xn(e, t) {
      if (yn) {
        var n = Ve(t);
        if (
          (null !== (n = z(n)) &&
            "number" == typeof n.tag &&
            2 !== Kt(n) &&
            (n = null),
          gn.length)
        ) {
          var r = gn.pop();
          (r.topLevelType = e),
            (r.nativeEvent = t),
            (r.targetInst = n),
            (e = r);
        } else
          e = { topLevelType: e, nativeEvent: t, targetInst: n, ancestors: [] };
        try {
          Be(bn, e);
        } finally {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            10 > gn.length && gn.push(e);
        }
      }
    }
    var Cn = Object.freeze({
      get _enabled() {
        return yn;
      },
      setEnabled: vn,
      isEnabled: function () {
        return yn;
      },
      trapBubbledEvent: _n,
      trapCapturedEvent: wn,
      dispatchEvent: xn,
    });
    function Tn(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        (n["ms" + e] = "MS" + t),
        (n["O" + e] = "o" + t.toLowerCase()),
        n
      );
    }
    var Sn = {
        animationend: Tn("Animation", "AnimationEnd"),
        animationiteration: Tn("Animation", "AnimationIteration"),
        animationstart: Tn("Animation", "AnimationStart"),
        transitionend: Tn("Transition", "TransitionEnd"),
      },
      En = {},
      An = {};
    function jn(e) {
      if (En[e]) return En[e];
      if (!Sn[e]) return e;
      var t,
        n = Sn[e];
      for (t in n) if (n.hasOwnProperty(t) && t in An) return (En[e] = n[t]);
      return e;
    }
    i.canUseDOM &&
      ((An = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Sn.animationend.animation,
        delete Sn.animationiteration.animation,
        delete Sn.animationstart.animation),
      "TransitionEvent" in window || delete Sn.transitionend.transition);
    var Pn = {
        topAnimationEnd: jn("animationend"),
        topAnimationIteration: jn("animationiteration"),
        topAnimationStart: jn("animationstart"),
        topBlur: "blur",
        topCancel: "cancel",
        topChange: "change",
        topClick: "click",
        topClose: "close",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoad: "load",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topScroll: "scroll",
        topSelectionChange: "selectionchange",
        topTextInput: "textInput",
        topToggle: "toggle",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topTransitionEnd: jn("transitionend"),
        topWheel: "wheel",
      },
      Rn = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
      },
      On = {},
      Mn = 0,
      Ln = "_reactListenersID" + ("" + Math.random()).slice(2);
    function Nn(e) {
      return (
        Object.prototype.hasOwnProperty.call(e, Ln) ||
          ((e[Ln] = Mn++), (On[e[Ln]] = {})),
        On[e[Ln]]
      );
    }
    function Dn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function In(e, t) {
      var n,
        r = Dn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Dn(r);
      }
    }
    function qn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t && "text" === e.type) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var Un =
        i.canUseDOM &&
        "documentMode" in document &&
        11 >= document.documentMode,
      Fn = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies:
            "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(
              " ",
            ),
        },
      },
      Bn = null,
      Hn = null,
      zn = null,
      Vn = !1;
    function Wn(e, t) {
      if (Vn || null == Bn || Bn !== l()) return null;
      var n = Bn;
      return (
        "selectionStart" in n && qn(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : window.getSelection
            ? (n = {
                anchorNode: (n = window.getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset,
              })
            : (n = void 0),
        zn && c(zn, n)
          ? null
          : ((zn = n),
            ((e = ue.getPooled(Fn.select, Hn, e, t)).type = "select"),
            (e.target = Bn),
            ee(e),
            e)
      );
    }
    var Gn = {
      eventTypes: Fn,
      extractEvents: function (e, t, n, r) {
        var o,
          i =
            r.window === r
              ? r.document
              : 9 === r.nodeType
                ? r
                : r.ownerDocument;
        if (!(o = !i)) {
          e: {
            (i = Nn(i)), (o = w.onSelect);
            for (var a = 0; a < o.length; a++) {
              var s = o[a];
              if (!i.hasOwnProperty(s) || !i[s]) {
                i = !1;
                break e;
              }
            }
            i = !0;
          }
          o = !i;
        }
        if (o) return null;
        switch (((i = t ? V(t) : window), e)) {
          case "topFocus":
            (ze(i) || "true" === i.contentEditable) &&
              ((Bn = i), (Hn = t), (zn = null));
            break;
          case "topBlur":
            zn = Hn = Bn = null;
            break;
          case "topMouseDown":
            Vn = !0;
            break;
          case "topContextMenu":
          case "topMouseUp":
            return (Vn = !1), Wn(n, r);
          case "topSelectionChange":
            if (Un) break;
          case "topKeyDown":
          case "topKeyUp":
            return Wn(n, r);
        }
        return null;
      },
    };
    function $n(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.stateNode = this.type = null),
        (this.sibling = this.child = this.return = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.expirationTime = 0),
        (this.alternate = null);
    }
    function Kn(e, t, n) {
      var r = e.alternate;
      return (
        null === r
          ? (((r = new $n(e.tag, t, e.key, e.mode)).type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.effectTag = 0),
            (r.nextEffect = null),
            (r.firstEffect = null),
            (r.lastEffect = null)),
        (r.expirationTime = n),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function Qn(e, t, n) {
      var r = e.type,
        o = e.key;
      e = e.props;
      var i = void 0;
      if ("function" == typeof r)
        i = r.prototype && r.prototype.isReactComponent ? 2 : 0;
      else if ("string" == typeof r) i = 5;
      else
        switch (r) {
          case tt:
            return Yn(e.children, t, n, o);
          case it:
            (i = 11), (t |= 3);
            break;
          case nt:
            (i = 11), (t |= 2);
            break;
          case Xe:
            i = 7;
            break;
          case Je:
            i = 9;
            break;
          default:
            if ("object" == typeof r && null !== r)
              switch (r.$$typeof) {
                case rt:
                  i = 13;
                  break;
                case ot:
                  i = 12;
                  break;
                case at:
                  i = 14;
                  break;
                default:
                  if ("number" == typeof r.tag)
                    return (
                      ((t = r).pendingProps = e), (t.expirationTime = n), t
                    );
                  d("130", null == r ? r : typeof r, "");
              }
            else d("130", null == r ? r : typeof r, "");
        }
      return ((t = new $n(i, e, o, t)).type = r), (t.expirationTime = n), t;
    }
    function Yn(e, t, n, r) {
      return ((e = new $n(10, e, r, t)).expirationTime = n), e;
    }
    function Zn(e, t, n) {
      return ((e = new $n(6, e, null, t)).expirationTime = n), e;
    }
    function Xn(e, t, n) {
      return (
        ((t = new $n(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t,
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    N.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " ",
      ),
    ),
      (T = G.getFiberCurrentPropsFromNode),
      (S = G.getInstanceFromNode),
      (E = G.getNodeFromInstance),
      N.injectEventPluginsByName({
        SimpleEventPlugin: mn,
        EnterLeaveEventPlugin: $t,
        ChangeEventPlugin: Ft,
        SelectEventPlugin: Gn,
        BeforeInputEventPlugin: Ee,
      });
    var Jn = null,
      er = null;
    function tr(e) {
      return function (t) {
        try {
          return e(t);
        } catch (e) {}
      };
    }
    function nr(e) {
      "function" == typeof Jn && Jn(e);
    }
    function rr(e) {
      "function" == typeof er && er(e);
    }
    function or(e) {
      return {
        baseState: e,
        expirationTime: 0,
        first: null,
        last: null,
        callbackList: null,
        hasForceUpdate: !1,
        isInitialized: !1,
        capturedValues: null,
      };
    }
    function ir(e, t) {
      null === e.last
        ? (e.first = e.last = t)
        : ((e.last.next = t), (e.last = t)),
        (0 === e.expirationTime || e.expirationTime > t.expirationTime) &&
          (e.expirationTime = t.expirationTime);
    }
    new Set();
    var ar = void 0,
      sr = void 0;
    function lr(e) {
      ar = sr = null;
      var t = e.alternate,
        n = e.updateQueue;
      null === n && (n = e.updateQueue = or(null)),
        null !== t
          ? null === (e = t.updateQueue) && (e = t.updateQueue = or(null))
          : (e = null),
        (ar = n),
        (sr = e !== n ? e : null);
    }
    function cr(e, t) {
      lr(e), (e = ar);
      var n = sr;
      null === n
        ? ir(e, t)
        : null === e.last || null === n.last
          ? (ir(e, t), ir(n, t))
          : (ir(e, t), (n.last = t));
    }
    function ur(e, t, n, r) {
      return "function" == typeof (e = e.partialState) ? e.call(t, n, r) : e;
    }
    function pr(e, t, n, r, o, i) {
      null !== e &&
        e.updateQueue === n &&
        (n = t.updateQueue =
          {
            baseState: n.baseState,
            expirationTime: n.expirationTime,
            first: n.first,
            last: n.last,
            isInitialized: n.isInitialized,
            capturedValues: n.capturedValues,
            callbackList: null,
            hasForceUpdate: !1,
          }),
        (n.expirationTime = 0),
        n.isInitialized
          ? (e = n.baseState)
          : ((e = n.baseState = t.memoizedState), (n.isInitialized = !0));
      for (var s = !0, l = n.first, c = !1; null !== l; ) {
        var u = l.expirationTime;
        if (u > i) {
          var p = n.expirationTime;
          (0 === p || p > u) && (n.expirationTime = u),
            c || ((c = !0), (n.baseState = e));
        } else
          c || ((n.first = l.next), null === n.first && (n.last = null)),
            l.isReplace
              ? ((e = ur(l, r, e, o)), (s = !0))
              : (u = ur(l, r, e, o)) &&
                ((e = s ? a({}, e, u) : a(e, u)), (s = !1)),
            l.isForced && (n.hasForceUpdate = !0),
            null !== l.callback &&
              (null === (u = n.callbackList) && (u = n.callbackList = []),
              u.push(l)),
            null !== l.capturedValue &&
              (null === (u = n.capturedValues)
                ? (n.capturedValues = [l.capturedValue])
                : u.push(l.capturedValue));
        l = l.next;
      }
      return (
        null !== n.callbackList
          ? (t.effectTag |= 32)
          : null !== n.first ||
            n.hasForceUpdate ||
            null !== n.capturedValues ||
            (t.updateQueue = null),
        c || (n.baseState = e),
        e
      );
    }
    function dr(e, t) {
      var n = e.callbackList;
      if (null !== n)
        for (e.callbackList = null, e = 0; e < n.length; e++) {
          var r = n[e],
            o = r.callback;
          (r.callback = null), "function" != typeof o && d("191", o), o.call(t);
        }
    }
    var fr = Array.isArray;
    function mr(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          var r = void 0;
          (n = n._owner) && (2 !== n.tag && d("110"), (r = n.stateNode)),
            r || d("147", e);
          var o = "" + e;
          return null !== t && null !== t.ref && t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = r.refs === p ? (r.refs = {}) : r.refs;
                null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        "string" != typeof e && d("148"), n._owner || d("254", e);
      }
      return e;
    }
    function hr(e, t) {
      "textarea" !== e.type &&
        d(
          "31",
          "[object Object]" === Object.prototype.toString.call(t)
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : t,
          "",
        );
    }
    function gr(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function o(e, t, n) {
        return ((e = Kn(e, t, n)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function a(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function s(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Zn(n, e.mode, r)).return = e), t)
          : (((t = o(t, n, r)).return = e), t);
      }
      function l(e, t, n, r) {
        return null !== t && t.type === n.type
          ? (((r = o(t, n.props, r)).ref = mr(e, t, n)), (r.return = e), r)
          : (((r = Qn(n, e.mode, r)).ref = mr(e, t, n)), (r.return = e), r);
      }
      function c(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Xn(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [], r)).return = e), t);
      }
      function u(e, t, n, r, i) {
        return null === t || 10 !== t.tag
          ? (((t = Yn(n, e.mode, r, i)).return = e), t)
          : (((t = o(t, n, r)).return = e), t);
      }
      function p(e, t, n) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Zn("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case Ze:
              return (
                ((n = Qn(t, e.mode, n)).ref = mr(e, null, t)), (n.return = e), n
              );
            case et:
              return ((t = Xn(t, e.mode, n)).return = e), t;
          }
          if (fr(t) || lt(t))
            return ((t = Yn(t, e.mode, n, null)).return = e), t;
          hr(e, t);
        }
        return null;
      }
      function f(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== o ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case Ze:
              return n.key === o
                ? n.type === tt
                  ? u(e, t, n.props.children, r, o)
                  : l(e, t, n, r)
                : null;
            case et:
              return n.key === o ? c(e, t, n, r) : null;
          }
          if (fr(n) || lt(n)) return null !== o ? null : u(e, t, n, r, null);
          hr(e, n);
        }
        return null;
      }
      function m(e, t, n, r, o) {
        if ("string" == typeof r || "number" == typeof r)
          return s(t, (e = e.get(n) || null), "" + r, o);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case Ze:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === tt
                  ? u(t, e, r.props.children, o, r.key)
                  : l(t, e, r, o)
              );
            case et:
              return c(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                o,
              );
          }
          if (fr(r) || lt(r)) return u(t, (e = e.get(n) || null), r, o, null);
          hr(t, r);
        }
        return null;
      }
      function h(o, a, s, l) {
        for (
          var c = null, u = null, d = a, h = (a = 0), g = null;
          null !== d && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var b = f(o, d, s[h], l);
          if (null === b) {
            null === d && (d = g);
            break;
          }
          e && d && null === b.alternate && t(o, d),
            (a = i(b, a, h)),
            null === u ? (c = b) : (u.sibling = b),
            (u = b),
            (d = g);
        }
        if (h === s.length) return n(o, d), c;
        if (null === d) {
          for (; h < s.length; h++)
            (d = p(o, s[h], l)) &&
              ((a = i(d, a, h)),
              null === u ? (c = d) : (u.sibling = d),
              (u = d));
          return c;
        }
        for (d = r(o, d); h < s.length; h++)
          (g = m(d, o, h, s[h], l)) &&
            (e && null !== g.alternate && d.delete(null === g.key ? h : g.key),
            (a = i(g, a, h)),
            null === u ? (c = g) : (u.sibling = g),
            (u = g));
        return (
          e &&
            d.forEach(function (e) {
              return t(o, e);
            }),
          c
        );
      }
      function g(o, a, s, l) {
        var c = lt(s);
        "function" != typeof c && d("150"), null == (s = c.call(s)) && d("151");
        for (
          var u = (c = null), h = a, g = (a = 0), b = null, y = s.next();
          null !== h && !y.done;
          g++, y = s.next()
        ) {
          h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
          var v = f(o, h, y.value, l);
          if (null === v) {
            h || (h = b);
            break;
          }
          e && h && null === v.alternate && t(o, h),
            (a = i(v, a, g)),
            null === u ? (c = v) : (u.sibling = v),
            (u = v),
            (h = b);
        }
        if (y.done) return n(o, h), c;
        if (null === h) {
          for (; !y.done; g++, y = s.next())
            null !== (y = p(o, y.value, l)) &&
              ((a = i(y, a, g)),
              null === u ? (c = y) : (u.sibling = y),
              (u = y));
          return c;
        }
        for (h = r(o, h); !y.done; g++, y = s.next())
          null !== (y = m(h, o, g, y.value, l)) &&
            (e && null !== y.alternate && h.delete(null === y.key ? g : y.key),
            (a = i(y, a, g)),
            null === u ? (c = y) : (u.sibling = y),
            (u = y));
        return (
          e &&
            h.forEach(function (e) {
              return t(o, e);
            }),
          c
        );
      }
      return function (e, r, i, s) {
        "object" == typeof i &&
          null !== i &&
          i.type === tt &&
          null === i.key &&
          (i = i.props.children);
        var l = "object" == typeof i && null !== i;
        if (l)
          switch (i.$$typeof) {
            case Ze:
              e: {
                var c = i.key;
                for (l = r; null !== l; ) {
                  if (l.key === c) {
                    if (10 === l.tag ? i.type === tt : l.type === i.type) {
                      n(e, l.sibling),
                        ((r = o(
                          l,
                          i.type === tt ? i.props.children : i.props,
                          s,
                        )).ref = mr(e, l, i)),
                        (r.return = e),
                        (e = r);
                      break e;
                    }
                    n(e, l);
                    break;
                  }
                  t(e, l), (l = l.sibling);
                }
                i.type === tt
                  ? (((r = Yn(i.props.children, e.mode, s, i.key)).return = e),
                    (e = r))
                  : (((s = Qn(i, e.mode, s)).ref = mr(e, r, i)),
                    (s.return = e),
                    (e = s));
              }
              return a(e);
            case et:
              e: {
                for (l = i.key; null !== r; ) {
                  if (r.key === l) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = o(r, i.children || [], s)).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Xn(i, e.mode, s)).return = e), (e = r);
              }
              return a(e);
          }
        if ("string" == typeof i || "number" == typeof i)
          return (
            (i = "" + i),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = o(r, i, s)).return = e), (e = r))
              : (n(e, r), ((r = Zn(i, e.mode, s)).return = e), (e = r)),
            a(e)
          );
        if (fr(i)) return h(e, r, i, s);
        if (lt(i)) return g(e, r, i, s);
        if ((l && hr(e, i), void 0 === i))
          switch (e.tag) {
            case 2:
            case 1:
              d("152", (s = e.type).displayName || s.name || "Component");
          }
        return n(e, r);
      };
    }
    var br = gr(!0),
      yr = gr(!1);
    function vr(e, t, n, r, o, i, s) {
      function l(e, t, n) {
        u(e, t, n, t.expirationTime);
      }
      function u(e, t, n, r) {
        t.child = null === e ? yr(t, null, n, r) : br(t, e.child, n, r);
      }
      function f(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function m(e, t, n, r, o, i) {
        if ((f(e, t), !n && !o)) return r && A(t, !1), b(e, t);
        (n = t.stateNode), (Qe.current = t);
        var a = o ? null : n.render();
        return (
          (t.effectTag |= 1),
          o && (u(e, t, null, i), (t.child = null)),
          u(e, t, a, i),
          (t.memoizedState = n.state),
          (t.memoizedProps = n.props),
          r && A(t, !0),
          t.child
        );
      }
      function h(e) {
        var t = e.stateNode;
        t.pendingContext
          ? E(e, t.pendingContext, t.pendingContext !== t.context)
          : t.context && E(e, t.context, !1),
          w(e, t.containerInfo);
      }
      function g(e, t, n, r) {
        var o = e.child;
        for (null !== o && (o.return = e); null !== o; ) {
          switch (o.tag) {
            case 12:
              var i = 0 | o.stateNode;
              if (o.type === t && 0 != (i & n)) {
                for (i = o; null !== i; ) {
                  var a = i.alternate;
                  if (0 === i.expirationTime || i.expirationTime > r)
                    (i.expirationTime = r),
                      null !== a &&
                        (0 === a.expirationTime || a.expirationTime > r) &&
                        (a.expirationTime = r);
                  else {
                    if (
                      null === a ||
                      !(0 === a.expirationTime || a.expirationTime > r)
                    )
                      break;
                    a.expirationTime = r;
                  }
                  i = i.return;
                }
                i = null;
              } else i = o.child;
              break;
            case 13:
              i = o.type === e.type ? null : o.child;
              break;
            default:
              i = o.child;
          }
          if (null !== i) i.return = o;
          else
            for (i = o; null !== i; ) {
              if (i === e) {
                i = null;
                break;
              }
              if (null !== (o = i.sibling)) {
                i = o;
                break;
              }
              i = i.return;
            }
          o = i;
        }
      }
      function b(e, t) {
        if ((null !== e && t.child !== e.child && d("153"), null !== t.child)) {
          var n = Kn((e = t.child), e.pendingProps, e.expirationTime);
          for (t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling),
              ((n = n.sibling =
                Kn(e, e.pendingProps, e.expirationTime)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      var y = e.shouldSetTextContent,
        v = e.shouldDeprioritizeSubtree,
        _ = t.pushHostContext,
        w = t.pushHostContainer,
        k = r.pushProvider,
        x = n.getMaskedContext,
        C = n.getUnmaskedContext,
        T = n.hasContextChanged,
        S = n.pushContextProvider,
        E = n.pushTopLevelContextObject,
        A = n.invalidateContextProvider,
        j = o.enterHydrationState,
        P = o.resetHydrationState,
        R = o.tryToClaimNextHydratableInstance,
        O = (e = (function (e, t, n, r, o) {
          function i(e, t, n, r, o, i) {
            if (
              null === t ||
              (null !== e.updateQueue && e.updateQueue.hasForceUpdate)
            )
              return !0;
            var a = e.stateNode;
            return (
              (e = e.type),
              "function" == typeof a.shouldComponentUpdate
                ? a.shouldComponentUpdate(n, o, i)
                : !(
                    e.prototype &&
                    e.prototype.isPureReactComponent &&
                    c(t, n) &&
                    c(r, o)
                  )
            );
          }
          function s(e, t) {
            (t.updater = b), (e.stateNode = t), (t._reactInternalFiber = e);
          }
          function l(e, t, n, r) {
            (e = t.state),
              "function" == typeof t.componentWillReceiveProps &&
                t.componentWillReceiveProps(n, r),
              "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                t.UNSAFE_componentWillReceiveProps(n, r),
              t.state !== e && b.enqueueReplaceState(t, t.state, null);
          }
          function u(e, t, n, r) {
            if ("function" == typeof (e = e.type).getDerivedStateFromProps)
              return e.getDerivedStateFromProps.call(null, n, r);
          }
          var d = e.cacheContext,
            f = e.getMaskedContext,
            m = e.getUnmaskedContext,
            h = e.isContextConsumer,
            g = e.hasContextChanged,
            b = {
              isMounted: Qt,
              enqueueSetState: function (e, r, o) {
                (e = e._reactInternalFiber), (o = void 0 === o ? null : o);
                var i = n(e);
                cr(e, {
                  expirationTime: i,
                  partialState: r,
                  callback: o,
                  isReplace: !1,
                  isForced: !1,
                  capturedValue: null,
                  next: null,
                }),
                  t(e, i);
              },
              enqueueReplaceState: function (e, r, o) {
                (e = e._reactInternalFiber), (o = void 0 === o ? null : o);
                var i = n(e);
                cr(e, {
                  expirationTime: i,
                  partialState: r,
                  callback: o,
                  isReplace: !0,
                  isForced: !1,
                  capturedValue: null,
                  next: null,
                }),
                  t(e, i);
              },
              enqueueForceUpdate: function (e, r) {
                (e = e._reactInternalFiber), (r = void 0 === r ? null : r);
                var o = n(e);
                cr(e, {
                  expirationTime: o,
                  partialState: null,
                  callback: r,
                  isReplace: !1,
                  isForced: !0,
                  capturedValue: null,
                  next: null,
                }),
                  t(e, o);
              },
            };
          return {
            adoptClassInstance: s,
            callGetDerivedStateFromProps: u,
            constructClassInstance: function (e, t) {
              var n = e.type,
                r = m(e),
                o = h(e),
                i = o ? f(e, r) : p,
                l =
                  null !== (n = new n(t, i)).state && void 0 !== n.state
                    ? n.state
                    : null;
              return (
                s(e, n),
                (e.memoizedState = l),
                null !== (t = u(e, 0, t, l)) &&
                  void 0 !== t &&
                  (e.memoizedState = a({}, e.memoizedState, t)),
                o && d(e, r, i),
                n
              );
            },
            mountClassInstance: function (e, t) {
              var n = e.type,
                r = e.alternate,
                o = e.stateNode,
                i = e.pendingProps,
                a = m(e);
              (o.props = i),
                (o.state = e.memoizedState),
                (o.refs = p),
                (o.context = f(e, a)),
                "function" == typeof n.getDerivedStateFromProps ||
                  "function" == typeof o.getSnapshotBeforeUpdate ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ((n = o.state),
                  "function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount(),
                  n !== o.state && b.enqueueReplaceState(o, o.state, null),
                  null !== (n = e.updateQueue) &&
                    (o.state = pr(r, e, n, o, i, t))),
                "function" == typeof o.componentDidMount && (e.effectTag |= 4);
            },
            resumeMountClassInstance: function (e, t) {
              var n = e.type,
                s = e.stateNode;
              (s.props = e.memoizedProps), (s.state = e.memoizedState);
              var c = e.memoizedProps,
                p = e.pendingProps,
                d = s.context,
                h = m(e);
              (h = f(e, h)),
                (n =
                  "function" == typeof n.getDerivedStateFromProps ||
                  "function" == typeof s.getSnapshotBeforeUpdate) ||
                  ("function" != typeof s.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof s.componentWillReceiveProps) ||
                  ((c !== p || d !== h) && l(e, s, p, h)),
                (d = e.memoizedState),
                (t =
                  null !== e.updateQueue
                    ? pr(null, e, e.updateQueue, s, p, t)
                    : d);
              var b = void 0;
              if (
                (c !== p && (b = u(e, 0, p, t)), null !== b && void 0 !== b)
              ) {
                t = null === t || void 0 === t ? b : a({}, t, b);
                var y = e.updateQueue;
                null !== y && (y.baseState = a({}, y.baseState, b));
              }
              return c !== p ||
                d !== t ||
                g() ||
                (null !== e.updateQueue && e.updateQueue.hasForceUpdate)
                ? ((c = i(e, c, p, d, t, h))
                    ? (n ||
                        ("function" != typeof s.UNSAFE_componentWillMount &&
                          "function" != typeof s.componentWillMount) ||
                        ("function" == typeof s.componentWillMount &&
                          s.componentWillMount(),
                        "function" == typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      "function" == typeof s.componentDidMount &&
                        (e.effectTag |= 4))
                    : ("function" == typeof s.componentDidMount &&
                        (e.effectTag |= 4),
                      r(e, p),
                      o(e, t)),
                  (s.props = p),
                  (s.state = t),
                  (s.context = h),
                  c)
                : ("function" == typeof s.componentDidMount &&
                    (e.effectTag |= 4),
                  !1);
            },
            updateClassInstance: function (e, t, n) {
              var s = t.type,
                c = t.stateNode;
              (c.props = t.memoizedProps), (c.state = t.memoizedState);
              var p = t.memoizedProps,
                d = t.pendingProps,
                h = c.context,
                b = m(t);
              (b = f(t, b)),
                (s =
                  "function" == typeof s.getDerivedStateFromProps ||
                  "function" == typeof c.getSnapshotBeforeUpdate) ||
                  ("function" != typeof c.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof c.componentWillReceiveProps) ||
                  ((p !== d || h !== b) && l(t, c, d, b)),
                (h = t.memoizedState),
                (n =
                  null !== t.updateQueue
                    ? pr(e, t, t.updateQueue, c, d, n)
                    : h);
              var y = void 0;
              if (
                (p !== d && (y = u(t, 0, d, n)), null !== y && void 0 !== y)
              ) {
                n = null === n || void 0 === n ? y : a({}, n, y);
                var v = t.updateQueue;
                null !== v && (v.baseState = a({}, v.baseState, y));
              }
              return p !== d ||
                h !== n ||
                g() ||
                (null !== t.updateQueue && t.updateQueue.hasForceUpdate)
                ? ((y = i(t, p, d, h, n, b))
                    ? (s ||
                        ("function" != typeof c.UNSAFE_componentWillUpdate &&
                          "function" != typeof c.componentWillUpdate) ||
                        ("function" == typeof c.componentWillUpdate &&
                          c.componentWillUpdate(d, n, b),
                        "function" == typeof c.UNSAFE_componentWillUpdate &&
                          c.UNSAFE_componentWillUpdate(d, n, b)),
                      "function" == typeof c.componentDidUpdate &&
                        (t.effectTag |= 4),
                      "function" == typeof c.getSnapshotBeforeUpdate &&
                        (t.effectTag |= 2048))
                    : ("function" != typeof c.componentDidUpdate ||
                        (p === e.memoizedProps && h === e.memoizedState) ||
                        (t.effectTag |= 4),
                      "function" != typeof c.getSnapshotBeforeUpdate ||
                        (p === e.memoizedProps && h === e.memoizedState) ||
                        (t.effectTag |= 2048),
                      r(t, d),
                      o(t, n)),
                  (c.props = d),
                  (c.state = n),
                  (c.context = b),
                  y)
                : ("function" != typeof c.componentDidUpdate ||
                    (p === e.memoizedProps && h === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof c.getSnapshotBeforeUpdate ||
                    (p === e.memoizedProps && h === e.memoizedState) ||
                    (t.effectTag |= 2048),
                  !1);
            },
          };
        })(
          n,
          i,
          s,
          function (e, t) {
            e.memoizedProps = t;
          },
          function (e, t) {
            e.memoizedState = t;
          },
        )).adoptClassInstance,
        M = e.callGetDerivedStateFromProps,
        L = e.constructClassInstance,
        N = e.mountClassInstance,
        D = e.resumeMountClassInstance,
        I = e.updateClassInstance;
      return {
        beginWork: function (e, t, n) {
          if (0 === t.expirationTime || t.expirationTime > n) {
            switch (t.tag) {
              case 3:
                h(t);
                break;
              case 2:
                S(t);
                break;
              case 4:
                w(t, t.stateNode.containerInfo);
                break;
              case 13:
                k(t);
            }
            return null;
          }
          switch (t.tag) {
            case 0:
              null !== e && d("155");
              var r = t.type,
                o = t.pendingProps,
                i = C(t);
              return (
                (r = r(o, (i = x(t, i)))),
                (t.effectTag |= 1),
                "object" == typeof r &&
                null !== r &&
                "function" == typeof r.render &&
                void 0 === r.$$typeof
                  ? ((i = t.type),
                    (t.tag = 2),
                    (t.memoizedState =
                      null !== r.state && void 0 !== r.state ? r.state : null),
                    "function" == typeof i.getDerivedStateFromProps &&
                      null !== (o = M(t, r, o, t.memoizedState)) &&
                      void 0 !== o &&
                      (t.memoizedState = a({}, t.memoizedState, o)),
                    (o = S(t)),
                    O(t, r),
                    N(t, n),
                    (e = m(e, t, !0, o, !1, n)))
                  : ((t.tag = 1),
                    l(e, t, r),
                    (t.memoizedProps = o),
                    (e = t.child)),
                e
              );
            case 1:
              return (
                (o = t.type),
                (n = t.pendingProps),
                T() || t.memoizedProps !== n
                  ? ((r = C(t)),
                    (o = o(n, (r = x(t, r)))),
                    (t.effectTag |= 1),
                    l(e, t, o),
                    (t.memoizedProps = n),
                    (e = t.child))
                  : (e = b(e, t)),
                e
              );
            case 2:
              (o = S(t)),
                null === e
                  ? null === t.stateNode
                    ? (L(t, t.pendingProps), N(t, n), (r = !0))
                    : (r = D(t, n))
                  : (r = I(e, t, n)),
                (i = !1);
              var s = t.updateQueue;
              return (
                null !== s && null !== s.capturedValues && (i = r = !0),
                m(e, t, r, o, i, n)
              );
            case 3:
              e: if ((h(t), (r = t.updateQueue), null !== r)) {
                if (
                  ((i = t.memoizedState),
                  (o = pr(e, t, r, null, null, n)),
                  (t.memoizedState = o),
                  null !== (r = t.updateQueue) && null !== r.capturedValues)
                )
                  r = null;
                else {
                  if (i === o) {
                    P(), (e = b(e, t));
                    break e;
                  }
                  r = o.element;
                }
                (i = t.stateNode),
                  (null === e || null === e.child) && i.hydrate && j(t)
                    ? ((t.effectTag |= 2), (t.child = yr(t, null, r, n)))
                    : (P(), l(e, t, r)),
                  (t.memoizedState = o),
                  (e = t.child);
              } else P(), (e = b(e, t));
              return e;
            case 5:
              return (
                _(t),
                null === e && R(t),
                (o = t.type),
                (s = t.memoizedProps),
                (r = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                T() ||
                s !== r ||
                ((s = 1 & t.mode && v(o, r)) && (t.expirationTime = 1073741823),
                s && 1073741823 === n)
                  ? ((s = r.children),
                    y(o, r) ? (s = null) : i && y(o, i) && (t.effectTag |= 16),
                    f(e, t),
                    1073741823 !== n && 1 & t.mode && v(o, r)
                      ? ((t.expirationTime = 1073741823),
                        (t.memoizedProps = r),
                        (e = null))
                      : (l(e, t, s), (t.memoizedProps = r), (e = t.child)))
                  : (e = b(e, t)),
                e
              );
            case 6:
              return (
                null === e && R(t), (t.memoizedProps = t.pendingProps), null
              );
            case 8:
              t.tag = 7;
            case 7:
              return (
                (o = t.pendingProps),
                T() || t.memoizedProps !== o || (o = t.memoizedProps),
                (r = o.children),
                (t.stateNode =
                  null === e
                    ? yr(t, t.stateNode, r, n)
                    : br(t, e.stateNode, r, n)),
                (t.memoizedProps = o),
                t.stateNode
              );
            case 9:
              return null;
            case 4:
              return (
                w(t, t.stateNode.containerInfo),
                (o = t.pendingProps),
                T() || t.memoizedProps !== o
                  ? (null === e ? (t.child = br(t, null, o, n)) : l(e, t, o),
                    (t.memoizedProps = o),
                    (e = t.child))
                  : (e = b(e, t)),
                e
              );
            case 14:
              return (
                l(e, t, (n = (n = t.type.render)(t.pendingProps, t.ref))),
                (t.memoizedProps = n),
                t.child
              );
            case 10:
              return (
                (n = t.pendingProps),
                T() || t.memoizedProps !== n
                  ? (l(e, t, n), (t.memoizedProps = n), (e = t.child))
                  : (e = b(e, t)),
                e
              );
            case 11:
              return (
                (n = t.pendingProps.children),
                T() || (null !== n && t.memoizedProps !== n)
                  ? (l(e, t, n), (t.memoizedProps = n), (e = t.child))
                  : (e = b(e, t)),
                e
              );
            case 13:
              return (function (e, t, n) {
                var r = t.type._context,
                  o = t.pendingProps,
                  i = t.memoizedProps;
                if (!T() && i === o) return (t.stateNode = 0), k(t), b(e, t);
                var a = o.value;
                if (((t.memoizedProps = o), null === i)) a = 1073741823;
                else if (i.value === o.value) {
                  if (i.children === o.children)
                    return (t.stateNode = 0), k(t), b(e, t);
                  a = 0;
                } else {
                  var s = i.value;
                  if (
                    (s === a && (0 !== s || 1 / s == 1 / a)) ||
                    (s != s && a != a)
                  ) {
                    if (i.children === o.children)
                      return (t.stateNode = 0), k(t), b(e, t);
                    a = 0;
                  } else if (
                    ((a =
                      "function" == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(s, a)
                        : 1073741823),
                    0 == (a |= 0))
                  ) {
                    if (i.children === o.children)
                      return (t.stateNode = 0), k(t), b(e, t);
                  } else g(t, r, a, n);
                }
                return (t.stateNode = a), k(t), l(e, t, o.children), t.child;
              })(e, t, n);
            case 12:
              e: {
                (r = t.type),
                  (i = t.pendingProps),
                  (s = t.memoizedProps),
                  (o = r._currentValue);
                var c = r._changedBits;
                if (T() || 0 !== c || s !== i) {
                  t.memoizedProps = i;
                  var u = i.unstable_observedBits;
                  if (
                    ((void 0 !== u && null !== u) || (u = 1073741823),
                    (t.stateNode = u),
                    0 != (c & u))
                  )
                    g(t, r, c, n);
                  else if (s === i) {
                    e = b(e, t);
                    break e;
                  }
                  l(e, t, (n = (n = i.children)(o))), (e = t.child);
                } else e = b(e, t);
              }
              return e;
            default:
              d("156");
          }
        },
      };
    }
    function _r(e, t) {
      var n = t.source;
      null === t.stack && ut(n),
        null !== n && ct(n),
        (t = t.value),
        null !== e && 2 === e.tag && ct(e);
      try {
        (t && t.suppressReactErrorLogging) || console.error(t);
      } catch (e) {
        (e && e.suppressReactErrorLogging) || console.error(e);
      }
    }
    var wr = {};
    function kr(e) {
      function t() {
        if (null !== ee)
          for (var e = ee.return; null !== e; ) L(e), (e = e.return);
        (te = null), (ne = 0), (ee = null), (ie = !1);
      }
      function n(e) {
        return null !== ae && ae.has(e);
      }
      function r(e) {
        for (;;) {
          var t = e.alternate,
            n = e.return,
            r = e.sibling;
          if (0 == (512 & e.effectTag)) {
            t = R(t, e, ne);
            var o = e;
            if (1073741823 === ne || 1073741823 !== o.expirationTime) {
              e: switch (o.tag) {
                case 3:
                case 2:
                  var i = o.updateQueue;
                  i = null === i ? 0 : i.expirationTime;
                  break e;
                default:
                  i = 0;
              }
              for (var a = o.child; null !== a; )
                0 !== a.expirationTime &&
                  (0 === i || i > a.expirationTime) &&
                  (i = a.expirationTime),
                  (a = a.sibling);
              o.expirationTime = i;
            }
            if (null !== t) return t;
            if (
              (null !== n &&
                0 == (512 & n.effectTag) &&
                (null === n.firstEffect && (n.firstEffect = e.firstEffect),
                null !== e.lastEffect &&
                  (null !== n.lastEffect &&
                    (n.lastEffect.nextEffect = e.firstEffect),
                  (n.lastEffect = e.lastEffect)),
                1 < e.effectTag &&
                  (null !== n.lastEffect
                    ? (n.lastEffect.nextEffect = e)
                    : (n.firstEffect = e),
                  (n.lastEffect = e))),
              null !== r)
            )
              return r;
            if (null === n) {
              ie = !0;
              break;
            }
            e = n;
          } else {
            if (null !== (e = M(e))) return (e.effectTag &= 2559), e;
            if (
              (null !== n &&
                ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 512)),
              null !== r)
            )
              return r;
            if (null === n) break;
            e = n;
          }
        }
        return null;
      }
      function o(e) {
        var t = P(e.alternate, e, ne);
        return null === t && (t = r(e)), (Qe.current = null), t;
      }
      function i(e, n, i) {
        J && d("243"),
          (J = !0),
          (n === ne && e === te && null !== ee) ||
            (t(),
            (ne = n),
            (ee = Kn((te = e).current, null, ne)),
            (e.pendingCommitExpirationTime = 0));
        for (var a = !1; ; ) {
          try {
            if (i) for (; null !== ee && !C(); ) ee = o(ee);
            else for (; null !== ee; ) ee = o(ee);
          } catch (e) {
            if (null === ee) {
              (a = !0), T(e);
              break;
            }
            var s = (i = ee).return;
            if (null === s) {
              (a = !0), T(e);
              break;
            }
            O(s, i, e), (ee = r(i));
          }
          break;
        }
        return (
          (J = !1),
          a || null !== ee
            ? null
            : ie
              ? ((e.pendingCommitExpirationTime = n), e.current.alternate)
              : void d("262")
        );
      }
      function s(e, t, n, r) {
        cr(t, {
          expirationTime: r,
          partialState: null,
          callback: null,
          isReplace: !1,
          isForced: !1,
          capturedValue: (e = { value: n, source: e, stack: ut(e) }),
          next: null,
        }),
          u(t, r);
      }
      function l(e, t) {
        e: {
          J && !oe && d("263");
          for (var r = e.return; null !== r; ) {
            switch (r.tag) {
              case 2:
                var o = r.stateNode;
                if (
                  "function" == typeof r.type.getDerivedStateFromCatch ||
                  ("function" == typeof o.componentDidCatch && !n(o))
                ) {
                  s(e, r, t, 1), (e = void 0);
                  break e;
                }
                break;
              case 3:
                s(e, r, t, 1), (e = void 0);
                break e;
            }
            r = r.return;
          }
          3 === e.tag && s(e, e, t, 1), (e = void 0);
        }
        return e;
      }
      function c(e) {
        return (
          (e =
            0 !== X
              ? X
              : J
                ? oe
                  ? 1
                  : ne
                : 1 & e.mode
                  ? we
                    ? 10 * (1 + (((f() + 15) / 10) | 0))
                    : 25 * (1 + (((f() + 500) / 25) | 0))
                  : 1),
          we && (0 === me || e > me) && (me = e),
          e
        );
      }
      function u(e, n) {
        e: {
          for (; null !== e; ) {
            if (
              ((0 === e.expirationTime || e.expirationTime > n) &&
                (e.expirationTime = n),
              null !== e.alternate &&
                (0 === e.alternate.expirationTime ||
                  e.alternate.expirationTime > n) &&
                (e.alternate.expirationTime = n),
              null === e.return)
            ) {
              if (3 !== e.tag) {
                n = void 0;
                break e;
              }
              var r = e.stateNode;
              !J && 0 !== ne && n < ne && t(),
                (J && !oe && te === r) || g(r, n),
                Ce > xe && d("185");
            }
            e = e.return;
          }
          n = void 0;
        }
        return n;
      }
      function f() {
        return (Y = V() - Q), 2 + ((Y / 10) | 0);
      }
      function m(e, t, n, r, o) {
        var i = X;
        X = 1;
        try {
          return e(t, n, r, o);
        } finally {
          X = i;
        }
      }
      function h(e) {
        if (0 !== ce) {
          if (e > ce) return;
          G(ue);
        }
        var t = V() - Q;
        (ce = e), (ue = W(y, { timeout: 10 * (e - 2) - t }));
      }
      function g(e, t) {
        if (null === e.nextScheduledRoot)
          (e.remainingExpirationTime = t),
            null === le
              ? ((se = le = e), (e.nextScheduledRoot = e))
              : ((le = le.nextScheduledRoot = e).nextScheduledRoot = se);
        else {
          var n = e.remainingExpirationTime;
          (0 === n || t < n) && (e.remainingExpirationTime = t);
        }
        pe ||
          (ve ? _e && ((de = e), (fe = 1), k(e, 1, !1)) : 1 === t ? v() : h(t));
      }
      function b() {
        var e = 0,
          t = null;
        if (null !== le)
          for (var n = le, r = se; null !== r; ) {
            var o = r.remainingExpirationTime;
            if (0 === o) {
              if (
                ((null === n || null === le) && d("244"),
                r === r.nextScheduledRoot)
              ) {
                se = le = r.nextScheduledRoot = null;
                break;
              }
              if (r === se)
                (se = o = r.nextScheduledRoot),
                  (le.nextScheduledRoot = o),
                  (r.nextScheduledRoot = null);
              else {
                if (r === le) {
                  ((le = n).nextScheduledRoot = se),
                    (r.nextScheduledRoot = null);
                  break;
                }
                (n.nextScheduledRoot = r.nextScheduledRoot),
                  (r.nextScheduledRoot = null);
              }
              r = n.nextScheduledRoot;
            } else {
              if (((0 === e || o < e) && ((e = o), (t = r)), r === le)) break;
              (n = r), (r = r.nextScheduledRoot);
            }
          }
        null !== (n = de) && n === t && 1 === e ? Ce++ : (Ce = 0),
          (de = t),
          (fe = e);
      }
      function y(e) {
        _(0, !0, e);
      }
      function v() {
        _(1, !1, null);
      }
      function _(e, t, n) {
        if (((ye = n), b(), t))
          for (
            ;
            null !== de &&
            0 !== fe &&
            (0 === e || e >= fe) &&
            (!he || f() >= fe);

          )
            k(de, fe, !he), b();
        else
          for (; null !== de && 0 !== fe && (0 === e || e >= fe); )
            k(de, fe, !1), b();
        null !== ye && ((ce = 0), (ue = -1)),
          0 !== fe && h(fe),
          (ye = null),
          (he = !1),
          w();
      }
      function w() {
        if (((Ce = 0), null !== ke)) {
          var e = ke;
          ke = null;
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            try {
              n._onComplete();
            } catch (e) {
              ge || ((ge = !0), (be = e));
            }
          }
        }
        if (ge) throw ((e = be), (be = null), (ge = !1), e);
      }
      function k(e, t, n) {
        pe && d("245"),
          (pe = !0),
          n
            ? null !== (n = e.finishedWork)
              ? x(e, n, t)
              : ((e.finishedWork = null),
                null !== (n = i(e, t, !0)) &&
                  (C() ? (e.finishedWork = n) : x(e, n, t)))
            : null !== (n = e.finishedWork)
              ? x(e, n, t)
              : ((e.finishedWork = null),
                null !== (n = i(e, t, !1)) && x(e, n, t)),
          (pe = !1);
      }
      function x(e, t, n) {
        var r = e.firstBatch;
        if (
          null !== r &&
          r._expirationTime <= n &&
          (null === ke ? (ke = [r]) : ke.push(r), r._defer)
        )
          return (e.finishedWork = t), void (e.remainingExpirationTime = 0);
        (e.finishedWork = null),
          (oe = J = !0),
          (n = t.stateNode).current === t && d("177"),
          0 === (r = n.pendingCommitExpirationTime) && d("261"),
          (n.pendingCommitExpirationTime = 0);
        var o = f();
        if (((Qe.current = null), 1 < t.effectTag))
          if (null !== t.lastEffect) {
            t.lastEffect.nextEffect = t;
            var i = t.firstEffect;
          } else i = t;
        else i = t.firstEffect;
        for ($(n.containerInfo), re = i; null !== re; ) {
          var a = !1,
            s = void 0;
          try {
            for (; null !== re; )
              2048 & re.effectTag && N(re.alternate, re), (re = re.nextEffect);
          } catch (e) {
            (a = !0), (s = e);
          }
          a &&
            (null === re && d("178"),
            l(re, s),
            null !== re && (re = re.nextEffect));
        }
        for (re = i; null !== re; ) {
          (a = !1), (s = void 0);
          try {
            for (; null !== re; ) {
              var c = re.effectTag;
              if ((16 & c && D(re), 128 & c)) {
                var u = re.alternate;
                null !== u && z(u);
              }
              switch (14 & c) {
                case 2:
                  I(re), (re.effectTag &= -3);
                  break;
                case 6:
                  I(re), (re.effectTag &= -3), U(re.alternate, re);
                  break;
                case 4:
                  U(re.alternate, re);
                  break;
                case 8:
                  q(re);
              }
              re = re.nextEffect;
            }
          } catch (e) {
            (a = !0), (s = e);
          }
          a &&
            (null === re && d("178"),
            l(re, s),
            null !== re && (re = re.nextEffect));
        }
        for (K(n.containerInfo), n.current = t, re = i; null !== re; ) {
          (c = !1), (u = void 0);
          try {
            for (i = n, a = o, s = r; null !== re; ) {
              var p = re.effectTag;
              36 & p && F(i, re.alternate, re, a, s),
                256 & p && B(re, T),
                128 & p && H(re);
              var m = re.nextEffect;
              (re.nextEffect = null), (re = m);
            }
          } catch (e) {
            (c = !0), (u = e);
          }
          c &&
            (null === re && d("178"),
            l(re, u),
            null !== re && (re = re.nextEffect));
        }
        (J = oe = !1),
          nr(t.stateNode),
          0 === (t = n.current.expirationTime) && (ae = null),
          (e.remainingExpirationTime = t);
      }
      function C() {
        return !(null === ye || ye.timeRemaining() > Te) && (he = !0);
      }
      function T(e) {
        null === de && d("246"),
          (de.remainingExpirationTime = 0),
          ge || ((ge = !0), (be = e));
      }
      var S = (function () {
          var e = [],
            t = -1;
          return {
            createCursor: function (e) {
              return { current: e };
            },
            isEmpty: function () {
              return -1 === t;
            },
            pop: function (n) {
              0 > t || ((n.current = e[t]), (e[t] = null), t--);
            },
            push: function (n, r) {
              (e[++t] = n.current), (n.current = r);
            },
            checkThatStackIsEmpty: function () {},
            resetStackAfterFatalErrorInDev: function () {},
          };
        })(),
        E = (function (e, t) {
          function n(e) {
            return e === wr && d("174"), e;
          }
          var r = e.getChildHostContext,
            o = e.getRootHostContext;
          e = t.createCursor;
          var i = t.push,
            a = t.pop,
            s = e(wr),
            l = e(wr),
            c = e(wr);
          return {
            getHostContext: function () {
              return n(s.current);
            },
            getRootHostContainer: function () {
              return n(c.current);
            },
            popHostContainer: function (e) {
              a(s, e), a(l, e), a(c, e);
            },
            popHostContext: function (e) {
              l.current === e && (a(s, e), a(l, e));
            },
            pushHostContainer: function (e, t) {
              i(c, t, e),
                i(l, e, e),
                i(s, wr, e),
                (t = o(t)),
                a(s, e),
                i(s, t, e);
            },
            pushHostContext: function (e) {
              var t = n(c.current),
                o = n(s.current);
              o !== (t = r(o, e.type, t)) && (i(l, e, e), i(s, t, e));
            },
          };
        })(e, S),
        A = (function (e) {
          function t(e, t, n) {
            ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = n);
          }
          function n(e) {
            return 2 === e.tag && null != e.type.childContextTypes;
          }
          function r(e, t) {
            var n = e.stateNode,
              r = e.type.childContextTypes;
            if ("function" != typeof n.getChildContext) return t;
            for (var o in (n = n.getChildContext()))
              o in r || d("108", ct(e) || "Unknown", o);
            return a({}, t, n);
          }
          var o = e.createCursor,
            i = e.push,
            s = e.pop,
            l = o(p),
            c = o(!1),
            u = p;
          return {
            getUnmaskedContext: function (e) {
              return n(e) ? u : l.current;
            },
            cacheContext: t,
            getMaskedContext: function (e, n) {
              var r = e.type.contextTypes;
              if (!r) return p;
              var o = e.stateNode;
              if (o && o.__reactInternalMemoizedUnmaskedChildContext === n)
                return o.__reactInternalMemoizedMaskedChildContext;
              var i,
                a = {};
              for (i in r) a[i] = n[i];
              return o && t(e, n, a), a;
            },
            hasContextChanged: function () {
              return c.current;
            },
            isContextConsumer: function (e) {
              return 2 === e.tag && null != e.type.contextTypes;
            },
            isContextProvider: n,
            popContextProvider: function (e) {
              n(e) && (s(c, e), s(l, e));
            },
            popTopLevelContextObject: function (e) {
              s(c, e), s(l, e);
            },
            pushTopLevelContextObject: function (e, t, n) {
              null != l.cursor && d("168"), i(l, t, e), i(c, n, e);
            },
            processChildContext: r,
            pushContextProvider: function (e) {
              if (!n(e)) return !1;
              var t = e.stateNode;
              return (
                (t = (t && t.__reactInternalMemoizedMergedChildContext) || p),
                (u = l.current),
                i(l, t, e),
                i(c, c.current, e),
                !0
              );
            },
            invalidateContextProvider: function (e, t) {
              var n = e.stateNode;
              if ((n || d("169"), t)) {
                var o = r(e, u);
                (n.__reactInternalMemoizedMergedChildContext = o),
                  s(c, e),
                  s(l, e),
                  i(l, o, e);
              } else s(c, e);
              i(c, t, e);
            },
            findCurrentUnmaskedContext: function (e) {
              for ((2 !== Kt(e) || 2 !== e.tag) && d("170"); 3 !== e.tag; ) {
                if (n(e))
                  return e.stateNode.__reactInternalMemoizedMergedChildContext;
                (e = e.return) || d("171");
              }
              return e.stateNode.context;
            },
          };
        })(S);
      S = (function (e) {
        var t = e.createCursor,
          n = e.push,
          r = e.pop,
          o = t(null),
          i = t(null),
          a = t(0);
        return {
          pushProvider: function (e) {
            var t = e.type._context;
            n(a, t._changedBits, e),
              n(i, t._currentValue, e),
              n(o, e, e),
              (t._currentValue = e.pendingProps.value),
              (t._changedBits = e.stateNode);
          },
          popProvider: function (e) {
            var t = a.current,
              n = i.current;
            r(o, e),
              r(i, e),
              r(a, e),
              ((e = e.type._context)._currentValue = n),
              (e._changedBits = t);
          },
        };
      })(S);
      var j = (function (e) {
          function t(e, t) {
            var n = new $n(5, null, null, 0);
            (n.type = "DELETED"),
              (n.stateNode = t),
              (n.return = e),
              (n.effectTag = 8),
              null !== e.lastEffect
                ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
                : (e.firstEffect = e.lastEffect = n);
          }
          function n(e, t) {
            switch (e.tag) {
              case 5:
                return (
                  null !== (t = i(t, e.type, e.pendingProps)) &&
                  ((e.stateNode = t), !0)
                );
              case 6:
                return (
                  null !== (t = a(t, e.pendingProps)) && ((e.stateNode = t), !0)
                );
              default:
                return !1;
            }
          }
          function r(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag; )
              e = e.return;
            p = e;
          }
          var o = e.shouldSetTextContent;
          if (!(e = e.hydration))
            return {
              enterHydrationState: function () {
                return !1;
              },
              resetHydrationState: function () {},
              tryToClaimNextHydratableInstance: function () {},
              prepareToHydrateHostInstance: function () {
                d("175");
              },
              prepareToHydrateHostTextInstance: function () {
                d("176");
              },
              popHydrationState: function () {
                return !1;
              },
            };
          var i = e.canHydrateInstance,
            a = e.canHydrateTextInstance,
            s = e.getNextHydratableSibling,
            l = e.getFirstHydratableChild,
            c = e.hydrateInstance,
            u = e.hydrateTextInstance,
            p = null,
            f = null,
            m = !1;
          return {
            enterHydrationState: function (e) {
              return (f = l(e.stateNode.containerInfo)), (p = e), (m = !0);
            },
            resetHydrationState: function () {
              (f = p = null), (m = !1);
            },
            tryToClaimNextHydratableInstance: function (e) {
              if (m) {
                var r = f;
                if (r) {
                  if (!n(e, r)) {
                    if (!(r = s(r)) || !n(e, r))
                      return (e.effectTag |= 2), (m = !1), void (p = e);
                    t(p, f);
                  }
                  (p = e), (f = l(r));
                } else (e.effectTag |= 2), (m = !1), (p = e);
              }
            },
            prepareToHydrateHostInstance: function (e, t, n) {
              return (
                (t = c(e.stateNode, e.type, e.memoizedProps, t, n, e)),
                (e.updateQueue = t),
                null !== t
              );
            },
            prepareToHydrateHostTextInstance: function (e) {
              return u(e.stateNode, e.memoizedProps, e);
            },
            popHydrationState: function (e) {
              if (e !== p) return !1;
              if (!m) return r(e), (m = !0), !1;
              var n = e.type;
              if (
                5 !== e.tag ||
                ("head" !== n && "body" !== n && !o(n, e.memoizedProps))
              )
                for (n = f; n; ) t(e, n), (n = s(n));
              return r(e), (f = p ? s(e.stateNode) : null), !0;
            },
          };
        })(e),
        P = vr(e, E, A, S, j, u, c).beginWork,
        R = (function (e, t, n, r, o) {
          function i(e) {
            e.effectTag |= 4;
          }
          var a = e.createInstance,
            s = e.createTextInstance,
            l = e.appendInitialChild,
            c = e.finalizeInitialChildren,
            u = e.prepareUpdate,
            p = e.persistence,
            f = t.getRootHostContainer,
            m = t.popHostContext,
            h = t.getHostContext,
            g = t.popHostContainer,
            b = n.popContextProvider,
            y = n.popTopLevelContextObject,
            v = r.popProvider,
            _ = o.prepareToHydrateHostInstance,
            w = o.prepareToHydrateHostTextInstance,
            k = o.popHydrationState,
            x = void 0,
            C = void 0,
            T = void 0;
          return (
            e.mutation
              ? ((x = function () {}),
                (C = function (e, t, n) {
                  (t.updateQueue = n) && i(t);
                }),
                (T = function (e, t, n, r) {
                  n !== r && i(t);
                }))
              : d(p ? "235" : "236"),
            {
              completeWork: function (e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                  case 1:
                    return null;
                  case 2:
                    return (
                      b(t),
                      (e = t.stateNode),
                      null !== (r = t.updateQueue) &&
                        null !== r.capturedValues &&
                        ((t.effectTag &= -65),
                        "function" == typeof e.componentDidCatch
                          ? (t.effectTag |= 256)
                          : (r.capturedValues = null)),
                      null
                    );
                  case 3:
                    return (
                      g(t),
                      y(t),
                      (r = t.stateNode).pendingContext &&
                        ((r.context = r.pendingContext),
                        (r.pendingContext = null)),
                      (null !== e && null !== e.child) ||
                        (k(t), (t.effectTag &= -3)),
                      x(t),
                      null !== (e = t.updateQueue) &&
                        null !== e.capturedValues &&
                        (t.effectTag |= 256),
                      null
                    );
                  case 5:
                    m(t), (n = f());
                    var o = t.type;
                    if (null !== e && null != t.stateNode) {
                      var p = e.memoizedProps,
                        S = t.stateNode,
                        E = h();
                      (S = u(S, o, p, r, n, E)),
                        C(e, t, S, o, p, r, n, E),
                        e.ref !== t.ref && (t.effectTag |= 128);
                    } else {
                      if (!r) return null === t.stateNode && d("166"), null;
                      if (((e = h()), k(t))) _(t, n, e) && i(t);
                      else {
                        p = a(o, r, n, e, t);
                        e: for (E = t.child; null !== E; ) {
                          if (5 === E.tag || 6 === E.tag) l(p, E.stateNode);
                          else if (4 !== E.tag && null !== E.child) {
                            (E.child.return = E), (E = E.child);
                            continue;
                          }
                          if (E === t) break;
                          for (; null === E.sibling; ) {
                            if (null === E.return || E.return === t) break e;
                            E = E.return;
                          }
                          (E.sibling.return = E.return), (E = E.sibling);
                        }
                        c(p, o, r, n, e) && i(t), (t.stateNode = p);
                      }
                      null !== t.ref && (t.effectTag |= 128);
                    }
                    return null;
                  case 6:
                    if (e && null != t.stateNode) T(e, t, e.memoizedProps, r);
                    else {
                      if ("string" != typeof r)
                        return null === t.stateNode && d("166"), null;
                      (e = f()),
                        (n = h()),
                        k(t) ? w(t) && i(t) : (t.stateNode = s(r, e, n, t));
                    }
                    return null;
                  case 7:
                    (r = t.memoizedProps) || d("165"), (t.tag = 8), (o = []);
                    e: for ((p = t.stateNode) && (p.return = t); null !== p; ) {
                      if (5 === p.tag || 6 === p.tag || 4 === p.tag) d("247");
                      else if (9 === p.tag) o.push(p.pendingProps.value);
                      else if (null !== p.child) {
                        (p.child.return = p), (p = p.child);
                        continue;
                      }
                      for (; null === p.sibling; ) {
                        if (null === p.return || p.return === t) break e;
                        p = p.return;
                      }
                      (p.sibling.return = p.return), (p = p.sibling);
                    }
                    return (
                      (r = (p = r.handler)(r.props, o)),
                      (t.child = br(t, null !== e ? e.child : null, r, n)),
                      t.child
                    );
                  case 8:
                    return (t.tag = 7), null;
                  case 9:
                  case 14:
                  case 10:
                  case 11:
                    return null;
                  case 4:
                    return g(t), x(t), null;
                  case 13:
                    return v(t), null;
                  case 12:
                    return null;
                  case 0:
                    d("167");
                  default:
                    d("156");
                }
              },
            }
          );
        })(e, E, A, S, j).completeWork,
        O = (E = (function (e, t, n, r, o) {
          var i = e.popHostContainer,
            a = e.popHostContext,
            s = t.popContextProvider,
            l = t.popTopLevelContextObject,
            c = n.popProvider;
          return {
            throwException: function (e, t, n) {
              (t.effectTag |= 512),
                (t.firstEffect = t.lastEffect = null),
                (t = { value: n, source: t, stack: ut(t) });
              do {
                switch (e.tag) {
                  case 3:
                    return (
                      lr(e),
                      (e.updateQueue.capturedValues = [t]),
                      void (e.effectTag |= 1024)
                    );
                  case 2:
                    if (
                      ((n = e.stateNode),
                      0 == (64 & e.effectTag) &&
                        null !== n &&
                        "function" == typeof n.componentDidCatch &&
                        !o(n))
                    ) {
                      lr(e);
                      var r = (n = e.updateQueue).capturedValues;
                      return (
                        null === r ? (n.capturedValues = [t]) : r.push(t),
                        void (e.effectTag |= 1024)
                      );
                    }
                }
                e = e.return;
              } while (null !== e);
            },
            unwindWork: function (e) {
              switch (e.tag) {
                case 2:
                  s(e);
                  var t = e.effectTag;
                  return 1024 & t
                    ? ((e.effectTag = (-1025 & t) | 64), e)
                    : null;
                case 3:
                  return (
                    i(e),
                    l(e),
                    1024 & (t = e.effectTag)
                      ? ((e.effectTag = (-1025 & t) | 64), e)
                      : null
                  );
                case 5:
                  return a(e), null;
                case 4:
                  return i(e), null;
                case 13:
                  return c(e), null;
                default:
                  return null;
              }
            },
            unwindInterruptedWork: function (e) {
              switch (e.tag) {
                case 2:
                  s(e);
                  break;
                case 3:
                  i(e), l(e);
                  break;
                case 5:
                  a(e);
                  break;
                case 4:
                  i(e);
                  break;
                case 13:
                  c(e);
              }
            },
          };
        })(E, A, S, 0, n)).throwException,
        M = E.unwindWork,
        L = E.unwindInterruptedWork,
        N = (E = (function (e, t, n, r, o) {
          function i(e) {
            var n = e.ref;
            if (null !== n)
              if ("function" == typeof n)
                try {
                  n(null);
                } catch (n) {
                  t(e, n);
                }
              else n.current = null;
          }
          function a(e) {
            switch ((rr(e), e.tag)) {
              case 2:
                i(e);
                var n = e.stateNode;
                if ("function" == typeof n.componentWillUnmount)
                  try {
                    (n.props = e.memoizedProps),
                      (n.state = e.memoizedState),
                      n.componentWillUnmount();
                  } catch (n) {
                    t(e, n);
                  }
                break;
              case 5:
                i(e);
                break;
              case 7:
                s(e.stateNode);
                break;
              case 4:
                p && c(e);
            }
          }
          function s(e) {
            for (var t = e; ; )
              if ((a(t), null === t.child || (p && 4 === t.tag))) {
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) return;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              } else (t.child.return = t), (t = t.child);
          }
          function l(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
          }
          function c(e) {
            for (var t = e, n = !1, r = void 0, o = void 0; ; ) {
              if (!n) {
                n = t.return;
                e: for (;;) {
                  switch ((null === n && d("160"), n.tag)) {
                    case 5:
                      (r = n.stateNode), (o = !1);
                      break e;
                    case 3:
                    case 4:
                      (r = n.stateNode.containerInfo), (o = !0);
                      break e;
                  }
                  n = n.return;
                }
                n = !0;
              }
              if (5 === t.tag || 6 === t.tag)
                s(t), o ? k(r, t.stateNode) : w(r, t.stateNode);
              else if (
                (4 === t.tag ? (r = t.stateNode.containerInfo) : a(t),
                null !== t.child)
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return;
                4 === (t = t.return).tag && (n = !1);
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          var u = e.getPublicInstance,
            p = e.mutation;
          (e = e.persistence), p || d(e ? "235" : "236");
          var f = p.commitMount,
            m = p.commitUpdate,
            h = p.resetTextContent,
            g = p.commitTextUpdate,
            b = p.appendChild,
            y = p.appendChildToContainer,
            v = p.insertBefore,
            _ = p.insertInContainerBefore,
            w = p.removeChild,
            k = p.removeChildFromContainer;
          return {
            commitBeforeMutationLifeCycles: function (e, t) {
              switch (t.tag) {
                case 2:
                  if (2048 & t.effectTag && null !== e) {
                    var n = e.memoizedProps,
                      r = e.memoizedState;
                    ((e = t.stateNode).props = t.memoizedProps),
                      (e.state = t.memoizedState),
                      (t = e.getSnapshotBeforeUpdate(n, r)),
                      (e.__reactInternalSnapshotBeforeUpdate = t);
                  }
                  break;
                case 3:
                case 5:
                case 6:
                case 4:
                  break;
                default:
                  d("163");
              }
            },
            commitResetTextContent: function (e) {
              h(e.stateNode);
            },
            commitPlacement: function (e) {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (l(t)) {
                    var n = t;
                    break e;
                  }
                  t = t.return;
                }
                d("160"), (n = void 0);
              }
              var r = (t = void 0);
              switch (n.tag) {
                case 5:
                  (t = n.stateNode), (r = !1);
                  break;
                case 3:
                case 4:
                  (t = n.stateNode.containerInfo), (r = !0);
                  break;
                default:
                  d("161");
              }
              16 & n.effectTag && (h(t), (n.effectTag &= -17));
              e: t: for (n = e; ; ) {
                for (; null === n.sibling; ) {
                  if (null === n.return || l(n.return)) {
                    n = null;
                    break e;
                  }
                  n = n.return;
                }
                for (
                  n.sibling.return = n.return, n = n.sibling;
                  5 !== n.tag && 6 !== n.tag;

                ) {
                  if (2 & n.effectTag) continue t;
                  if (null === n.child || 4 === n.tag) continue t;
                  (n.child.return = n), (n = n.child);
                }
                if (!(2 & n.effectTag)) {
                  n = n.stateNode;
                  break e;
                }
              }
              for (var o = e; ; ) {
                if (5 === o.tag || 6 === o.tag)
                  n
                    ? r
                      ? _(t, o.stateNode, n)
                      : v(t, o.stateNode, n)
                    : r
                      ? y(t, o.stateNode)
                      : b(t, o.stateNode);
                else if (4 !== o.tag && null !== o.child) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
                if (o === e) break;
                for (; null === o.sibling; ) {
                  if (null === o.return || o.return === e) return;
                  o = o.return;
                }
                (o.sibling.return = o.return), (o = o.sibling);
              }
            },
            commitDeletion: function (e) {
              c(e),
                (e.return = null),
                (e.child = null),
                e.alternate &&
                  ((e.alternate.child = null), (e.alternate.return = null));
            },
            commitWork: function (e, t) {
              switch (t.tag) {
                case 2:
                  break;
                case 5:
                  var n = t.stateNode;
                  if (null != n) {
                    var r = t.memoizedProps;
                    e = null !== e ? e.memoizedProps : r;
                    var o = t.type,
                      i = t.updateQueue;
                    (t.updateQueue = null), null !== i && m(n, i, o, e, r, t);
                  }
                  break;
                case 6:
                  null === t.stateNode && d("162"),
                    (n = t.memoizedProps),
                    g(t.stateNode, null !== e ? e.memoizedProps : n, n);
                  break;
                case 3:
                  break;
                default:
                  d("163");
              }
            },
            commitLifeCycles: function (e, t, n) {
              switch (n.tag) {
                case 2:
                  if (((e = n.stateNode), 4 & n.effectTag))
                    if (null === t)
                      (e.props = n.memoizedProps),
                        (e.state = n.memoizedState),
                        e.componentDidMount();
                    else {
                      var r = t.memoizedProps;
                      (t = t.memoizedState),
                        (e.props = n.memoizedProps),
                        (e.state = n.memoizedState),
                        e.componentDidUpdate(
                          r,
                          t,
                          e.__reactInternalSnapshotBeforeUpdate,
                        );
                    }
                  null !== (n = n.updateQueue) && dr(n, e);
                  break;
                case 3:
                  if (null !== (t = n.updateQueue)) {
                    if (((e = null), null !== n.child))
                      switch (n.child.tag) {
                        case 5:
                          e = u(n.child.stateNode);
                          break;
                        case 2:
                          e = n.child.stateNode;
                      }
                    dr(t, e);
                  }
                  break;
                case 5:
                  (e = n.stateNode),
                    null === t &&
                      4 & n.effectTag &&
                      f(e, n.type, n.memoizedProps, n);
                  break;
                case 6:
                case 4:
                  break;
                default:
                  d("163");
              }
            },
            commitErrorLogging: function (e, t) {
              switch (e.tag) {
                case 2:
                  var n = e.type;
                  t = e.stateNode;
                  var r = e.updateQueue;
                  (null === r || null === r.capturedValues) && d("264");
                  var i = r.capturedValues;
                  for (
                    r.capturedValues = null,
                      "function" != typeof n.getDerivedStateFromCatch && o(t),
                      t.props = e.memoizedProps,
                      t.state = e.memoizedState,
                      n = 0;
                    n < i.length;
                    n++
                  ) {
                    var a = (r = i[n]).value,
                      s = r.stack;
                    _r(e, r),
                      t.componentDidCatch(a, {
                        componentStack: null !== s ? s : "",
                      });
                  }
                  break;
                case 3:
                  for (
                    (null === (n = e.updateQueue) ||
                      null === n.capturedValues) &&
                      d("264"),
                      i = n.capturedValues,
                      n.capturedValues = null,
                      n = 0;
                    n < i.length;
                    n++
                  )
                    _r(e, (r = i[n])), t(r.value);
                  break;
                default:
                  d("265");
              }
            },
            commitAttachRef: function (e) {
              var t = e.ref;
              if (null !== t) {
                var n = e.stateNode;
                switch (e.tag) {
                  case 5:
                    e = u(n);
                    break;
                  default:
                    e = n;
                }
                "function" == typeof t ? t(e) : (t.current = e);
              }
            },
            commitDetachRef: function (e) {
              null !== (e = e.ref) &&
                ("function" == typeof e ? e(null) : (e.current = null));
            },
          };
        })(e, l, 0, 0, function (e) {
          null === ae ? (ae = new Set([e])) : ae.add(e);
        })).commitBeforeMutationLifeCycles,
        D = E.commitResetTextContent,
        I = E.commitPlacement,
        q = E.commitDeletion,
        U = E.commitWork,
        F = E.commitLifeCycles,
        B = E.commitErrorLogging,
        H = E.commitAttachRef,
        z = E.commitDetachRef,
        V = e.now,
        W = e.scheduleDeferredCallback,
        G = e.cancelDeferredCallback,
        $ = e.prepareForCommit,
        K = e.resetAfterCommit,
        Q = V(),
        Y = Q,
        Z = 0,
        X = 0,
        J = !1,
        ee = null,
        te = null,
        ne = 0,
        re = null,
        oe = !1,
        ie = !1,
        ae = null,
        se = null,
        le = null,
        ce = 0,
        ue = -1,
        pe = !1,
        de = null,
        fe = 0,
        me = 0,
        he = !1,
        ge = !1,
        be = null,
        ye = null,
        ve = !1,
        _e = !1,
        we = !1,
        ke = null,
        xe = 1e3,
        Ce = 0,
        Te = 1;
      return {
        recalculateCurrentTime: f,
        computeExpirationForFiber: c,
        scheduleWork: u,
        requestWork: g,
        flushRoot: function (e, t) {
          pe && d("253"), (de = e), (fe = t), k(e, t, !1), v(), w();
        },
        batchedUpdates: function (e, t) {
          var n = ve;
          ve = !0;
          try {
            return e(t);
          } finally {
            (ve = n) || pe || v();
          }
        },
        unbatchedUpdates: function (e, t) {
          if (ve && !_e) {
            _e = !0;
            try {
              return e(t);
            } finally {
              _e = !1;
            }
          }
          return e(t);
        },
        flushSync: function (e, t) {
          pe && d("187");
          var n = ve;
          ve = !0;
          try {
            return m(e, t);
          } finally {
            (ve = n), v();
          }
        },
        flushControlled: function (e) {
          var t = ve;
          ve = !0;
          try {
            m(e);
          } finally {
            (ve = t) || pe || _(1, !1, null);
          }
        },
        deferredUpdates: function (e) {
          var t = X;
          X = 25 * (1 + (((f() + 500) / 25) | 0));
          try {
            return e();
          } finally {
            X = t;
          }
        },
        syncUpdates: m,
        interactiveUpdates: function (e, t, n) {
          if (we) return e(t, n);
          ve || pe || 0 === me || (_(me, !1, null), (me = 0));
          var r = we,
            o = ve;
          ve = we = !0;
          try {
            return e(t, n);
          } finally {
            (we = r), (ve = o) || pe || v();
          }
        },
        flushInteractiveUpdates: function () {
          pe || 0 === me || (_(me, !1, null), (me = 0));
        },
        computeUniqueAsyncExpiration: function () {
          var e = 25 * (1 + (((f() + 500) / 25) | 0));
          return e <= Z && (e = Z + 1), (Z = e);
        },
        legacyContext: A,
      };
    }
    function xr(e) {
      function t(e, t, n, r, o, a) {
        if (((r = t.current), n)) {
          n = n._reactInternalFiber;
          var s = l(n);
          n = c(n) ? u(n, s) : s;
        } else n = p;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          cr(r, {
            expirationTime: o,
            partialState: { element: e },
            callback: void 0 === (t = a) ? null : t,
            isReplace: !1,
            isForced: !1,
            capturedValue: null,
            next: null,
          }),
          i(r, o),
          o
        );
      }
      var n = e.getPublicInstance,
        r = (e = kr(e)).recalculateCurrentTime,
        o = e.computeExpirationForFiber,
        i = e.scheduleWork,
        s = e.legacyContext,
        l = s.findCurrentUnmaskedContext,
        c = s.isContextProvider,
        u = s.processChildContext;
      return {
        createContainer: function (e, t, n) {
          return (
            (e = {
              current: (t = new $n(3, null, null, t ? 3 : 0)),
              containerInfo: e,
              pendingChildren: null,
              pendingCommitExpirationTime: 0,
              finishedWork: null,
              context: null,
              pendingContext: null,
              hydrate: n,
              remainingExpirationTime: 0,
              firstBatch: null,
              nextScheduledRoot: null,
            }),
            (t.stateNode = e)
          );
        },
        updateContainer: function (e, n, i, a) {
          var s = n.current;
          return t(e, n, i, r(), (s = o(s)), a);
        },
        updateContainerAtExpirationTime: function (e, n, o, i, a) {
          return t(e, n, o, r(), i, a);
        },
        flushRoot: e.flushRoot,
        requestWork: e.requestWork,
        computeUniqueAsyncExpiration: e.computeUniqueAsyncExpiration,
        batchedUpdates: e.batchedUpdates,
        unbatchedUpdates: e.unbatchedUpdates,
        deferredUpdates: e.deferredUpdates,
        syncUpdates: e.syncUpdates,
        interactiveUpdates: e.interactiveUpdates,
        flushInteractiveUpdates: e.flushInteractiveUpdates,
        flushControlled: e.flushControlled,
        flushSync: e.flushSync,
        getPublicRootInstance: function (e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
            case 5:
              return n(e.child.stateNode);
            default:
              return e.child.stateNode;
          }
        },
        findHostInstance: function (e) {
          var t = e._reactInternalFiber;
          return (
            void 0 === t &&
              ("function" == typeof e.render
                ? d("188")
                : d("268", Object.keys(e))),
            null === (e = Xt(t)) ? null : e.stateNode
          );
        },
        findHostInstanceWithNoPortals: function (e) {
          return null ===
            (e = (function (e) {
              if (!(e = Zt(e))) return null;
              for (var t = e; ; ) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child && 4 !== t.tag) (t.child.return = t), (t = t.child);
                else {
                  if (t === e) break;
                  for (; !t.sibling; ) {
                    if (!t.return || t.return === e) return null;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return null;
            })(e))
            ? null
            : e.stateNode;
        },
        injectIntoDevTools: function (e) {
          var t = e.findFiberByHostInstance;
          return (function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var n = t.inject(e);
              (Jn = tr(function (e) {
                return t.onCommitFiberRoot(n, e);
              })),
                (er = tr(function (e) {
                  return t.onCommitFiberUnmount(n, e);
                }));
            } catch (e) {}
            return !0;
          })(
            a({}, e, {
              findHostInstanceByFiber: function (e) {
                return null === (e = Xt(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
            }),
          );
        },
      };
    }
    var Cr = Object.freeze({ default: xr }),
      Tr = (Cr && xr) || Cr,
      Sr = Tr.default ? Tr.default : Tr;
    var Er =
        "object" == typeof performance && "function" == typeof performance.now,
      Ar = void 0;
    Ar = Er
      ? function () {
          return performance.now();
        }
      : function () {
          return Date.now();
        };
    var jr = void 0,
      Pr = void 0;
    if (i.canUseDOM)
      if (
        "function" != typeof requestIdleCallback ||
        "function" != typeof cancelIdleCallback
      ) {
        var Rr = null,
          Or = !1,
          Mr = -1,
          Lr = !1,
          Nr = 0,
          Dr = 33,
          Ir = 33,
          qr = void 0;
        qr = Er
          ? {
              didTimeout: !1,
              timeRemaining: function () {
                var e = Nr - performance.now();
                return 0 < e ? e : 0;
              },
            }
          : {
              didTimeout: !1,
              timeRemaining: function () {
                var e = Nr - Date.now();
                return 0 < e ? e : 0;
              },
            };
        var Ur = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener(
          "message",
          function (e) {
            if (e.source === window && e.data === Ur) {
              if (((Or = !1), (e = Ar()), 0 >= Nr - e)) {
                if (!(-1 !== Mr && Mr <= e))
                  return void (Lr || ((Lr = !0), requestAnimationFrame(Fr)));
                qr.didTimeout = !0;
              } else qr.didTimeout = !1;
              (Mr = -1), (e = Rr), (Rr = null), null !== e && e(qr);
            }
          },
          !1,
        );
        var Fr = function (e) {
          Lr = !1;
          var t = e - Nr + Ir;
          t < Ir && Dr < Ir
            ? (8 > t && (t = 8), (Ir = t < Dr ? Dr : t))
            : (Dr = t),
            (Nr = e + Ir),
            Or || ((Or = !0), window.postMessage(Ur, "*"));
        };
        (jr = function (e, t) {
          return (
            (Rr = e),
            null != t &&
              "number" == typeof t.timeout &&
              (Mr = Ar() + t.timeout),
            Lr || ((Lr = !0), requestAnimationFrame(Fr)),
            0
          );
        }),
          (Pr = function () {
            (Rr = null), (Or = !1), (Mr = -1);
          });
      } else
        (jr = window.requestIdleCallback), (Pr = window.cancelIdleCallback);
    else
      (jr = function (e) {
        return setTimeout(function () {
          e({
            timeRemaining: function () {
              return 1 / 0;
            },
            didTimeout: !1,
          });
        });
      }),
        (Pr = function (e) {
          clearTimeout(e);
        });
    function Br(e, t) {
      return (
        (e = a({ children: void 0 }, t)),
        (t = (function (e) {
          var t = "";
          return (
            o.Children.forEach(e, function (e) {
              null == e ||
                ("string" != typeof e && "number" != typeof e) ||
                (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function Hr(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + n, t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n)
            return (
              (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
            );
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function zr(e, t) {
      var n = t.value;
      e._wrapperState = {
        initialValue: null != n ? n : t.defaultValue,
        wasMultiple: !!t.multiple,
      };
    }
    function Vr(e, t) {
      return (
        null != t.dangerouslySetInnerHTML && d("91"),
        a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        })
      );
    }
    function Wr(e, t) {
      var n = t.value;
      null == n &&
        ((n = t.defaultValue),
        null != (t = t.children) &&
          (null != n && d("92"),
          Array.isArray(t) && (1 >= t.length || d("93"), (t = t[0])),
          (n = "" + t)),
        null == n && (n = "")),
        (e._wrapperState = { initialValue: "" + n });
    }
    function Gr(e, t) {
      var n = t.value;
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && (e.defaultValue = n)),
        null != t.defaultValue && (e.defaultValue = t.defaultValue);
    }
    function $r(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && (e.value = t);
    }
    var Kr = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
    };
    function Qr(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Yr(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? Qr(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var Zr,
      Xr = void 0,
      Jr =
        ((Zr = function (e, t) {
          if (e.namespaceURI !== Kr.svg || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (Xr = Xr || document.createElement("div")).innerHTML =
                "<svg>" + t + "</svg>",
                t = Xr.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return Zr(e, t);
              });
            }
          : Zr);
    function eo(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var to = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      no = ["Webkit", "ms", "Moz", "O"];
    function ro(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            o = n,
            i = t[n];
          (o =
            null == i || "boolean" == typeof i || "" === i
              ? ""
              : r ||
                  "number" != typeof i ||
                  0 === i ||
                  (to.hasOwnProperty(o) && to[o])
                ? ("" + i).trim()
                : i + "px"),
            "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, o) : (e[n] = o);
        }
    }
    Object.keys(to).forEach(function (e) {
      no.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (to[t] = to[e]);
      });
    });
    var oo = a(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function io(e, t, n) {
      t &&
        (oo[e] &&
          (null != t.children || null != t.dangerouslySetInnerHTML) &&
          d("137", e, n()),
        null != t.dangerouslySetInnerHTML &&
          (null != t.children && d("60"),
          ("object" == typeof t.dangerouslySetInnerHTML &&
            "__html" in t.dangerouslySetInnerHTML) ||
            d("61")),
        null != t.style && "object" != typeof t.style && d("62", n()));
    }
    function ao(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var so = s.thatReturns("");
    function lo(e, t) {
      var n = Nn(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument),
      );
      t = w[t];
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        (n.hasOwnProperty(o) && n[o]) ||
          ("topScroll" === o
            ? wn("topScroll", "scroll", e)
            : "topFocus" === o || "topBlur" === o
              ? (wn("topFocus", "focus", e),
                wn("topBlur", "blur", e),
                (n.topBlur = !0),
                (n.topFocus = !0))
              : "topCancel" === o
                ? (We("cancel", !0) && wn("topCancel", "cancel", e),
                  (n.topCancel = !0))
                : "topClose" === o
                  ? (We("close", !0) && wn("topClose", "close", e),
                    (n.topClose = !0))
                  : Pn.hasOwnProperty(o) && _n(o, Pn[o], e),
          (n[o] = !0));
      }
    }
    function co(e, t, n, r) {
      return (
        (n = 9 === n.nodeType ? n : n.ownerDocument),
        r === Kr.html && (r = Qr(e)),
        r === Kr.html
          ? "script" === e
            ? (((e = n.createElement("div")).innerHTML = "<script></script>"),
              (e = e.removeChild(e.firstChild)))
            : (e =
                "string" == typeof t.is
                  ? n.createElement(e, { is: t.is })
                  : n.createElement(e))
          : (e = n.createElementNS(r, e)),
        e
      );
    }
    function uo(e, t) {
      return (9 === t.nodeType ? t : t.ownerDocument).createTextNode(e);
    }
    function po(e, t, n, r) {
      var o = ao(t, n);
      switch (t) {
        case "iframe":
        case "object":
          _n("topLoad", "load", e);
          var i = n;
          break;
        case "video":
        case "audio":
          for (i in Rn) Rn.hasOwnProperty(i) && _n(i, Rn[i], e);
          i = n;
          break;
        case "source":
          _n("topError", "error", e), (i = n);
          break;
        case "img":
        case "image":
        case "link":
          _n("topError", "error", e), _n("topLoad", "load", e), (i = n);
          break;
        case "form":
          _n("topReset", "reset", e), _n("topSubmit", "submit", e), (i = n);
          break;
        case "details":
          _n("topToggle", "toggle", e), (i = n);
          break;
        case "input":
          _t(e, n),
            (i = vt(e, n)),
            _n("topInvalid", "invalid", e),
            lo(r, "onChange");
          break;
        case "option":
          i = Br(e, n);
          break;
        case "select":
          zr(e, n),
            (i = a({}, n, { value: void 0 })),
            _n("topInvalid", "invalid", e),
            lo(r, "onChange");
          break;
        case "textarea":
          Wr(e, n),
            (i = Vr(e, n)),
            _n("topInvalid", "invalid", e),
            lo(r, "onChange");
          break;
        default:
          i = n;
      }
      io(t, i, so);
      var l,
        c = i;
      for (l in c)
        if (c.hasOwnProperty(l)) {
          var u = c[l];
          "style" === l
            ? ro(e, u)
            : "dangerouslySetInnerHTML" === l
              ? null != (u = u ? u.__html : void 0) && Jr(e, u)
              : "children" === l
                ? "string" == typeof u
                  ? ("textarea" !== t || "" !== u) && eo(e, u)
                  : "number" == typeof u && eo(e, "" + u)
                : "suppressContentEditableWarning" !== l &&
                  "suppressHydrationWarning" !== l &&
                  "autoFocus" !== l &&
                  (_.hasOwnProperty(l)
                    ? null != u && lo(r, l)
                    : null != u && yt(e, l, u, o));
        }
      switch (t) {
        case "input":
          $e(e), xt(e, n);
          break;
        case "textarea":
          $e(e), $r(e);
          break;
        case "option":
          null != n.value && e.setAttribute("value", n.value);
          break;
        case "select":
          (e.multiple = !!n.multiple),
            null != (t = n.value)
              ? Hr(e, !!n.multiple, t, !1)
              : null != n.defaultValue &&
                Hr(e, !!n.multiple, n.defaultValue, !0);
          break;
        default:
          "function" == typeof i.onClick && (e.onclick = s);
      }
    }
    function fo(e, t, n, r, o) {
      var i = null;
      switch (t) {
        case "input":
          (n = vt(e, n)), (r = vt(e, r)), (i = []);
          break;
        case "option":
          (n = Br(e, n)), (r = Br(e, r)), (i = []);
          break;
        case "select":
          (n = a({}, n, { value: void 0 })),
            (r = a({}, r, { value: void 0 })),
            (i = []);
          break;
        case "textarea":
          (n = Vr(e, n)), (r = Vr(e, r)), (i = []);
          break;
        default:
          "function" != typeof n.onClick &&
            "function" == typeof r.onClick &&
            (e.onclick = s);
      }
      io(t, r, so), (t = e = void 0);
      var l = null;
      for (e in n)
        if (!r.hasOwnProperty(e) && n.hasOwnProperty(e) && null != n[e])
          if ("style" === e) {
            var c = n[e];
            for (t in c) c.hasOwnProperty(t) && (l || (l = {}), (l[t] = ""));
          } else
            "dangerouslySetInnerHTML" !== e &&
              "children" !== e &&
              "suppressContentEditableWarning" !== e &&
              "suppressHydrationWarning" !== e &&
              "autoFocus" !== e &&
              (_.hasOwnProperty(e)
                ? i || (i = [])
                : (i = i || []).push(e, null));
      for (e in r) {
        var u = r[e];
        if (
          ((c = null != n ? n[e] : void 0),
          r.hasOwnProperty(e) && u !== c && (null != u || null != c))
        )
          if ("style" === e)
            if (c) {
              for (t in c)
                !c.hasOwnProperty(t) ||
                  (u && u.hasOwnProperty(t)) ||
                  (l || (l = {}), (l[t] = ""));
              for (t in u)
                u.hasOwnProperty(t) &&
                  c[t] !== u[t] &&
                  (l || (l = {}), (l[t] = u[t]));
            } else l || (i || (i = []), i.push(e, l)), (l = u);
          else
            "dangerouslySetInnerHTML" === e
              ? ((u = u ? u.__html : void 0),
                (c = c ? c.__html : void 0),
                null != u && c !== u && (i = i || []).push(e, "" + u))
              : "children" === e
                ? c === u ||
                  ("string" != typeof u && "number" != typeof u) ||
                  (i = i || []).push(e, "" + u)
                : "suppressContentEditableWarning" !== e &&
                  "suppressHydrationWarning" !== e &&
                  (_.hasOwnProperty(e)
                    ? (null != u && lo(o, e), i || c === u || (i = []))
                    : (i = i || []).push(e, u));
      }
      return l && (i = i || []).push("style", l), i;
    }
    function mo(e, t, n, r, o) {
      "input" === n && "radio" === o.type && null != o.name && wt(e, o),
        ao(n, r),
        (r = ao(n, o));
      for (var i = 0; i < t.length; i += 2) {
        var a = t[i],
          s = t[i + 1];
        "style" === a
          ? ro(e, s)
          : "dangerouslySetInnerHTML" === a
            ? Jr(e, s)
            : "children" === a
              ? eo(e, s)
              : yt(e, a, s, r);
      }
      switch (n) {
        case "input":
          kt(e, o);
          break;
        case "textarea":
          Gr(e, o);
          break;
        case "select":
          (e._wrapperState.initialValue = void 0),
            (t = e._wrapperState.wasMultiple),
            (e._wrapperState.wasMultiple = !!o.multiple),
            null != (n = o.value)
              ? Hr(e, !!o.multiple, n, !1)
              : t !== !!o.multiple &&
                (null != o.defaultValue
                  ? Hr(e, !!o.multiple, o.defaultValue, !0)
                  : Hr(e, !!o.multiple, o.multiple ? [] : "", !1));
      }
    }
    function ho(e, t, n, r, o) {
      switch (t) {
        case "iframe":
        case "object":
          _n("topLoad", "load", e);
          break;
        case "video":
        case "audio":
          for (var i in Rn) Rn.hasOwnProperty(i) && _n(i, Rn[i], e);
          break;
        case "source":
          _n("topError", "error", e);
          break;
        case "img":
        case "image":
        case "link":
          _n("topError", "error", e), _n("topLoad", "load", e);
          break;
        case "form":
          _n("topReset", "reset", e), _n("topSubmit", "submit", e);
          break;
        case "details":
          _n("topToggle", "toggle", e);
          break;
        case "input":
          _t(e, n), _n("topInvalid", "invalid", e), lo(o, "onChange");
          break;
        case "select":
          zr(e, n), _n("topInvalid", "invalid", e), lo(o, "onChange");
          break;
        case "textarea":
          Wr(e, n), _n("topInvalid", "invalid", e), lo(o, "onChange");
      }
      for (var a in (io(t, n, so), (r = null), n))
        n.hasOwnProperty(a) &&
          ((i = n[a]),
          "children" === a
            ? "string" == typeof i
              ? e.textContent !== i && (r = ["children", i])
              : "number" == typeof i &&
                e.textContent !== "" + i &&
                (r = ["children", "" + i])
            : _.hasOwnProperty(a) && null != i && lo(o, a));
      switch (t) {
        case "input":
          $e(e), xt(e, n);
          break;
        case "textarea":
          $e(e), $r(e);
          break;
        case "select":
        case "option":
          break;
        default:
          "function" == typeof n.onClick && (e.onclick = s);
      }
      return r;
    }
    function go(e, t) {
      return e.nodeValue !== t;
    }
    var bo = Object.freeze({
      createElement: co,
      createTextNode: uo,
      setInitialProperties: po,
      diffProperties: fo,
      updateProperties: mo,
      diffHydratedProperties: ho,
      diffHydratedText: go,
      warnForUnmatchedText: function () {},
      warnForDeletedHydratableElement: function () {},
      warnForDeletedHydratableText: function () {},
      warnForInsertedHydratedElement: function () {},
      warnForInsertedHydratedText: function () {},
      restoreControlledState: function (e, t, n) {
        switch (t) {
          case "input":
            if ((kt(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = W(r);
                  o || d("90"), Ke(r), kt(r, o);
                }
              }
            }
            break;
          case "textarea":
            Gr(e, n);
            break;
          case "select":
            null != (t = n.value) && Hr(e, !!n.multiple, t, !1);
        }
      },
    });
    je.injectFiberControlledHostComponent(bo);
    var yo = null,
      vo = null;
    function _o(e) {
      (this._expirationTime = To.computeUniqueAsyncExpiration()),
        (this._root = e),
        (this._callbacks = this._next = null),
        (this._hasChildren = this._didComplete = !1),
        (this._children = null),
        (this._defer = !0);
    }
    function wo() {
      (this._callbacks = null),
        (this._didCommit = !1),
        (this._onCommit = this._onCommit.bind(this));
    }
    function ko(e, t, n) {
      this._internalRoot = To.createContainer(e, t, n);
    }
    function xo(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Co(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    (_o.prototype.render = function (e) {
      this._defer || d("250"), (this._hasChildren = !0), (this._children = e);
      var t = this._root._internalRoot,
        n = this._expirationTime,
        r = new wo();
      return To.updateContainerAtExpirationTime(e, t, null, n, r._onCommit), r;
    }),
      (_o.prototype.then = function (e) {
        if (this._didComplete) e();
        else {
          var t = this._callbacks;
          null === t && (t = this._callbacks = []), t.push(e);
        }
      }),
      (_o.prototype.commit = function () {
        var e = this._root._internalRoot,
          t = e.firstBatch;
        if (((this._defer && null !== t) || d("251"), this._hasChildren)) {
          var n = this._expirationTime;
          if (t !== this) {
            this._hasChildren &&
              ((n = this._expirationTime = t._expirationTime),
              this.render(this._children));
            for (var r = null, o = t; o !== this; ) (r = o), (o = o._next);
            null === r && d("251"),
              (r._next = o._next),
              (this._next = t),
              (e.firstBatch = this);
          }
          (this._defer = !1),
            To.flushRoot(e, n),
            (t = this._next),
            (this._next = null),
            null !== (t = e.firstBatch = t) &&
              t._hasChildren &&
              t.render(t._children);
        } else (this._next = null), (this._defer = !1);
      }),
      (_o.prototype._onComplete = function () {
        if (!this._didComplete) {
          this._didComplete = !0;
          var e = this._callbacks;
          if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }),
      (wo.prototype.then = function (e) {
        if (this._didCommit) e();
        else {
          var t = this._callbacks;
          null === t && (t = this._callbacks = []), t.push(e);
        }
      }),
      (wo.prototype._onCommit = function () {
        if (!this._didCommit) {
          this._didCommit = !0;
          var e = this._callbacks;
          if (null !== e)
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              "function" != typeof n && d("191", n), n();
            }
        }
      }),
      (ko.prototype.render = function (e, t) {
        var n = this._internalRoot,
          r = new wo();
        return (
          null !== (t = void 0 === t ? null : t) && r.then(t),
          To.updateContainer(e, n, null, r._onCommit),
          r
        );
      }),
      (ko.prototype.unmount = function (e) {
        var t = this._internalRoot,
          n = new wo();
        return (
          null !== (e = void 0 === e ? null : e) && n.then(e),
          To.updateContainer(null, t, null, n._onCommit),
          n
        );
      }),
      (ko.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
        var r = this._internalRoot,
          o = new wo();
        return (
          null !== (n = void 0 === n ? null : n) && o.then(n),
          To.updateContainer(t, r, e, o._onCommit),
          o
        );
      }),
      (ko.prototype.createBatch = function () {
        var e = new _o(this),
          t = e._expirationTime,
          n = this._internalRoot,
          r = n.firstBatch;
        if (null === r) (n.firstBatch = e), (e._next = null);
        else {
          for (n = null; null !== r && r._expirationTime <= t; )
            (n = r), (r = r._next);
          (e._next = r), null !== n && (n._next = e);
        }
        return e;
      });
    var To = Sr({
        getRootHostContext: function (e) {
          var t = e.nodeType;
          switch (t) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : Yr(null, "");
              break;
            default:
              e = Yr(
                (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
                (t = t.tagName),
              );
          }
          return e;
        },
        getChildHostContext: function (e, t) {
          return Yr(e, t);
        },
        getPublicInstance: function (e) {
          return e;
        },
        prepareForCommit: function () {
          yo = yn;
          var e = l();
          if (qn(e)) {
            if ("selectionStart" in e)
              var t = { start: e.selectionStart, end: e.selectionEnd };
            else
              e: {
                var n = window.getSelection && window.getSelection();
                if (n && 0 !== n.rangeCount) {
                  t = n.anchorNode;
                  var r = n.anchorOffset,
                    o = n.focusNode;
                  n = n.focusOffset;
                  try {
                    t.nodeType, o.nodeType;
                  } catch (e) {
                    t = null;
                    break e;
                  }
                  var i = 0,
                    a = -1,
                    s = -1,
                    c = 0,
                    u = 0,
                    p = e,
                    d = null;
                  t: for (;;) {
                    for (
                      var f;
                      p !== t || (0 !== r && 3 !== p.nodeType) || (a = i + r),
                        p !== o || (0 !== n && 3 !== p.nodeType) || (s = i + n),
                        3 === p.nodeType && (i += p.nodeValue.length),
                        null !== (f = p.firstChild);

                    )
                      (d = p), (p = f);
                    for (;;) {
                      if (p === e) break t;
                      if (
                        (d === t && ++c === r && (a = i),
                        d === o && ++u === n && (s = i),
                        null !== (f = p.nextSibling))
                      )
                        break;
                      d = (p = d).parentNode;
                    }
                    p = f;
                  }
                  t = -1 === a || -1 === s ? null : { start: a, end: s };
                } else t = null;
              }
            t = t || { start: 0, end: 0 };
          } else t = null;
          (vo = { focusedElem: e, selectionRange: t }), vn(!1);
        },
        resetAfterCommit: function () {
          var e = vo,
            t = l(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && u(document.documentElement, n)) {
            if (qn(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (window.getSelection) {
                t = window.getSelection();
                var o = n[oe()].length;
                (e = Math.min(r.start, o)),
                  (r = void 0 === r.end ? e : Math.min(r.end, o)),
                  !t.extend && e > r && ((o = r), (r = e), (e = o)),
                  (o = In(n, e));
                var i = In(n, r);
                if (
                  o &&
                  i &&
                  (1 !== t.rangeCount ||
                    t.anchorNode !== o.node ||
                    t.anchorOffset !== o.offset ||
                    t.focusNode !== i.node ||
                    t.focusOffset !== i.offset)
                ) {
                  var a = document.createRange();
                  a.setStart(o.node, o.offset),
                    t.removeAllRanges(),
                    e > r
                      ? (t.addRange(a), t.extend(i.node, i.offset))
                      : (a.setEnd(i.node, i.offset), t.addRange(a));
                }
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
          (vo = null), vn(yo), (yo = null);
        },
        createInstance: function (e, t, n, r, o) {
          return ((e = co(e, t, n, r))[B] = o), (e[H] = t), e;
        },
        appendInitialChild: function (e, t) {
          e.appendChild(t);
        },
        finalizeInitialChildren: function (e, t, n, r) {
          return po(e, t, n, r), Co(t, n);
        },
        prepareUpdate: function (e, t, n, r, o) {
          return fo(e, t, n, r, o);
        },
        shouldSetTextContent: function (e, t) {
          return (
            "textarea" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              "string" == typeof t.dangerouslySetInnerHTML.__html)
          );
        },
        shouldDeprioritizeSubtree: function (e, t) {
          return !!t.hidden;
        },
        createTextInstance: function (e, t, n, r) {
          return ((e = uo(e, t))[B] = r), e;
        },
        now: Ar,
        mutation: {
          commitMount: function (e, t, n) {
            Co(t, n) && e.focus();
          },
          commitUpdate: function (e, t, n, r, o) {
            (e[H] = o), mo(e, t, n, r, o);
          },
          resetTextContent: function (e) {
            eo(e, "");
          },
          commitTextUpdate: function (e, t, n) {
            e.nodeValue = n;
          },
          appendChild: function (e, t) {
            e.appendChild(t);
          },
          appendChildToContainer: function (e, t) {
            8 === e.nodeType
              ? e.parentNode.insertBefore(t, e)
              : e.appendChild(t);
          },
          insertBefore: function (e, t, n) {
            e.insertBefore(t, n);
          },
          insertInContainerBefore: function (e, t, n) {
            8 === e.nodeType
              ? e.parentNode.insertBefore(t, n)
              : e.insertBefore(t, n);
          },
          removeChild: function (e, t) {
            e.removeChild(t);
          },
          removeChildFromContainer: function (e, t) {
            8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t);
          },
        },
        hydration: {
          canHydrateInstance: function (e, t) {
            return 1 !== e.nodeType ||
              t.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e;
          },
          canHydrateTextInstance: function (e, t) {
            return "" === t || 3 !== e.nodeType ? null : e;
          },
          getNextHydratableSibling: function (e) {
            for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; )
              e = e.nextSibling;
            return e;
          },
          getFirstHydratableChild: function (e) {
            for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; )
              e = e.nextSibling;
            return e;
          },
          hydrateInstance: function (e, t, n, r, o, i) {
            return (e[B] = i), (e[H] = n), ho(e, t, n, o, r);
          },
          hydrateTextInstance: function (e, t, n) {
            return (e[B] = n), go(e, t);
          },
          didNotMatchHydratedContainerTextInstance: function () {},
          didNotMatchHydratedTextInstance: function () {},
          didNotHydrateContainerInstance: function () {},
          didNotHydrateInstance: function () {},
          didNotFindHydratableContainerInstance: function () {},
          didNotFindHydratableContainerTextInstance: function () {},
          didNotFindHydratableInstance: function () {},
          didNotFindHydratableTextInstance: function () {},
        },
        scheduleDeferredCallback: jr,
        cancelDeferredCallback: Pr,
      }),
      So = To;
    function Eo(e, t, n, r, o) {
      xo(n) || d("200");
      var i = n._reactRootContainer;
      if (i) {
        if ("function" == typeof o) {
          var a = o;
          o = function () {
            var e = To.getPublicRootInstance(i._internalRoot);
            a.call(e);
          };
        }
        null != e
          ? i.legacy_renderSubtreeIntoContainer(e, t, o)
          : i.render(t, o);
      } else {
        if (
          ((i = n._reactRootContainer =
            (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new ko(e, !1, t);
            })(n, r)),
          "function" == typeof o)
        ) {
          var s = o;
          o = function () {
            var e = To.getPublicRootInstance(i._internalRoot);
            s.call(e);
          };
        }
        To.unbatchedUpdates(function () {
          null != e
            ? i.legacy_renderSubtreeIntoContainer(e, t, o)
            : i.render(t, o);
        });
      }
      return To.getPublicRootInstance(i._internalRoot);
    }
    function Ao(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      return (
        xo(t) || d("200"),
        (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: et,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n)
      );
    }
    (Ie = So.batchedUpdates),
      (qe = So.interactiveUpdates),
      (Ue = So.flushInteractiveUpdates);
    var jo = {
      createPortal: Ao,
      findDOMNode: function (e) {
        return null == e ? null : 1 === e.nodeType ? e : To.findHostInstance(e);
      },
      hydrate: function (e, t, n) {
        return Eo(null, e, t, !0, n);
      },
      render: function (e, t, n) {
        return Eo(null, e, t, !1, n);
      },
      unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
        return (
          (null == e || void 0 === e._reactInternalFiber) && d("38"),
          Eo(e, t, n, !1, r)
        );
      },
      unmountComponentAtNode: function (e) {
        return (
          xo(e) || d("40"),
          !!e._reactRootContainer &&
            (To.unbatchedUpdates(function () {
              Eo(null, null, e, !1, function () {
                e._reactRootContainer = null;
              });
            }),
            !0)
        );
      },
      unstable_createPortal: function () {
        return Ao.apply(void 0, arguments);
      },
      unstable_batchedUpdates: To.batchedUpdates,
      unstable_deferredUpdates: To.deferredUpdates,
      flushSync: To.flushSync,
      unstable_flushControlled: To.flushControlled,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        EventPluginHub: U,
        EventPluginRegistry: C,
        EventPropagators: ne,
        ReactControlledComponent: De,
        ReactDOMComponentTree: G,
        ReactDOMEventListener: Cn,
      },
      unstable_createRoot: function (e, t) {
        return new ko(e, !0, null != t && !0 === t.hydrate);
      },
    };
    To.injectIntoDevTools({
      findFiberByHostInstance: z,
      bundleType: 0,
      version: "16.3.2",
      rendererPackageName: "react-dom",
    });
    var Po = Object.freeze({ default: jo }),
      Ro = (Po && jo) || Po;
    e.exports = Ro.default ? Ro.default : Ro;
  },
  "./node_modules/react-dom/index.js": function (e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (e.exports = n(
        "./node_modules/react-dom/cjs/react-dom.production.min.js",
      ));
  },
  "./node_modules/react-remarkable/dist/index.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = function (e, t, n) {
        for (var r = !0; r; ) {
          var o = e,
            i = t,
            a = n;
          (r = !1), null === o && (o = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(o, i);
          if (void 0 !== s) {
            if ("value" in s) return s.value;
            var l = s.get;
            if (void 0 === l) return;
            return l.call(a);
          }
          var c = Object.getPrototypeOf(o);
          if (null === c) return;
          (e = c), (t = i), (n = a), (r = !0), (s = c = void 0);
        }
      };
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = i(n("./node_modules/react/index.js")),
      s = i(n("./node_modules/remarkable/index.js")),
      l = (function (e) {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(
              this,
              arguments,
            );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, a["default"].Component),
          r(t, [
            {
              key: "render",
              value: function () {
                var e = this.props.container;
                return a.default.createElement(e, null, this.content());
              },
            },
            {
              key: "componentWillUpdate",
              value: function (e, t) {
                e.options !== this.props.options &&
                  (this.md = new s.default(e.options));
              },
            },
            {
              key: "content",
              value: function () {
                var e = this;
                return this.props.source
                  ? a.default.createElement("span", {
                      dangerouslySetInnerHTML: {
                        __html: this.renderMarkdown(this.props.source),
                      },
                    })
                  : a.default.Children.map(this.props.children, function (t) {
                      return "string" == typeof t
                        ? a.default.createElement("span", {
                            dangerouslySetInnerHTML: {
                              __html: e.renderMarkdown(t),
                            },
                          })
                        : t;
                    });
              },
            },
            {
              key: "renderMarkdown",
              value: function (e) {
                return (
                  this.md || (this.md = new s.default(this.props.options)),
                  this.md.render(e)
                );
              },
            },
          ]),
          t
        );
      })();
    (l.defaultProps = { container: "div", options: {} }),
      (t.default = l),
      (e.exports = t.default);
  },
  "./node_modules/react/cjs/react.production.min.js": function (e, t, n) {
    "use strict";
    /** @license React v16.3.2
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n("./node_modules/object-assign/index.js"),
      o = n("./node_modules/fbjs/lib/invariant.js"),
      i = n("./node_modules/fbjs/lib/emptyObject.js"),
      a = n("./node_modules/fbjs/lib/emptyFunction.js"),
      s = "function" == typeof Symbol && Symbol.for,
      l = s ? Symbol.for("react.element") : 60103,
      c = s ? Symbol.for("react.portal") : 60106,
      u = s ? Symbol.for("react.fragment") : 60107,
      p = s ? Symbol.for("react.strict_mode") : 60108,
      d = s ? Symbol.for("react.provider") : 60109,
      f = s ? Symbol.for("react.context") : 60110,
      m = s ? Symbol.for("react.async_mode") : 60111,
      h = s ? Symbol.for("react.forward_ref") : 60112,
      g = "function" == typeof Symbol && Symbol.iterator;
    function b(e) {
      for (
        var t = arguments.length - 1,
          n = "http://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 0;
        r < t;
        r++
      )
        n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      o(
        !1,
        "Minified React error #" +
          e +
          "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n,
      );
    }
    var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    };
    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = i),
        (this.updater = n || y);
    }
    function _() {}
    function w(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = i),
        (this.updater = n || y);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        "object" != typeof e && "function" != typeof e && null != e && b("85"),
          this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (_.prototype = v.prototype);
    var k = (w.prototype = new _());
    (k.constructor = w), r(k, v.prototype), (k.isPureReactComponent = !0);
    var x = { current: null },
      C = Object.prototype.hasOwnProperty,
      T = { key: !0, ref: !0, __self: !0, __source: !0 };
    function S(e, t, n) {
      var r = void 0,
        o = {},
        i = null,
        a = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = "" + t.key),
        t))
          C.call(t, r) && !T.hasOwnProperty(r) && (o[r] = t[r]);
      var s = arguments.length - 2;
      if (1 === s) o.children = n;
      else if (1 < s) {
        for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
        o.children = c;
      }
      if (e && e.defaultProps)
        for (r in (s = e.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
      return {
        $$typeof: l,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: x.current,
      };
    }
    function E(e) {
      return "object" == typeof e && null !== e && e.$$typeof === l;
    }
    var A = /\/+/g,
      j = [];
    function P(e, t, n, r) {
      if (j.length) {
        var o = j.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function R(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > j.length && j.push(e);
    }
    function O(e, t, n, r) {
      var o = typeof e;
      ("undefined" !== o && "boolean" !== o) || (e = null);
      var i = !1;
      if (null === e) i = !0;
      else
        switch (o) {
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case l:
              case c:
                i = !0;
            }
        }
      if (i) return n(r, e, "" === t ? "." + M(e, 0) : t), 1;
      if (((i = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
        for (var a = 0; a < e.length; a++) {
          var s = t + M((o = e[a]), a);
          i += O(o, s, n, r);
        }
      else if (
        (null === e || void 0 === e
          ? (s = null)
          : (s =
              "function" == typeof (s = (g && e[g]) || e["@@iterator"])
                ? s
                : null),
        "function" == typeof s)
      )
        for (e = s.call(e), a = 0; !(o = e.next()).done; )
          i += O((o = o.value), (s = t + M(o, a++)), n, r);
      else
        "object" === o &&
          b(
            "31",
            "[object Object]" === (n = "" + e)
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : n,
            "",
          );
      return i;
    }
    function M(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function L(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function N(e, t, n) {
      var r = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? D(e, r, n, a.thatReturnsArgument)
          : null != e &&
            (E(e) &&
              ((t =
                o +
                (!e.key || (t && t.key === e.key)
                  ? ""
                  : ("" + e.key).replace(A, "$&/") + "/") +
                n),
              (e = {
                $$typeof: l,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              })),
            r.push(e));
    }
    function D(e, t, n, r, o) {
      var i = "";
      null != n && (i = ("" + n).replace(A, "$&/") + "/"),
        (t = P(t, i, r, o)),
        null == e || O(e, "", N, t),
        R(t);
    }
    var I = {
        Children: {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return D(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            (t = P(null, null, t, n)), null == e || O(e, "", L, t), R(t);
          },
          count: function (e) {
            return null == e ? 0 : O(e, "", a.thatReturnsNull, null);
          },
          toArray: function (e) {
            var t = [];
            return D(e, t, null, a.thatReturnsArgument), t;
          },
          only: function (e) {
            return E(e) || b("143"), e;
          },
        },
        createRef: function () {
          return { current: null };
        },
        Component: v,
        PureComponent: w,
        createContext: function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _defaultValue: e,
              _currentValue: e,
              _changedBits: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: d, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function (e) {
          return { $$typeof: h, render: e };
        },
        Fragment: u,
        StrictMode: p,
        unstable_AsyncMode: m,
        createElement: S,
        cloneElement: function (e, t, n) {
          (null === e || void 0 === e) && b("267", e);
          var o = void 0,
            i = r({}, e.props),
            a = e.key,
            s = e.ref,
            c = e._owner;
          if (null != t) {
            void 0 !== t.ref && ((s = t.ref), (c = x.current)),
              void 0 !== t.key && (a = "" + t.key);
            var u = void 0;
            for (o in (e.type &&
              e.type.defaultProps &&
              (u = e.type.defaultProps),
            t))
              C.call(t, o) &&
                !T.hasOwnProperty(o) &&
                (i[o] = void 0 === t[o] && void 0 !== u ? u[o] : t[o]);
          }
          if (1 === (o = arguments.length - 2)) i.children = n;
          else if (1 < o) {
            u = Array(o);
            for (var p = 0; p < o; p++) u[p] = arguments[p + 2];
            i.children = u;
          }
          return {
            $$typeof: l,
            type: e.type,
            key: a,
            ref: s,
            props: i,
            _owner: c,
          };
        },
        createFactory: function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: E,
        version: "16.3.2",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: x,
          assign: r,
        },
      },
      q = Object.freeze({ default: I }),
      U = (q && I) || q;
    e.exports = U.default ? U.default : U;
  },
  "./node_modules/react/index.js": function (e, t, n) {
    "use strict";
    e.exports = n("./node_modules/react/cjs/react.production.min.js");
  },
  "./node_modules/redbox-react/lib/index.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.__RewireAPI__ =
        t.__ResetDependency__ =
        t.__set__ =
        t.__Rewire__ =
        t.__GetDependency__ =
        t.__get__ =
        t.RedBoxError =
          void 0);
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      o = (function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  !r && s.return && s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        };
      })(),
      i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = h(n("./node_modules/prop-types/index.js")),
      s = n("./node_modules/react/index.js"),
      l = h(s),
      c = h(n("./node_modules/react-dom/index.js")),
      u = h(n("./node_modules/redbox-react/lib/style.js")),
      p = h(
        n(
          "./node_modules/redbox-react/node_modules/error-stack-parser/error-stack-parser.js",
        ),
      ),
      d = h(n("./node_modules/object-assign/index.js")),
      f = n("./node_modules/redbox-react/lib/lib.js"),
      m = n(
        "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js",
      );
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function b(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t,
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    var v = (t.RedBoxError = (function (e) {
      function t(e) {
        g(this, t);
        var n = b(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(this, e),
        );
        return (
          (n.state = { error: null, mapped: !1 }),
          n.mapOnConstruction(e.error),
          n
        );
      }
      return (
        y(t, C("Component")),
        i(t, [
          {
            key: "componentDidMount",
            value: function () {
              this.state.mapped || this.mapError(this.props.error);
            },
          },
          {
            key: "mapOnConstruction",
            value: function (e) {
              var t = e.stack.split("\n");
              if (t.length < 2) this.state = { error: e, mapped: !0 };
              else if (-1 !== t[1].search(/\(webpack:\/{3}/))
                this.state = { error: e, mapped: !0 };
              else if (-1 !== t[1].search(/\(eval at/)) {
                var n = [t.shift()],
                  r = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var s, l = t[Symbol.iterator]();
                    !(r = (s = l.next()).done);
                    r = !0
                  ) {
                    var c = s.value,
                      u = c.match(
                        /(.+)\(eval at (.+) \(.+?\), .+(\:[0-9]+\:[0-9]+)\)/,
                      );
                    if (u) {
                      var p = o(u, 4),
                        d = p[1],
                        f = p[2],
                        m = p[3];
                      n.push(d + " (" + f + m + ")");
                    } else n.push(c);
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    !r && l.return && l.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                (e.stack = n.join("\n")),
                  (this.state = { error: e, mapped: !0 });
              } else this.state = { error: e, mapped: !1 };
            },
          },
          {
            key: "mapError",
            value: function (e) {
              var t = this;
              C("mapStackTrace")(e.stack, function (n) {
                (e.stack = n.join("\n")), t.setState({ error: e, mapped: !0 });
              });
            },
          },
          {
            key: "renderFrames",
            value: function (e) {
              var t = this.props,
                n = t.filename,
                r = t.editorScheme,
                o = t.useLines,
                i = t.useColumns,
                a = C("assign")({}, C("style"), this.props.style),
                s = a.frame,
                l = a.file,
                c = a.linkToFile;
              return e.map(function (e, t) {
                var a = void 0,
                  u = void 0;
                if (0 === t && n && !C("isFilenameAbsolute")(e.fileName))
                  (u = C("makeUrl")(n, r)), (a = C("makeLinkText")(n));
                else {
                  var p = o ? e.lineNumber : null,
                    d = i ? e.columnNumber : null;
                  (u = C("makeUrl")(e.fileName, r, p, d)),
                    (a = C("makeLinkText")(e.fileName, p, d));
                }
                return C("React").createElement(
                  "div",
                  { style: s, key: t },
                  C("React").createElement("div", null, e.functionName),
                  C("React").createElement(
                    "div",
                    { style: l },
                    C("React").createElement("a", { href: u, style: c }, a),
                  ),
                );
              });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state.error,
                t = this.props.className,
                n = C("assign")({}, C("style"), this.props.style),
                r = n.redbox,
                o = n.message,
                i = n.stack,
                a = n.frame,
                s = void 0,
                l = void 0;
              try {
                s = C("ErrorStackParser").parse(e);
              } catch (e) {
                l = new Error(
                  "Failed to parse stack trace. Stack trace information unavailable.",
                );
              }
              return (
                (s = l
                  ? C("React").createElement(
                      "div",
                      { style: a, key: 0 },
                      C("React").createElement("div", null, l.message),
                    )
                  : this.renderFrames(s)),
                C("React").createElement(
                  "div",
                  { style: r, className: t },
                  C("React").createElement(
                    "div",
                    { style: o },
                    e.name,
                    ": ",
                    e.message,
                  ),
                  C("React").createElement("div", { style: i }, s),
                )
              );
            },
          },
        ]),
        t
      );
    })());
    (v.propTypes = {
      error: C("PropTypes").instanceOf(Error).isRequired,
      filename: C("PropTypes").string,
      editorScheme: C("PropTypes").string,
      useLines: C("PropTypes").bool,
      useColumns: C("PropTypes").bool,
      style: C("PropTypes").object,
      className: C("PropTypes").string,
    }),
      (v.displayName = "RedBoxError"),
      (v.defaultProps = { useLines: !0, useColumns: !0 });
    var _ = (function (e) {
      function t() {
        return (
          g(this, t),
          b(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
          )
        );
      }
      return (
        y(t, C("Component")),
        i(t, [
          {
            key: "componentDidMount",
            value: function () {
              (this.el = document.createElement("div")),
                document.body.appendChild(this.el),
                this.renderRedBoxError();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.renderRedBoxError();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              C("ReactDOM").unmountComponentAtNode(this.el),
                document.body.removeChild(this.el),
                (this.el = null);
            },
          },
          {
            key: "renderRedBoxError",
            value: function () {
              C("ReactDOM").render(
                C("React").createElement(C("RedBoxError"), this.props),
                this.el,
              );
            },
          },
          {
            key: "render",
            value: function () {
              return null;
            },
          },
        ]),
        t
      );
    })();
    (_.propTypes = { error: C("PropTypes").instanceOf(Error).isRequired }),
      (_.displayName = "RedBox"),
      (t.default = _);
    var w = Object.create(null),
      k = "__INTENTIONAL_UNDEFINED__",
      x = {};
    function C(e) {
      if (void 0 === w || void 0 === w[e])
        return (function (e) {
          switch (e) {
            case "PropTypes":
              return a.default;
            case "mapStackTrace":
              return m.mapStackTrace;
            case "assign":
              return d.default;
            case "style":
              return u.default;
            case "isFilenameAbsolute":
              return f.isFilenameAbsolute;
            case "makeUrl":
              return f.makeUrl;
            case "makeLinkText":
              return f.makeLinkText;
            case "ErrorStackParser":
              return p.default;
            case "Component":
              return s.Component;
            case "ReactDOM":
              return c.default;
            case "React":
              return l.default;
            case "RedBoxError":
              return v;
          }
          return;
        })(e);
      var t = w[e];
      return t === k ? void 0 : t;
    }
    function T(e, t) {
      if ("object" !== (void 0 === e ? "undefined" : r(e)))
        return (
          (w[e] = void 0 === t ? k : t),
          function () {
            S(e);
          }
        );
      Object.keys(e).forEach(function (t) {
        w[t] = e[t];
      });
    }
    function S(e) {
      delete w[e];
    }
    function E(e) {
      var t = Object.keys(e),
        n = {};
      function r() {
        t.forEach(function (e) {
          w[e] = n[e];
        });
      }
      return function (o) {
        t.forEach(function (t) {
          (n[t] = w[t]), (w[t] = e[t]);
        });
        var i = o();
        return i && "function" == typeof i.then ? i.then(r).catch(r) : r(), i;
      };
    }
    !(function () {
      function e(e, t) {
        Object.defineProperty(x, e, {
          value: t,
          enumerable: !1,
          configurable: !0,
        });
      }
      e("__get__", C),
        e("__GetDependency__", C),
        e("__Rewire__", T),
        e("__set__", T),
        e("__reset__", S),
        e("__ResetDependency__", S),
        e("__with__", E);
    })();
    var A = void 0 === _ ? "undefined" : r(_);
    function j(e, t) {
      Object.defineProperty(_, e, {
        value: t,
        enumerable: !1,
        configurable: !0,
      });
    }
    ("object" !== A && "function" !== A) ||
      !Object.isExtensible(_) ||
      (j("__get__", C),
      j("__GetDependency__", C),
      j("__Rewire__", T),
      j("__set__", T),
      j("__reset__", S),
      j("__ResetDependency__", S),
      j("__with__", E),
      j("__RewireAPI__", x)),
      (t.__get__ = C),
      (t.__GetDependency__ = C),
      (t.__Rewire__ = T),
      (t.__set__ = T),
      (t.__ResetDependency__ = S),
      (t.__RewireAPI__ = x);
  },
  "./node_modules/redbox-react/lib/lib.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      o = (t.filenameWithoutLoaders = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = e.lastIndexOf("!");
        return t < 0 ? e : e.substr(t + 1);
      }),
      i =
        ((t.filenameHasLoaders = function (e) {
          return c("filenameWithoutLoaders")(e) !== e;
        }),
        (t.filenameHasSchema = function (e) {
          return /^[\w]+\:/.test(e);
        })),
      a =
        ((t.isFilenameAbsolute = function (e) {
          return 0 === c("filenameWithoutLoaders")(e).indexOf("/");
        }),
        (t.makeUrl = function (e, t, n, r) {
          var o = c("filenameWithoutLoaders")(e);
          if (c("filenameHasSchema")(e)) return o;
          var i = "file://" + o;
          return (
            "vscode" === t
              ? ((i = (i = t + "://file/" + i).replace(/file:\/\/\//, "")),
                n && o === e && ((i = i + ":" + n), r && (i = i + ":" + r)))
              : t &&
                ((i = t + "://open?url=" + i),
                n &&
                  o === e &&
                  ((i = i + "&line=" + n), r && (i = i + "&column=" + r))),
            i
          );
        }),
        (t.makeLinkText = function (e, t, n) {
          var r = c("filenameWithoutLoaders")(e);
          return t && r === e && ((r = r + ":" + t), n && (r = r + ":" + n)), r;
        }),
        Object.create(null)),
      s = "__INTENTIONAL_UNDEFINED__",
      l = {};
    function c(e) {
      if (void 0 === a || void 0 === a[e])
        return (function (e) {
          switch (e) {
            case "filenameWithoutLoaders":
              return o;
            case "filenameHasSchema":
              return i;
          }
          return;
        })(e);
      var t = a[e];
      return t === s ? void 0 : t;
    }
    function u(e, t) {
      if ("object" !== (void 0 === e ? "undefined" : r(e)))
        return (
          (a[e] = void 0 === t ? s : t),
          function () {
            p(e);
          }
        );
      Object.keys(e).forEach(function (t) {
        a[t] = e[t];
      });
    }
    function p(e) {
      delete a[e];
    }
    function d(e) {
      var t = Object.keys(e),
        n = {};
      function r() {
        t.forEach(function (e) {
          a[e] = n[e];
        });
      }
      return function (o) {
        t.forEach(function (t) {
          (n[t] = a[t]), (a[t] = e[t]);
        });
        var i = o();
        return i && "function" == typeof i.then ? i.then(r).catch(r) : r(), i;
      };
    }
    !(function () {
      function e(e, t) {
        Object.defineProperty(l, e, {
          value: t,
          enumerable: !1,
          configurable: !0,
        });
      }
      e("__get__", c),
        e("__GetDependency__", c),
        e("__Rewire__", u),
        e("__set__", u),
        e("__reset__", p),
        e("__ResetDependency__", p),
        e("__with__", d);
    })(),
      (t.__get__ = c),
      (t.__GetDependency__ = c),
      (t.__Rewire__ = u),
      (t.__set__ = u),
      (t.__ResetDependency__ = p),
      (t.__RewireAPI__ = l),
      (t.default = l);
  },
  "./node_modules/redbox-react/lib/style.js": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = {
      redbox: {
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        position: "fixed",
        padding: 10,
        top: "0px",
        left: "0px",
        bottom: "0px",
        right: "0px",
        width: "100%",
        background: "rgb(204, 0, 0)",
        color: "white",
        zIndex: 2147483647,
        textAlign: "left",
        fontSize: "16px",
        lineHeight: 1.2,
        overflow: "auto",
      },
      message: { fontWeight: "bold" },
      stack: { fontFamily: "monospace", marginTop: "2em" },
      frame: { marginTop: "1em" },
      file: { fontSize: "0.8em", color: "rgba(255, 255, 255, 0.7)" },
      linkToFile: { textDecoration: "none", color: "rgba(255, 255, 255, 0.7)" },
    };
  },
  "./node_modules/redbox-react/node_modules/error-stack-parser/error-stack-parser.js":
    function (e, t, n) {
      var r, o, i;
      !(function (a, s) {
        "use strict";
        (o = [
          n(
            "./node_modules/redbox-react/node_modules/stackframe/stackframe.js",
          ),
        ]),
          void 0 ===
            (i =
              "function" ==
              typeof (r = function (e) {
                var t = /(^|@)\S+\:\d+/,
                  n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                  r = /^(eval@)?(\[native code\])?$/;
                function o(e, t, n) {
                  if ("function" == typeof Array.prototype.map)
                    return e.map(t, n);
                  for (var r = new Array(e.length), o = 0; o < e.length; o++)
                    r[o] = t.call(n, e[o]);
                  return r;
                }
                function i(e, t, n) {
                  if ("function" == typeof Array.prototype.filter)
                    return e.filter(t, n);
                  for (var r = [], o = 0; o < e.length; o++)
                    t.call(n, e[o]) && r.push(e[o]);
                  return r;
                }
                return {
                  parse: function (e) {
                    if (
                      void 0 !== e.stacktrace ||
                      void 0 !== e["opera#sourceloc"]
                    )
                      return this.parseOpera(e);
                    if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                    if (e.stack) return this.parseFFOrSafari(e);
                    throw new Error("Cannot parse given Error object");
                  },
                  extractLocation: function (e) {
                    if (-1 === e.indexOf(":")) return [e];
                    var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(
                      e.replace(/[\(\)]/g, ""),
                    );
                    return [t[1], t[2] || void 0, t[3] || void 0];
                  },
                  parseV8OrIE: function (t) {
                    var r = i(
                      t.stack.split("\n"),
                      function (e) {
                        return !!e.match(n);
                      },
                      this,
                    );
                    return o(
                      r,
                      function (t) {
                        t.indexOf("(eval ") > -1 &&
                          (t = t
                            .replace(/eval code/g, "eval")
                            .replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                        var n = t
                            .replace(/^\s+/, "")
                            .replace(/\(eval code/g, "(")
                            .split(/\s+/)
                            .slice(1),
                          r = this.extractLocation(n.pop()),
                          o = n.join(" ") || void 0,
                          i =
                            (function (e, t) {
                              if ("function" == typeof Array.prototype.indexOf)
                                return e.indexOf(t);
                              for (var n = 0; n < e.length; n++)
                                if (e[n] === t) return n;
                              return -1;
                            })(["eval", "<anonymous>"], r[0]) > -1
                              ? void 0
                              : r[0];
                        return new e(o, void 0, i, r[1], r[2], t);
                      },
                      this,
                    );
                  },
                  parseFFOrSafari: function (t) {
                    var n = i(
                      t.stack.split("\n"),
                      function (e) {
                        return !e.match(r);
                      },
                      this,
                    );
                    return o(
                      n,
                      function (t) {
                        if (
                          (t.indexOf(" > eval") > -1 &&
                            (t = t.replace(
                              / line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,
                              ":$1",
                            )),
                          -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                        )
                          return new e(t);
                        var n = t.split("@"),
                          r = this.extractLocation(n.pop()),
                          o = n.join("@") || void 0;
                        return new e(o, void 0, r[0], r[1], r[2], t);
                      },
                      this,
                    );
                  },
                  parseOpera: function (e) {
                    return !e.stacktrace ||
                      (e.message.indexOf("\n") > -1 &&
                        e.message.split("\n").length >
                          e.stacktrace.split("\n").length)
                      ? this.parseOpera9(e)
                      : e.stack
                        ? this.parseOpera11(e)
                        : this.parseOpera10(e);
                  },
                  parseOpera9: function (t) {
                    for (
                      var n = /Line (\d+).*script (?:in )?(\S+)/i,
                        r = t.message.split("\n"),
                        o = [],
                        i = 2,
                        a = r.length;
                      i < a;
                      i += 2
                    ) {
                      var s = n.exec(r[i]);
                      s &&
                        o.push(new e(void 0, void 0, s[2], s[1], void 0, r[i]));
                    }
                    return o;
                  },
                  parseOpera10: function (t) {
                    for (
                      var n =
                          /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        r = t.stacktrace.split("\n"),
                        o = [],
                        i = 0,
                        a = r.length;
                      i < a;
                      i += 2
                    ) {
                      var s = n.exec(r[i]);
                      s &&
                        o.push(
                          new e(
                            s[3] || void 0,
                            void 0,
                            s[2],
                            s[1],
                            void 0,
                            r[i],
                          ),
                        );
                    }
                    return o;
                  },
                  parseOpera11: function (n) {
                    var r = i(
                      n.stack.split("\n"),
                      function (e) {
                        return !!e.match(t) && !e.match(/^Error created at/);
                      },
                      this,
                    );
                    return o(
                      r,
                      function (t) {
                        var n,
                          r = t.split("@"),
                          o = this.extractLocation(r.pop()),
                          i = r.shift() || "",
                          a =
                            i
                              .replace(/<anonymous function(: (\w+))?>/, "$2")
                              .replace(/\([^\)]*\)/g, "") || void 0;
                        i.match(/\(([^\)]*)\)/) &&
                          (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                        var s =
                          void 0 === n || "[arguments not available]" === n
                            ? void 0
                            : n.split(",");
                        return new e(a, s, o[0], o[1], o[2], t);
                      },
                      this,
                    );
                  },
                };
              })
                ? r.apply(t, o)
                : r) || (e.exports = i);
      })();
    },
  "./node_modules/redbox-react/node_modules/stackframe/stackframe.js":
    function (e, t, n) {
      var r, o, i;
      !(function (n, a) {
        "use strict";
        (o = []),
          void 0 ===
            (i =
              "function" ==
              typeof (r = function () {
                function e(e) {
                  return !isNaN(parseFloat(e)) && isFinite(e);
                }
                function t(e, t, n, r, o, i) {
                  void 0 !== e && this.setFunctionName(e),
                    void 0 !== t && this.setArgs(t),
                    void 0 !== n && this.setFileName(n),
                    void 0 !== r && this.setLineNumber(r),
                    void 0 !== o && this.setColumnNumber(o),
                    void 0 !== i && this.setSource(i);
                }
                return (
                  (t.prototype = {
                    getFunctionName: function () {
                      return this.functionName;
                    },
                    setFunctionName: function (e) {
                      this.functionName = String(e);
                    },
                    getArgs: function () {
                      return this.args;
                    },
                    setArgs: function (e) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(e)
                      )
                        throw new TypeError("Args must be an Array");
                      this.args = e;
                    },
                    getFileName: function () {
                      return this.fileName;
                    },
                    setFileName: function (e) {
                      this.fileName = String(e);
                    },
                    getLineNumber: function () {
                      return this.lineNumber;
                    },
                    setLineNumber: function (t) {
                      if (!e(t))
                        throw new TypeError("Line Number must be a Number");
                      this.lineNumber = Number(t);
                    },
                    getColumnNumber: function () {
                      return this.columnNumber;
                    },
                    setColumnNumber: function (t) {
                      if (!e(t))
                        throw new TypeError("Column Number must be a Number");
                      this.columnNumber = Number(t);
                    },
                    getSource: function () {
                      return this.source;
                    },
                    setSource: function (e) {
                      this.source = String(e);
                    },
                    toString: function () {
                      return (
                        (this.getFunctionName() || "{anonymous}") +
                        "(" +
                        (this.getArgs() || []).join(",") +
                        ")" +
                        (this.getFileName() ? "@" + this.getFileName() : "") +
                        (e(this.getLineNumber())
                          ? ":" + this.getLineNumber()
                          : "") +
                        (e(this.getColumnNumber())
                          ? ":" + this.getColumnNumber()
                          : "")
                      );
                    },
                  }),
                  t
                );
              })
                ? r.apply(t, o)
                : r) || (e.exports = i);
      })();
    },
  "./node_modules/remarkable/index.js": function (e, t, n) {
    "use strict";
    e.exports = n("./node_modules/remarkable/lib/index.js");
  },
  "./node_modules/remarkable/lib/common/entities.js": function (e, t, n) {
    "use strict";
    e.exports = {
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      AMP: "&",
      amp: "&",
      And: "⩓",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      ap: "≈",
      apacir: "⩯",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      Barwed: "⌆",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      Because: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxDL: "╗",
      boxDl: "╖",
      boxdL: "╕",
      boxdl: "┐",
      boxDR: "╔",
      boxDr: "╓",
      boxdR: "╒",
      boxdr: "┌",
      boxH: "═",
      boxh: "─",
      boxHD: "╦",
      boxHd: "╤",
      boxhD: "╥",
      boxhd: "┬",
      boxHU: "╩",
      boxHu: "╧",
      boxhU: "╨",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxUL: "╝",
      boxUl: "╜",
      boxuL: "╛",
      boxul: "┘",
      boxUR: "╚",
      boxUr: "╙",
      boxuR: "╘",
      boxur: "└",
      boxV: "║",
      boxv: "│",
      boxVH: "╬",
      boxVh: "╫",
      boxvH: "╪",
      boxvh: "┼",
      boxVL: "╣",
      boxVl: "╢",
      boxvL: "╡",
      boxvl: "┤",
      boxVR: "╠",
      boxVr: "╟",
      boxvR: "╞",
      boxvr: "├",
      bprime: "‵",
      Breve: "˘",
      breve: "˘",
      brvbar: "¦",
      Bscr: "ℬ",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      Cap: "⋒",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      CenterDot: "·",
      centerdot: "·",
      Cfr: "ℭ",
      cfr: "𝔠",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      cir: "○",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      Colon: "∷",
      colon: ":",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      Conint: "∯",
      conint: "∮",
      ContourIntegral: "∮",
      Copf: "ℂ",
      copf: "𝕔",
      coprod: "∐",
      Coproduct: "∐",
      COPY: "©",
      copy: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      Cross: "⨯",
      cross: "✗",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      Cup: "⋓",
      cup: "∪",
      cupbrcap: "⩈",
      CupCap: "≍",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      Dagger: "‡",
      dagger: "†",
      daleth: "ℸ",
      Darr: "↡",
      dArr: "⇓",
      darr: "↓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      DD: "ⅅ",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      Diamond: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      Downarrow: "⇓",
      downarrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      ecir: "≖",
      Ecirc: "Ê",
      ecirc: "ê",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      eDot: "≑",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp: " ",
      emsp13: " ",
      emsp14: " ",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: " ",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      Escr: "ℰ",
      escr: "ℯ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      ExponentialE: "ⅇ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      ForAll: "∀",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      Fscr: "ℱ",
      fscr: "𝒻",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      gE: "≧",
      ge: "≥",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      Gg: "⋙",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gl: "≷",
      gla: "⪥",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gnE: "≩",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      GT: ">",
      Gt: "≫",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      hArr: "⇔",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      Hfr: "ℌ",
      hfr: "𝔥",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      Hopf: "ℍ",
      hopf: "𝕙",
      horbar: "―",
      HorizontalLine: "─",
      Hscr: "ℋ",
      hscr: "𝒽",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      Ifr: "ℑ",
      ifr: "𝔦",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Im: "ℑ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      Int: "∬",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      Iscr: "ℐ",
      iscr: "𝒾",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      Lang: "⟪",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      Larr: "↞",
      lArr: "⇐",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      lAtail: "⤛",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lBarr: "⤎",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      lE: "≦",
      le: "≤",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      Leftarrow: "⇐",
      leftarrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      Ll: "⋘",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lnE: "≨",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftarrow: "⟵",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      Lscr: "ℒ",
      lscr: "𝓁",
      Lsh: "↰",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      LT: "<",
      Lt: "≪",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      Mscr: "ℳ",
      mscr: "𝓂",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      nearhk: "⤤",
      neArr: "⇗",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: "\n",
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlArr: "⇍",
      nlarr: "↚",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nLeftarrow: "⇍",
      nleftarrow: "↚",
      nLeftrightarrow: "⇎",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      nopf: "𝕟",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nRightarrow: "⇏",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvap: "≍⃒",
      nVDash: "⊯",
      nVdash: "⊮",
      nvDash: "⊭",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwArr: "⇖",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      Ocirc: "Ô",
      ocirc: "ô",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      Or: "⩔",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      Otimes: "⨷",
      otimes: "⊗",
      otimesas: "⨶",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      Popf: "ℙ",
      popf: "𝕡",
      pound: "£",
      Pr: "⪻",
      pr: "≺",
      prap: "⪷",
      prcue: "≼",
      prE: "⪳",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      Prime: "″",
      prime: "′",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportion: "∷",
      Proportional: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: " ",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      Qopf: "ℚ",
      qopf: "𝕢",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      QUOT: '"',
      quot: '"',
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      Rang: "⟫",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      Rarr: "↠",
      rArr: "⇒",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      rAtail: "⤜",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      RBarr: "⤐",
      rBarr: "⤏",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      Re: "ℜ",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      REG: "®",
      reg: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      Rfr: "ℜ",
      rfr: "𝔯",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      Rightarrow: "⇒",
      rightarrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      Ropf: "ℝ",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      Rscr: "ℛ",
      rscr: "𝓇",
      Rsh: "↱",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      Sc: "⪼",
      sc: "≻",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      sccue: "≽",
      scE: "⪴",
      sce: "⪰",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      searhk: "⤥",
      seArr: "⇘",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      Square: "□",
      square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      Sub: "⋐",
      sub: "⊂",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      Subset: "⋐",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      Sum: "∑",
      sum: "∑",
      sung: "♪",
      Sup: "⋑",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      Supset: "⋑",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swArr: "⇙",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "\t",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      Therefore: "∴",
      therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "  ",
      thinsp: " ",
      ThinSpace: " ",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      Tilde: "∼",
      tilde: "˜",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      TRADE: "™",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      Uarr: "↟",
      uArr: "⇑",
      uarr: "↑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrow: "↑",
      Uparrow: "⇑",
      uparrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      updownarrow: "↕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      upsi: "υ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      vArr: "⇕",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      Vbar: "⫫",
      vBar: "⫨",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      VDash: "⊫",
      Vdash: "⊩",
      vDash: "⊨",
      vdash: "⊢",
      Vdashl: "⫦",
      Vee: "⋁",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      Verbar: "‖",
      verbar: "|",
      Vert: "‖",
      vert: "|",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      Wedge: "⋀",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      Xi: "Ξ",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      Yuml: "Ÿ",
      yuml: "ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      Zfr: "ℨ",
      zfr: "𝔷",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      Zopf: "ℤ",
      zopf: "𝕫",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌",
    };
  },
  "./node_modules/remarkable/lib/common/html_blocks.js": function (e, t, n) {
    "use strict";
    var r = {};
    [
      "article",
      "aside",
      "button",
      "blockquote",
      "body",
      "canvas",
      "caption",
      "col",
      "colgroup",
      "dd",
      "div",
      "dl",
      "dt",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "iframe",
      "li",
      "map",
      "object",
      "ol",
      "output",
      "p",
      "pre",
      "progress",
      "script",
      "section",
      "style",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "tr",
      "thead",
      "ul",
      "video",
    ].forEach(function (e) {
      r[e] = !0;
    }),
      (e.exports = r);
  },
  "./node_modules/remarkable/lib/common/html_re.js": function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = e.source),
        (t = t || ""),
        function n(r, o) {
          return r
            ? ((o = o.source || o), (e = e.replace(r, o)), n)
            : new RegExp(e, t);
        }
      );
    }
    var o = r(/(?:unquoted|single_quoted|double_quoted)/)(
        "unquoted",
        /[^"'=<>`\x00-\x20]+/,
      )("single_quoted", /'[^']*'/)("double_quoted", /"[^"]*"/)(),
      i = r(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)(
        "attr_name",
        /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
      )("attr_value", o)(),
      a = r(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", i)(),
      s = r(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)(
        "open_tag",
        a,
      )("close_tag", /<\/[A-Za-z][A-Za-z0-9]*\s*>/)(
        "comment",
        /<!--([^-]+|[-][^-]+)*-->/,
      )("processing", /<[?].*?[?]>/)("declaration", /<![A-Z]+\s+[^>]*>/)(
        "cdata",
        /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,
      )();
    e.exports.HTML_TAG_RE = s;
  },
  "./node_modules/remarkable/lib/common/url_schemas.js": function (e, t, n) {
    "use strict";
    e.exports = [
      "coap",
      "doi",
      "javascript",
      "aaa",
      "aaas",
      "about",
      "acap",
      "cap",
      "cid",
      "crid",
      "data",
      "dav",
      "dict",
      "dns",
      "file",
      "ftp",
      "geo",
      "go",
      "gopher",
      "h323",
      "http",
      "https",
      "iax",
      "icap",
      "im",
      "imap",
      "info",
      "ipp",
      "iris",
      "iris.beep",
      "iris.xpc",
      "iris.xpcs",
      "iris.lwz",
      "ldap",
      "mailto",
      "mid",
      "msrp",
      "msrps",
      "mtqp",
      "mupdate",
      "news",
      "nfs",
      "ni",
      "nih",
      "nntp",
      "opaquelocktoken",
      "pop",
      "pres",
      "rtsp",
      "service",
      "session",
      "shttp",
      "sieve",
      "sip",
      "sips",
      "sms",
      "snmp",
      "soap.beep",
      "soap.beeps",
      "tag",
      "tel",
      "telnet",
      "tftp",
      "thismessage",
      "tn3270",
      "tip",
      "tv",
      "urn",
      "vemmi",
      "ws",
      "wss",
      "xcon",
      "xcon-userid",
      "xmlrpc.beep",
      "xmlrpc.beeps",
      "xmpp",
      "z39.50r",
      "z39.50s",
      "adiumxtra",
      "afp",
      "afs",
      "aim",
      "apt",
      "attachment",
      "aw",
      "beshare",
      "bitcoin",
      "bolo",
      "callto",
      "chrome",
      "chrome-extension",
      "com-eventbrite-attendee",
      "content",
      "cvs",
      "dlna-playsingle",
      "dlna-playcontainer",
      "dtn",
      "dvb",
      "ed2k",
      "facetime",
      "feed",
      "finger",
      "fish",
      "gg",
      "git",
      "gizmoproject",
      "gtalk",
      "hcp",
      "icon",
      "ipn",
      "irc",
      "irc6",
      "ircs",
      "itms",
      "jar",
      "jms",
      "keyparc",
      "lastfm",
      "ldaps",
      "magnet",
      "maps",
      "market",
      "message",
      "mms",
      "ms-help",
      "msnim",
      "mumble",
      "mvn",
      "notes",
      "oid",
      "palm",
      "paparazzi",
      "platform",
      "proxy",
      "psyc",
      "query",
      "res",
      "resource",
      "rmi",
      "rsync",
      "rtmp",
      "secondlife",
      "sftp",
      "sgn",
      "skype",
      "smb",
      "soldat",
      "spotify",
      "ssh",
      "steam",
      "svn",
      "teamspeak",
      "things",
      "udp",
      "unreal",
      "ut2004",
      "ventrilo",
      "view-source",
      "webcal",
      "wtai",
      "wyciwyg",
      "xfire",
      "xri",
      "ymsgr",
    ];
  },
  "./node_modules/remarkable/lib/common/utils.js": function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function o(e, t) {
      return !!e && r.call(e, t);
    }
    var i = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    function a(e) {
      return (
        !(e >= 55296 && e <= 57343) &&
        !(e >= 64976 && e <= 65007) &&
        65535 != (65535 & e) &&
        65534 != (65535 & e) &&
        !(e >= 0 && e <= 8) &&
        11 !== e &&
        !(e >= 14 && e <= 31) &&
        !(e >= 127 && e <= 159) &&
        !(e > 1114111)
      );
    }
    function s(e) {
      if (e > 65535) {
        var t = 55296 + ((e -= 65536) >> 10),
          n = 56320 + (1023 & e);
        return String.fromCharCode(t, n);
      }
      return String.fromCharCode(e);
    }
    var l = /&([a-z#][a-z0-9]{1,31});/gi,
      c = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
      u = n("./node_modules/remarkable/lib/common/entities.js");
    function p(e, t) {
      var n = 0;
      return o(u, t)
        ? u[t]
        : 35 === t.charCodeAt(0) &&
            c.test(t) &&
            a(
              (n =
                "x" === t[1].toLowerCase()
                  ? parseInt(t.slice(2), 16)
                  : parseInt(t.slice(1), 10)),
            )
          ? s(n)
          : e;
    }
    var d = /[&<>"]/,
      f = /[&<>"]/g,
      m = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
    function h(e) {
      return m[e];
    }
    (t.assign = function (e) {
      return (
        [].slice.call(arguments, 1).forEach(function (t) {
          if (t) {
            if ("object" != typeof t) throw new TypeError(t + "must be object");
            Object.keys(t).forEach(function (n) {
              e[n] = t[n];
            });
          }
        }),
        e
      );
    }),
      (t.isString = function (e) {
        return (
          "[object String]" ===
          (function (e) {
            return Object.prototype.toString.call(e);
          })(e)
        );
      }),
      (t.has = o),
      (t.unescapeMd = function (e) {
        return e.indexOf("\\") < 0 ? e : e.replace(i, "$1");
      }),
      (t.isValidEntityCode = a),
      (t.fromCodePoint = s),
      (t.replaceEntities = function (e) {
        return e.indexOf("&") < 0 ? e : e.replace(l, p);
      }),
      (t.escapeHtml = function (e) {
        return d.test(e) ? e.replace(f, h) : e;
      });
  },
  "./node_modules/remarkable/lib/configs/commonmark.js": function (e, t, n) {
    "use strict";
    e.exports = {
      options: {
        html: !0,
        xhtmlOut: !0,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        linkTarget: "",
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20,
      },
      components: {
        core: { rules: ["block", "inline", "references", "abbr2"] },
        block: {
          rules: [
            "blockquote",
            "code",
            "fences",
            "heading",
            "hr",
            "htmlblock",
            "lheading",
            "list",
            "paragraph",
          ],
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "htmltag",
            "links",
            "newline",
            "text",
          ],
        },
      },
    };
  },
  "./node_modules/remarkable/lib/configs/default.js": function (e, t, n) {
    "use strict";
    e.exports = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        linkTarget: "",
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20,
      },
      components: {
        core: {
          rules: [
            "block",
            "inline",
            "references",
            "replacements",
            "linkify",
            "smartquotes",
            "references",
            "abbr2",
            "footnote_tail",
          ],
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fences",
            "footnote",
            "heading",
            "hr",
            "htmlblock",
            "lheading",
            "list",
            "paragraph",
            "table",
          ],
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "del",
            "emphasis",
            "entity",
            "escape",
            "footnote_ref",
            "htmltag",
            "links",
            "newline",
            "text",
          ],
        },
      },
    };
  },
  "./node_modules/remarkable/lib/configs/full.js": function (e, t, n) {
    "use strict";
    e.exports = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        linkTarget: "",
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20,
      },
      components: { core: {}, block: {}, inline: {} },
    };
  },
  "./node_modules/remarkable/lib/helpers/normalize_link.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/utils.js").replaceEntities;
    e.exports = function (e) {
      var t = r(e);
      try {
        t = decodeURI(t);
      } catch (e) {}
      return encodeURI(t);
    };
  },
  "./node_modules/remarkable/lib/helpers/normalize_reference.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e) {
      return e.trim().replace(/\s+/g, " ").toUpperCase();
    };
  },
  "./node_modules/remarkable/lib/helpers/parse_link_destination.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/helpers/normalize_link.js"),
      o = n("./node_modules/remarkable/lib/common/utils.js").unescapeMd;
    e.exports = function (e, t) {
      var n,
        i,
        a,
        s = t,
        l = e.posMax;
      if (60 === e.src.charCodeAt(t)) {
        for (t++; t < l; ) {
          if (10 === (n = e.src.charCodeAt(t))) return !1;
          if (62 === n)
            return (
              (a = r(o(e.src.slice(s + 1, t)))),
              !!e.parser.validateLink(a) &&
                ((e.pos = t + 1), (e.linkContent = a), !0)
            );
          92 === n && t + 1 < l ? (t += 2) : t++;
        }
        return !1;
      }
      for (
        i = 0;
        t < l && 32 !== (n = e.src.charCodeAt(t)) && !(n > 8 && n < 14);

      )
        if (92 === n && t + 1 < l) t += 2;
        else {
          if (40 === n && ++i > 1) break;
          if (41 === n && --i < 0) break;
          t++;
        }
      return (
        s !== t &&
        ((a = o(e.src.slice(s, t))),
        !!e.parser.validateLink(a) && ((e.linkContent = a), (e.pos = t), !0))
      );
    };
  },
  "./node_modules/remarkable/lib/helpers/parse_link_label.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i = -1,
        a = e.posMax,
        s = e.pos,
        l = e.isInLabel;
      if (e.isInLabel) return -1;
      if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
      for (e.pos = t + 1, e.isInLabel = !0, n = 1; e.pos < a; ) {
        if (91 === (o = e.src.charCodeAt(e.pos))) n++;
        else if (93 === o && 0 === --n) {
          r = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return (
        r
          ? ((i = e.pos), (e.labelUnmatchedScopes = 0))
          : (e.labelUnmatchedScopes = n - 1),
        (e.pos = s),
        (e.isInLabel = l),
        i
      );
    };
  },
  "./node_modules/remarkable/lib/helpers/parse_link_title.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/utils.js").unescapeMd;
    e.exports = function (e, t) {
      var n,
        o = t,
        i = e.posMax,
        a = e.src.charCodeAt(t);
      if (34 !== a && 39 !== a && 40 !== a) return !1;
      for (t++, 40 === a && (a = 41); t < i; ) {
        if ((n = e.src.charCodeAt(t)) === a)
          return (
            (e.pos = t + 1), (e.linkContent = r(e.src.slice(o + 1, t))), !0
          );
        92 === n && t + 1 < i ? (t += 2) : t++;
      }
      return !1;
    };
  },
  "./node_modules/remarkable/lib/index.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/utils.js").assign,
      o = n("./node_modules/remarkable/lib/renderer.js"),
      i = n("./node_modules/remarkable/lib/parser_core.js"),
      a = n("./node_modules/remarkable/lib/parser_block.js"),
      s = n("./node_modules/remarkable/lib/parser_inline.js"),
      l = n("./node_modules/remarkable/lib/ruler.js"),
      c = {
        default: n("./node_modules/remarkable/lib/configs/default.js"),
        full: n("./node_modules/remarkable/lib/configs/full.js"),
        commonmark: n("./node_modules/remarkable/lib/configs/commonmark.js"),
      };
    function u(e, t, n) {
      (this.src = t),
        (this.env = n),
        (this.options = e.options),
        (this.tokens = []),
        (this.inlineMode = !1),
        (this.inline = e.inline),
        (this.block = e.block),
        (this.renderer = e.renderer),
        (this.typographer = e.typographer);
    }
    function p(e, t) {
      "string" != typeof e && ((t = e), (e = "default")),
        (this.inline = new s()),
        (this.block = new a()),
        (this.core = new i()),
        (this.renderer = new o()),
        (this.ruler = new l()),
        (this.options = {}),
        this.configure(c[e]),
        this.set(t || {});
    }
    (p.prototype.set = function (e) {
      r(this.options, e);
    }),
      (p.prototype.configure = function (e) {
        var t = this;
        if (!e)
          throw new Error("Wrong `remarkable` preset, check name/content");
        e.options && t.set(e.options),
          e.components &&
            Object.keys(e.components).forEach(function (n) {
              e.components[n].rules &&
                t[n].ruler.enable(e.components[n].rules, !0);
            });
      }),
      (p.prototype.use = function (e, t) {
        return e(this, t), this;
      }),
      (p.prototype.parse = function (e, t) {
        var n = new u(this, e, t);
        return this.core.process(n), n.tokens;
      }),
      (p.prototype.render = function (e, t) {
        return (
          (t = t || {}), this.renderer.render(this.parse(e, t), this.options, t)
        );
      }),
      (p.prototype.parseInline = function (e, t) {
        var n = new u(this, e, t);
        return (n.inlineMode = !0), this.core.process(n), n.tokens;
      }),
      (p.prototype.renderInline = function (e, t) {
        return (
          (t = t || {}),
          this.renderer.render(this.parseInline(e, t), this.options, t)
        );
      }),
      (e.exports = p),
      (e.exports.utils = n("./node_modules/remarkable/lib/common/utils.js"));
  },
  "./node_modules/remarkable/lib/parser_block.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/ruler.js"),
      o = n("./node_modules/remarkable/lib/rules_block/state_block.js"),
      i = [
        ["code", n("./node_modules/remarkable/lib/rules_block/code.js")],
        [
          "fences",
          n("./node_modules/remarkable/lib/rules_block/fences.js"),
          ["paragraph", "blockquote", "list"],
        ],
        [
          "blockquote",
          n("./node_modules/remarkable/lib/rules_block/blockquote.js"),
          ["paragraph", "blockquote", "list"],
        ],
        [
          "hr",
          n("./node_modules/remarkable/lib/rules_block/hr.js"),
          ["paragraph", "blockquote", "list"],
        ],
        [
          "list",
          n("./node_modules/remarkable/lib/rules_block/list.js"),
          ["paragraph", "blockquote"],
        ],
        [
          "footnote",
          n("./node_modules/remarkable/lib/rules_block/footnote.js"),
          ["paragraph"],
        ],
        [
          "heading",
          n("./node_modules/remarkable/lib/rules_block/heading.js"),
          ["paragraph", "blockquote"],
        ],
        [
          "lheading",
          n("./node_modules/remarkable/lib/rules_block/lheading.js"),
        ],
        [
          "htmlblock",
          n("./node_modules/remarkable/lib/rules_block/htmlblock.js"),
          ["paragraph", "blockquote"],
        ],
        [
          "table",
          n("./node_modules/remarkable/lib/rules_block/table.js"),
          ["paragraph"],
        ],
        [
          "deflist",
          n("./node_modules/remarkable/lib/rules_block/deflist.js"),
          ["paragraph"],
        ],
        [
          "paragraph",
          n("./node_modules/remarkable/lib/rules_block/paragraph.js"),
        ],
      ];
    function a() {
      this.ruler = new r();
      for (var e = 0; e < i.length; e++)
        this.ruler.push(i[e][0], i[e][1], { alt: (i[e][2] || []).slice() });
    }
    a.prototype.tokenize = function (e, t, n) {
      for (
        var r, o = this.ruler.getRules(""), i = o.length, a = t, s = !1;
        a < n &&
        ((e.line = a = e.skipEmptyLines(a)), !(a >= n)) &&
        !(e.tShift[a] < e.blkIndent);

      ) {
        for (r = 0; r < i && !o[r](e, a, n, !1); r++);
        if (
          ((e.tight = !s),
          e.isEmpty(e.line - 1) && (s = !0),
          (a = e.line) < n && e.isEmpty(a))
        ) {
          if (((s = !0), ++a < n && "list" === e.parentType && e.isEmpty(a)))
            break;
          e.line = a;
        }
      }
    };
    var s = /[\n\t]/g,
      l = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
      c = /\u00a0/g;
    (a.prototype.parse = function (e, t, n, r) {
      var i,
        a = 0,
        u = 0;
      if (!e) return [];
      (e = (e = e.replace(c, " ")).replace(l, "\n")).indexOf("\t") >= 0 &&
        (e = e.replace(s, function (t, n) {
          var r;
          return 10 === e.charCodeAt(n)
            ? ((a = n + 1), (u = 0), t)
            : ((r = "    ".slice((n - a - u) % 4)), (u = n - a + 1), r);
        })),
        (i = new o(e, this, t, n, r)),
        this.tokenize(i, i.line, i.lineMax);
    }),
      (e.exports = a);
  },
  "./node_modules/remarkable/lib/parser_core.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/ruler.js"),
      o = [
        ["block", n("./node_modules/remarkable/lib/rules_core/block.js")],
        ["abbr", n("./node_modules/remarkable/lib/rules_core/abbr.js")],
        [
          "references",
          n("./node_modules/remarkable/lib/rules_core/references.js"),
        ],
        ["inline", n("./node_modules/remarkable/lib/rules_core/inline.js")],
        [
          "footnote_tail",
          n("./node_modules/remarkable/lib/rules_core/footnote_tail.js"),
        ],
        ["abbr2", n("./node_modules/remarkable/lib/rules_core/abbr2.js")],
        [
          "replacements",
          n("./node_modules/remarkable/lib/rules_core/replacements.js"),
        ],
        [
          "smartquotes",
          n("./node_modules/remarkable/lib/rules_core/smartquotes.js"),
        ],
        ["linkify", n("./node_modules/remarkable/lib/rules_core/linkify.js")],
      ];
    function i() {
      (this.options = {}), (this.ruler = new r());
      for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
    }
    (i.prototype.process = function (e) {
      var t, n, r;
      for (t = 0, n = (r = this.ruler.getRules("")).length; t < n; t++) r[t](e);
    }),
      (e.exports = i);
  },
  "./node_modules/remarkable/lib/parser_inline.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/ruler.js"),
      o = n("./node_modules/remarkable/lib/rules_inline/state_inline.js"),
      i = n("./node_modules/remarkable/lib/common/utils.js"),
      a = [
        ["text", n("./node_modules/remarkable/lib/rules_inline/text.js")],
        ["newline", n("./node_modules/remarkable/lib/rules_inline/newline.js")],
        ["escape", n("./node_modules/remarkable/lib/rules_inline/escape.js")],
        [
          "backticks",
          n("./node_modules/remarkable/lib/rules_inline/backticks.js"),
        ],
        ["del", n("./node_modules/remarkable/lib/rules_inline/del.js")],
        ["ins", n("./node_modules/remarkable/lib/rules_inline/ins.js")],
        ["mark", n("./node_modules/remarkable/lib/rules_inline/mark.js")],
        [
          "emphasis",
          n("./node_modules/remarkable/lib/rules_inline/emphasis.js"),
        ],
        ["sub", n("./node_modules/remarkable/lib/rules_inline/sub.js")],
        ["sup", n("./node_modules/remarkable/lib/rules_inline/sup.js")],
        ["links", n("./node_modules/remarkable/lib/rules_inline/links.js")],
        [
          "footnote_inline",
          n("./node_modules/remarkable/lib/rules_inline/footnote_inline.js"),
        ],
        [
          "footnote_ref",
          n("./node_modules/remarkable/lib/rules_inline/footnote_ref.js"),
        ],
        [
          "autolink",
          n("./node_modules/remarkable/lib/rules_inline/autolink.js"),
        ],
        ["htmltag", n("./node_modules/remarkable/lib/rules_inline/htmltag.js")],
        ["entity", n("./node_modules/remarkable/lib/rules_inline/entity.js")],
      ];
    function s() {
      this.ruler = new r();
      for (var e = 0; e < a.length; e++) this.ruler.push(a[e][0], a[e][1]);
      this.validateLink = l;
    }
    function l(e) {
      var t = e.trim().toLowerCase();
      return (
        -1 === (t = i.replaceEntities(t)).indexOf(":") ||
        -1 ===
          ["vbscript", "javascript", "file", "data"].indexOf(t.split(":")[0])
      );
    }
    (s.prototype.skipToken = function (e) {
      var t,
        n,
        r = this.ruler.getRules(""),
        o = r.length,
        i = e.pos;
      if ((n = e.cacheGet(i)) > 0) e.pos = n;
      else {
        for (t = 0; t < o; t++)
          if (r[t](e, !0)) return void e.cacheSet(i, e.pos);
        e.pos++, e.cacheSet(i, e.pos);
      }
    }),
      (s.prototype.tokenize = function (e) {
        for (
          var t, n, r = this.ruler.getRules(""), o = r.length, i = e.posMax;
          e.pos < i;

        ) {
          for (n = 0; n < o && !(t = r[n](e, !1)); n++);
          if (t) {
            if (e.pos >= i) break;
          } else e.pending += e.src[e.pos++];
        }
        e.pending && e.pushPending();
      }),
      (s.prototype.parse = function (e, t, n, r) {
        var i = new o(e, this, t, n, r);
        this.tokenize(i);
      }),
      (e.exports = s);
  },
  "./node_modules/remarkable/lib/renderer.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/utils.js"),
      o = n("./node_modules/remarkable/lib/rules.js");
    function i() {
      (this.rules = r.assign({}, o)), (this.getBreak = o.getBreak);
    }
    (e.exports = i),
      (i.prototype.renderInline = function (e, t, n) {
        for (var r = this.rules, o = e.length, i = 0, a = ""; o--; )
          a += r[e[i].type](e, i++, t, n, this);
        return a;
      }),
      (i.prototype.render = function (e, t, n) {
        for (var r = this.rules, o = e.length, i = -1, a = ""; ++i < o; )
          "inline" === e[i].type
            ? (a += this.renderInline(e[i].children, t, n))
            : (a += r[e[i].type](e, i, t, n, this));
        return a;
      });
  },
  "./node_modules/remarkable/lib/ruler.js": function (e, t, n) {
    "use strict";
    function r() {
      (this.__rules__ = []), (this.__cache__ = null);
    }
    (r.prototype.__find__ = function (e) {
      for (var t = this.__rules__.length, n = -1; t--; )
        if (this.__rules__[++n].name === e) return n;
      return -1;
    }),
      (r.prototype.__compile__ = function () {
        var e = this,
          t = [""];
        e.__rules__.forEach(function (e) {
          e.enabled &&
            e.alt.forEach(function (e) {
              t.indexOf(e) < 0 && t.push(e);
            });
        }),
          (e.__cache__ = {}),
          t.forEach(function (t) {
            (e.__cache__[t] = []),
              e.__rules__.forEach(function (n) {
                n.enabled &&
                  ((t && n.alt.indexOf(t) < 0) || e.__cache__[t].push(n.fn));
              });
          });
      }),
      (r.prototype.at = function (e, t, n) {
        var r = this.__find__(e),
          o = n || {};
        if (-1 === r) throw new Error("Parser rule not found: " + e);
        (this.__rules__[r].fn = t),
          (this.__rules__[r].alt = o.alt || []),
          (this.__cache__ = null);
      }),
      (r.prototype.before = function (e, t, n, r) {
        var o = this.__find__(e),
          i = r || {};
        if (-1 === o) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(o, 0, {
          name: t,
          enabled: !0,
          fn: n,
          alt: i.alt || [],
        }),
          (this.__cache__ = null);
      }),
      (r.prototype.after = function (e, t, n, r) {
        var o = this.__find__(e),
          i = r || {};
        if (-1 === o) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(o + 1, 0, {
          name: t,
          enabled: !0,
          fn: n,
          alt: i.alt || [],
        }),
          (this.__cache__ = null);
      }),
      (r.prototype.push = function (e, t, n) {
        var r = n || {};
        this.__rules__.push({ name: e, enabled: !0, fn: t, alt: r.alt || [] }),
          (this.__cache__ = null);
      }),
      (r.prototype.enable = function (e, t) {
        (e = Array.isArray(e) ? e : [e]),
          t &&
            this.__rules__.forEach(function (e) {
              e.enabled = !1;
            }),
          e.forEach(function (e) {
            var t = this.__find__(e);
            if (t < 0) throw new Error("Rules manager: invalid rule name " + e);
            this.__rules__[t].enabled = !0;
          }, this),
          (this.__cache__ = null);
      }),
      (r.prototype.disable = function (e) {
        (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
          var t = this.__find__(e);
          if (t < 0) throw new Error("Rules manager: invalid rule name " + e);
          this.__rules__[t].enabled = !1;
        }, this),
          (this.__cache__ = null);
      }),
      (r.prototype.getRules = function (e) {
        return (
          null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
        );
      }),
      (e.exports = r);
  },
  "./node_modules/remarkable/lib/rules.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/utils.js").has,
      o = n("./node_modules/remarkable/lib/common/utils.js").unescapeMd,
      i = n("./node_modules/remarkable/lib/common/utils.js").replaceEntities,
      a = n("./node_modules/remarkable/lib/common/utils.js").escapeHtml,
      s = {};
    (s.blockquote_open = function () {
      return "<blockquote>\n";
    }),
      (s.blockquote_close = function (e, t) {
        return "</blockquote>" + l(e, t);
      }),
      (s.code = function (e, t) {
        return e[t].block
          ? "<pre><code>" + a(e[t].content) + "</code></pre>" + l(e, t)
          : "<code>" + a(e[t].content) + "</code>";
      }),
      (s.fence = function (e, t, n, s, c) {
        var u,
          p,
          d = e[t],
          f = "",
          m = n.langPrefix;
        if (d.params) {
          if (
            ((p = (u = d.params.split(/\s+/g)).join(" ")),
            r(c.rules.fence_custom, u[0]))
          )
            return c.rules.fence_custom[u[0]](e, t, n, s, c);
          f = ' class="' + m + a(i(o(p))) + '"';
        }
        return (
          "<pre><code" +
          f +
          ">" +
          ((n.highlight &&
            n.highlight.apply(n.highlight, [d.content].concat(u))) ||
            a(d.content)) +
          "</code></pre>" +
          l(e, t)
        );
      }),
      (s.fence_custom = {}),
      (s.heading_open = function (e, t) {
        return "<h" + e[t].hLevel + ">";
      }),
      (s.heading_close = function (e, t) {
        return "</h" + e[t].hLevel + ">\n";
      }),
      (s.hr = function (e, t, n) {
        return (n.xhtmlOut ? "<hr />" : "<hr>") + l(e, t);
      }),
      (s.bullet_list_open = function () {
        return "<ul>\n";
      }),
      (s.bullet_list_close = function (e, t) {
        return "</ul>" + l(e, t);
      }),
      (s.list_item_open = function () {
        return "<li>";
      }),
      (s.list_item_close = function () {
        return "</li>\n";
      }),
      (s.ordered_list_open = function (e, t) {
        var n = e[t];
        return "<ol" + (n.order > 1 ? ' start="' + n.order + '"' : "") + ">\n";
      }),
      (s.ordered_list_close = function (e, t) {
        return "</ol>" + l(e, t);
      }),
      (s.paragraph_open = function (e, t) {
        return e[t].tight ? "" : "<p>";
      }),
      (s.paragraph_close = function (e, t) {
        var n = !(
          e[t].tight &&
          t &&
          "inline" === e[t - 1].type &&
          !e[t - 1].content
        );
        return (e[t].tight ? "" : "</p>") + (n ? l(e, t) : "");
      }),
      (s.link_open = function (e, t, n) {
        var r = e[t].title ? ' title="' + a(i(e[t].title)) + '"' : "",
          o = n.linkTarget ? ' target="' + n.linkTarget + '"' : "";
        return '<a href="' + a(e[t].href) + '"' + r + o + ">";
      }),
      (s.link_close = function () {
        return "</a>";
      }),
      (s.image = function (e, t, n) {
        var r = ' src="' + a(e[t].src) + '"',
          s = e[t].title ? ' title="' + a(i(e[t].title)) + '"' : "";
        return (
          "<img" +
          r +
          (' alt="' + (e[t].alt ? a(i(o(e[t].alt))) : "") + '"') +
          s +
          (n.xhtmlOut ? " /" : "") +
          ">"
        );
      }),
      (s.table_open = function () {
        return "<table>\n";
      }),
      (s.table_close = function () {
        return "</table>\n";
      }),
      (s.thead_open = function () {
        return "<thead>\n";
      }),
      (s.thead_close = function () {
        return "</thead>\n";
      }),
      (s.tbody_open = function () {
        return "<tbody>\n";
      }),
      (s.tbody_close = function () {
        return "</tbody>\n";
      }),
      (s.tr_open = function () {
        return "<tr>";
      }),
      (s.tr_close = function () {
        return "</tr>\n";
      }),
      (s.th_open = function (e, t) {
        var n = e[t];
        return (
          "<th" + (n.align ? ' style="text-align:' + n.align + '"' : "") + ">"
        );
      }),
      (s.th_close = function () {
        return "</th>";
      }),
      (s.td_open = function (e, t) {
        var n = e[t];
        return (
          "<td" + (n.align ? ' style="text-align:' + n.align + '"' : "") + ">"
        );
      }),
      (s.td_close = function () {
        return "</td>";
      }),
      (s.strong_open = function () {
        return "<strong>";
      }),
      (s.strong_close = function () {
        return "</strong>";
      }),
      (s.em_open = function () {
        return "<em>";
      }),
      (s.em_close = function () {
        return "</em>";
      }),
      (s.del_open = function () {
        return "<del>";
      }),
      (s.del_close = function () {
        return "</del>";
      }),
      (s.ins_open = function () {
        return "<ins>";
      }),
      (s.ins_close = function () {
        return "</ins>";
      }),
      (s.mark_open = function () {
        return "<mark>";
      }),
      (s.mark_close = function () {
        return "</mark>";
      }),
      (s.sub = function (e, t) {
        return "<sub>" + a(e[t].content) + "</sub>";
      }),
      (s.sup = function (e, t) {
        return "<sup>" + a(e[t].content) + "</sup>";
      }),
      (s.hardbreak = function (e, t, n) {
        return n.xhtmlOut ? "<br />\n" : "<br>\n";
      }),
      (s.softbreak = function (e, t, n) {
        return n.breaks ? (n.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
      }),
      (s.text = function (e, t) {
        return a(e[t].content);
      }),
      (s.htmlblock = function (e, t) {
        return e[t].content;
      }),
      (s.htmltag = function (e, t) {
        return e[t].content;
      }),
      (s.abbr_open = function (e, t) {
        return '<abbr title="' + a(i(e[t].title)) + '">';
      }),
      (s.abbr_close = function () {
        return "</abbr>";
      }),
      (s.footnote_ref = function (e, t) {
        var n = Number(e[t].id + 1).toString(),
          r = "fnref" + n;
        return (
          e[t].subId > 0 && (r += ":" + e[t].subId),
          '<sup class="footnote-ref"><a href="#fn' +
            n +
            '" id="' +
            r +
            '">[' +
            n +
            "]</a></sup>"
        );
      }),
      (s.footnote_block_open = function (e, t, n) {
        return (
          (n.xhtmlOut
            ? '<hr class="footnotes-sep" />\n'
            : '<hr class="footnotes-sep">\n') +
          '<section class="footnotes">\n<ol class="footnotes-list">\n'
        );
      }),
      (s.footnote_block_close = function () {
        return "</ol>\n</section>\n";
      }),
      (s.footnote_open = function (e, t) {
        return (
          '<li id="fn' +
          Number(e[t].id + 1).toString() +
          '"  class="footnote-item">'
        );
      }),
      (s.footnote_close = function () {
        return "</li>\n";
      }),
      (s.footnote_anchor = function (e, t) {
        var n = "fnref" + Number(e[t].id + 1).toString();
        return (
          e[t].subId > 0 && (n += ":" + e[t].subId),
          ' <a href="#' + n + '" class="footnote-backref">↩</a>'
        );
      }),
      (s.dl_open = function () {
        return "<dl>\n";
      }),
      (s.dt_open = function () {
        return "<dt>";
      }),
      (s.dd_open = function () {
        return "<dd>";
      }),
      (s.dl_close = function () {
        return "</dl>\n";
      }),
      (s.dt_close = function () {
        return "</dt>\n";
      }),
      (s.dd_close = function () {
        return "</dd>\n";
      });
    var l = (s.getBreak = function (e, t) {
      return (t = (function e(t, n) {
        return ++n >= t.length - 2
          ? n
          : "paragraph_open" === t[n].type &&
              t[n].tight &&
              "inline" === t[n + 1].type &&
              0 === t[n + 1].content.length &&
              "paragraph_close" === t[n + 2].type &&
              t[n + 2].tight
            ? e(t, n + 2)
            : n;
      })(e, t)) < e.length && "list_item_close" === e[t].type
        ? ""
        : "\n";
    });
    e.exports = s;
  },
  "./node_modules/remarkable/lib/rules_block/blockquote.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e, t, n, r) {
      var o,
        i,
        a,
        s,
        l,
        c,
        u,
        p,
        d,
        f,
        m,
        h = e.bMarks[t] + e.tShift[t],
        g = e.eMarks[t];
      if (h > g) return !1;
      if (62 !== e.src.charCodeAt(h++)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      if (r) return !0;
      for (
        32 === e.src.charCodeAt(h) && h++,
          l = e.blkIndent,
          e.blkIndent = 0,
          s = [e.bMarks[t]],
          e.bMarks[t] = h,
          i = (h = h < g ? e.skipSpaces(h) : h) >= g,
          a = [e.tShift[t]],
          e.tShift[t] = h - e.bMarks[t],
          p = e.parser.ruler.getRules("blockquote"),
          o = t + 1;
        o < n && !((h = e.bMarks[o] + e.tShift[o]) >= (g = e.eMarks[o]));
        o++
      )
        if (62 !== e.src.charCodeAt(h++)) {
          if (i) break;
          for (m = !1, d = 0, f = p.length; d < f; d++)
            if (p[d](e, o, n, !0)) {
              m = !0;
              break;
            }
          if (m) break;
          s.push(e.bMarks[o]), a.push(e.tShift[o]), (e.tShift[o] = -1337);
        } else
          32 === e.src.charCodeAt(h) && h++,
            s.push(e.bMarks[o]),
            (e.bMarks[o] = h),
            (i = (h = h < g ? e.skipSpaces(h) : h) >= g),
            a.push(e.tShift[o]),
            (e.tShift[o] = h - e.bMarks[o]);
      for (
        c = e.parentType,
          e.parentType = "blockquote",
          e.tokens.push({
            type: "blockquote_open",
            lines: (u = [t, 0]),
            level: e.level++,
          }),
          e.parser.tokenize(e, t, o),
          e.tokens.push({ type: "blockquote_close", level: --e.level }),
          e.parentType = c,
          u[1] = e.line,
          d = 0;
        d < a.length;
        d++
      )
        (e.bMarks[d + t] = s[d]), (e.tShift[d + t] = a[d]);
      return (e.blkIndent = l), !0;
    };
  },
  "./node_modules/remarkable/lib/rules_block/code.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      var r, o;
      if (e.tShift[t] - e.blkIndent < 4) return !1;
      for (o = r = t + 1; r < n; )
        if (e.isEmpty(r)) r++;
        else {
          if (!(e.tShift[r] - e.blkIndent >= 4)) break;
          o = ++r;
        }
      return (
        (e.line = r),
        e.tokens.push({
          type: "code",
          content: e.getLines(t, o, 4 + e.blkIndent, !0),
          block: !0,
          lines: [t, e.line],
          level: e.level,
        }),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/deflist.js": function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n,
        r,
        o = e.bMarks[t] + e.tShift[t],
        i = e.eMarks[t];
      return o >= i
        ? -1
        : 126 !== (r = e.src.charCodeAt(o++)) && 58 !== r
          ? -1
          : o === (n = e.skipSpaces(o))
            ? -1
            : n >= i
              ? -1
              : n;
    }
    e.exports = function (e, t, n, o) {
      var i, a, s, l, c, u, p, d, f, m, h, g, b, y;
      if (o) return !(e.ddIndent < 0) && r(e, t) >= 0;
      if (((p = t + 1), e.isEmpty(p) && ++p > n)) return !1;
      if (e.tShift[p] < e.blkIndent) return !1;
      if ((i = r(e, p)) < 0) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      (u = e.tokens.length),
        e.tokens.push({
          type: "dl_open",
          lines: (c = [t, 0]),
          level: e.level++,
        }),
        (s = t),
        (a = p);
      e: for (;;) {
        for (
          y = !0,
            b = !1,
            e.tokens.push({ type: "dt_open", lines: [s, s], level: e.level++ }),
            e.tokens.push({
              type: "inline",
              content: e.getLines(s, s + 1, e.blkIndent, !1).trim(),
              level: e.level + 1,
              lines: [s, s],
              children: [],
            }),
            e.tokens.push({ type: "dt_close", level: --e.level });
          ;

        ) {
          if (
            (e.tokens.push({
              type: "dd_open",
              lines: (l = [p, 0]),
              level: e.level++,
            }),
            (g = e.tight),
            (f = e.ddIndent),
            (d = e.blkIndent),
            (h = e.tShift[a]),
            (m = e.parentType),
            (e.blkIndent = e.ddIndent = e.tShift[a] + 2),
            (e.tShift[a] = i - e.bMarks[a]),
            (e.tight = !0),
            (e.parentType = "deflist"),
            e.parser.tokenize(e, a, n, !0),
            (e.tight && !b) || (y = !1),
            (b = e.line - a > 1 && e.isEmpty(e.line - 1)),
            (e.tShift[a] = h),
            (e.tight = g),
            (e.parentType = m),
            (e.blkIndent = d),
            (e.ddIndent = f),
            e.tokens.push({ type: "dd_close", level: --e.level }),
            (l[1] = p = e.line),
            p >= n)
          )
            break e;
          if (e.tShift[p] < e.blkIndent) break e;
          if ((i = r(e, p)) < 0) break;
          a = p;
        }
        if (p >= n) break;
        if (((s = p), e.isEmpty(s))) break;
        if (e.tShift[s] < e.blkIndent) break;
        if ((a = s + 1) >= n) break;
        if ((e.isEmpty(a) && a++, a >= n)) break;
        if (e.tShift[a] < e.blkIndent) break;
        if ((i = r(e, a)) < 0) break;
      }
      return (
        e.tokens.push({ type: "dl_close", level: --e.level }),
        (c[1] = p),
        (e.line = p),
        y &&
          (function (e, t) {
            var n,
              r,
              o = e.level + 2;
            for (n = t + 2, r = e.tokens.length - 2; n < r; n++)
              e.tokens[n].level === o &&
                "paragraph_open" === e.tokens[n].type &&
                ((e.tokens[n + 2].tight = !0),
                (e.tokens[n].tight = !0),
                (n += 2));
          })(e, u),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/fences.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      var o,
        i,
        a,
        s,
        l,
        c = !1,
        u = e.bMarks[t] + e.tShift[t],
        p = e.eMarks[t];
      if (u + 3 > p) return !1;
      if (126 !== (o = e.src.charCodeAt(u)) && 96 !== o) return !1;
      if (((l = u), (i = (u = e.skipChars(u, o)) - l) < 3)) return !1;
      if ((a = e.src.slice(u, p).trim()).indexOf("`") >= 0) return !1;
      if (r) return !0;
      for (
        s = t;
        !(++s >= n) &&
        !(
          (u = l = e.bMarks[s] + e.tShift[s]) < (p = e.eMarks[s]) &&
          e.tShift[s] < e.blkIndent
        );

      )
        if (
          e.src.charCodeAt(u) === o &&
          !(
            e.tShift[s] - e.blkIndent >= 4 ||
            (u = e.skipChars(u, o)) - l < i ||
            (u = e.skipSpaces(u)) < p
          )
        ) {
          c = !0;
          break;
        }
      return (
        (i = e.tShift[t]),
        (e.line = s + (c ? 1 : 0)),
        e.tokens.push({
          type: "fence",
          params: a,
          content: e.getLines(t + 1, s, i, !0),
          lines: [t, e.line],
          level: e.level,
        }),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/footnote.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      var o,
        i,
        a,
        s,
        l,
        c = e.bMarks[t] + e.tShift[t],
        u = e.eMarks[t];
      if (c + 4 > u) return !1;
      if (91 !== e.src.charCodeAt(c)) return !1;
      if (94 !== e.src.charCodeAt(c + 1)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      for (s = c + 2; s < u; s++) {
        if (32 === e.src.charCodeAt(s)) return !1;
        if (93 === e.src.charCodeAt(s)) break;
      }
      return (
        s !== c + 2 &&
        !(s + 1 >= u || 58 !== e.src.charCodeAt(++s)) &&
        (!!r ||
          (s++,
          e.env.footnotes || (e.env.footnotes = {}),
          e.env.footnotes.refs || (e.env.footnotes.refs = {}),
          (l = e.src.slice(c + 2, s - 2)),
          (e.env.footnotes.refs[":" + l] = -1),
          e.tokens.push({
            type: "footnote_reference_open",
            label: l,
            level: e.level++,
          }),
          (o = e.bMarks[t]),
          (i = e.tShift[t]),
          (a = e.parentType),
          (e.tShift[t] = e.skipSpaces(s) - s),
          (e.bMarks[t] = s),
          (e.blkIndent += 4),
          (e.parentType = "footnote"),
          e.tShift[t] < e.blkIndent &&
            ((e.tShift[t] += e.blkIndent), (e.bMarks[t] -= e.blkIndent)),
          e.parser.tokenize(e, t, n, !0),
          (e.parentType = a),
          (e.blkIndent -= 4),
          (e.tShift[t] = i),
          (e.bMarks[t] = o),
          e.tokens.push({ type: "footnote_reference_close", level: --e.level }),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/heading.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      var o,
        i,
        a,
        s = e.bMarks[t] + e.tShift[t],
        l = e.eMarks[t];
      if (s >= l) return !1;
      if (35 !== (o = e.src.charCodeAt(s)) || s >= l) return !1;
      for (i = 1, o = e.src.charCodeAt(++s); 35 === o && s < l && i <= 6; )
        i++, (o = e.src.charCodeAt(++s));
      return (
        !(i > 6 || (s < l && 32 !== o)) &&
        (!!r ||
          ((l = e.skipCharsBack(l, 32, s)),
          (a = e.skipCharsBack(l, 35, s)) > s &&
            32 === e.src.charCodeAt(a - 1) &&
            (l = a),
          (e.line = t + 1),
          e.tokens.push({
            type: "heading_open",
            hLevel: i,
            lines: [t, e.line],
            level: e.level,
          }),
          s < l &&
            e.tokens.push({
              type: "inline",
              content: e.src.slice(s, l).trim(),
              level: e.level + 1,
              lines: [t, e.line],
              children: [],
            }),
          e.tokens.push({ type: "heading_close", hLevel: i, level: e.level }),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/hr.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r) {
      var o,
        i,
        a,
        s = e.bMarks[t],
        l = e.eMarks[t];
      if ((s += e.tShift[t]) > l) return !1;
      if (42 !== (o = e.src.charCodeAt(s++)) && 45 !== o && 95 !== o) return !1;
      for (i = 1; s < l; ) {
        if ((a = e.src.charCodeAt(s++)) !== o && 32 !== a) return !1;
        a === o && i++;
      }
      return (
        !(i < 3) &&
        (!!r ||
          ((e.line = t + 1),
          e.tokens.push({ type: "hr", lines: [t, e.line], level: e.level }),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/htmlblock.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/html_blocks.js"),
      o = /^<([a-zA-Z]{1,15})[\s\/>]/,
      i = /^<\/([a-zA-Z]{1,15})[\s>]/;
    e.exports = function (e, t, n, a) {
      var s,
        l,
        c,
        u = e.bMarks[t],
        p = e.eMarks[t],
        d = e.tShift[t];
      if (((u += d), !e.options.html)) return !1;
      if (d > 3 || u + 2 >= p) return !1;
      if (60 !== e.src.charCodeAt(u)) return !1;
      if (33 === (s = e.src.charCodeAt(u + 1)) || 63 === s) {
        if (a) return !0;
      } else {
        if (
          47 !== s &&
          !(function (e) {
            var t = 32 | e;
            return t >= 97 && t <= 122;
          })(s)
        )
          return !1;
        if (47 === s) {
          if (!(l = e.src.slice(u, p).match(i))) return !1;
        } else if (!(l = e.src.slice(u, p).match(o))) return !1;
        if (!0 !== r[l[1].toLowerCase()]) return !1;
        if (a) return !0;
      }
      for (c = t + 1; c < e.lineMax && !e.isEmpty(c); ) c++;
      return (
        (e.line = c),
        e.tokens.push({
          type: "htmlblock",
          level: e.level,
          lines: [t, e.line],
          content: e.getLines(t, c, 0, !0),
        }),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/lheading.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      var r,
        o,
        i,
        a = t + 1;
      return (
        !(a >= n) &&
        !(e.tShift[a] < e.blkIndent) &&
        !(e.tShift[a] - e.blkIndent > 3) &&
        !((o = e.bMarks[a] + e.tShift[a]) >= (i = e.eMarks[a])) &&
        (45 === (r = e.src.charCodeAt(o)) || 61 === r) &&
        ((o = e.skipChars(o, r)),
        !((o = e.skipSpaces(o)) < i) &&
          ((o = e.bMarks[t] + e.tShift[t]),
          (e.line = a + 1),
          e.tokens.push({
            type: "heading_open",
            hLevel: 61 === r ? 1 : 2,
            lines: [t, e.line],
            level: e.level,
          }),
          e.tokens.push({
            type: "inline",
            content: e.src.slice(o, e.eMarks[t]).trim(),
            level: e.level + 1,
            lines: [t, e.line - 1],
            children: [],
          }),
          e.tokens.push({
            type: "heading_close",
            hLevel: 61 === r ? 1 : 2,
            level: e.level,
          }),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/list.js": function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n, r, o;
      return (r = e.bMarks[t] + e.tShift[t]) >= (o = e.eMarks[t])
        ? -1
        : 42 !== (n = e.src.charCodeAt(r++)) && 45 !== n && 43 !== n
          ? -1
          : r < o && 32 !== e.src.charCodeAt(r)
            ? -1
            : r;
    }
    function o(e, t) {
      var n,
        r = e.bMarks[t] + e.tShift[t],
        o = e.eMarks[t];
      if (r + 1 >= o) return -1;
      if ((n = e.src.charCodeAt(r++)) < 48 || n > 57) return -1;
      for (;;) {
        if (r >= o) return -1;
        if (!((n = e.src.charCodeAt(r++)) >= 48 && n <= 57)) {
          if (41 === n || 46 === n) break;
          return -1;
        }
      }
      return r < o && 32 !== e.src.charCodeAt(r) ? -1 : r;
    }
    e.exports = function (e, t, n, i) {
      var a,
        s,
        l,
        c,
        u,
        p,
        d,
        f,
        m,
        h,
        g,
        b,
        y,
        v,
        _,
        w,
        k,
        x,
        C,
        T,
        S,
        E = !0;
      if ((f = o(e, t)) >= 0) b = !0;
      else {
        if (!((f = r(e, t)) >= 0)) return !1;
        b = !1;
      }
      if (e.level >= e.options.maxNesting) return !1;
      if (((g = e.src.charCodeAt(f - 1)), i)) return !0;
      for (
        v = e.tokens.length,
          b
            ? ((d = e.bMarks[t] + e.tShift[t]),
              (h = Number(e.src.substr(d, f - d - 1))),
              e.tokens.push({
                type: "ordered_list_open",
                order: h,
                lines: (w = [t, 0]),
                level: e.level++,
              }))
            : e.tokens.push({
                type: "bullet_list_open",
                lines: (w = [t, 0]),
                level: e.level++,
              }),
          a = t,
          _ = !1,
          x = e.parser.ruler.getRules("list");
        !(
          !(a < n) ||
          ((m = (y = e.skipSpaces(f)) >= e.eMarks[a] ? 1 : y - f) > 4 &&
            (m = 1),
          m < 1 && (m = 1),
          (s = f - e.bMarks[a] + m),
          e.tokens.push({
            type: "list_item_open",
            lines: (k = [t, 0]),
            level: e.level++,
          }),
          (c = e.blkIndent),
          (u = e.tight),
          (l = e.tShift[t]),
          (p = e.parentType),
          (e.tShift[t] = y - e.bMarks[t]),
          (e.blkIndent = s),
          (e.tight = !0),
          (e.parentType = "list"),
          e.parser.tokenize(e, t, n, !0),
          (e.tight && !_) || (E = !1),
          (_ = e.line - t > 1 && e.isEmpty(e.line - 1)),
          (e.blkIndent = c),
          (e.tShift[t] = l),
          (e.tight = u),
          (e.parentType = p),
          e.tokens.push({ type: "list_item_close", level: --e.level }),
          (a = t = e.line),
          (k[1] = a),
          (y = e.bMarks[t]),
          a >= n) ||
          e.isEmpty(a) ||
          e.tShift[a] < e.blkIndent
        );

      ) {
        for (S = !1, C = 0, T = x.length; C < T; C++)
          if (x[C](e, a, n, !0)) {
            S = !0;
            break;
          }
        if (S) break;
        if (b) {
          if ((f = o(e, a)) < 0) break;
        } else if ((f = r(e, a)) < 0) break;
        if (g !== e.src.charCodeAt(f - 1)) break;
      }
      return (
        e.tokens.push({
          type: b ? "ordered_list_close" : "bullet_list_close",
          level: --e.level,
        }),
        (w[1] = a),
        (e.line = a),
        E &&
          (function (e, t) {
            var n,
              r,
              o = e.level + 2;
            for (n = t + 2, r = e.tokens.length - 2; n < r; n++)
              e.tokens[n].level === o &&
                "paragraph_open" === e.tokens[n].type &&
                ((e.tokens[n + 2].tight = !0),
                (e.tokens[n].tight = !0),
                (n += 2));
          })(e, v),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/paragraph.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s,
        l = t + 1;
      if (l < (n = e.lineMax) && !e.isEmpty(l))
        for (
          s = e.parser.ruler.getRules("paragraph");
          l < n && !e.isEmpty(l);
          l++
        )
          if (!(e.tShift[l] - e.blkIndent > 3)) {
            for (o = !1, i = 0, a = s.length; i < a; i++)
              if (s[i](e, l, n, !0)) {
                o = !0;
                break;
              }
            if (o) break;
          }
      return (
        (r = e.getLines(t, l, e.blkIndent, !1).trim()),
        (e.line = l),
        r.length &&
          (e.tokens.push({
            type: "paragraph_open",
            tight: !1,
            lines: [t, e.line],
            level: e.level,
          }),
          e.tokens.push({
            type: "inline",
            content: r,
            level: e.level + 1,
            lines: [t, e.line],
            children: [],
          }),
          e.tokens.push({
            type: "paragraph_close",
            tight: !1,
            level: e.level,
          })),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_block/state_block.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    function r(e, t, n, r, o) {
      var i, a, s, l, c, u, p;
      for (
        this.src = e,
          this.parser = t,
          this.options = n,
          this.env = r,
          this.tokens = o,
          this.bMarks = [],
          this.eMarks = [],
          this.tShift = [],
          this.blkIndent = 0,
          this.line = 0,
          this.lineMax = 0,
          this.tight = !1,
          this.parentType = "root",
          this.ddIndent = -1,
          this.level = 0,
          this.result = "",
          u = 0,
          p = !1,
          s = l = u = 0,
          c = (a = this.src).length;
        l < c;
        l++
      ) {
        if (((i = a.charCodeAt(l)), !p)) {
          if (32 === i) {
            u++;
            continue;
          }
          p = !0;
        }
        (10 !== i && l !== c - 1) ||
          (10 !== i && l++,
          this.bMarks.push(s),
          this.eMarks.push(l),
          this.tShift.push(u),
          (p = !1),
          (u = 0),
          (s = l + 1));
      }
      this.bMarks.push(a.length),
        this.eMarks.push(a.length),
        this.tShift.push(0),
        (this.lineMax = this.bMarks.length - 1);
    }
    (r.prototype.isEmpty = function (e) {
      return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
    }),
      (r.prototype.skipEmptyLines = function (e) {
        for (
          var t = this.lineMax;
          e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
          e++
        );
        return e;
      }),
      (r.prototype.skipSpaces = function (e) {
        for (
          var t = this.src.length;
          e < t && 32 === this.src.charCodeAt(e);
          e++
        );
        return e;
      }),
      (r.prototype.skipChars = function (e, t) {
        for (
          var n = this.src.length;
          e < n && this.src.charCodeAt(e) === t;
          e++
        );
        return e;
      }),
      (r.prototype.skipCharsBack = function (e, t, n) {
        if (e <= n) return e;
        for (; e > n; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
        return e;
      }),
      (r.prototype.getLines = function (e, t, n, r) {
        var o,
          i,
          a,
          s,
          l,
          c = e;
        if (e >= t) return "";
        if (c + 1 === t)
          return (
            (i = this.bMarks[c] + Math.min(this.tShift[c], n)),
            (a = r ? this.eMarks[c] + 1 : this.eMarks[c]),
            this.src.slice(i, a)
          );
        for (s = new Array(t - e), o = 0; c < t; c++, o++)
          (l = this.tShift[c]) > n && (l = n),
            l < 0 && (l = 0),
            (i = this.bMarks[c] + l),
            (a = c + 1 < t || r ? this.eMarks[c] + 1 : this.eMarks[c]),
            (s[o] = this.src.slice(i, a));
        return s.join("");
      }),
      (e.exports = r);
  },
  "./node_modules/remarkable/lib/rules_block/table.js": function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = e.bMarks[t] + e.blkIndent,
        r = e.eMarks[t];
      return e.src.substr(n, r - n);
    }
    e.exports = function (e, t, n, o) {
      var i, a, s, l, c, u, p, d, f, m, h;
      if (t + 2 > n) return !1;
      if (((c = t + 1), e.tShift[c] < e.blkIndent)) return !1;
      if ((s = e.bMarks[c] + e.tShift[c]) >= e.eMarks[c]) return !1;
      if (124 !== (i = e.src.charCodeAt(s)) && 45 !== i && 58 !== i) return !1;
      if (((a = r(e, t + 1)), !/^[-:| ]+$/.test(a))) return !1;
      if ((u = a.split("|")) <= 2) return !1;
      for (d = [], l = 0; l < u.length; l++) {
        if (!(f = u[l].trim())) {
          if (0 === l || l === u.length - 1) continue;
          return !1;
        }
        if (!/^:?-+:?$/.test(f)) return !1;
        58 === f.charCodeAt(f.length - 1)
          ? d.push(58 === f.charCodeAt(0) ? "center" : "right")
          : 58 === f.charCodeAt(0)
            ? d.push("left")
            : d.push("");
      }
      if (-1 === (a = r(e, t).trim()).indexOf("|")) return !1;
      if (((u = a.replace(/^\||\|$/g, "").split("|")), d.length !== u.length))
        return !1;
      if (o) return !0;
      for (
        e.tokens.push({
          type: "table_open",
          lines: (m = [t, 0]),
          level: e.level++,
        }),
          e.tokens.push({
            type: "thead_open",
            lines: [t, t + 1],
            level: e.level++,
          }),
          e.tokens.push({
            type: "tr_open",
            lines: [t, t + 1],
            level: e.level++,
          }),
          l = 0;
        l < u.length;
        l++
      )
        e.tokens.push({
          type: "th_open",
          align: d[l],
          lines: [t, t + 1],
          level: e.level++,
        }),
          e.tokens.push({
            type: "inline",
            content: u[l].trim(),
            lines: [t, t + 1],
            level: e.level,
            children: [],
          }),
          e.tokens.push({ type: "th_close", level: --e.level });
      for (
        e.tokens.push({ type: "tr_close", level: --e.level }),
          e.tokens.push({ type: "thead_close", level: --e.level }),
          e.tokens.push({
            type: "tbody_open",
            lines: (h = [t + 2, 0]),
            level: e.level++,
          }),
          c = t + 2;
        c < n &&
        !(e.tShift[c] < e.blkIndent) &&
        -1 !== (a = r(e, c).trim()).indexOf("|");
        c++
      ) {
        for (
          u = a.replace(/^\||\|$/g, "").split("|"),
            e.tokens.push({ type: "tr_open", level: e.level++ }),
            l = 0;
          l < u.length;
          l++
        )
          e.tokens.push({ type: "td_open", align: d[l], level: e.level++ }),
            (p = u[l]
              .substring(
                124 === u[l].charCodeAt(0) ? 1 : 0,
                124 === u[l].charCodeAt(u[l].length - 1)
                  ? u[l].length - 1
                  : u[l].length,
              )
              .trim()),
            e.tokens.push({
              type: "inline",
              content: p,
              level: e.level,
              children: [],
            }),
            e.tokens.push({ type: "td_close", level: --e.level });
        e.tokens.push({ type: "tr_close", level: --e.level });
      }
      return (
        e.tokens.push({ type: "tbody_close", level: --e.level }),
        e.tokens.push({ type: "table_close", level: --e.level }),
        (m[1] = h[1] = c),
        (e.line = c),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_core/abbr.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/rules_inline/state_inline.js"),
      o = n("./node_modules/remarkable/lib/helpers/parse_link_label.js");
    function i(e, t, n, i) {
      var a, s, l, c, u, p;
      if (42 !== e.charCodeAt(0)) return -1;
      if (91 !== e.charCodeAt(1)) return -1;
      if (-1 === e.indexOf("]:")) return -1;
      if (
        ((a = new r(e, t, n, i, [])),
        (s = o(a, 1)) < 0 || 58 !== e.charCodeAt(s + 1))
      )
        return -1;
      for (c = a.posMax, l = s + 2; l < c && 10 !== a.src.charCodeAt(l); l++);
      return (
        (u = e.slice(2, s)),
        0 === (p = e.slice(s + 2, l).trim()).length
          ? -1
          : (i.abbreviations || (i.abbreviations = {}),
            void 0 === i.abbreviations[":" + u] &&
              (i.abbreviations[":" + u] = p),
            l)
      );
    }
    e.exports = function (e) {
      var t,
        n,
        r,
        o,
        a = e.tokens;
      if (!e.inlineMode)
        for (t = 1, n = a.length - 1; t < n; t++)
          if (
            "paragraph_open" === a[t - 1].type &&
            "inline" === a[t].type &&
            "paragraph_close" === a[t + 1].type
          ) {
            for (
              r = a[t].content;
              r.length && !((o = i(r, e.inline, e.options, e.env)) < 0);

            )
              r = r.slice(o).trim();
            (a[t].content = r),
              r.length || ((a[t - 1].tight = !0), (a[t + 1].tight = !0));
          }
    };
  },
  "./node_modules/remarkable/lib/rules_core/abbr2.js": function (e, t, n) {
    "use strict";
    function r(e) {
      return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
    }
    e.exports = function (e) {
      var t,
        n,
        o,
        i,
        a,
        s,
        l,
        c,
        u,
        p,
        d,
        f,
        m = e.tokens;
      if (e.env.abbreviations)
        for (
          e.env.abbrRegExp ||
            ((f =
              "(^|[" +
              " \n()[]'\".,!?-".split("").map(r).join("") +
              "])(" +
              Object.keys(e.env.abbreviations)
                .map(function (e) {
                  return e.substr(1);
                })
                .sort(function (e, t) {
                  return t.length - e.length;
                })
                .map(r)
                .join("|") +
              ")($|[" +
              " \n()[]'\".,!?-".split("").map(r).join("") +
              "])"),
            (e.env.abbrRegExp = new RegExp(f, "g"))),
            p = e.env.abbrRegExp,
            n = 0,
            o = m.length;
          n < o;
          n++
        )
          if ("inline" === m[n].type)
            for (t = (i = m[n].children).length - 1; t >= 0; t--)
              if ("text" === (a = i[t]).type) {
                for (
                  c = 0, s = a.content, p.lastIndex = 0, u = a.level, l = [];
                  (d = p.exec(s));

                )
                  p.lastIndex > c &&
                    l.push({
                      type: "text",
                      content: s.slice(c, d.index + d[1].length),
                      level: u,
                    }),
                    l.push({
                      type: "abbr_open",
                      title: e.env.abbreviations[":" + d[2]],
                      level: u++,
                    }),
                    l.push({ type: "text", content: d[2], level: u }),
                    l.push({ type: "abbr_close", level: --u }),
                    (c = p.lastIndex - d[3].length);
                l.length &&
                  (c < s.length &&
                    l.push({ type: "text", content: s.slice(c), level: u }),
                  (m[n].children = i =
                    [].concat(i.slice(0, t), l, i.slice(t + 1))));
              }
    };
  },
  "./node_modules/remarkable/lib/rules_core/block.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      e.inlineMode
        ? e.tokens.push({
            type: "inline",
            content: e.src.replace(/\n/g, " ").trim(),
            level: 0,
            lines: [0, 1],
            children: [],
          })
        : e.block.parse(e.src, e.options, e.env, e.tokens);
    };
  },
  "./node_modules/remarkable/lib/rules_core/footnote_tail.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        s,
        l,
        c,
        u = 0,
        p = !1,
        d = {};
      if (
        e.env.footnotes &&
        ((e.tokens = e.tokens.filter(function (e) {
          return "footnote_reference_open" === e.type
            ? ((p = !0), (l = []), (c = e.label), !1)
            : "footnote_reference_close" === e.type
              ? ((p = !1), (d[":" + c] = l), !1)
              : (p && l.push(e), !p);
        })),
        e.env.footnotes.list)
      ) {
        for (
          a = e.env.footnotes.list,
            e.tokens.push({ type: "footnote_block_open", level: u++ }),
            t = 0,
            n = a.length;
          t < n;
          t++
        ) {
          for (
            e.tokens.push({ type: "footnote_open", id: t, level: u++ }),
              a[t].tokens
                ? ((s = []).push({
                    type: "paragraph_open",
                    tight: !1,
                    level: u++,
                  }),
                  s.push({
                    type: "inline",
                    content: "",
                    level: u,
                    children: a[t].tokens,
                  }),
                  s.push({ type: "paragraph_close", tight: !1, level: --u }))
                : a[t].label && (s = d[":" + a[t].label]),
              e.tokens = e.tokens.concat(s),
              i =
                "paragraph_close" === e.tokens[e.tokens.length - 1].type
                  ? e.tokens.pop()
                  : null,
              o = a[t].count > 0 ? a[t].count : 1,
              r = 0;
            r < o;
            r++
          )
            e.tokens.push({
              type: "footnote_anchor",
              id: t,
              subId: r,
              level: u,
            });
          i && e.tokens.push(i),
            e.tokens.push({ type: "footnote_close", level: --u });
        }
        e.tokens.push({ type: "footnote_block_close", level: --u });
      }
    };
  },
  "./node_modules/remarkable/lib/rules_core/inline.js": function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t,
        n,
        r,
        o = e.tokens;
      for (n = 0, r = o.length; n < r; n++)
        "inline" === (t = o[n]).type &&
          e.inline.parse(t.content, e.options, e.env, t.children);
    };
  },
  "./node_modules/remarkable/lib/rules_core/linkify.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/autolinker/dist/Autolinker.js"),
      o = /www|@|\:\/\//;
    function i(e) {
      return /^<\/a\s*>/i.test(e);
    }
    function a() {
      var e = [],
        t = new r({
          stripPrefix: !1,
          url: !0,
          email: !0,
          twitter: !1,
          replaceFn: function (t, n) {
            switch (n.getType()) {
              case "url":
                e.push({ text: n.matchedText, url: n.getUrl() });
                break;
              case "email":
                e.push({
                  text: n.matchedText,
                  url: "mailto:" + n.getEmail().replace(/^mailto:/i, ""),
                });
            }
            return !1;
          },
        });
      return { links: e, autolinker: t };
    }
    e.exports = function (e) {
      var t,
        n,
        r,
        s,
        l,
        c,
        u,
        p,
        d,
        f,
        m,
        h,
        g,
        b,
        y = e.tokens,
        v = null;
      if (e.options.linkify)
        for (n = 0, r = y.length; n < r; n++)
          if ("inline" === y[n].type)
            for (m = 0, t = (s = y[n].children).length - 1; t >= 0; t--)
              if ("link_close" !== (l = s[t]).type) {
                if (
                  ("htmltag" === l.type &&
                    ((b = l.content),
                    /^<a[>\s]/i.test(b) && m > 0 && m--,
                    i(l.content) && m++),
                  !(m > 0) && "text" === l.type && o.test(l.content))
                ) {
                  if (
                    (v || ((h = (v = a()).links), (g = v.autolinker)),
                    (c = l.content),
                    (h.length = 0),
                    g.link(c),
                    !h.length)
                  )
                    continue;
                  for (u = [], f = l.level, p = 0; p < h.length; p++)
                    e.inline.validateLink(h[p].url) &&
                      ((d = c.indexOf(h[p].text)) &&
                        ((f = f),
                        u.push({
                          type: "text",
                          content: c.slice(0, d),
                          level: f,
                        })),
                      u.push({
                        type: "link_open",
                        href: h[p].url,
                        title: "",
                        level: f++,
                      }),
                      u.push({ type: "text", content: h[p].text, level: f }),
                      u.push({ type: "link_close", level: --f }),
                      (c = c.slice(d + h[p].text.length)));
                  c.length && u.push({ type: "text", content: c, level: f }),
                    (y[n].children = s =
                      [].concat(s.slice(0, t), u, s.slice(t + 1)));
                }
              } else
                for (t--; s[t].level !== l.level && "link_open" !== s[t].type; )
                  t--;
    };
  },
  "./node_modules/remarkable/lib/rules_core/references.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/rules_inline/state_inline.js"),
      o = n("./node_modules/remarkable/lib/helpers/parse_link_label.js"),
      i = n("./node_modules/remarkable/lib/helpers/parse_link_destination.js"),
      a = n("./node_modules/remarkable/lib/helpers/parse_link_title.js"),
      s = n("./node_modules/remarkable/lib/helpers/normalize_reference.js");
    function l(e, t, n, l) {
      var c, u, p, d, f, m, h, g, b;
      if (91 !== e.charCodeAt(0)) return -1;
      if (-1 === e.indexOf("]:")) return -1;
      if (
        ((c = new r(e, t, n, l, [])),
        (u = o(c, 0)) < 0 || 58 !== e.charCodeAt(u + 1))
      )
        return -1;
      for (
        d = c.posMax, p = u + 2;
        p < d && (32 === (f = c.src.charCodeAt(p)) || 10 === f);
        p++
      );
      if (!i(c, p)) return -1;
      for (
        h = c.linkContent, m = p = c.pos, p += 1;
        p < d && (32 === (f = c.src.charCodeAt(p)) || 10 === f);
        p++
      );
      for (
        p < d && m !== p && a(c, p)
          ? ((g = c.linkContent), (p = c.pos))
          : ((g = ""), (p = m));
        p < d && 32 === c.src.charCodeAt(p);

      )
        p++;
      return p < d && 10 !== c.src.charCodeAt(p)
        ? -1
        : ((b = s(e.slice(1, u))),
          void 0 === l.references[b] &&
            (l.references[b] = { title: g, href: h }),
          p);
    }
    e.exports = function (e) {
      var t,
        n,
        r,
        o,
        i = e.tokens;
      if (((e.env.references = e.env.references || {}), !e.inlineMode))
        for (t = 1, n = i.length - 1; t < n; t++)
          if (
            "inline" === i[t].type &&
            "paragraph_open" === i[t - 1].type &&
            "paragraph_close" === i[t + 1].type
          ) {
            for (
              r = i[t].content;
              r.length && !((o = l(r, e.inline, e.options, e.env)) < 0);

            )
              r = r.slice(o).trim();
            (i[t].content = r),
              r.length || ((i[t - 1].tight = !0), (i[t + 1].tight = !0));
          }
    };
  },
  "./node_modules/remarkable/lib/rules_core/replacements.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
      o = /\((c|tm|r|p)\)/gi,
      i = { c: "©", r: "®", p: "§", tm: "™" };
    e.exports = function (e) {
      var t, n, a, s, l, c;
      if (e.options.typographer)
        for (l = e.tokens.length - 1; l >= 0; l--)
          if ("inline" === e.tokens[l].type)
            for (t = (s = e.tokens[l].children).length - 1; t >= 0; t--)
              "text" === (n = s[t]).type &&
                ((a = n.content),
                (a =
                  (c = a).indexOf("(") < 0
                    ? c
                    : c.replace(o, function (e, t) {
                        return i[t.toLowerCase()];
                      })),
                r.test(a) &&
                  (a = a
                    .replace(/\+-/g, "±")
                    .replace(/\.{2,}/g, "…")
                    .replace(/([?!])…/g, "$1..")
                    .replace(/([?!]){4,}/g, "$1$1$1")
                    .replace(/,{2,}/g, ",")
                    .replace(/(^|[^-])---([^-]|$)/gm, "$1—$2")
                    .replace(/(^|\s)--(\s|$)/gm, "$1–$2")
                    .replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")),
                (n.content = a));
    };
  },
  "./node_modules/remarkable/lib/rules_core/smartquotes.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = /['"]/,
      o = /['"]/g,
      i = /[-\s()\[\]]/;
    function a(e, t) {
      return !(t < 0 || t >= e.length) && !i.test(e[t]);
    }
    function s(e, t, n) {
      return e.substr(0, t) + n + e.substr(t + 1);
    }
    e.exports = function (e) {
      var t, n, i, l, c, u, p, d, f, m, h, g, b, y, v, _, w;
      if (e.options.typographer)
        for (w = [], v = e.tokens.length - 1; v >= 0; v--)
          if ("inline" === e.tokens[v].type)
            for (
              _ = e.tokens[v].children, w.length = 0, t = 0;
              t < _.length;
              t++
            )
              if ("text" === (n = _[t]).type && !r.test(n.text)) {
                for (
                  p = _[t].level, b = w.length - 1;
                  b >= 0 && !(w[b].level <= p);
                  b--
                );
                (w.length = b + 1), (c = 0), (u = (i = n.content).length);
                e: for (; c < u && ((o.lastIndex = c), (l = o.exec(i))); )
                  if (
                    ((d = !a(i, l.index - 1)),
                    (c = l.index + 1),
                    (y = "'" === l[0]),
                    (f = !a(i, c)) || d)
                  ) {
                    if (((h = !f), (g = !d)))
                      for (
                        b = w.length - 1;
                        b >= 0 && ((m = w[b]), !(w[b].level < p));
                        b--
                      )
                        if (m.single === y && w[b].level === p) {
                          (m = w[b]),
                            y
                              ? ((_[m.token].content = s(
                                  _[m.token].content,
                                  m.pos,
                                  e.options.quotes[2],
                                )),
                                (n.content = s(
                                  n.content,
                                  l.index,
                                  e.options.quotes[3],
                                )))
                              : ((_[m.token].content = s(
                                  _[m.token].content,
                                  m.pos,
                                  e.options.quotes[0],
                                )),
                                (n.content = s(
                                  n.content,
                                  l.index,
                                  e.options.quotes[1],
                                ))),
                            (w.length = b);
                          continue e;
                        }
                    h
                      ? w.push({ token: t, pos: l.index, single: y, level: p })
                      : g && y && (n.content = s(n.content, l.index, "’"));
                  } else y && (n.content = s(n.content, l.index, "’"));
              }
    };
  },
  "./node_modules/remarkable/lib/rules_inline/autolink.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/url_schemas.js"),
      o = n("./node_modules/remarkable/lib/helpers/normalize_link.js"),
      i =
        /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
      a = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
    e.exports = function (e, t) {
      var n,
        s,
        l,
        c,
        u,
        p = e.pos;
      return (
        60 === e.src.charCodeAt(p) &&
        !((n = e.src.slice(p)).indexOf(">") < 0) &&
        ((s = n.match(a))
          ? !(r.indexOf(s[1].toLowerCase()) < 0) &&
            ((c = s[0].slice(1, -1)),
            (u = o(c)),
            !!e.parser.validateLink(c) &&
              (t ||
                (e.push({ type: "link_open", href: u, level: e.level }),
                e.push({ type: "text", content: c, level: e.level + 1 }),
                e.push({ type: "link_close", level: e.level })),
              (e.pos += s[0].length),
              !0))
          : !!(l = n.match(i)) &&
            ((c = l[0].slice(1, -1)),
            (u = o("mailto:" + c)),
            !!e.parser.validateLink(u) &&
              (t ||
                (e.push({ type: "link_open", href: u, level: e.level }),
                e.push({ type: "text", content: c, level: e.level + 1 }),
                e.push({ type: "link_close", level: e.level })),
              (e.pos += l[0].length),
              !0)))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_inline/backticks.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = e.pos;
      if (96 !== e.src.charCodeAt(s)) return !1;
      for (n = s, s++, r = e.posMax; s < r && 96 === e.src.charCodeAt(s); ) s++;
      for (
        o = e.src.slice(n, s), i = a = s;
        -1 !== (i = e.src.indexOf("`", a));

      ) {
        for (a = i + 1; a < r && 96 === e.src.charCodeAt(a); ) a++;
        if (a - i === o.length)
          return (
            t ||
              e.push({
                type: "code",
                content: e.src
                  .slice(s, i)
                  .replace(/[ \n]+/g, " ")
                  .trim(),
                block: !1,
                level: e.level,
              }),
            (e.pos = a),
            !0
          );
      }
      return t || (e.pending += o), (e.pos += o.length), !0;
    };
  },
  "./node_modules/remarkable/lib/rules_inline/del.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = e.posMax,
        l = e.pos;
      if (126 !== e.src.charCodeAt(l)) return !1;
      if (t) return !1;
      if (l + 4 >= s) return !1;
      if (126 !== e.src.charCodeAt(l + 1)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      if (
        ((i = l > 0 ? e.src.charCodeAt(l - 1) : -1),
        (a = e.src.charCodeAt(l + 2)),
        126 === i)
      )
        return !1;
      if (126 === a) return !1;
      if (32 === a || 10 === a) return !1;
      for (r = l + 2; r < s && 126 === e.src.charCodeAt(r); ) r++;
      if (r > l + 3)
        return (e.pos += r - l), t || (e.pending += e.src.slice(l, r)), !0;
      for (e.pos = l + 2, o = 1; e.pos + 1 < s; ) {
        if (
          126 === e.src.charCodeAt(e.pos) &&
          126 === e.src.charCodeAt(e.pos + 1) &&
          ((i = e.src.charCodeAt(e.pos - 1)),
          126 !== (a = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) &&
            126 !== i &&
            (32 !== i && 10 !== i ? o-- : 32 !== a && 10 !== a && o++, o <= 0))
        ) {
          n = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return n
        ? ((e.posMax = e.pos),
          (e.pos = l + 2),
          t ||
            (e.push({ type: "del_open", level: e.level++ }),
            e.parser.tokenize(e),
            e.push({ type: "del_close", level: --e.level })),
          (e.pos = e.posMax + 2),
          (e.posMax = s),
          !0)
        : ((e.pos = l), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/emphasis.js": function (e, t, n) {
    "use strict";
    function r(e) {
      return (
        (e >= 48 && e <= 57) || (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
      );
    }
    function o(e, t) {
      var n,
        o,
        i,
        a = t,
        s = !0,
        l = !0,
        c = e.posMax,
        u = e.src.charCodeAt(t);
      for (
        n = t > 0 ? e.src.charCodeAt(t - 1) : -1;
        a < c && e.src.charCodeAt(a) === u;

      )
        a++;
      return (
        a >= c && (s = !1),
        (i = a - t) >= 4
          ? (s = l = !1)
          : ((32 !== (o = a < c ? e.src.charCodeAt(a) : -1) && 10 !== o) ||
              (s = !1),
            (32 !== n && 10 !== n) || (l = !1),
            95 === u && (r(n) && (s = !1), r(o) && (l = !1))),
        { can_open: s, can_close: l, delims: i }
      );
    }
    e.exports = function (e, t) {
      var n,
        r,
        i,
        a,
        s,
        l,
        c,
        u = e.posMax,
        p = e.pos,
        d = e.src.charCodeAt(p);
      if (95 !== d && 42 !== d) return !1;
      if (t) return !1;
      if (((n = (c = o(e, p)).delims), !c.can_open))
        return (e.pos += n), t || (e.pending += e.src.slice(p, e.pos)), !0;
      if (e.level >= e.options.maxNesting) return !1;
      for (e.pos = p + n, l = [n]; e.pos < u; )
        if (e.src.charCodeAt(e.pos) !== d) e.parser.skipToken(e);
        else {
          if (((r = (c = o(e, e.pos)).delims), c.can_close)) {
            for (a = l.pop(), s = r; a !== s; ) {
              if (s < a) {
                l.push(a - s);
                break;
              }
              if (((s -= a), 0 === l.length)) break;
              (e.pos += a), (a = l.pop());
            }
            if (0 === l.length) {
              (n = a), (i = !0);
              break;
            }
            e.pos += r;
            continue;
          }
          c.can_open && l.push(r), (e.pos += r);
        }
      return i
        ? ((e.posMax = e.pos),
          (e.pos = p + n),
          t ||
            ((2 !== n && 3 !== n) ||
              e.push({ type: "strong_open", level: e.level++ }),
            (1 !== n && 3 !== n) ||
              e.push({ type: "em_open", level: e.level++ }),
            e.parser.tokenize(e),
            (1 !== n && 3 !== n) ||
              e.push({ type: "em_close", level: --e.level }),
            (2 !== n && 3 !== n) ||
              e.push({ type: "strong_close", level: --e.level })),
          (e.pos = e.posMax + n),
          (e.posMax = u),
          !0)
        : ((e.pos = p), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/entity.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/entities.js"),
      o = n("./node_modules/remarkable/lib/common/utils.js").has,
      i = n("./node_modules/remarkable/lib/common/utils.js").isValidEntityCode,
      a = n("./node_modules/remarkable/lib/common/utils.js").fromCodePoint,
      s = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
      l = /^&([a-z][a-z0-9]{1,31});/i;
    e.exports = function (e, t) {
      var n,
        c,
        u = e.pos,
        p = e.posMax;
      if (38 !== e.src.charCodeAt(u)) return !1;
      if (u + 1 < p)
        if (35 === e.src.charCodeAt(u + 1)) {
          if ((c = e.src.slice(u).match(s)))
            return (
              t ||
                ((n =
                  "x" === c[1][0].toLowerCase()
                    ? parseInt(c[1].slice(1), 16)
                    : parseInt(c[1], 10)),
                (e.pending += i(n) ? a(n) : a(65533))),
              (e.pos += c[0].length),
              !0
            );
        } else if ((c = e.src.slice(u).match(l)) && o(r, c[1]))
          return t || (e.pending += r[c[1]]), (e.pos += c[0].length), !0;
      return t || (e.pending += "&"), e.pos++, !0;
    };
  },
  "./node_modules/remarkable/lib/rules_inline/escape.js": function (e, t, n) {
    "use strict";
    for (var r = [], o = 0; o < 256; o++) r.push(0);
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
      r[e.charCodeAt(0)] = 1;
    }),
      (e.exports = function (e, t) {
        var n,
          o = e.pos,
          i = e.posMax;
        if (92 !== e.src.charCodeAt(o)) return !1;
        if (++o < i) {
          if ((n = e.src.charCodeAt(o)) < 256 && 0 !== r[n])
            return t || (e.pending += e.src[o]), (e.pos += 2), !0;
          if (10 === n) {
            for (
              t || e.push({ type: "hardbreak", level: e.level }), o++;
              o < i && 32 === e.src.charCodeAt(o);

            )
              o++;
            return (e.pos = o), !0;
          }
        }
        return t || (e.pending += "\\"), e.pos++, !0;
      });
  },
  "./node_modules/remarkable/lib/rules_inline/footnote_inline.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/helpers/parse_link_label.js");
    e.exports = function (e, t) {
      var n,
        o,
        i,
        a,
        s = e.posMax,
        l = e.pos;
      return (
        !(l + 2 >= s) &&
        94 === e.src.charCodeAt(l) &&
        91 === e.src.charCodeAt(l + 1) &&
        !(e.level >= e.options.maxNesting) &&
        ((n = l + 2),
        !((o = r(e, l + 1)) < 0) &&
          (t ||
            (e.env.footnotes || (e.env.footnotes = {}),
            e.env.footnotes.list || (e.env.footnotes.list = []),
            (i = e.env.footnotes.list.length),
            (e.pos = n),
            (e.posMax = o),
            e.push({ type: "footnote_ref", id: i, level: e.level }),
            e.linkLevel++,
            (a = e.tokens.length),
            e.parser.tokenize(e),
            (e.env.footnotes.list[i] = { tokens: e.tokens.splice(a) }),
            e.linkLevel--),
          (e.pos = o + 1),
          (e.posMax = s),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_inline/footnote_ref.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a = e.posMax,
        s = e.pos;
      if (s + 3 > a) return !1;
      if (!e.env.footnotes || !e.env.footnotes.refs) return !1;
      if (91 !== e.src.charCodeAt(s)) return !1;
      if (94 !== e.src.charCodeAt(s + 1)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      for (r = s + 2; r < a; r++) {
        if (32 === e.src.charCodeAt(r)) return !1;
        if (10 === e.src.charCodeAt(r)) return !1;
        if (93 === e.src.charCodeAt(r)) break;
      }
      return (
        r !== s + 2 &&
        !(r >= a) &&
        (r++,
        (n = e.src.slice(s + 2, r - 1)),
        void 0 !== e.env.footnotes.refs[":" + n] &&
          (t ||
            (e.env.footnotes.list || (e.env.footnotes.list = []),
            e.env.footnotes.refs[":" + n] < 0
              ? ((o = e.env.footnotes.list.length),
                (e.env.footnotes.list[o] = { label: n, count: 0 }),
                (e.env.footnotes.refs[":" + n] = o))
              : (o = e.env.footnotes.refs[":" + n]),
            (i = e.env.footnotes.list[o].count),
            e.env.footnotes.list[o].count++,
            e.push({ type: "footnote_ref", id: o, subId: i, level: e.level })),
          (e.pos = r),
          (e.posMax = a),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_inline/htmltag.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/common/html_re.js").HTML_TAG_RE;
    e.exports = function (e, t) {
      var n,
        o,
        i,
        a = e.pos;
      return (
        !!e.options.html &&
        ((i = e.posMax),
        !(60 !== e.src.charCodeAt(a) || a + 2 >= i) &&
          !(
            33 !== (n = e.src.charCodeAt(a + 1)) &&
            63 !== n &&
            47 !== n &&
            !(function (e) {
              var t = 32 | e;
              return t >= 97 && t <= 122;
            })(n)
          ) &&
          !!(o = e.src.slice(a).match(r)) &&
          (t ||
            e.push({
              type: "htmltag",
              content: e.src.slice(a, a + o[0].length),
              level: e.level,
            }),
          (e.pos += o[0].length),
          !0))
      );
    };
  },
  "./node_modules/remarkable/lib/rules_inline/ins.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = e.posMax,
        l = e.pos;
      if (43 !== e.src.charCodeAt(l)) return !1;
      if (t) return !1;
      if (l + 4 >= s) return !1;
      if (43 !== e.src.charCodeAt(l + 1)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      if (
        ((i = l > 0 ? e.src.charCodeAt(l - 1) : -1),
        (a = e.src.charCodeAt(l + 2)),
        43 === i)
      )
        return !1;
      if (43 === a) return !1;
      if (32 === a || 10 === a) return !1;
      for (r = l + 2; r < s && 43 === e.src.charCodeAt(r); ) r++;
      if (r !== l + 2)
        return (e.pos += r - l), t || (e.pending += e.src.slice(l, r)), !0;
      for (e.pos = l + 2, o = 1; e.pos + 1 < s; ) {
        if (
          43 === e.src.charCodeAt(e.pos) &&
          43 === e.src.charCodeAt(e.pos + 1) &&
          ((i = e.src.charCodeAt(e.pos - 1)),
          43 !== (a = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) &&
            43 !== i &&
            (32 !== i && 10 !== i ? o-- : 32 !== a && 10 !== a && o++, o <= 0))
        ) {
          n = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return n
        ? ((e.posMax = e.pos),
          (e.pos = l + 2),
          t ||
            (e.push({ type: "ins_open", level: e.level++ }),
            e.parser.tokenize(e),
            e.push({ type: "ins_close", level: --e.level })),
          (e.pos = e.posMax + 2),
          (e.posMax = s),
          !0)
        : ((e.pos = l), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/links.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/remarkable/lib/helpers/parse_link_label.js"),
      o = n("./node_modules/remarkable/lib/helpers/parse_link_destination.js"),
      i = n("./node_modules/remarkable/lib/helpers/parse_link_title.js"),
      a = n("./node_modules/remarkable/lib/helpers/normalize_reference.js");
    e.exports = function (e, t) {
      var n,
        s,
        l,
        c,
        u,
        p,
        d,
        f,
        m = !1,
        h = e.pos,
        g = e.posMax,
        b = e.pos,
        y = e.src.charCodeAt(b);
      if ((33 === y && ((m = !0), (y = e.src.charCodeAt(++b))), 91 !== y))
        return !1;
      if (e.level >= e.options.maxNesting) return !1;
      if (((n = b + 1), (s = r(e, b)) < 0)) return !1;
      if ((p = s + 1) < g && 40 === e.src.charCodeAt(p)) {
        for (p++; p < g && (32 === (f = e.src.charCodeAt(p)) || 10 === f); p++);
        if (p >= g) return !1;
        for (
          b = p, o(e, p) ? ((c = e.linkContent), (p = e.pos)) : (c = ""), b = p;
          p < g && (32 === (f = e.src.charCodeAt(p)) || 10 === f);
          p++
        );
        if (p < g && b !== p && i(e, p))
          for (
            u = e.linkContent, p = e.pos;
            p < g && (32 === (f = e.src.charCodeAt(p)) || 10 === f);
            p++
          );
        else u = "";
        if (p >= g || 41 !== e.src.charCodeAt(p)) return (e.pos = h), !1;
        p++;
      } else {
        if (e.linkLevel > 0) return !1;
        for (; p < g && (32 === (f = e.src.charCodeAt(p)) || 10 === f); p++);
        if (
          (p < g &&
            91 === e.src.charCodeAt(p) &&
            ((b = p + 1),
            (p = r(e, p)) >= 0 ? (l = e.src.slice(b, p++)) : (p = b - 1)),
          l || (void 0 === l && (p = s + 1), (l = e.src.slice(n, s))),
          !(d = e.env.references[a(l)]))
        )
          return (e.pos = h), !1;
        (c = d.href), (u = d.title);
      }
      return (
        t ||
          ((e.pos = n),
          (e.posMax = s),
          m
            ? e.push({
                type: "image",
                src: c,
                title: u,
                alt: e.src.substr(n, s - n),
                level: e.level,
              })
            : (e.push({
                type: "link_open",
                href: c,
                title: u,
                level: e.level++,
              }),
              e.linkLevel++,
              e.parser.tokenize(e),
              e.linkLevel--,
              e.push({ type: "link_close", level: --e.level }))),
        (e.pos = p),
        (e.posMax = g),
        !0
      );
    };
  },
  "./node_modules/remarkable/lib/rules_inline/mark.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = e.posMax,
        l = e.pos;
      if (61 !== e.src.charCodeAt(l)) return !1;
      if (t) return !1;
      if (l + 4 >= s) return !1;
      if (61 !== e.src.charCodeAt(l + 1)) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      if (
        ((i = l > 0 ? e.src.charCodeAt(l - 1) : -1),
        (a = e.src.charCodeAt(l + 2)),
        61 === i)
      )
        return !1;
      if (61 === a) return !1;
      if (32 === a || 10 === a) return !1;
      for (r = l + 2; r < s && 61 === e.src.charCodeAt(r); ) r++;
      if (r !== l + 2)
        return (e.pos += r - l), t || (e.pending += e.src.slice(l, r)), !0;
      for (e.pos = l + 2, o = 1; e.pos + 1 < s; ) {
        if (
          61 === e.src.charCodeAt(e.pos) &&
          61 === e.src.charCodeAt(e.pos + 1) &&
          ((i = e.src.charCodeAt(e.pos - 1)),
          61 !== (a = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) &&
            61 !== i &&
            (32 !== i && 10 !== i ? o-- : 32 !== a && 10 !== a && o++, o <= 0))
        ) {
          n = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return n
        ? ((e.posMax = e.pos),
          (e.pos = l + 2),
          t ||
            (e.push({ type: "mark_open", level: e.level++ }),
            e.parser.tokenize(e),
            e.push({ type: "mark_close", level: --e.level })),
          (e.pos = e.posMax + 2),
          (e.posMax = s),
          !0)
        : ((e.pos = l), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/newline.js": function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      var n,
        r,
        o = e.pos;
      if (10 !== e.src.charCodeAt(o)) return !1;
      if (((n = e.pending.length - 1), (r = e.posMax), !t))
        if (n >= 0 && 32 === e.pending.charCodeAt(n))
          if (n >= 1 && 32 === e.pending.charCodeAt(n - 1)) {
            for (var i = n - 2; i >= 0; i--)
              if (32 !== e.pending.charCodeAt(i)) {
                e.pending = e.pending.substring(0, i + 1);
                break;
              }
            e.push({ type: "hardbreak", level: e.level });
          } else
            (e.pending = e.pending.slice(0, -1)),
              e.push({ type: "softbreak", level: e.level });
        else e.push({ type: "softbreak", level: e.level });
      for (o++; o < r && 32 === e.src.charCodeAt(o); ) o++;
      return (e.pos = o), !0;
    };
  },
  "./node_modules/remarkable/lib/rules_inline/state_inline.js": function (
    e,
    t,
    n,
  ) {
    "use strict";
    function r(e, t, n, r, o) {
      (this.src = e),
        (this.env = r),
        (this.options = n),
        (this.parser = t),
        (this.tokens = o),
        (this.pos = 0),
        (this.posMax = this.src.length),
        (this.level = 0),
        (this.pending = ""),
        (this.pendingLevel = 0),
        (this.cache = []),
        (this.isInLabel = !1),
        (this.linkLevel = 0),
        (this.linkContent = ""),
        (this.labelUnmatchedScopes = 0);
    }
    (r.prototype.pushPending = function () {
      this.tokens.push({
        type: "text",
        content: this.pending,
        level: this.pendingLevel,
      }),
        (this.pending = "");
    }),
      (r.prototype.push = function (e) {
        this.pending && this.pushPending(),
          this.tokens.push(e),
          (this.pendingLevel = this.level);
      }),
      (r.prototype.cacheSet = function (e, t) {
        for (var n = this.cache.length; n <= e; n++) this.cache.push(0);
        this.cache[e] = t;
      }),
      (r.prototype.cacheGet = function (e) {
        return e < this.cache.length ? this.cache[e] : 0;
      }),
      (e.exports = r);
  },
  "./node_modules/remarkable/lib/rules_inline/sub.js": function (e, t, n) {
    "use strict";
    var r = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    e.exports = function (e, t) {
      var n,
        o,
        i = e.posMax,
        a = e.pos;
      if (126 !== e.src.charCodeAt(a)) return !1;
      if (t) return !1;
      if (a + 2 >= i) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      for (e.pos = a + 1; e.pos < i; ) {
        if (126 === e.src.charCodeAt(e.pos)) {
          n = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return n && a + 1 !== e.pos
        ? (o = e.src.slice(a + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)
          ? ((e.pos = a), !1)
          : ((e.posMax = e.pos),
            (e.pos = a + 1),
            t ||
              e.push({
                type: "sub",
                level: e.level,
                content: o.replace(r, "$1"),
              }),
            (e.pos = e.posMax + 1),
            (e.posMax = i),
            !0)
        : ((e.pos = a), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/sup.js": function (e, t, n) {
    "use strict";
    var r = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    e.exports = function (e, t) {
      var n,
        o,
        i = e.posMax,
        a = e.pos;
      if (94 !== e.src.charCodeAt(a)) return !1;
      if (t) return !1;
      if (a + 2 >= i) return !1;
      if (e.level >= e.options.maxNesting) return !1;
      for (e.pos = a + 1; e.pos < i; ) {
        if (94 === e.src.charCodeAt(e.pos)) {
          n = !0;
          break;
        }
        e.parser.skipToken(e);
      }
      return n && a + 1 !== e.pos
        ? (o = e.src.slice(a + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)
          ? ((e.pos = a), !1)
          : ((e.posMax = e.pos),
            (e.pos = a + 1),
            t ||
              e.push({
                type: "sup",
                level: e.level,
                content: o.replace(r, "$1"),
              }),
            (e.pos = e.posMax + 1),
            (e.posMax = i),
            !0)
        : ((e.pos = a), !1);
    };
  },
  "./node_modules/remarkable/lib/rules_inline/text.js": function (e, t, n) {
    "use strict";
    function r(e) {
      switch (e) {
        case 10:
        case 92:
        case 96:
        case 42:
        case 95:
        case 94:
        case 91:
        case 93:
        case 33:
        case 38:
        case 60:
        case 62:
        case 123:
        case 125:
        case 36:
        case 37:
        case 64:
        case 126:
        case 43:
        case 61:
        case 58:
          return !0;
        default:
          return !1;
      }
    }
    e.exports = function (e, t) {
      for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n)); ) n++;
      return (
        n !== e.pos &&
        (t || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0)
      );
    };
  },
  "./node_modules/resolve-pathname/index.js": function (e, t, n) {
    "use strict";
    function r(e) {
      return "/" === e.charAt(0);
    }
    function o(e, t) {
      for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
        e[n] = e[r];
      e.pop();
    }
    n.r(t),
      (t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = (e && e.split("/")) || [],
          i = (t && t.split("/")) || [],
          a = e && r(e),
          s = t && r(t),
          l = a || s;
        if (
          (e && r(e) ? (i = n) : n.length && (i.pop(), (i = i.concat(n))),
          !i.length)
        )
          return "/";
        var c = void 0;
        if (i.length) {
          var u = i[i.length - 1];
          c = "." === u || ".." === u || "" === u;
        } else c = !1;
        for (var p = 0, d = i.length; d >= 0; d--) {
          var f = i[d];
          "." === f
            ? o(i, d)
            : ".." === f
              ? (o(i, d), p++)
              : p && (o(i, d), p--);
        }
        if (!l) for (; p--; p) i.unshift("..");
        !l || "" === i[0] || (i[0] && r(i[0])) || i.unshift("");
        var m = i.join("/");
        return c && "/" !== m.substr(-1) && (m += "/"), m;
      });
  },
  "./node_modules/simple-swizzle/index.js": function (e, t, n) {
    "use strict";
    var r = n("./node_modules/is-arrayish/index.js"),
      o = Array.prototype.concat,
      i = Array.prototype.slice,
      a = (e.exports = function (e) {
        for (var t = [], n = 0, a = e.length; n < a; n++) {
          var s = e[n];
          r(s) ? (t = o.call(t, i.call(s))) : t.push(s);
        }
        return t;
      });
    a.wrap = function (e) {
      return function () {
        return e(a(arguments));
      };
    };
  },
  "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js":
    function (e, t, n) {
      var r;
      (r = function () {
        return (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { exports: {}, id: r, loaded: !1 });
            return (
              e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
            );
          }
          return (n.m = e), (n.c = t), (n.p = ""), n(0);
        })([
          function (e, t, n) {
            var r, o;
            (r = [n(1)]),
              void 0 ===
                (o = function (e) {
                  var t = {},
                    n = function () {
                      return (
                        navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                      );
                    },
                    r = function () {
                      return (
                        navigator.userAgent.toLowerCase().indexOf("firefox") >
                        -1
                      );
                    },
                    o = function () {
                      return (
                        navigator.userAgent.toLowerCase().indexOf("safari") > -1
                      );
                    },
                    i = function () {
                      return (
                        document.documentMode && document.documentMode >= 11
                      );
                    },
                    a = function (e, n) {
                      (this.sem = 0),
                        (this.mapForUri = n && n.cacheGlobally ? t : {}),
                        (this.done = e);
                    };
                  a.prototype.fetchScript = function (e) {
                    if (!(e in this.mapForUri)) {
                      this.sem++, (this.mapForUri[e] = null);
                      var t = d(),
                        n = this;
                      (t.onreadystatechange = function (t) {
                        n.onScriptLoad.call(n, t, e);
                      }),
                        t.open("GET", e, !0),
                        t.send();
                    }
                  };
                  var s = new RegExp("^(?:[a-z]+:)?//", "i");
                  a.prototype.onScriptLoad = function (t, n) {
                    if (4 === t.target.readyState) {
                      if (
                        200 === t.target.status ||
                        ("file://" === n.slice(0, 7) && 0 === t.target.status)
                      ) {
                        var r = t.target.responseText.match(
                          "//# [s]ourceMappingURL=(.*)[\\s]*$",
                          "m",
                        );
                        if (r && 2 === r.length) {
                          var o = r[1],
                            i = o.match(
                              "data:application/json;(charset=[^;]+;)?base64,(.*)",
                            );
                          if (i && i[2])
                            (this.mapForUri[n] = new e.SourceMapConsumer(
                              atob(i[2]),
                            )),
                              this.done(this.mapForUri);
                          else {
                            if (!s.test(o)) {
                              var a,
                                l = n.lastIndexOf("/");
                              -1 !== l &&
                                ((a = n.slice(0, l + 1)), (o = a + o));
                            }
                            var c = d(),
                              u = this;
                            (c.onreadystatechange = function () {
                              4 === c.readyState &&
                                (u.sem--,
                                (200 === c.status ||
                                  ("file://" === o.slice(0, 7) &&
                                    0 === c.status)) &&
                                  (u.mapForUri[n] = new e.SourceMapConsumer(
                                    c.responseText,
                                  )),
                                0 === u.sem && u.done(u.mapForUri));
                            }),
                              c.open("GET", o, !0),
                              c.send();
                          }
                        } else this.sem--;
                      } else this.sem--;
                      0 === this.sem && this.done(this.mapForUri);
                    }
                  };
                  var l = function (e, t, n) {
                    for (var r, o = [], i = 0; i < e.length; i++) {
                      var a = t[i];
                      if (a) {
                        var s = a[1],
                          l = parseInt(a[2], 10),
                          p = parseInt(a[3], 10);
                        if ((r = n[s])) {
                          var d = r.originalPositionFor({ line: l, column: p });
                          o.push(
                            u(d.source, d.line, d.column, d.name || c(e[i])),
                          );
                        } else o.push(u(s, l, p, c(e[i])));
                      } else o.push(e[i]);
                    }
                    return o;
                  };
                  function c(e) {
                    var t = String(e).match(
                      n() || i() ? / +at +([^ ]*).*/ : /([^@]*)@.*/,
                    );
                    return t && t[1];
                  }
                  var u = function (e, t, n, r) {
                      return (
                        "    at " +
                        (r || "(unknown)") +
                        " (" +
                        e +
                        ":" +
                        t +
                        ":" +
                        n +
                        ")"
                      );
                    },
                    p = [
                      function () {
                        return new XMLHttpRequest();
                      },
                      function () {
                        return new ActiveXObject("Msxml2.XMLHTTP");
                      },
                      function () {
                        return new ActiveXObject("Msxml3.XMLHTTP");
                      },
                      function () {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                      },
                    ];
                  function d() {
                    for (var e = !1, t = 0; t < p.length; t++) {
                      try {
                        e = p[t]();
                      } catch (e) {
                        continue;
                      }
                      break;
                    }
                    return e;
                  }
                  return {
                    mapStackTrace: function (e, t, s) {
                      var c,
                        u,
                        p,
                        d,
                        f,
                        m,
                        h,
                        g = {},
                        b = new a(function () {
                          var e = l(c, g, b.mapForUri);
                          t(e);
                        }, s);
                      if (n() || i())
                        (m = /^ +at.+\((.*):([0-9]+):([0-9]+)/),
                          (f = 4),
                          (h = 1);
                      else {
                        if (!r() && !o()) throw new Error("unknown browser :(");
                        (m = /@(.*):([0-9]+):([0-9]+)/), (f = 4), (h = 0);
                      }
                      c = e.split("\n").slice(h);
                      for (var y = 0; y < c.length; y++)
                        (u = c[y]),
                          (s && s.filter && !s.filter(u)) ||
                            ((p = u.match(m)) &&
                              p.length === f &&
                              ((g[y] = p),
                              (d = p[1]).match(/<anonymous>/) ||
                                b.fetchScript(d)));
                      0 === b.sem && b.done(b.mapForUri);
                    },
                  };
                }.apply(t, r)) || (e.exports = o);
          },
          function (e, t, n) {
            var r = n(2),
              o = n(3),
              i = n(4).ArraySet,
              a = n(5),
              s = n(7).quickSort;
            function l(e) {
              var t = e;
              return (
                "string" == typeof e &&
                  (t = JSON.parse(e.replace(/^\)\]\}'/, ""))),
                null != t.sections ? new p(t) : new c(t)
              );
            }
            function c(e) {
              var t = e;
              "string" == typeof e &&
                (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
              var n = r.getArg(t, "version"),
                o = r.getArg(t, "sources"),
                a = r.getArg(t, "names", []),
                s = r.getArg(t, "sourceRoot", null),
                l = r.getArg(t, "sourcesContent", null),
                c = r.getArg(t, "mappings"),
                u = r.getArg(t, "file", null);
              if (n != this._version)
                throw new Error("Unsupported version: " + n);
              (o = o
                .map(String)
                .map(r.normalize)
                .map(function (e) {
                  return s && r.isAbsolute(s) && r.isAbsolute(e)
                    ? r.relative(s, e)
                    : e;
                })),
                (this._names = i.fromArray(a.map(String), !0)),
                (this._sources = i.fromArray(o, !0)),
                (this.sourceRoot = s),
                (this.sourcesContent = l),
                (this._mappings = c),
                (this.file = u);
            }
            function u() {
              (this.generatedLine = 0),
                (this.generatedColumn = 0),
                (this.source = null),
                (this.originalLine = null),
                (this.originalColumn = null),
                (this.name = null);
            }
            function p(e) {
              var t = e;
              "string" == typeof e &&
                (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
              var n = r.getArg(t, "version"),
                o = r.getArg(t, "sections");
              if (n != this._version)
                throw new Error("Unsupported version: " + n);
              (this._sources = new i()), (this._names = new i());
              var a = { line: -1, column: 0 };
              this._sections = o.map(function (e) {
                if (e.url)
                  throw new Error(
                    "Support for url field in sections not implemented.",
                  );
                var t = r.getArg(e, "offset"),
                  n = r.getArg(t, "line"),
                  o = r.getArg(t, "column");
                if (n < a.line || (n === a.line && o < a.column))
                  throw new Error(
                    "Section offsets must be ordered and non-overlapping.",
                  );
                return (
                  (a = t),
                  {
                    generatedOffset: {
                      generatedLine: n + 1,
                      generatedColumn: o + 1,
                    },
                    consumer: new l(r.getArg(e, "map")),
                  }
                );
              });
            }
            (l.fromSourceMap = function (e) {
              return c.fromSourceMap(e);
            }),
              (l.prototype._version = 3),
              (l.prototype.__generatedMappings = null),
              Object.defineProperty(l.prototype, "_generatedMappings", {
                get: function () {
                  return (
                    this.__generatedMappings ||
                      this._parseMappings(this._mappings, this.sourceRoot),
                    this.__generatedMappings
                  );
                },
              }),
              (l.prototype.__originalMappings = null),
              Object.defineProperty(l.prototype, "_originalMappings", {
                get: function () {
                  return (
                    this.__originalMappings ||
                      this._parseMappings(this._mappings, this.sourceRoot),
                    this.__originalMappings
                  );
                },
              }),
              (l.prototype._charIsMappingSeparator = function (e, t) {
                var n = e.charAt(t);
                return ";" === n || "," === n;
              }),
              (l.prototype._parseMappings = function (e, t) {
                throw new Error("Subclasses must implement _parseMappings");
              }),
              (l.GENERATED_ORDER = 1),
              (l.ORIGINAL_ORDER = 2),
              (l.GREATEST_LOWER_BOUND = 1),
              (l.LEAST_UPPER_BOUND = 2),
              (l.prototype.eachMapping = function (e, t, n) {
                var o,
                  i = t || null;
                switch (n || l.GENERATED_ORDER) {
                  case l.GENERATED_ORDER:
                    o = this._generatedMappings;
                    break;
                  case l.ORIGINAL_ORDER:
                    o = this._originalMappings;
                    break;
                  default:
                    throw new Error("Unknown order of iteration.");
                }
                var a = this.sourceRoot;
                o.map(function (e) {
                  var t = null === e.source ? null : this._sources.at(e.source);
                  return (
                    null != t && null != a && (t = r.join(a, t)),
                    {
                      source: t,
                      generatedLine: e.generatedLine,
                      generatedColumn: e.generatedColumn,
                      originalLine: e.originalLine,
                      originalColumn: e.originalColumn,
                      name: null === e.name ? null : this._names.at(e.name),
                    }
                  );
                }, this).forEach(e, i);
              }),
              (l.prototype.allGeneratedPositionsFor = function (e) {
                var t = r.getArg(e, "line"),
                  n = {
                    source: r.getArg(e, "source"),
                    originalLine: t,
                    originalColumn: r.getArg(e, "column", 0),
                  };
                if (
                  (null != this.sourceRoot &&
                    (n.source = r.relative(this.sourceRoot, n.source)),
                  !this._sources.has(n.source))
                )
                  return [];
                n.source = this._sources.indexOf(n.source);
                var i = [],
                  a = this._findMapping(
                    n,
                    this._originalMappings,
                    "originalLine",
                    "originalColumn",
                    r.compareByOriginalPositions,
                    o.LEAST_UPPER_BOUND,
                  );
                if (a >= 0) {
                  var s = this._originalMappings[a];
                  if (void 0 === e.column)
                    for (var l = s.originalLine; s && s.originalLine === l; )
                      i.push({
                        line: r.getArg(s, "generatedLine", null),
                        column: r.getArg(s, "generatedColumn", null),
                        lastColumn: r.getArg(s, "lastGeneratedColumn", null),
                      }),
                        (s = this._originalMappings[++a]);
                  else
                    for (
                      var c = s.originalColumn;
                      s && s.originalLine === t && s.originalColumn == c;

                    )
                      i.push({
                        line: r.getArg(s, "generatedLine", null),
                        column: r.getArg(s, "generatedColumn", null),
                        lastColumn: r.getArg(s, "lastGeneratedColumn", null),
                      }),
                        (s = this._originalMappings[++a]);
                }
                return i;
              }),
              (t.SourceMapConsumer = l),
              (c.prototype = Object.create(l.prototype)),
              (c.prototype.consumer = l),
              (c.fromSourceMap = function (e) {
                var t = Object.create(c.prototype),
                  n = (t._names = i.fromArray(e._names.toArray(), !0)),
                  o = (t._sources = i.fromArray(e._sources.toArray(), !0));
                (t.sourceRoot = e._sourceRoot),
                  (t.sourcesContent = e._generateSourcesContent(
                    t._sources.toArray(),
                    t.sourceRoot,
                  )),
                  (t.file = e._file);
                for (
                  var a = e._mappings.toArray().slice(),
                    l = (t.__generatedMappings = []),
                    p = (t.__originalMappings = []),
                    d = 0,
                    f = a.length;
                  d < f;
                  d++
                ) {
                  var m = a[d],
                    h = new u();
                  (h.generatedLine = m.generatedLine),
                    (h.generatedColumn = m.generatedColumn),
                    m.source &&
                      ((h.source = o.indexOf(m.source)),
                      (h.originalLine = m.originalLine),
                      (h.originalColumn = m.originalColumn),
                      m.name && (h.name = n.indexOf(m.name)),
                      p.push(h)),
                    l.push(h);
                }
                return s(t.__originalMappings, r.compareByOriginalPositions), t;
              }),
              (c.prototype._version = 3),
              Object.defineProperty(c.prototype, "sources", {
                get: function () {
                  return this._sources.toArray().map(function (e) {
                    return null != this.sourceRoot
                      ? r.join(this.sourceRoot, e)
                      : e;
                  }, this);
                },
              }),
              (c.prototype._parseMappings = function (e, t) {
                for (
                  var n,
                    o,
                    i,
                    l,
                    c,
                    p = 1,
                    d = 0,
                    f = 0,
                    m = 0,
                    h = 0,
                    g = 0,
                    b = e.length,
                    y = 0,
                    v = {},
                    _ = {},
                    w = [],
                    k = [];
                  y < b;

                )
                  if (";" === e.charAt(y)) p++, y++, (d = 0);
                  else if ("," === e.charAt(y)) y++;
                  else {
                    for (
                      (n = new u()).generatedLine = p, l = y;
                      l < b && !this._charIsMappingSeparator(e, l);
                      l++
                    );
                    if ((i = v[(o = e.slice(y, l))])) y += o.length;
                    else {
                      for (i = []; y < l; )
                        a.decode(e, y, _),
                          (c = _.value),
                          (y = _.rest),
                          i.push(c);
                      if (2 === i.length)
                        throw new Error(
                          "Found a source, but no line and column",
                        );
                      if (3 === i.length)
                        throw new Error(
                          "Found a source and line, but no column",
                        );
                      v[o] = i;
                    }
                    (n.generatedColumn = d + i[0]),
                      (d = n.generatedColumn),
                      i.length > 1 &&
                        ((n.source = h + i[1]),
                        (h += i[1]),
                        (n.originalLine = f + i[2]),
                        (f = n.originalLine),
                        (n.originalLine += 1),
                        (n.originalColumn = m + i[3]),
                        (m = n.originalColumn),
                        i.length > 4 && ((n.name = g + i[4]), (g += i[4]))),
                      k.push(n),
                      "number" == typeof n.originalLine && w.push(n);
                  }
                s(k, r.compareByGeneratedPositionsDeflated),
                  (this.__generatedMappings = k),
                  s(w, r.compareByOriginalPositions),
                  (this.__originalMappings = w);
              }),
              (c.prototype._findMapping = function (e, t, n, r, i, a) {
                if (e[n] <= 0)
                  throw new TypeError(
                    "Line must be greater than or equal to 1, got " + e[n],
                  );
                if (e[r] < 0)
                  throw new TypeError(
                    "Column must be greater than or equal to 0, got " + e[r],
                  );
                return o.search(e, t, i, a);
              }),
              (c.prototype.computeColumnSpans = function () {
                for (var e = 0; e < this._generatedMappings.length; ++e) {
                  var t = this._generatedMappings[e];
                  if (e + 1 < this._generatedMappings.length) {
                    var n = this._generatedMappings[e + 1];
                    if (t.generatedLine === n.generatedLine) {
                      t.lastGeneratedColumn = n.generatedColumn - 1;
                      continue;
                    }
                  }
                  t.lastGeneratedColumn = 1 / 0;
                }
              }),
              (c.prototype.originalPositionFor = function (e) {
                var t = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column"),
                  },
                  n = this._findMapping(
                    t,
                    this._generatedMappings,
                    "generatedLine",
                    "generatedColumn",
                    r.compareByGeneratedPositionsDeflated,
                    r.getArg(e, "bias", l.GREATEST_LOWER_BOUND),
                  );
                if (n >= 0) {
                  var o = this._generatedMappings[n];
                  if (o.generatedLine === t.generatedLine) {
                    var i = r.getArg(o, "source", null);
                    null !== i &&
                      ((i = this._sources.at(i)),
                      null != this.sourceRoot &&
                        (i = r.join(this.sourceRoot, i)));
                    var a = r.getArg(o, "name", null);
                    return (
                      null !== a && (a = this._names.at(a)),
                      {
                        source: i,
                        line: r.getArg(o, "originalLine", null),
                        column: r.getArg(o, "originalColumn", null),
                        name: a,
                      }
                    );
                  }
                }
                return { source: null, line: null, column: null, name: null };
              }),
              (c.prototype.hasContentsOfAllSources = function () {
                return (
                  !!this.sourcesContent &&
                  this.sourcesContent.length >= this._sources.size() &&
                  !this.sourcesContent.some(function (e) {
                    return null == e;
                  })
                );
              }),
              (c.prototype.sourceContentFor = function (e, t) {
                if (!this.sourcesContent) return null;
                if (
                  (null != this.sourceRoot &&
                    (e = r.relative(this.sourceRoot, e)),
                  this._sources.has(e))
                )
                  return this.sourcesContent[this._sources.indexOf(e)];
                var n;
                if (
                  null != this.sourceRoot &&
                  (n = r.urlParse(this.sourceRoot))
                ) {
                  var o = e.replace(/^file:\/\//, "");
                  if ("file" == n.scheme && this._sources.has(o))
                    return this.sourcesContent[this._sources.indexOf(o)];
                  if ((!n.path || "/" == n.path) && this._sources.has("/" + e))
                    return this.sourcesContent[this._sources.indexOf("/" + e)];
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
              }),
              (c.prototype.generatedPositionFor = function (e) {
                var t = r.getArg(e, "source");
                if (
                  (null != this.sourceRoot &&
                    (t = r.relative(this.sourceRoot, t)),
                  !this._sources.has(t))
                )
                  return { line: null, column: null, lastColumn: null };
                var n = {
                    source: (t = this._sources.indexOf(t)),
                    originalLine: r.getArg(e, "line"),
                    originalColumn: r.getArg(e, "column"),
                  },
                  o = this._findMapping(
                    n,
                    this._originalMappings,
                    "originalLine",
                    "originalColumn",
                    r.compareByOriginalPositions,
                    r.getArg(e, "bias", l.GREATEST_LOWER_BOUND),
                  );
                if (o >= 0) {
                  var i = this._originalMappings[o];
                  if (i.source === n.source)
                    return {
                      line: r.getArg(i, "generatedLine", null),
                      column: r.getArg(i, "generatedColumn", null),
                      lastColumn: r.getArg(i, "lastGeneratedColumn", null),
                    };
                }
                return { line: null, column: null, lastColumn: null };
              }),
              (t.BasicSourceMapConsumer = c),
              (p.prototype = Object.create(l.prototype)),
              (p.prototype.constructor = l),
              (p.prototype._version = 3),
              Object.defineProperty(p.prototype, "sources", {
                get: function () {
                  for (var e = [], t = 0; t < this._sections.length; t++)
                    for (
                      var n = 0;
                      n < this._sections[t].consumer.sources.length;
                      n++
                    )
                      e.push(this._sections[t].consumer.sources[n]);
                  return e;
                },
              }),
              (p.prototype.originalPositionFor = function (e) {
                var t = {
                    generatedLine: r.getArg(e, "line"),
                    generatedColumn: r.getArg(e, "column"),
                  },
                  n = o.search(t, this._sections, function (e, t) {
                    var n = e.generatedLine - t.generatedOffset.generatedLine;
                    return (
                      n || e.generatedColumn - t.generatedOffset.generatedColumn
                    );
                  }),
                  i = this._sections[n];
                return i
                  ? i.consumer.originalPositionFor({
                      line:
                        t.generatedLine - (i.generatedOffset.generatedLine - 1),
                      column:
                        t.generatedColumn -
                        (i.generatedOffset.generatedLine === t.generatedLine
                          ? i.generatedOffset.generatedColumn - 1
                          : 0),
                      bias: e.bias,
                    })
                  : { source: null, line: null, column: null, name: null };
              }),
              (p.prototype.hasContentsOfAllSources = function () {
                return this._sections.every(function (e) {
                  return e.consumer.hasContentsOfAllSources();
                });
              }),
              (p.prototype.sourceContentFor = function (e, t) {
                for (var n = 0; n < this._sections.length; n++) {
                  var r = this._sections[n].consumer.sourceContentFor(e, !0);
                  if (r) return r;
                }
                if (t) return null;
                throw new Error('"' + e + '" is not in the SourceMap.');
              }),
              (p.prototype.generatedPositionFor = function (e) {
                for (var t = 0; t < this._sections.length; t++) {
                  var n = this._sections[t];
                  if (
                    -1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))
                  ) {
                    var o = n.consumer.generatedPositionFor(e);
                    if (o)
                      return {
                        line: o.line + (n.generatedOffset.generatedLine - 1),
                        column:
                          o.column +
                          (n.generatedOffset.generatedLine === o.line
                            ? n.generatedOffset.generatedColumn - 1
                            : 0),
                      };
                  }
                }
                return { line: null, column: null };
              }),
              (p.prototype._parseMappings = function (e, t) {
                (this.__generatedMappings = []), (this.__originalMappings = []);
                for (var n = 0; n < this._sections.length; n++)
                  for (
                    var o = this._sections[n],
                      i = o.consumer._generatedMappings,
                      a = 0;
                    a < i.length;
                    a++
                  ) {
                    var l = i[a],
                      c = o.consumer._sources.at(l.source);
                    null !== o.consumer.sourceRoot &&
                      (c = r.join(o.consumer.sourceRoot, c)),
                      this._sources.add(c),
                      (c = this._sources.indexOf(c));
                    var u = o.consumer._names.at(l.name);
                    this._names.add(u), (u = this._names.indexOf(u));
                    var p = {
                      source: c,
                      generatedLine:
                        l.generatedLine + (o.generatedOffset.generatedLine - 1),
                      generatedColumn:
                        l.generatedColumn +
                        (o.generatedOffset.generatedLine === l.generatedLine
                          ? o.generatedOffset.generatedColumn - 1
                          : 0),
                      originalLine: l.originalLine,
                      originalColumn: l.originalColumn,
                      name: u,
                    };
                    this.__generatedMappings.push(p),
                      "number" == typeof p.originalLine &&
                        this.__originalMappings.push(p);
                  }
                s(
                  this.__generatedMappings,
                  r.compareByGeneratedPositionsDeflated,
                ),
                  s(this.__originalMappings, r.compareByOriginalPositions);
              }),
              (t.IndexedSourceMapConsumer = p);
          },
          function (e, t) {
            t.getArg = function (e, t, n) {
              if (t in e) return e[t];
              if (3 === arguments.length) return n;
              throw new Error('"' + t + '" is a required argument.');
            };
            var n =
                /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
              r = /^data:.+\,.+$/;
            function o(e) {
              var t = e.match(n);
              return t
                ? {
                    scheme: t[1],
                    auth: t[2],
                    host: t[3],
                    port: t[4],
                    path: t[5],
                  }
                : null;
            }
            function i(e) {
              var t = "";
              return (
                e.scheme && (t += e.scheme + ":"),
                (t += "//"),
                e.auth && (t += e.auth + "@"),
                e.host && (t += e.host),
                e.port && (t += ":" + e.port),
                e.path && (t += e.path),
                t
              );
            }
            function a(e) {
              var n = e,
                r = o(e);
              if (r) {
                if (!r.path) return e;
                n = r.path;
              }
              for (
                var a,
                  s = t.isAbsolute(n),
                  l = n.split(/\/+/),
                  c = 0,
                  u = l.length - 1;
                u >= 0;
                u--
              )
                "." === (a = l[u])
                  ? l.splice(u, 1)
                  : ".." === a
                    ? c++
                    : c > 0 &&
                      ("" === a
                        ? (l.splice(u + 1, c), (c = 0))
                        : (l.splice(u, 2), c--));
              return (
                "" === (n = l.join("/")) && (n = s ? "/" : "."),
                r ? ((r.path = n), i(r)) : n
              );
            }
            (t.urlParse = o),
              (t.urlGenerate = i),
              (t.normalize = a),
              (t.join = function (e, t) {
                "" === e && (e = "."), "" === t && (t = ".");
                var n = o(t),
                  s = o(e);
                if ((s && (e = s.path || "/"), n && !n.scheme))
                  return s && (n.scheme = s.scheme), i(n);
                if (n || t.match(r)) return t;
                if (s && !s.host && !s.path) return (s.host = t), i(s);
                var l =
                  "/" === t.charAt(0) ? t : a(e.replace(/\/+$/, "") + "/" + t);
                return s ? ((s.path = l), i(s)) : l;
              }),
              (t.isAbsolute = function (e) {
                return "/" === e.charAt(0) || !!e.match(n);
              }),
              (t.relative = function (e, t) {
                "" === e && (e = "."), (e = e.replace(/\/$/, ""));
                for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
                  var r = e.lastIndexOf("/");
                  if (r < 0) return t;
                  if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
                  ++n;
                }
                return Array(n + 1).join("../") + t.substr(e.length + 1);
              });
            var s = !("__proto__" in Object.create(null));
            function l(e) {
              return e;
            }
            function c(e) {
              if (!e) return !1;
              var t = e.length;
              if (t < 9) return !1;
              if (
                95 !== e.charCodeAt(t - 1) ||
                95 !== e.charCodeAt(t - 2) ||
                111 !== e.charCodeAt(t - 3) ||
                116 !== e.charCodeAt(t - 4) ||
                111 !== e.charCodeAt(t - 5) ||
                114 !== e.charCodeAt(t - 6) ||
                112 !== e.charCodeAt(t - 7) ||
                95 !== e.charCodeAt(t - 8) ||
                95 !== e.charCodeAt(t - 9)
              )
                return !1;
              for (var n = t - 10; n >= 0; n--)
                if (36 !== e.charCodeAt(n)) return !1;
              return !0;
            }
            function u(e, t) {
              return e === t ? 0 : e > t ? 1 : -1;
            }
            (t.toSetString = s
              ? l
              : function (e) {
                  return c(e) ? "$" + e : e;
                }),
              (t.fromSetString = s
                ? l
                : function (e) {
                    return c(e) ? e.slice(1) : e;
                  }),
              (t.compareByOriginalPositions = function (e, t, n) {
                var r = e.source - t.source;
                return 0 !== r
                  ? r
                  : 0 != (r = e.originalLine - t.originalLine)
                    ? r
                    : 0 != (r = e.originalColumn - t.originalColumn) || n
                      ? r
                      : 0 != (r = e.generatedColumn - t.generatedColumn)
                        ? r
                        : 0 != (r = e.generatedLine - t.generatedLine)
                          ? r
                          : e.name - t.name;
              }),
              (t.compareByGeneratedPositionsDeflated = function (e, t, n) {
                var r = e.generatedLine - t.generatedLine;
                return 0 !== r
                  ? r
                  : 0 != (r = e.generatedColumn - t.generatedColumn) || n
                    ? r
                    : 0 != (r = e.source - t.source)
                      ? r
                      : 0 != (r = e.originalLine - t.originalLine)
                        ? r
                        : 0 != (r = e.originalColumn - t.originalColumn)
                          ? r
                          : e.name - t.name;
              }),
              (t.compareByGeneratedPositionsInflated = function (e, t) {
                var n = e.generatedLine - t.generatedLine;
                return 0 !== n
                  ? n
                  : 0 != (n = e.generatedColumn - t.generatedColumn)
                    ? n
                    : 0 !== (n = u(e.source, t.source))
                      ? n
                      : 0 != (n = e.originalLine - t.originalLine)
                        ? n
                        : 0 != (n = e.originalColumn - t.originalColumn)
                          ? n
                          : u(e.name, t.name);
              });
          },
          function (e, t) {
            (t.GREATEST_LOWER_BOUND = 1),
              (t.LEAST_UPPER_BOUND = 2),
              (t.search = function (e, n, r, o) {
                if (0 === n.length) return -1;
                var i = (function e(n, r, o, i, a, s) {
                  var l = Math.floor((r - n) / 2) + n,
                    c = a(o, i[l], !0);
                  return 0 === c
                    ? l
                    : c > 0
                      ? r - l > 1
                        ? e(l, r, o, i, a, s)
                        : s == t.LEAST_UPPER_BOUND
                          ? r < i.length
                            ? r
                            : -1
                          : l
                      : l - n > 1
                        ? e(n, l, o, i, a, s)
                        : s == t.LEAST_UPPER_BOUND
                          ? l
                          : n < 0
                            ? -1
                            : n;
                })(-1, n.length, e, n, r, o || t.GREATEST_LOWER_BOUND);
                if (i < 0) return -1;
                for (; i - 1 >= 0 && 0 === r(n[i], n[i - 1], !0); ) --i;
                return i;
              });
          },
          function (e, t, n) {
            var r = n(2),
              o = Object.prototype.hasOwnProperty;
            function i() {
              (this._array = []), (this._set = Object.create(null));
            }
            (i.fromArray = function (e, t) {
              for (var n = new i(), r = 0, o = e.length; r < o; r++)
                n.add(e[r], t);
              return n;
            }),
              (i.prototype.size = function () {
                return Object.getOwnPropertyNames(this._set).length;
              }),
              (i.prototype.add = function (e, t) {
                var n = r.toSetString(e),
                  i = o.call(this._set, n),
                  a = this._array.length;
                (i && !t) || this._array.push(e), i || (this._set[n] = a);
              }),
              (i.prototype.has = function (e) {
                var t = r.toSetString(e);
                return o.call(this._set, t);
              }),
              (i.prototype.indexOf = function (e) {
                var t = r.toSetString(e);
                if (o.call(this._set, t)) return this._set[t];
                throw new Error('"' + e + '" is not in the set.');
              }),
              (i.prototype.at = function (e) {
                if (e >= 0 && e < this._array.length) return this._array[e];
                throw new Error("No element indexed by " + e);
              }),
              (i.prototype.toArray = function () {
                return this._array.slice();
              }),
              (t.ArraySet = i);
          },
          function (e, t, n) {
            var r = n(6);
            (t.encode = function (e) {
              var t,
                n = "",
                o = (function (e) {
                  return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
                })(e);
              do {
                (t = 31 & o), (o >>>= 5) > 0 && (t |= 32), (n += r.encode(t));
              } while (o > 0);
              return n;
            }),
              (t.decode = function (e, t, n) {
                var o,
                  i,
                  a,
                  s,
                  l = e.length,
                  c = 0,
                  u = 0;
                do {
                  if (t >= l)
                    throw new Error(
                      "Expected more digits in base 64 VLQ value.",
                    );
                  if (-1 === (i = r.decode(e.charCodeAt(t++))))
                    throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                  (o = !!(32 & i)), (c += (i &= 31) << u), (u += 5);
                } while (o);
                (n.value = ((s = (a = c) >> 1), 1 == (1 & a) ? -s : s)),
                  (n.rest = t);
              });
          },
          function (e, t) {
            var n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
                "",
              );
            (t.encode = function (e) {
              if (0 <= e && e < n.length) return n[e];
              throw new TypeError("Must be between 0 and 63: " + e);
            }),
              (t.decode = function (e) {
                return 65 <= e && e <= 90
                  ? e - 65
                  : 97 <= e && e <= 122
                    ? e - 97 + 26
                    : 48 <= e && e <= 57
                      ? e - 48 + 52
                      : 43 == e
                        ? 62
                        : 47 == e
                          ? 63
                          : -1;
              });
          },
          function (e, t) {
            function n(e, t, n) {
              var r = e[t];
              (e[t] = e[n]), (e[n] = r);
            }
            function r(e, t, o, i) {
              if (o < i) {
                var a = o - 1;
                n(
                  e,
                  ((u = o), (p = i), Math.round(u + Math.random() * (p - u))),
                  i,
                );
                for (var s = e[i], l = o; l < i; l++)
                  t(e[l], s) <= 0 && n(e, (a += 1), l);
                n(e, a + 1, l);
                var c = a + 1;
                r(e, t, o, c - 1), r(e, t, c + 1, i);
              }
              var u, p;
            }
            t.quickSort = function (e, t) {
              r(e, t, 0, e.length - 1);
            };
          },
        ]);
      }),
        (e.exports = r());
    },
  "./node_modules/value-equal/index.js": function (e, t, n) {
    "use strict";
    n.r(t);
    var r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    t.default = function e(t, n) {
      if (t === n) return !0;
      if (null == t || null == n) return !1;
      if (Array.isArray(t))
        return (
          Array.isArray(n) &&
          t.length === n.length &&
          t.every(function (t, r) {
            return e(t, n[r]);
          })
        );
      var o = void 0 === t ? "undefined" : r(t);
      if (o !== (void 0 === n ? "undefined" : r(n))) return !1;
      if ("object" === o) {
        var i = t.valueOf(),
          a = n.valueOf();
        if (i !== t || a !== n) return e(i, a);
        var s = Object.keys(t),
          l = Object.keys(n);
        return (
          s.length === l.length &&
          s.every(function (r) {
            return e(t[r], n[r]);
          })
        );
      }
      return !1;
    };
  },
  "./node_modules/warning/browser.js": function (e, t, n) {
    "use strict";
    e.exports = function () {};
  },
  "./node_modules/webpack/buildin/global.js": function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  "./node_modules/webpack/buildin/module.js": function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  "./pages/0.index.js": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("./node_modules/react/index.js"),
      o = n("./node_modules/linaria/build/index.runtime.js"),
      i = n("./node_modules/component-docs/components.js"),
      a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      s = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    n("./.linaria-cache/pages/src/Home.css");
    var l = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r["Component"]),
          s(t, [
            {
              key: "render",
              value: function () {
                return r.createElement(
                  "div",
                  Object(o.styles)(u),
                  r.createElement(
                    "div",
                    Object(o.styles)(p),
                    r.createElement(
                      "img",
                      a({}, Object(o.styles)(c), {
                        src: "images/paper-color.png",
                        alt: "React Native Paper",
                      }),
                    ),
                    r.createElement(
                      "p",
                      null,
                      "Cross-platform Material Design for React Native",
                    ),
                    r.createElement(
                      "div",
                      Object(o.styles)(d),
                      r.createElement(
                        i.Link,
                        a({}, Object(o.styles)(f, m), {
                          to: "getting-started.html",
                        }),
                        "Get started",
                      ),
                      r.createElement(
                        "a",
                        a({}, Object(o.styles)(f, h), {
                          href: "https://github.com/callstack/react-native-paper",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }),
                        "GitHub",
                      ),
                    ),
                    r.createElement(
                      "a",
                      {
                        href: "https://snack.expo.io/@satya164/github.com-callstack-react-native-paper:example",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      "Try it out with Snack",
                    ),
                  ),
                  r.createElement(
                    "div",
                    Object(o.styles)(g),
                    b.map(function (e, t) {
                      return r.createElement("img", {
                        key: t,
                        src: e,
                        alt: "",
                      });
                    }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(),
      c = "_logo__ap3x3f",
      u = "_container__ap3x3f",
      p = "_cover__ap3x3f",
      d = "_buttons__ap3x3f",
      f = "_button__ap3x3f",
      m = "_primary__ap3x3f",
      h = "_secondary__ap3x3f",
      g = "_gallery__ap3x3f",
      b = [
        "gallery/button.png",
        "gallery/card.png",
        "gallery/input.png",
        "gallery/searchbar.png",
        "gallery/typography.png",
        "gallery/checkbox.png",
        "gallery/radio.png",
        "gallery/switch.png",
      ],
      y = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    var v = (function (e) {
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
          )
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, r["Component"]),
        y(t, [
          {
            key: "render",
            value: function () {
              return r.createElement(l, null);
            },
          },
        ]),
        t
      );
    })();
    v.meta = {
      title: "Home",
      description: "Material design for React Native",
      permalink: "index",
    };
    t.default = v;
  },
  "./pages/1.showcase.js": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("./node_modules/react/index.js"),
      o = n.n(r),
      i = n("./node_modules/linaria/build/index.runtime.js"),
      a = n("./node_modules/color/index.js"),
      s = n.n(a),
      l = function (e) {
        var t = e.color;
        return o.a.createElement(
          "svg",
          { width: "20px", height: "23px", viewBox: "0 0 20 23" },
          o.a.createElement(
            "g",
            {
              id: "Page-1",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
            },
            o.a.createElement(
              "g",
              {
                id: "Store-Icons",
                transform: "translate(-99.000000, -109.000000)",
                fill: t,
              },
              o.a.createElement(
                "g",
                {
                  id: "circ_Google_download",
                  transform: "translate(85.000000, 99.000000)",
                },
                o.a.createElement("path", {
                  d: "M14.6531183,32.3718354 C14.2575042,32.2646912 14,31.869772 14,31.2586525 L14,11.0864944 C14,10.5205045 14.2180326,10.1387856 14.5636564,10 L14.5636564,10 L24.4228332,21.2416571 L14.6531183,32.3718354 L14.6531183,32.3718354 Z M16.0103048,31.9436451 L27.8776422,25.1809087 L24.9871835,21.8851421 L16.0103048,31.9436451 L16.0103048,31.9436451 Z M27.9593618,17.2126559 L16.2574085,10.5426155 L25.0042946,20.5792254 L27.9593618,17.2126559 L27.9593618,17.2126559 Z M28.7533298,17.6652127 L33.3375107,20.2781673 C34.2054705,20.7728989 34.213408,21.5704009 33.3375107,22.0695409 L28.6373545,24.7479781 L25.5716571,21.2302452 L28.7533298,17.6652127 L28.7533298,17.6652127 Z",
                }),
              ),
            ),
          ),
        );
      },
      c = function (e) {
        var t = e.color;
        return o.a.createElement(
          "svg",
          { width: "20px", height: "23px", viewBox: "0 0 20 23" },
          o.a.createElement(
            "g",
            {
              id: "Page-1",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
            },
            o.a.createElement(
              "g",
              {
                id: "Store-Icons",
                transform: "translate(-40.000000, -108.000000)",
                fill: t,
              },
              o.a.createElement(
                "g",
                {
                  id: "circ_iPhone_download",
                  transform: "translate(25.000000, 99.000000)",
                },
                o.a.createElement("path", {
                  d: "M16.7193074,9 C15.7697602,9 15,9.83217005 15,10.8627041 L15,30.1372959 C15,31.166039 15.7689087,32 16.7193074,32 L25.2806926,32 C26.2302398,32 27,31.16783 27,30.1372959 L27,10.8627041 C27,9.83396103 26.2310913,9 25.2806926,9 L16.7193074,9 L16.7193074,9 Z M16.125,12.0163934 L16.125,28.9836066 L25.875,28.9836066 L25.875,12.0163934 L16.125,12.0163934 L16.125,12.0163934 Z M21,31.2459016 C21.4142136,31.2459016 21.75,30.9082803 21.75,30.4918033 C21.75,30.0753263 21.4142136,29.7377049 21,29.7377049 C20.5857864,29.7377049 20.25,30.0753263 20.25,30.4918033 C20.25,30.9082803 20.5857864,31.2459016 21,31.2459016 L21,31.2459016 Z M19.5,10.5081967 C19.5,10.7164352 19.6289062,10.8852459 19.7986193,10.8852459 L22.2013807,10.8852459 C22.3663036,10.8852459 22.5,10.7103452 22.5,10.5081967 C22.5,10.2999582 22.3710938,10.1311475 22.2013807,10.1311475 L19.7986193,10.1311475 C19.6336964,10.1311475 19.5,10.3060483 19.5,10.5081967 Z",
                  id: "IPhone-Vector-2",
                }),
              ),
            ),
          ),
        );
      },
      u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      p = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    n("./.linaria-cache/pages/src/Showcase.css");
    var d = [
        { color: "#673AB7", name: "Showman", image: "showcase/showman.png" },
      ],
      f = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r["Component"]),
          p(t, [
            {
              key: "render",
              value: function () {
                return r.createElement(
                  "div",
                  Object(i.styles)(m),
                  r.createElement(
                    "div",
                    Object(i.styles)(h),
                    r.createElement("h1", null, "Who's using Paper?"),
                    r.createElement(
                      "p",
                      null,
                      "Check out these apps built using Paper. Send us a",
                      " ",
                      r.createElement(
                        "a",
                        {
                          href: "https://github.com/callstack/react-native-paper/pulls",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "pull request",
                      ),
                      " ",
                      "to add your app to this list.",
                    ),
                  ),
                  r.createElement(
                    "div",
                    Object(i.styles)(b),
                    d.map(function (e) {
                      var t = s()(e.color).light() ? "#000000" : "#FFFFFF";
                      return r.createElement(
                        "div",
                        { key: e.image },
                        r.createElement(
                          "div",
                          Object(i.styles)(v),
                          r.createElement(
                            "img",
                            u({}, Object(i.styles)(_), {
                              src: e.image,
                              alt: "",
                            }),
                          ),
                          r.createElement(
                            "div",
                            u({}, Object(i.styles)(y), {
                              style: { backgroundColor: e.color },
                            }),
                            r.createElement(
                              "h3",
                              u({}, Object(i.styles)(g), {
                                style: { color: t },
                              }),
                              e.name,
                            ),
                            r.createElement(
                              "div",
                              Object(i.styles)(w),
                              r.createElement(
                                "a",
                                {
                                  href: e.android || null,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  style: { opacity: d.android ? 1 : 0.4 },
                                },
                                r.createElement(l, { color: t }),
                              ),
                              r.createElement("div", Object(i.styles)(k)),
                              r.createElement(
                                "a",
                                {
                                  href: e.ios || null,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  style: { opacity: d.ios ? 1 : 0.4 },
                                },
                                r.createElement(c, { color: t }),
                              ),
                            ),
                          ),
                        ),
                      );
                    }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(),
      m = "_container__1nub3sr",
      h = "_content__1nub3sr",
      g = "_appName__1nub3sr",
      b = "_gallery__1nub3sr",
      y = "_info__1nub3sr",
      v = "_imageContainer__1nub3sr",
      _ = "_image__1nub3sr",
      w = "_badgeContainer__1nub3sr",
      k = "_separation__1nub3sr",
      x = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    var C = (function (e) {
      function t() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
          )
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, r["Component"]),
        x(t, [
          {
            key: "render",
            value: function () {
              return r.createElement(f, null);
            },
          },
        ]),
        t
      );
    })();
    C.meta = {
      title: "Showcase",
      description: "Showcase for applications build with Paper",
      permalink: "showcase",
    };
    t.default = C;
  },
});
//# sourceMappingURL=app.bundle.js.map
