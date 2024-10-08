module.exports = [
  (function () {
    var e = require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/0.index.js");
    var c = typeof e.default === "function" ? e.default : e;
    var m = e.meta || {};
    return {
      title: m.title || "Home",
      link: m.link || "index",
      description: m.description,
      type: "custom",
      data: c,
    };
  })(),
  {
    filepath: "pages/1.getting-started.md",
    title: "Getting Started",
    description: "",
    link: "getting-started",
    data: "# Getting Started\n\n## Installation\n\nOpen a Terminal in your project's folder and run,\n\n```sh\nyarn add react-native-paper\n```\n\nIf you're on a vanilla React Native project, you also need to install and link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).\n\n```sh\nyarn add react-native-vector-icons\nreact-native link react-native-vector-icons\n```\n\nIf you don't want to install vector icons, you can use [babel-plugin-optional-require](https://github.com/satya164/babel-plugin-optional-require) to opt-out.\n\nIf you use Expo, you don't need to install vector icons. But if you have a `babel.config.js` or `.babelrc` file, make sure that it includes `babel-preset-expo`.\n\nTo get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add `react-native-paper/babel` to the `plugins` section in your `babel.config.js` for production environment. It should look like this:\n\n```js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n  env: {\n    production: {\n      plugins: ['react-native-paper/babel'],\n    },\n  },\n};\n```\n\nIf you created your project using Expo, it'll look something like this:\n\n```js\nmodule.exports = function(api) {\n  api.cache(true);\n  return {\n    presets: ['babel-preset-expo'],\n    env: {\n      production: {\n        plugins: ['react-native-paper/babel'],\n      },\n    },\n  };\n};\n```\n\nThe plugin only works if you are importing the library using ES2015 import statements and not with `require`.\n\n**Note:** The above examples are for the latest `react-native` using Babel 7. If you have `react-native <= 0.55`, you'll have a `.babelrc` file instead of a `babel.config.js` file and the content of the file will be different.\n\nIf you're using Flow for typechecking your code, you need to add the following under the `[options]` section in your `.flowconfig`:\n\n```ini\nmodule.file_ext=.js\nmodule.file_ext=.native.js\nmodule.file_ext=.android.js\nmodule.file_ext=.ios.js\n```\n\n## Usage\n\nWrap your root component in `Provider` from `react-native-paper`. If you have a vanilla React Native project, it's a good idea to add it in the component which is passed to `AppRegistry.registerComponent`. This will usually be in the `index.js` file. If you have an Expo project, you can do this inside the exported component in the `App.js` file.\n\nExample:\n\n```js\nimport * as React from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n\nAppRegistry.registerComponent('main', () => Main);\n```\n\nThe `PaperProvider` component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.\n\nIf you have another provider (such as `Redux`), wrap it outside `PaperProvider` so that the context is available to components rendered inside a `Modal` from the library:\n\n```js\nimport * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport { Provider as StoreProvider } from 'react-redux';\nimport App from './src/App';\nimport store from './store';\n\nexport default function Main() {\n  return (\n    <StoreProvider store={store}>\n      <PaperProvider>\n        <App />\n      </PaperProvider>\n    </StoreProvider>\n  );\n}\n```\n\n## Customization\n\nYou can provide a custom theme to customize the colors, fonts etc. with the `Provider` component. Check the [default theme](https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.js) to see what customization options are supported.\n\nExample:\n\n```js\nimport * as React from 'react';\nimport { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  colors: {\n    ...DefaultTheme.colors,\n    primary: 'tomato',\n    accent: 'yellow',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n",
    type: "md",
    dependencies: [],
  },
  {
    filepath: "pages/2.theming.md",
    title: "Theming",
    description: "",
    link: "theming",
    data: "# Theming\n\n## Applying a theme to the whole app\n\nTo support custom themes, paper exports a `Provider` component. You need to wrap your root component with the provider to be able to support themes.\n\n```js\nimport * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n\nIf no prop is specified, this will apply the [default theme](https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.js) to the components. You can also provide a `theme` prop with a theme object with same properties as the default theme:\n\n```js\nimport * as React from 'react';\nimport { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  roundness: 2,\n  colors: {\n    ...DefaultTheme.colors,\n    primary: '#3498db',\n    accent: '#f1c40f',\n  }\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n```\n\nYou can change the theme prop dynamically and all the components will automatically update to reflect the new theme.\n\nA theme usually contains the following properties:\n\n- `dark` (`boolean`): whether this is a dark theme or light theme.\n- `roundness` (`number`): roundness of common elements, such as buttons.\n- `colors` (`object`): various colors used throught different elements.\n  - `primary` - primary color for your app, usually your brand color.\n  - `accent` - secondary color for your app which complements the primary color.\n  - `background` - background color for pages, such as lists.\n  - `surface` - background color for elements containing content, such as cards.\n  - `text` - text color for content.\n  - `disabled` - color for disabled elements.\n  - `placeholder` - color for placeholder text, such as input placeholder.\n  - `backdrop` - color for backdrops of various components such as modals.\n- `fonts` (`object`): various fonts used throught different elements.\n  - `regular`\n  - `medium`\n  - `light`\n  - `thin`\n\nWhen creating a custom theme, you will need to provide all of these properties.\n\n## Applying a theme to a paper component\n\nIf you want to change the theme for a certain component from the library, you can directly pass the `theme` prop to the component. The theme passed as the prop is merged with the theme from the `Provider`.\n\n```js\nimport * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function ButtonExample() {\n  return (\n    <Button raised theme={{ roundness: 3 }}>\n      Press me\n    </Button>\n  );\n}\n```\n\n## Using the theme in your own components\n\nTo access the theme in your own components, you can use the `withTheme` HOC exported from the library. If you wrap your component with the HOC, you'll receive the theme as a prop.\n\n```js\nimport * as React from 'react';\nimport { withTheme } from 'react-native-paper';\n\nfunction MyComponent(props) {\n  const { colors } = props.theme;\n  return <Text style={{ color: colors.primary }}>Yo!</Text>;\n}\n\nexport default withTheme(MyComponent);\n```\n\nComponents wrapped with `withTheme` support the theme from the `Provider` as well as from the `theme` prop.\n\n## Customizing all instances of a component\n\nSometimes you want to style a component in a different way everywhere and don't want to change the properties in the theme so that other components are not affected. For example, say you want to change the font for all your buttons, but don't want to change `theme.fonts.medium` because it affects other components.\n\nWe don't have an API to do this, because you can already do it with components:\n\n```js\nimport * as React from 'react';\nimport { Button } from 'react-native-paper';\n\nexport default function FancyButton(props) {\n  return <Button theme={{ fonts: { medium: 'Open Sans' } }} {...props} />;\n}\n```\n\nNow you can use your `FancyButton` component everywhere instead of using `Button` from Paper.\n\n## Gotchas\n\nThe `Provider` exposes the theme to the components via [React's context API](https://reactjs.org/docs/context.html), which means that the component must be in the same tree as the `Provider`. Some React Native components will render a different tree such as a `Modal`, in which case the components inside the `Modal` won't be able to access the theme. The work around is to get the theme using the `withTheme` HOC and pass it down to the components as props, or expose it again with the exported `ThemeProvider` component.\n\nThe `Modal` component from the library already handles this edge case, so you won't need to do anything.\n",
    type: "md",
    dependencies: [],
  },
  (function () {
    var React = require("react");
    var Content =
      require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/node_modules/component-docs/dist/templates/Content.js").default;

    var m = { exports: {} };
    var r = {
      react: require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/node_modules/react/index.js"),
      "@mdx-js/tag": require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/node_modules/@mdx-js/tag/dist/index.js"),
      "./src/components/IconsList.js": require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/src/components/IconsList.js"),
    };

    (function (module, exports, require, __filename, __dirname) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports["default"] = exports.meta = void 0;

      var React = _interopRequireWildcard(require("react"));

      var _tag = require("@mdx-js/tag");

      var _IconsList = _interopRequireDefault(
        require("./src/components/IconsList.js"),
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache() {
          return cache;
        };
        return cache;
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (
          obj === null ||
          (_typeof(obj) !== "object" && typeof obj !== "function")
        ) {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor =
          Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _createSuper(Derived) {
        return function () {
          var Super = _getPrototypeOf(Derived),
            result;
          if (_isNativeReflectConstruct()) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === "object" || typeof call === "function")
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {}),
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      var meta = {
        title: "Icons",
      };
      exports.meta = meta;
      var layoutProps = {
        meta: meta,
      };

      var MDXContent = /*#__PURE__*/ (function (_React$Component) {
        _inherits(MDXContent, _React$Component);

        var _super = _createSuper(MDXContent);

        function MDXContent(props) {
          var _this;

          _classCallCheck(this, MDXContent);

          _this = _super.call(this, props);
          _this.layout = null;
          return _this;
        }

        _createClass(MDXContent, [
          {
            key: "render",
            value: function render() {
              var _this$props = this.props,
                components = _this$props.components,
                props = _objectWithoutProperties(_this$props, ["components"]);

              return /*#__PURE__*/ React.createElement(
                _tag.MDXTag,
                {
                  name: "wrapper",
                  components: components,
                },
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h1",
                    components: components,
                  },
                  "Icons",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h2",
                    components: components,
                  },
                  "Configuring icons",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Many of the components require the ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "https://github.com/oblador/react-native-vector-icons",
                      },
                    },
                    "react-native-vector-icons",
                  ),
                  " library to render correctly. If you're using Expo, you don't need to do anything extra, but if it's vanilla React Native project, you need link the library as described in the getting started guide.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "If you opted out of vector icons support using ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "https://github.com/satya164/babel-plugin-optional-require",
                      },
                    },
                    "babel-plugin-optional-require",
                  ),
                  ", you won't be able to use icon names for the icon prop anymore. Some components may not look correct without vector icons and might need extra configuration.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h2",
                    components: components,
                  },
                  "Using the ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "h2",
                    },
                    "icon",
                  ),
                  " prop",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Many components such as ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "Button",
                  ),
                  " accept an ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "icon",
                  ),
                  " prop which is used to display an icon. The ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "icon",
                  ),
                  " prop supports the following type of values:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h3",
                    components: components,
                  },
                  "1. An icon name",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "You can pass the name of an icon from ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "https://material.io/icons/",
                      },
                    },
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "a",
                      },
                      "MaterialIcon",
                    ),
                  ),
                  ". This will use the ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "https://github.com/oblador/react-native-vector-icons",
                      },
                    },
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "a",
                      },
                      "react-native-vector-icons",
                    ),
                  ),
                  " library to display the icon.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Example:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add-a-photo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  "details",
                  null,
                  /*#__PURE__*/ React.createElement(
                    "summary",
                    null,
                    "See the list of supported icons",
                  ),
                  /*#__PURE__*/ React.createElement(
                    _IconsList["default"],
                    null,
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h3",
                    components: components,
                  },
                  "2. An image source",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "You can pass an image source, such as an object of shape ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "{ uri: 'https://path.to' }",
                  ),
                  " or a local image: ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "require('../path/to/image.png')",
                  ),
                  " to use as an icon. The image might be rendered with a different color than the one provided depending on the component. If don't want this behavior, see the next example to pass an ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "Image",
                  ),
                  " element.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Remote image:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token punctuation">:</span> <span class="token string">\'https://avatars0.githubusercontent.com/u/17571969?v=3&#x26;s=400\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Local image:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../assets/chameleon.jpg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h3",
                    components: components,
                  },
                  "3. A render function",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "You can pass a function which returns a react element to be used an icon. The function receives an object with ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "size",
                  ),
                  " and ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "color",
                  ),
                  " properties as it's argument. element is used as is without any modification. However, it might get clipped if the provided element's size are bigger than what the component renders. It's upto you to make sure that the size of the element is correct.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Example:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span>\n  <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> size<span class="token punctuation">,</span> color <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Image</span></span>\n      <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../assets/chameleon.jpg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> size<span class="token punctuation">,</span> height<span class="token punctuation">:</span> size<span class="token punctuation">,</span> tintColor<span class="token punctuation">:</span> color <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "h2",
                    components: components,
                  },
                  "RTL support",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "If you want your icon to behave properly in a RTL environment, you can pass an object to the ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "icon",
                  ),
                  " prop with shape: ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "{ source: { uri: 'https://path.to' }, direction : 'rtl' }",
                  ),
                  ". ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "source",
                  ),
                  " can be any of the values that the ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "icon",
                  ),
                  " prop accepts in ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "#1.-an-icon-name",
                      },
                    },
                    "option 1",
                  ),
                  " and ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "a",
                      components: components,
                      parentName: "p",
                      props: {
                        href: "#2.-an-image-source",
                      },
                    },
                    "option 2",
                  ),
                  ". For ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "direction",
                  ),
                  " you have few options:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "ol",
                    components: components,
                  },
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "li",
                      components: components,
                      parentName: "ol",
                    },
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "li",
                      },
                      "auto",
                    ),
                    " - uses the device language to determine if icon should be displayed from rtl. Uses the ",
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "li",
                      },
                      "I18nManager",
                    ),
                    " module to get this info.",
                  ),
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "li",
                      components: components,
                      parentName: "ol",
                    },
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "li",
                      },
                      "rtl",
                    ),
                    " - flips the icon so that it is rtl, this is regradless of the device language.",
                  ),
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "li",
                      components: components,
                      parentName: "ol",
                    },
                    /*#__PURE__*/ React.createElement(
                      _tag.MDXTag,
                      {
                        name: "inlineCode",
                        components: components,
                        parentName: "li",
                      },
                      "ltr",
                    ),
                    " - displays from ltr, even if in an rtl environment.",
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Example for using an image source:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> source<span class="token punctuation">:</span> <span class="token punctuation">{</span> uri<span class="token punctuation">:</span> <span class="token string">\'https://avatars0.githubusercontent.com/u/17571969?v=3&#x26;s=400\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> direction<span class="token punctuation">:</span> <span class="token string">\'rtl\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Example for using an icon name:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> source<span class="token punctuation">:</span> <span class="token string">"add-a-photo"</span><span class="token punctuation">,</span> direction<span class="token punctuation">:</span> <span class="token string">\'rtl\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Press me\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "You can also use a render function. Along with ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "size",
                  ),
                  " and ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "color",
                  ),
                  ", you have access to ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "direction",
                  ),
                  " which will either be ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "'rtl'",
                  ),
                  " or ",
                  /*#__PURE__*/ React.createElement(
                    _tag.MDXTag,
                    {
                      name: "inlineCode",
                      components: components,
                      parentName: "p",
                    },
                    "'ltr'",
                  ),
                  ". You can then decide how to render your icon component accordingly.",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "p",
                    components: components,
                  },
                  "Example of using a render function:",
                ),
                /*#__PURE__*/ React.createElement(
                  _tag.MDXTag,
                  {
                    name: "pre",
                    components: components,
                    props: {
                      className: "language-js",
                    },
                  },
                  /*#__PURE__*/ React.createElement(_tag.MDXTag, {
                    name: "code",
                    components: components,
                    parentName: "pre",
                    props: {
                      className: "language-js",
                      dangerouslySetInnerHTML: {
                        __html:
                          '<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span>\n  <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> size<span class="token punctuation">,</span> color<span class="token punctuation">,</span> direction <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token operator">&#x3C;</span>Image\n      source<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../assets/chameleon.jpg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          transform<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> scaleX<span class="token punctuation">:</span> direction <span class="token operator">===</span> <span class="token string">\'rtl\'</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          width<span class="token punctuation">:</span> size<span class="token punctuation">,</span>\n          height<span class="token punctuation">:</span> size<span class="token punctuation">,</span>\n          tintColor<span class="token punctuation">:</span> color\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n  Press me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n',
                      },
                    },
                  }),
                ),
              );
            },
          },
        ]);

        return MDXContent;
      })(React.Component);

      exports["default"] = MDXContent;
      MDXContent.isMDXComponent = true;
    })(
      m,
      m.exports,
      function (name) {
        return r[name];
      },
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/3.icons.mdx",
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages",
    );

    var meta = m.exports.meta || {};

    return {
      title: meta.title || "Icons",
      link: meta.link || "icons",
      description: meta.description,
      type: "custom",
      data: function MDXContent(props) {
        return React.createElement(
          Content,
          {},
          React.createElement(m.exports.default, props),
        );
      },
    };
  })(),
  {
    filepath: "pages/4.react-native-web.md",
    title: "Using on the Web",
    description: "",
    link: "using-on-the-web",
    data: '# Using on the Web\n\n## Pre-requisites\n\nMake sure that you have followed the getting started guide and have `react-native-paper` installed and configured before following this guide.\n\nWe\'re going to use [react-native-web](https://github.com/necolas/react-native-web) and [webpack](https://webpack.js.org/) to use React Native Paper on the web, so let\'s install them as well.\n\nTo install `react-native-web`, run:\n\n```sh\nyarn add react-native-web react-dom react-art\n```\n\n### Using CRA ([Create React App](https://github.com/facebook/create-react-app))\n\nInstall [`react-app-rewired`](https://github.com/timarney/react-app-rewired) to override `webpack` configuration:\n\n```sh\nyarn add --dev react-app-rewired\n```\n\n[Configure `babel-loader`](#2-configure-babel-loader) using a new file called `config-overrides.js`:\n\n```js\nmodule.exports = function override(config, env) {\n  config.module.rules.push({\n    test: /\\.js$/,\n    exclude: /node_modules[/\\\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,\n    use: {\n      loader: "babel-loader",\n      options: {\n        // Disable reading babel configuration\n        babelrc: false,\n        configFile: false,\n\n        // The configration for compilation\n        presets: [\n          ["@babel/preset-env", { useBuiltIns: "usage" }],\n          "@babel/preset-react",\n          "@babel/preset-flow"\n        ],\n        plugins: [\n          "@babel/plugin-proposal-class-properties",\n          "@babel/plugin-proposal-object-rest-spread"\n        ]\n      }\n    }\n  });\n\n  return config;\n};\n```\n\nChange your script in `package.json`:\n\n```diff\n/* package.json */\n\n  "scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom"\n}\n```\n\n### Custom webpack setup\n\nTo install `webpack`, run:\n\n```sh\nyarn add --dev webpack webpack-cli webpack-dev-server\n```\n\nIf you don\'t have a webpack config in your project, copy the following to `webpack.config.js` get started:\n\n```js\nconst path = require(\'path\');\n\nmodule.exports = {\n  mode: \'development\',\n\n  // Path to the entry file, change it according to the path you have\n  entry: path.join(__dirname, \'App.js\'),\n\n  // Path for the output files\n  output: {\n    path: path.join(__dirname, \'dist\'),\n    filename: \'app.bundle.js\',\n  },\n\n  // Enable source map support\n  devtool: \'source-map\',\n\n  // Loaders and resolver config\n  module: {\n    rules: [\n\n    ],\n  },\n  resolve: {\n\n  },\n\n  // Development server config\n  devServer: {\n    contentBase: [path.join(__dirname, \'public\')],\n    historyApiFallback: true,\n  },\n};\n```\n\nAlso create a folder named `public` and add the following file named `index.html`:\n\n```html\n<!doctype html>\n<head>\n  <meta charSet="utf-8" />\n  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n\n  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />\n\n  <title>App</title>\n\n  <style>\n    html, body, #root {\n      height: 100%;\n    }\n\n    #root {\n      display: flex;\n      flex-direction: column;\n    }\n  </style>\n</head>\n<body>\n  <div id="root"></div>\n  <script src="app.bundle.js"></script>\n</body>\n```\n\nNow we\'re ready to start configuring the project.\n\n## Configure webpack\n\n### 1. Alias `react-native` to `react-native-web`\n\nFirst, we have to tell webpack to use `react-native-web` instead of `react-native`. Add the following alias in your webpack config under `resolve`:\n\n```js\nalias: {\n  \'react-native$\': require.resolve(\'react-native-web\'),\n}\n```\n\n### 2. Configure `babel-loader`\n\nNext, we want to tell `babel-loader` to compile `react-native-paper` and `react-native-vector-icons`. We would also want to disable reading the babel configuration files to prevent any conflicts.\n\nFirst install the required dependencies:\n\n```sh\nyarn add --dev babel-loader @babel/preset-env @babel/preset-react @babel/preset-flow @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread\n```\n\nNow, add the following in the `module.rules` array in your webpack config:\n\n```js\n{\n  test: /\\.js$/,\n  exclude: /node_modules[/\\\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,\n  use: {\n    loader: \'babel-loader\',\n    options: {\n      // Disable reading babel configuration\n      babelrc: false,\n      configFile: false,\n\n      // The configration for compilation\n      presets: [\n        [\'@babel/preset-env\', { useBuiltIns: \'usage\' }],\n        \'@babel/preset-react\',\n        \'@babel/preset-flow\',\n      ],\n      plugins: [\n        \'@babel/plugin-proposal-class-properties\',\n        \'@babel/plugin-proposal-object-rest-spread\'\n      ],\n    },\n  },\n},\n```\n\n### 3. Configure `file-loader`\n\nTo be able to import images and other assets using `require`, we need to configure `file-loader`. Let\'s install it:\n\n```sh\nyarn add --dev file-loader\n```\n\nTo configure it, add the following in the `module.rules` array in your webpack config:\n\n```js\n{\n  test: /\\.(jpg|png|woff|woff2|eot|ttf|svg)$/,\n  loader: \'file-loader\',\n}\n```\n\n## Load the Material icons\n\nIf you followed the getting started guide, you should have the following code in your root component:\n\n```js\n<PaperProvider>\n  <App />\n</PaperProvider>\n```\n\nNow we need tweak this section to load the Material icons from the [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons) library:\n\n```js\n<PaperProvider>\n  <React.Fragment>\n    {Platform.OS === \'web\' ? (\n      <style type="text/css">{`\n        @font-face {\n          font-family: \'MaterialIcons\';\n          src: url(${require(\'react-native-vector-icons/Fonts/MaterialIcons.ttf\')}) format(\'truetype\');\n        }\n      `}</style>\n    ) : null}\n    <App />\n  </React.Fragment>\n</PaperProvider>\n```\n\nRemember to import `Platform` from `react-native` at the top:\n\n```js\nimport { Platform } from \'react-native\';\n```\n\nYou can also load these fonts using [`css-loader`](https://github.com/webpack-contrib/css-loader) if you prefer.\n\n## Load the Roboto fonts (optional)\n\nThe default theme in React Native Paper uses the Roboto font. You can add them to your project following [the instructions on its Google Fonts page](https://fonts.google.com/specimen/Roboto?selection.family=Roboto:100,300,400,500).\n\n## We\'re done!\n\nYou can run `webpack-dev-server` to run the webpack server and open your project in the browser. You can add the following script in your `package.json` under the `"scripts"` section to make it easier:\n\n```json\n"web": "webpack-dev-server --open"\n```\n\nNow you can run `yarn web` to run the project on web.\n',
    type: "md",
    dependencies: [],
  },
  (function () {
    var e = require("/Users/drakeoon/Desktop/Dev/projects/react-native-paper/docs/pages/5.showcase.js");
    var c = typeof e.default === "function" ? e.default : e;
    var m = e.meta || {};
    return {
      title: m.title || "Showcase",
      link: m.link || "showcase",
      description: m.description,
      type: "custom",
      data: c,
    };
  })(),
  {
    filepath: "pages/6.recommended-libraries.md",
    title: "Recommended Libraries",
    description: "",
    link: "recommended-libraries",
    data: "# Recommended Libraries\n\nOur mission is to provide a full suite of well-integrated components built with Material Design in mind. However, many components already have better well maintained implementations.\n\nHere are some of the libraries we recommend:\n\n## Tabs\n\n[react-native-community/react-native-tab-view](https://github.com/react-native-community/react-native-tab-view)\n\nMaterial Design themed [swipeable tabs](https://material.io/design/components/tabs.html), maintained by [@satya164](https://twitter.com/satya164) and [@mosdnk](https://twitter.com/mosdnk).\n\n## Bottom sheet\n\n[osdnk/reanimated-bottom-sheet](https://github.com/osdnk/react-native-reanimated-bottom-sheet)\n\nAn implementation [bottom sheet behaviour](https://material.io/design/components/sheets-bottom.html), maintained by [@mosdnk](https://twitter.com/mosdnk).\n",
    type: "md",
    dependencies: [],
  },
  {
    filepath: "pages/7.contributing.md",
    title: "Contributing",
    description: "",
    link: "contributing",
    data: "# Contributing to React Native Paper\n\n## Code of Conduct\n\nWe want this community to be friendly and respectful to each other. Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.\n\n## Our Development Process\n\nThe core team works directly on GitHub and all work is public.\n\n### Development workflow\n\n> **Working on your first pull request?** You can learn how from this *free* series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).\n\n1. Fork the repo and create your branch from `master` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).\n2. Run `yarn bootstrap` to setup the development environment.\n3. Do the changes you want and test them out in the example app before sending a pull request.\n\n### Commit message convention\n\nWe follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:\n\n* `fix`: bug fixes, e.g. fix Button color on DarkTheme.\n* `feat`: new features, e.g. add Snackbar component.\n* `refactor`: code refactor, e.g. new folder structure for components.\n* `docs`: changes into documentation, e.g. add usage example for Button.\n* `test`: adding or updating tests, eg unit, snapshot testing.\n* `chore`: tooling changes, e.g. change circleci config.\n* `BREAKING CHANGE`: for changes that break existing usage, e.g. change API of a component.\n\nOur pre-commit hooks verify that your commit message matches this format when committing.\n\n### Linting and tests\n\nWe use `flow` for type checking, `eslint` with `prettier` for linting and formatting the code, and `jest` for testing. Our pre-commit hooks verify that the linter and tests pass when commiting. You can also run the following commands manually:\n\n* `yarn flow`: run flow on all files.\n* `yarn typescript`: run tests for typescript definitions.\n* `yarn lint`: lint files with eslint and prettier.\n* `yarn test`: run unit tests with jest.\n\n### Sending a pull request\n\nWhen you're sending a pull request:\n\n* Prefer small pull requests focused on one change.\n* Verify that `flow`, `eslint` and all tests are passing.\n* Preview the documentation to make sure it looks good.\n* Follow the pull request template when opening a pull request.\n\nWhen you're working on a component:\n\n* Follow the guidelines described in the [official material design docs](https://material.io/guidelines/).\n* Write a brief description of every prop when defining `type Props` to aid with documentation.\n* Provide an example usage for the component (check other components to get a idea).\n* Update the type definitions for Flow and Typescript if you changed an API or added a component.\n\n### Running the example\n\nThe example app uses [Expo](https://expo.io/) for the React Native example. You will need to install the Expo app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://itunes.apple.com/app/apple-store/id982107779) to start developing.\n\nAfter you're done, you can run `yarn example start` in the project root (or `expo start` in the `example/` folder) and scan the QR code to launch it on your device.\n\nTo run the example on web, run `yarn example web` in the project root.\n\n### Working on documentation\n\nThe documentation is automatically generated from the [flowtype](https://flowtype.org) annotations in the components. You can add comments above the type annotations to add descriptions. To preview the generated documentation, run `yarn docs start` in the project root.\n\n### Publishing a release\n\nWe use [release-it](https://github.com/webpro/release-it) to automate our release. If you have publish access to the NPM package, run the following from the master branch to publish a new release:\n\n```sh\nyarn release\n```\n\nNOTE: You must have a `GITHUB_TOKEN` environment variable available. You can create a GitHub access token with the \"repo\" access [here](https://github.com/settings/tokens).\n\n## Reporting issues\n\nYou can report issues on our [bug tracker](https://github.com/callstack/react-native-paper/issues). Please follow the issue template when opening an issue.\n\n## License\n\nBy contributing to React Native Paper, you agree that your contributions will be licensed under its **MIT** license.\n\n",
    type: "md",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/CONTRIBUTING.md",
    ],
  },
  { type: "separator" },
  {
    filepath: "../src/components/ActivityIndicator.js",
    title: "ActivityIndicator",
    description:
      'Activity indicator is used to present progress of some activity in the app.\nIt can be used as a drop-in for the ActivityIndicator shipped with React Native.\n\n<div class="screenshots">\n  <img src="screenshots/activity-indicator.gif" style="width: 100px;" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ActivityIndicator, Colors } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ActivityIndicator animating={true} color={Colors.red800} />\n);\n\nexport default MyComponent;\n```',
    link: "activity-indicator",
    data: {
      description:
        'Activity indicator is used to present progress of some activity in the app.\nIt can be used as a drop-in for the ActivityIndicator shipped with React Native.\n\n<div class="screenshots">\n  <img src="screenshots/activity-indicator.gif" style="width: 100px;" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { ActivityIndicator, Colors } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <ActivityIndicator animating={true} color={Colors.red800} />\n);\n\nexport default MyComponent;\n```',
      displayName: "ActivityIndicator",
      methods: [
        {
          name: "_startRotation",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_stopRotation",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        animating: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to show the indicator or hide it.",
          defaultValue: { value: "true", computed: false },
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "The color of the spinner.",
        },
        size: {
          required: false,
          flowType: {
            name: "union",
            raw: "'small' | 'large' | number",
            elements: [
              { name: "literal", value: "'small'" },
              { name: "literal", value: "'large'" },
              { name: "number" },
            ],
          },
          description: "Size of the indicator.",
          defaultValue: { value: "'small'", computed: false },
        },
        hidesWhenStopped: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether the indicator should hide when not animating.",
          defaultValue: { value: "true", computed: false },
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/ActivityIndicator.js",
    ],
  },
  {
    filepath: "../src/components/Appbar/Appbar.js",
    title: "Appbar",
    description:
      "A component to display action items in a bar. It can be placed at the top or bottom.\nThe top bar usually contains the screen title, controls such as navigation buttons, menu button etc.\nThe bottom bar usually provides access to a drawer and up to four actions.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/appbar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Appbar } from 'react-native-paper';\nimport { StyleSheet } from 'react-native';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Appbar style={styles.bottom}>\n        <Appbar.Action icon=\"archive\" onPress={() => console.log('Pressed archive')} />\n        <Appbar.Action icon=\"mail\" onPress={() => console.log('Pressed mail')} />\n        <Appbar.Action icon=\"label\" onPress={() => console.log('Pressed label')} />\n        <Appbar.Action icon=\"delete\" onPress={() => console.log('Pressed delete')} />\n      </Appbar>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  bottom: {\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    bottom: 0,\n  },\n});\n```",
    link: "appbar",
    data: {
      description:
        "A component to display action items in a bar. It can be placed at the top or bottom.\nThe top bar usually contains the screen title, controls such as navigation buttons, menu button etc.\nThe bottom bar usually provides access to a drawer and up to four actions.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/appbar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Appbar } from 'react-native-paper';\nimport { StyleSheet } from 'react-native';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Appbar style={styles.bottom}>\n        <Appbar.Action icon=\"archive\" onPress={() => console.log('Pressed archive')} />\n        <Appbar.Action icon=\"mail\" onPress={() => console.log('Pressed mail')} />\n        <Appbar.Action icon=\"label\" onPress={() => console.log('Pressed label')} />\n        <Appbar.Action icon=\"delete\" onPress={() => console.log('Pressed delete')} />\n      </Appbar>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  bottom: {\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    bottom: 0,\n  },\n});\n```",
      displayName: "Appbar",
      methods: [],
      statics: [
        { name: "Content", description: null, docblock: null, type: null },
        { name: "Action", description: null, docblock: null, type: null },
        { name: "BackAction", description: null, docblock: null, type: null },
        { name: "Header", description: null, docblock: null, type: null },
      ],
      props: {
        dark: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the background color is a dark color. A dark appbar will render light text and vice-versa.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Appbar`.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Appbar/Appbar.js",
    ],
  },
  {
    filepath: "../src/components/Appbar/AppbarAction.js",
    title: "Appbar.Action",
    description: "A component used to display an action item in the appbar.",
    link: "appbar-action",
    data: {
      description: "A component used to display an action item in the appbar.",
      displayName: "Appbar.Action",
      methods: [],
      statics: [],
      props: {
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for action icon.",
        },
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Name of the icon to show.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Optional icon size.",
          defaultValue: { value: "24", computed: false },
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the button. This is read by the screen reader when the user taps the button.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Appbar/AppbarAction.js",
    ],
    group: "Appbar",
  },
  {
    filepath: "../src/components/Appbar/AppbarBackAction.js",
    title: "Appbar.BackAction",
    description: "A component used to display a back button in the appbar.",
    link: "appbar-back-action",
    data: {
      description: "A component used to display a back button in the appbar.",
      displayName: "Appbar.BackAction",
      methods: [],
      statics: [],
      props: {
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for back icon.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Optional icon size.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the button. This is read by the screen reader when the user taps the button.",
          defaultValue: { value: "'Back'", computed: false },
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Appbar/AppbarBackAction.js",
    ],
    group: "Appbar",
  },
  {
    filepath: "../src/components/Appbar/AppbarContent.js",
    title: "Appbar.Content",
    description:
      "A component used to display a title and optional subtitle in a appbar.",
    link: "appbar-content",
    data: {
      description:
        "A component used to display a title and optional subtitle in a appbar.",
      displayName: "Appbar.Content",
      methods: [],
      statics: [],
      props: {
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for the text.",
        },
        title: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text for the title.",
        },
        titleStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style for the title.",
        },
        subtitle: {
          required: false,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text for the subtitle.",
        },
        subtitleStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style for the subtitle.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Appbar/AppbarContent.js",
    ],
    group: "Appbar",
  },
  {
    filepath: "../src/components/Appbar/AppbarHeader.js",
    title: "Appbar.Header",
    description:
      'A component to use as a header at the top of the screen.\nIt can contain the screen title, controls such as navigation buttons, menu button etc.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/appbar-header.android.png" />\n    <figcaption>Android</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/appbar-header.ios.png" />\n    <figcaption>iOS</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Appbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  _goBack = () => console.log(\'Went back\');\n\n  _onSearch = () => console.log(\'Searching\');\n\n  _onMore = () => console.log(\'Shown more\');\n\n  render() {\n    return (\n      <Appbar.Header>\n        <Appbar.BackAction\n          onPress={this._goBack}\n        />\n        <Appbar.Content\n          title="Title"\n          subtitle="Subtitle"\n        />\n        <Appbar.Action icon="search" onPress={this._onSearch} />\n        <Appbar.Action icon="more-vert" onPress={this._onMore} />\n      </Appbar.Header>\n    );\n  }\n}\n```',
    link: "appbar-header",
    data: {
      description:
        'A component to use as a header at the top of the screen.\nIt can contain the screen title, controls such as navigation buttons, menu button etc.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/appbar-header.android.png" />\n    <figcaption>Android</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/appbar-header.ios.png" />\n    <figcaption>iOS</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Appbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  _goBack = () => console.log(\'Went back\');\n\n  _onSearch = () => console.log(\'Searching\');\n\n  _onMore = () => console.log(\'Shown more\');\n\n  render() {\n    return (\n      <Appbar.Header>\n        <Appbar.BackAction\n          onPress={this._goBack}\n        />\n        <Appbar.Content\n          title="Title"\n          subtitle="Subtitle"\n        />\n        <Appbar.Action icon="search" onPress={this._onSearch} />\n        <Appbar.Action icon="more-vert" onPress={this._onMore} />\n      </Appbar.Header>\n    );\n  }\n}\n```',
      displayName: "Appbar.Header",
      methods: [],
      statics: [],
      props: {
        dark: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the background color is a dark color. A dark header will render light text and vice-versa.",
        },
        statusBarHeight: {
          required: false,
          flowType: { name: "number" },
          description:
            "Extra padding to add at the top of header to account for translucent status bar.\nThis is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.\nIf you are using Expo, we assume translucent status bar and set a height for status bar automatically.\nPass `0` or a custom value to disable the default behaviour, and customize the height.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the header.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Appbar/AppbarHeader.js",
    ],
    group: "Appbar",
  },
  {
    filepath: "../src/components/Avatar/AvatarIcon.js",
    title: "Avatar.Icon",
    description:
      'Avatars can be used to represent people in a graphical way.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/avatar-icon.png" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Avatar.Icon size={24} icon="folder" />\n);\n```',
    link: "avatar-icon",
    data: {
      description:
        'Avatars can be used to represent people in a graphical way.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/avatar-icon.png" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Avatar.Icon size={24} icon="folder" />\n);\n```',
      displayName: "Avatar.Icon",
      methods: [],
      statics: [],
      props: {
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `Avatar`.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the avatar.",
          defaultValue: { value: "64", computed: false },
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for the icon.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Avatar/AvatarIcon.js",
    ],
    group: "Avatar",
  },
  {
    filepath: "../src/components/Avatar/AvatarImage.js",
    title: "Avatar.Image",
    description:
      "Avatars can be used to represent people in a graphical way.\n\n<div class=\"screenshots\">\n  <figure>\n    <img class=\"medium\" src=\"screenshots/avatar-image.png\" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Avatar } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Avatar.Image size={24} source={require('../assets/avatar.png')} />\n);\n```",
    link: "avatar-image",
    data: {
      description:
        "Avatars can be used to represent people in a graphical way.\n\n<div class=\"screenshots\">\n  <figure>\n    <img class=\"medium\" src=\"screenshots/avatar-image.png\" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Avatar } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Avatar.Image size={24} source={require('../assets/avatar.png')} />\n);\n```",
      displayName: "Avatar.Image",
      methods: [],
      statics: [],
      props: {
        source: {
          required: true,
          flowType: { name: "ImageSource" },
          description: "Image to display for the `Avatar`.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the avatar.",
          defaultValue: { value: "64", computed: false },
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Avatar/AvatarImage.js",
    ],
    group: "Avatar",
  },
  {
    filepath: "../src/components/Avatar/AvatarText.js",
    title: "Avatar.Text",
    description:
      'Avatars can be used to represent people in a graphical way.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/avatar-text.png" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Avatar.Text size={24} label="XD" />\n);\n```',
    link: "avatar-text",
    data: {
      description:
        'Avatars can be used to represent people in a graphical way.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/avatar-text.png" />\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Avatar.Text size={24} label="XD" />\n);\n```',
      displayName: "Avatar.Text",
      methods: [],
      statics: [],
      props: {
        label: {
          required: true,
          flowType: { name: "string" },
          description: "Initials to show as the text in the `Avatar`.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the avatar.",
          defaultValue: { value: "64", computed: false },
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for the text.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Avatar/AvatarText.js",
    ],
    group: "Avatar",
  },
  {
    filepath: "../src/components/Badge.js",
    title: "Badge",
    description:
      "Badges are small status descriptors for UI elements.\nA badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Badge } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Badge>3</Badge>\n);\n\nexport default MyComponent;\n```",
    link: "badge",
    data: {
      description:
        "Badges are small status descriptors for UI elements.\nA badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Badge } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Badge>3</Badge>\n);\n\nexport default MyComponent;\n```",
      displayName: "Badge",
      methods: [],
      statics: [],
      props: {
        visible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether the badge is visible",
          defaultValue: { value: "true", computed: false },
        },
        children: {
          required: false,
          flowType: {
            name: "union",
            raw: "string | number",
            elements: [{ name: "string" }, { name: "number" }],
          },
          description: "Content of the `Badge`.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the `Badge`.",
          defaultValue: { value: "20", computed: false },
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Badge.js",
    ],
  },
  {
    filepath: "../src/components/Banner.js",
    title: "Banner",
    description:
      "Banner displays a prominent message and related actions.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/banner.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Image } from 'react-native';\nimport { Banner } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: true,\n  };\n\n  render() {\n    return (\n      <Banner\n        visible={this.state.visible}\n        actions={[\n          {\n            label: 'Fix it',\n            onPress: () => this.setState({ visible: false }),\n          },\n          {\n            label: 'Learn more',\n            onPress: () => this.setState({ visible: false }),\n          },\n        ]}\n        image={({ size }) =>\n          <Image\n            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}\n            style={{\n              width: size,\n              height: size,\n            }}\n          />\n        }\n      >\n        There was a problem processing a transaction on your credit card.\n      </Banner>\n    );\n  }\n}\n```",
    link: "banner",
    data: {
      description:
        "Banner displays a prominent message and related actions.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/banner.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Image } from 'react-native';\nimport { Banner } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: true,\n  };\n\n  render() {\n    return (\n      <Banner\n        visible={this.state.visible}\n        actions={[\n          {\n            label: 'Fix it',\n            onPress: () => this.setState({ visible: false }),\n          },\n          {\n            label: 'Learn more',\n            onPress: () => this.setState({ visible: false }),\n          },\n        ]}\n        image={({ size }) =>\n          <Image\n            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}\n            style={{\n              width: size,\n              height: size,\n            }}\n          />\n        }\n      >\n        There was a problem processing a transaction on your credit card.\n      </Banner>\n    );\n  }\n}\n```",
      displayName: "Banner",
      methods: [
        {
          name: "_handleLayout",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "{ nativeEvent }: NativeEvent",
              type: {
                name: "signature",
                type: "object",
                raw: "{\n  nativeEvent: {\n    layout: {\n      x: number,\n      y: number,\n      width: number,\n      height: number,\n    },\n  },\n}",
                signature: {
                  properties: [
                    {
                      key: "nativeEvent",
                      value: {
                        name: "signature",
                        type: "object",
                        raw: "{\n  layout: {\n    x: number,\n    y: number,\n    width: number,\n    height: number,\n  },\n}",
                        signature: {
                          properties: [
                            {
                              key: "layout",
                              value: {
                                name: "signature",
                                type: "object",
                                raw: "{\n  x: number,\n  y: number,\n  width: number,\n  height: number,\n}",
                                signature: {
                                  properties: [
                                    {
                                      key: "x",
                                      value: { name: "number", required: true },
                                    },
                                    {
                                      key: "y",
                                      value: { name: "number", required: true },
                                    },
                                    {
                                      key: "width",
                                      value: { name: "number", required: true },
                                    },
                                    {
                                      key: "height",
                                      value: { name: "number", required: true },
                                    },
                                  ],
                                },
                                required: true,
                              },
                            },
                          ],
                        },
                        required: true,
                      },
                    },
                  ],
                },
                alias: "NativeEvent",
              },
            },
          ],
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
      statics: [],
      props: {
        visible: {
          required: true,
          flowType: { name: "boolean" },
          description: "Whether banner is currently visible.",
        },
        children: {
          required: true,
          flowType: { name: "string" },
          description: "Content that will be displayed inside banner.",
        },
        image: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { size: number }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ size: number }",
                    signature: {
                      properties: [
                        {
                          key: "size",
                          value: { name: "number", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          description:
            "Callback that returns an image to display inside banner.",
        },
        actions: {
          required: true,
          flowType: {
            name: "Array",
            elements: [
              {
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
            ],
            raw: "Array<{\n  label: string,\n  onPress: () => mixed,\n}>",
          },
          description:
            "Action items to shown in the banner.\nAn action item should contain the following properties:\n\n- `label`: label of the action button (required)\n- `onPress`: callback that is called when button is pressed (required)\n\nTo customize button you can pass other props that button component takes.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Banner.js",
    ],
  },
  {
    filepath: "../src/components/BottomNavigation.js",
    title: "BottomNavigation",
    description:
      "Bottom navigation provides quick navigation between top-level views of an app with a bottom navigation bar.\nIt is primarily designed for use on mobile.\n\nFor integration with React Navigation, you can use [react-navigation-material-bottom-tab-navigator](https://github.com/react-navigation/react-navigation-material-bottom-tab-navigator).\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/bottom-navigation.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { BottomNavigation, Text } from 'react-native-paper';\n\nconst MusicRoute = () => <Text>Music</Text>;\n\nconst AlbumsRoute = () => <Text>Albums</Text>;\n\nconst RecentsRoute = () => <Text>Recents</Text>;\n\nexport default class MyComponent extends React.Component {\n  state = {\n    index: 0,\n    routes: [\n      { key: 'music', title: 'Music', icon: 'queue-music' },\n      { key: 'albums', title: 'Albums', icon: 'album' },\n      { key: 'recents', title: 'Recents', icon: 'history' },\n    ],\n  };\n\n  _handleIndexChange = index => this.setState({ index });\n\n  _renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n  });\n\n  render() {\n    return (\n      <BottomNavigation\n        navigationState={this.state}\n        onIndexChange={this._handleIndexChange}\n        renderScene={this._renderScene}\n      />\n    );\n  }\n}\n```",
    link: "bottom-navigation",
    data: {
      description:
        "Bottom navigation provides quick navigation between top-level views of an app with a bottom navigation bar.\nIt is primarily designed for use on mobile.\n\nFor integration with React Navigation, you can use [react-navigation-material-bottom-tab-navigator](https://github.com/react-navigation/react-navigation-material-bottom-tab-navigator).\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/bottom-navigation.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { BottomNavigation, Text } from 'react-native-paper';\n\nconst MusicRoute = () => <Text>Music</Text>;\n\nconst AlbumsRoute = () => <Text>Albums</Text>;\n\nconst RecentsRoute = () => <Text>Recents</Text>;\n\nexport default class MyComponent extends React.Component {\n  state = {\n    index: 0,\n    routes: [\n      { key: 'music', title: 'Music', icon: 'queue-music' },\n      { key: 'albums', title: 'Albums', icon: 'album' },\n      { key: 'recents', title: 'Recents', icon: 'history' },\n    ],\n  };\n\n  _handleIndexChange = index => this.setState({ index });\n\n  _renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n  });\n\n  render() {\n    return (\n      <BottomNavigation\n        navigationState={this.state}\n        onIndexChange={this._handleIndexChange}\n        renderScene={this._renderScene}\n      />\n    );\n  }\n}\n```",
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
          name: "_handleKeyboardShow",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handleKeyboardHide",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_animateToCurrentIndex",
          docblock: null,
          modifiers: [],
          params: [],
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
        {
          name: "_isShifting",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
      ],
      statics: [],
      props: {
        shifting: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label.\nBy default, this is `true` when you have more than 3 tabs.",
        },
        labeled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether to show labels in tabs. When `false`, only icons will be displayed.",
          defaultValue: { value: "true", computed: false },
        },
        navigationState: {
          required: true,
          flowType: {
            name: "signature",
            type: "object",
            raw: "{\n  index: number,\n  routes: Array<T>,\n}",
            signature: {
              properties: [
                { key: "index", value: { name: "number", required: true } },
                {
                  key: "routes",
                  value: {
                    name: "Array",
                    elements: [{ name: "T" }],
                    raw: "Array<T>",
                    required: true,
                  },
                },
              ],
            },
          },
          description:
            "State for the bottom navigation. The state should contain the following properties:\n\n- `index`: a number reprsenting the index of the active route in the `routes` array\n- `routes`: an array containing a list of route objects used for rendering the tabs\n\nEach route object should contain the following properties:\n\n- `key`: a unique key to identify the route (required)\n- `title`: title of the route to use as the tab label\n- `icon`: icon to use as the tab icon, can be a string, an image source or a react component\n- `color`: color to use as background color for shifting bottom navigation\n- `badge`: badge to show on the tab icon, can be `true` to show a dot, `string` or `number` to show text.\n- `accessibilityLabel`: accessibility label for the tab button\n- `testID`: test id for the tab button\n\nExample:\n\n```js\n{\n  index: 1,\n  routes: [\n    { key: 'music', title: 'Music', icon: 'queue-music', color: '#3F51B5' },\n    { key: 'albums', title: 'Albums', icon: 'album', color: '#009688' },\n    { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },\n    { key: 'purchased', title: 'Purchased', icon: 'shopping-cart', color: '#607D8B' },\n  ]\n}\n```\n\n`BottomNavigation` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback.",
        },
        onIndexChange: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(index: number) => mixed",
            signature: {
              arguments: [{ name: "index", type: { name: "number" } }],
              return: { name: "mixed" },
            },
          },
          description:
            "Callback which is called on tab change, receives the index of the new tab as argument.\nThe navigation state needs to be updated when it's called, otherwise the change is dropped.",
        },
        renderScene: {
          required: true,
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
          description:
            "Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:\n\n```js\nrenderScene = ({ route, jumpTo }) => {\n  switch (route.key) {\n    case 'music':\n      return <MusicRoute jumpTo={jumpTo} />;\n    case 'albums':\n      return <AlbumsRoute jumpTo={jumpTo} />;\n  }\n}\n```\n\nPages are lazily rendered, which means that a page will be rendered the first time you navigate to it.\nAfter initial render, all the pages stay rendered to preserve their state.\n\nYou need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance.\nTo make it easier to specify the components, you can use the `SceneMap` helper:\n\n```js\nrenderScene = BottomNavigation.SceneMap({\n  music: MusicRoute,\n  albums: AlbumsRoute,\n});\n```\n\nSpecifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.\nEach component will receive the current route and a `jumpTo` method as it's props.\nThe `jumpTo` method can be used to navigate to other tabs programmatically:\n\n```js\nthis.props.jumpTo('albums')\n```",
        },
        renderIcon: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: {\n  route: T,\n  focused: boolean,\n  color: string,\n}) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{\n  route: T,\n  focused: boolean,\n  color: string,\n}",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                        {
                          key: "focused",
                          value: { name: "boolean", required: true },
                        },
                        {
                          key: "color",
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
          description:
            "Callback which returns a React Element to be used as tab icon.",
        },
        renderLabel: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: {\n  route: T,\n  focused: boolean,\n  color: string,\n}) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{\n  route: T,\n  focused: boolean,\n  color: string,\n}",
                    signature: {
                      properties: [
                        { key: "route", value: { name: "T", required: true } },
                        {
                          key: "focused",
                          value: { name: "boolean", required: true },
                        },
                        {
                          key: "color",
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
          description: "Callback which React Element to be used as tab label.",
        },
        getLabelText: {
          required: false,
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
          description:
            "Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component.",
        },
        getAccessibilityLabel: {
          required: false,
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
          description:
            "Get accessibility label for the tab button. This is read by the screen reader when the user taps the tab.\nUses `route.accessibilityLabel` by default.",
        },
        getTestID: {
          required: false,
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
          description:
            "Get the id to locate this tab button in tests, uses `route.testID` by default.",
        },
        getBadge: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { route: T }) => boolean | number | string",
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
              return: {
                name: "union",
                raw: "boolean | number | string",
                elements: [
                  { name: "boolean" },
                  { name: "number" },
                  { name: "string" },
                ],
              },
            },
          },
          description: "Get badge for the tab, uses `route.badge` by default.",
        },
        getColor: {
          required: false,
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
          description:
            "/**\nGet color for the tab, uses `route.color` by default.",
        },
        onTabPress: {
          required: false,
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
          description:
            "Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top.",
        },
        activeColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for icon and label in the active tab.",
        },
        inactiveColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for icon and label in the inactive tab.",
        },
        keyboardHidesNavigationBar: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the bottom navigation bar is hidden when keyboard is shown.\nOn Android, this works best when [`windowSoftInputMode`](https://developer.android.com/guide/topics/manifest/activity-element#wsoft) is set to `adjustResize`.",
          defaultValue: { value: "true", computed: false },
        },
        barStyle: {
          required: false,
          flowType: { name: "any" },
          description:
            "Style for the bottom navigation bar.\nYou can set a bottom padding here if you have a translucent navigation bar on Android:\n\n```js\nbarStyle={{ paddingBottom: 48 }}\n```",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/BottomNavigation.js",
    ],
  },
  {
    filepath: "../src/components/Button.js",
    title: "Button",
    description:
      'A button is component that the user can press to trigger an action.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/button-1.png" />\n    <figcaption>Text button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/button-2.png" />\n    <figcaption>Outlined button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/button-3.png" />\n    <figcaption>Contained button</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Button } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Button icon="add-a-photo" mode="contained" onPress={() => console.log(\'Pressed\')}>\n    Press me\n  </Button>\n);\n\nexport default MyComponent;\n```',
    link: "button",
    data: {
      description:
        'A button is component that the user can press to trigger an action.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/button-1.png" />\n    <figcaption>Text button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/button-2.png" />\n    <figcaption>Outlined button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/button-3.png" />\n    <figcaption>Contained button</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Button } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Button icon="add-a-photo" mode="contained" onPress={() => console.log(\'Pressed\')}>\n    Press me\n  </Button>\n);\n\nexport default MyComponent;\n```',
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
        mode: {
          required: false,
          flowType: {
            name: "union",
            raw: "'text' | 'outlined' | 'contained'",
            elements: [
              { name: "literal", value: "'text'" },
              { name: "literal", value: "'outlined'" },
              { name: "literal", value: "'contained'" },
            ],
          },
          description:
            "Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.\n- `text` - flat button without background or outline (low emphasis)\n- `outlined` - button with an outline (medium emphasis)\n- `contained` - button with a background color and elevation shadow (high emphasis)",
          defaultValue: { value: "'text'", computed: false },
        },
        dark: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.",
        },
        compact: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Use a compact look, useful for `text` buttons in a row.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description:
            "Custom text color for flat button, or background color for contained button.",
        },
        loading: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to show a loading indicator.",
        },
        icon: {
          required: false,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `Button`.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Label text of the button.",
        },
        uppercase: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Make the label text uppercased. Note that this won't work if you pass React elements as children.",
          defaultValue: { value: "true", computed: false },
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the button. This is read by the screen reader when the user taps the button.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        contentStyle: {
          required: false,
          flowType: { name: "any" },
          description:
            "Style of button's inner content.\nUse this prop to apply custom height and width.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Button.js",
    ],
  },
  {
    filepath: "../src/components/Typography/Caption.js",
    title: "Caption",
    description:
      "Typography component for showing a caption.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/caption.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Caption } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Caption>Caption</Caption>\n);\n\nexport default MyComponent;\n```",
    link: "caption",
    data: {
      description:
        "Typography component for showing a caption.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/caption.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Caption } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Caption>Caption</Caption>\n);\n\nexport default MyComponent;\n```",
      displayName: "Caption",
      methods: [],
      statics: [],
      props: {
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Caption.js",
    ],
  },
  {
    filepath: "../src/components/Card/Card.js",
    title: "Card",
    description:
      'A card is a sheet of material that serves as an entry point to more detailed information.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-1.png" />\n  <img class="medium" src="screenshots/card-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar, Button, Card, Title, Paragraph } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />\n    <Card.Content>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </Card.Content>\n    <Card.Cover source={{ uri: \'https://picsum.photos/700\' }} />\n    <Card.Actions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </Card.Actions>\n  </Card>\n);\n\nexport default MyComponent;\n```',
    link: "card",
    data: {
      description:
        'A card is a sheet of material that serves as an entry point to more detailed information.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-1.png" />\n  <img class="medium" src="screenshots/card-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar, Button, Card, Title, Paragraph } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />\n    <Card.Content>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </Card.Content>\n    <Card.Cover source={{ uri: \'https://picsum.photos/700\' }} />\n    <Card.Actions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </Card.Actions>\n  </Card>\n);\n\nexport default MyComponent;\n```',
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
      statics: [
        { name: "Content", description: null, docblock: null, type: null },
        { name: "Actions", description: null, docblock: null, type: null },
        { name: "Cover", description: null, docblock: null, type: null },
        { name: "Title", description: null, docblock: null, type: null },
      ],
      props: {
        elevation: {
          required: false,
          flowType: { name: "number" },
          description:
            "Resting elevation of the card which controls the drop shadow.",
          defaultValue: { value: "1", computed: false },
        },
        onLongPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on long press.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Card`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        testID: {
          required: false,
          flowType: { name: "string" },
          description: "Pass down testID from card props to touchable",
        },
        accessible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Pass down accessible from card props to touchable",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Card/Card.js",
    ],
  },
  {
    filepath: "../src/components/Card/CardActions.js",
    title: "Card.Actions",
    description:
      "A component to show a list of actions inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Card } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Actions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </Card.Actions>\n  </Card>\n);\n\nexport default MyComponent;\n```",
    link: "card-actions",
    data: {
      description:
        "A component to show a list of actions inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Card } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Actions>\n      <Button>Cancel</Button>\n      <Button>Ok</Button>\n    </Card.Actions>\n  </Card>\n);\n\nexport default MyComponent;\n```",
      displayName: "Card.Actions",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Items inside the `CardActions`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Card/CardActions.js",
    ],
    group: "Card",
  },
  {
    filepath: "../src/components/Card/CardContent.js",
    title: "Card.Content",
    description:
      "A component to show content inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, Title, Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Content>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </Card.Content>\n  </Card>\n);\n\nexport default MyComponent;\n```",
    link: "card-content",
    data: {
      description:
        "A component to show content inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card, Title, Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Content>\n      <Title>Card title</Title>\n      <Paragraph>Card content</Paragraph>\n    </Card.Content>\n  </Card>\n);\n\nexport default MyComponent;\n```",
      displayName: "Card.Content",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Items inside the `Card.Content`.",
        },
        index: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        total: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        siblings: {
          required: false,
          flowType: {
            name: "Array",
            elements: [{ name: "string" }],
            raw: "Array<string>",
          },
          description: "@internal",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Card/CardContent.js",
    ],
    group: "Card",
  },
  {
    filepath: "../src/components/Card/CardCover.js",
    title: "Card.Cover",
    description:
      "A component to show a cover image inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />\n  </Card>\n);\n\nexport default MyComponent;\n```\n\n@extends Image props https://facebook.github.io/react-native/docs/image.html#props",
    link: "card-cover",
    data: {
      description:
        "A component to show a cover image inside a Card.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Card } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Card>\n    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />\n  </Card>\n);\n\nexport default MyComponent;\n```\n\n@extends Image props https://facebook.github.io/react-native/docs/image.html#props",
      displayName: "Card.Cover",
      methods: [],
      statics: [],
      props: {
        index: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        total: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Card/CardCover.js",
    ],
    group: "Card",
  },
  {
    filepath: "../src/components/Card/CardTitle.js",
    title: "Card.Title",
    description:
      'A component to show a title, subtitle and an avatar inside a Card.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-title-1.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar, Card, IconButton } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card.Title\n    title="Card Title"\n    subtitle="Card Subtitle"\n    left={(props) => <Avatar.Icon {...props} icon="folder" />}\n    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}\n  />\n);\n\nexport default MyComponent;\n```',
    link: "card-title",
    data: {
      description:
        'A component to show a title, subtitle and an avatar inside a Card.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/card-title-1.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Avatar, Card, IconButton } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Card.Title\n    title="Card Title"\n    subtitle="Card Subtitle"\n    left={(props) => <Avatar.Icon {...props} icon="folder" />}\n    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}\n  />\n);\n\nexport default MyComponent;\n```',
      displayName: "Card.Title",
      methods: [],
      statics: [],
      props: {
        title: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description:
            "Text for the title. Note that this will only accept a string or `<Text>`-based node.",
        },
        titleStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style for the title.",
        },
        subtitle: {
          required: false,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description:
            "Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.",
        },
        subtitleStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style for the subtitle.",
        },
        subtitleNumberOfLines: {
          required: false,
          flowType: { name: "number" },
          description: "The number of lines for the subtitle.",
          defaultValue: { value: "1", computed: false },
        },
        left: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { size: number }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ size: number }",
                    signature: {
                      properties: [
                        {
                          key: "size",
                          value: { name: "number", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          description:
            "Callback which returns a React element to display on the left side.",
        },
        leftStyle: {
          required: false,
          flowType: { name: "ViewStyleProp" },
          description: "Style for the left element wrapper.",
        },
        right: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { size: number }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ size: number }",
                    signature: {
                      properties: [
                        {
                          key: "size",
                          value: { name: "number", required: true },
                        },
                      ],
                    },
                  },
                },
              ],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          description:
            "Callback which returns a React element to display on the right side.",
        },
        rightStyle: {
          required: false,
          flowType: { name: "ViewStyleProp" },
          description: "Style for the right element wrapper.",
        },
        index: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        total: {
          required: false,
          flowType: { name: "number" },
          description: "@internal",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Card/CardTitle.js",
    ],
    group: "Card",
  },
  {
    filepath: "../src/components/Checkbox.js",
    title: "Checkbox",
    description:
      'Checkboxes allow the selection of multiple options from a set.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Checkbox } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  render() {\n    const { checked } = this.state;\n    return (\n      <Checkbox\n        status={checked ? \'checked\' : \'unchecked\'}\n        onPress={() => { this.setState({ checked: !checked }); }}\n      />\n    );\n  }\n}\n```',
    link: "checkbox",
    data: {
      description:
        'Checkboxes allow the selection of multiple options from a set.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Checkbox } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  render() {\n    const { checked } = this.state;\n    return (\n      <Checkbox\n        status={checked ? \'checked\' : \'unchecked\'}\n        onPress={() => { this.setState({ checked: !checked }); }}\n      />\n    );\n  }\n}\n```',
      displayName: "Checkbox",
      methods: [],
      statics: [
        { name: "Android", description: null, docblock: null, type: null },
        { name: "IOS", description: null, docblock: null, type: null },
      ],
      props: {
        status: {
          required: true,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked' | 'indeterminate'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
              { name: "literal", value: "'indeterminate'" },
            ],
          },
          description: "Status of checkbox.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether checkbox is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for unchecked checkbox.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for checkbox.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Checkbox.js",
    ],
  },
  {
    filepath: "../src/components/CheckboxAndroid.js",
    title: "Checkbox.Android",
    description:
      'Checkboxes allow the selection of multiple options from a set.\nThis component follows platform guidelines for Android.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
    link: "checkbox-android",
    data: {
      description:
        'Checkboxes allow the selection of multiple options from a set.\nThis component follows platform guidelines for Android.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.android.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.android.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
      displayName: "Checkbox.Android",
      methods: [],
      statics: [],
      props: {
        status: {
          required: true,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked' | 'indeterminate'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
              { name: "literal", value: "'indeterminate'" },
            ],
          },
          description: "Status of checkbox.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether checkbox is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for unchecked checkbox.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for checkbox.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/CheckboxAndroid.js",
    ],
    group: "Checkbox",
  },
  {
    filepath: "../src/components/CheckboxIOS.js",
    title: "Checkbox.IOS",
    description:
      'Checkboxes allow the selection of multiple options from a set.\nThis component follows platform guidelines for iOS.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
    link: "checkbox-ios",
    data: {
      description:
        'Checkboxes allow the selection of multiple options from a set.\nThis component follows platform guidelines for iOS.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/checkbox-enabled.ios.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/checkbox-disabled.ios.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
      displayName: "Checkbox.IOS",
      methods: [],
      statics: [],
      props: {
        status: {
          required: true,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked' | 'indeterminate'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
              { name: "literal", value: "'indeterminate'" },
            ],
          },
          description: "Status of checkbox.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether checkbox is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for checkbox.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/CheckboxIOS.js",
    ],
    group: "Checkbox",
  },
  {
    filepath: "../src/components/Chip.js",
    title: "Chip",
    description:
      'Chips can be used to display entities in small blocks.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/chip-1.png" />\n    <figcaption>Flat chip</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/chip-2.png" />\n    <figcaption>Outlined chip</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Chip } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Chip icon="info" onPress={() => console.log(\'Pressed\')}>Example Chip</Chip>\n);\n\nexport default MyComponent;\n```',
    link: "chip",
    data: {
      description:
        'Chips can be used to display entities in small blocks.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/chip-1.png" />\n    <figcaption>Flat chip</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/chip-2.png" />\n    <figcaption>Outlined chip</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Chip } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Chip icon="info" onPress={() => console.log(\'Pressed\')}>Example Chip</Chip>\n);\n\nexport default MyComponent;\n```',
      displayName: "Chip",
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
        mode: {
          required: false,
          flowType: {
            name: "union",
            raw: "'flat' | 'outlined'",
            elements: [
              { name: "literal", value: "'flat'" },
              { name: "literal", value: "'outlined'" },
            ],
          },
          description:
            "Mode of the chip.\n- `flat` - flat chip without outline.\n- `outlined` - chip with an outline.",
          defaultValue: { value: "'flat'", computed: false },
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text content of the `Chip`.",
        },
        icon: {
          required: false,
          flowType: { name: "IconSource" },
          description:
            "Icon to display for the `Chip`. Both icon and avatar cannot be specified.",
        },
        avatar: {
          required: false,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description:
            "Avatar to display for the `Chip`. Both icon and avatar cannot be specified.",
        },
        selected: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether chip is selected.",
          defaultValue: { value: "false", computed: false },
        },
        selectedColor: {
          required: false,
          flowType: { name: "string" },
          description: "Whether to style the chip color as selected.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.",
          defaultValue: { value: "false", computed: false },
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the chip. This is read by the screen reader when the user taps the chip.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        onClose: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Function to execute on close button press. The close button appears only when this prop is specified.",
        },
        textStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style of chip's text",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        testID: {
          required: false,
          flowType: { name: "string" },
          description:
            "Pass down testID from chip props to touchable for Detox tests.",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Chip.js",
    ],
  },
  {
    filepath: "../src/components/DataTable/DataTable.js",
    title: "DataTable",
    description:
      'Data tables allow displaying sets of data.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/data-table.png" />\n    <figcaption>Data table</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { DataTable } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <DataTable>\n        <DataTable.Header>\n          <DataTable.Title>Dessert</DataTable.Title>\n          <DataTable.Title numeric>Calories</DataTable.Title>\n          <DataTable.Title numeric>Fat</DataTable.Title>\n        </DataTable.Header>\n\n        <DataTable.Row>\n          <DataTable.Cell>Frozen yogurt</DataTable.Cell>\n          <DataTable.Cell numeric>159</DataTable.Cell>\n          <DataTable.Cell numeric>6.0</DataTable.Cell>\n        </DataTable.Row>\n\n        <DataTable.Row>\n          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>\n          <DataTable.Cell numeric>237</DataTable.Cell>\n          <DataTable.Cell numeric>8.0</DataTable.Cell>\n        </DataTable.Row>\n\n        <DataTable.Pagination\n          page={1}\n          numberOfPages={3}\n          onPageChange={(page) => { console.log(page); }}\n          label="1-2 of 6"\n        />\n      </DataTable>\n    );\n  }\n}\n```',
    link: "data-table",
    data: {
      description:
        'Data tables allow displaying sets of data.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/data-table.png" />\n    <figcaption>Data table</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { DataTable } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <DataTable>\n        <DataTable.Header>\n          <DataTable.Title>Dessert</DataTable.Title>\n          <DataTable.Title numeric>Calories</DataTable.Title>\n          <DataTable.Title numeric>Fat</DataTable.Title>\n        </DataTable.Header>\n\n        <DataTable.Row>\n          <DataTable.Cell>Frozen yogurt</DataTable.Cell>\n          <DataTable.Cell numeric>159</DataTable.Cell>\n          <DataTable.Cell numeric>6.0</DataTable.Cell>\n        </DataTable.Row>\n\n        <DataTable.Row>\n          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>\n          <DataTable.Cell numeric>237</DataTable.Cell>\n          <DataTable.Cell numeric>8.0</DataTable.Cell>\n        </DataTable.Row>\n\n        <DataTable.Pagination\n          page={1}\n          numberOfPages={3}\n          onPageChange={(page) => { console.log(page); }}\n          label="1-2 of 6"\n        />\n      </DataTable>\n    );\n  }\n}\n```',
      displayName: "DataTable",
      methods: [],
      statics: [
        { name: "Header", description: null, docblock: null, type: null },
        { name: "Title", description: null, docblock: null, type: null },
        { name: "Row", description: null, docblock: null, type: null },
        { name: "Cell", description: null, docblock: null, type: null },
        { name: "Pagination", description: null, docblock: null, type: null },
      ],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DataTable`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTable.js",
    ],
  },
  {
    filepath: "../src/components/DataTable/DataTableCell.js",
    title: "DataTable.Cell",
    description: "",
    link: "data-table-cell",
    data: {
      description: "",
      displayName: "DataTable.Cell",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DataTableCell`.",
        },
        numeric: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Align the text to the right. Generally monetary or number fields are aligned to right.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTableCell.js",
    ],
    group: "DataTable",
  },
  {
    filepath: "../src/components/DataTable/DataTableHeader.js",
    title: "DataTable.Header",
    description: "",
    link: "data-table-header",
    data: {
      description: "",
      displayName: "DataTable.Header",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DataTableHeader`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTableHeader.js",
    ],
    group: "DataTable",
  },
  {
    filepath: "../src/components/DataTable/DataTablePagination.js",
    title: "DataTable.Pagination",
    description: "",
    link: "data-table-pagination",
    data: {
      description: "",
      displayName: "DataTable.Pagination",
      methods: [],
      statics: [],
      props: {
        page: {
          required: true,
          flowType: { name: "number" },
          description: "The currently visible page (starting with 0).",
        },
        numberOfPages: {
          required: true,
          flowType: { name: "number" },
          description: "The total number of pages.",
        },
        label: {
          required: false,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Label text to display",
        },
        onPageChange: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "number => void",
            signature: {
              arguments: [{ name: "", type: { name: "number" } }],
              return: { name: "void" },
            },
          },
          description: "Function to execute on page change.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTablePagination.js",
    ],
    group: "DataTable",
  },
  {
    filepath: "../src/components/DataTable/DataTableRow.js",
    title: "DataTable.Row",
    description: "",
    link: "data-table-row",
    data: {
      description: "",
      displayName: "DataTable.Row",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DataTableRow`.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTableRow.js",
    ],
    group: "DataTable",
  },
  {
    filepath: "../src/components/DataTable/DataTableTitle.js",
    title: "DataTable.Title",
    description: "",
    link: "data-table-title",
    data: {
      description: "",
      displayName: "DataTable.Title",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text content of the `DataTableTitle`.",
        },
        numeric: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Align the text to the right. Generally monetary or number fields are aligned to right.",
        },
        sortDirection: {
          required: false,
          flowType: {
            name: "union",
            raw: "'ascending' | 'descending'",
            elements: [
              { name: "literal", value: "'ascending'" },
              { name: "literal", value: "'descending'" },
            ],
          },
          description:
            "Direction of sorting. An arrow indicating the direction is displayed when this is given.",
        },
        numberOfLines: {
          required: false,
          flowType: { name: "number" },
          description: "The number of lines to show.",
          defaultValue: { value: "1", computed: false },
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/DataTable/DataTableTitle.js",
    ],
    group: "DataTable",
  },
  {
    filepath: "../src/components/Dialog/Dialog.js",
    title: "Dialog",
    description:
      'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.\nTo render the `Dialog` above other components, you\'ll need to wrap it with the [`Portal`](portal.html) component.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/dialog-1.png" />\n  <img class="medium" src="screenshots/dialog-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Paragraph, Dialog, Portal } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showDialog = () => this.setState({ visible: true });\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <View>\n        <Button onPress={this._showDialog}>Show Dialog</Button>\n        <Portal>\n          <Dialog\n             visible={this.state.visible}\n             onDismiss={this._hideDialog}>\n            <Dialog.Title>Alert</Dialog.Title>\n            <Dialog.Content>\n              <Paragraph>This is simple dialog</Paragraph>\n            </Dialog.Content>\n            <Dialog.Actions>\n              <Button onPress={this._hideDialog}>Done</Button>\n            </Dialog.Actions>\n          </Dialog>\n        </Portal>\n      </View>\n    );\n  }\n}\n```',
    link: "dialog",
    data: {
      description:
        'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.\nTo render the `Dialog` above other components, you\'ll need to wrap it with the [`Portal`](portal.html) component.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/dialog-1.png" />\n  <img class="medium" src="screenshots/dialog-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Paragraph, Dialog, Portal } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showDialog = () => this.setState({ visible: true });\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <View>\n        <Button onPress={this._showDialog}>Show Dialog</Button>\n        <Portal>\n          <Dialog\n             visible={this.state.visible}\n             onDismiss={this._hideDialog}>\n            <Dialog.Title>Alert</Dialog.Title>\n            <Dialog.Content>\n              <Paragraph>This is simple dialog</Paragraph>\n            </Dialog.Content>\n            <Dialog.Actions>\n              <Button onPress={this._hideDialog}>Done</Button>\n            </Dialog.Actions>\n          </Dialog>\n        </Portal>\n      </View>\n    );\n  }\n}\n```',
      displayName: "Dialog",
      methods: [],
      statics: [
        { name: "Content", description: null, docblock: null, type: null },
        { name: "Actions", description: null, docblock: null, type: null },
        { name: "Title", description: null, docblock: null, type: null },
        { name: "ScrollArea", description: null, docblock: null, type: null },
      ],
      props: {
        dismissable: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Determines whether clicking outside the dialog dismiss it.",
          defaultValue: { value: "true", computed: false },
        },
        onDismiss: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Callback that is called when the user dismisses the dialog.",
        },
        visible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Determines Whether the dialog is visible.",
          defaultValue: { value: "false", computed: false },
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Dialog`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Dialog/Dialog.js",
    ],
  },
  {
    filepath: "../src/components/Dialog/DialogActions.js",
    title: "Dialog.Actions",
    description:
      "A component to show a list of actions in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Actions>\n            <Button onPress={() => console.log(\"Cancel\")}>Cancel</Button>\n            <Button onPress={() => console.log(\"Ok\")}>Ok</Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
    link: "dialog-actions",
    data: {
      description:
        "A component to show a list of actions in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Button, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Actions>\n            <Button onPress={() => console.log(\"Cancel\")}>Cancel</Button>\n            <Button onPress={() => console.log(\"Ok\")}>Ok</Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "Dialog.Actions",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DialogActions`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Dialog/DialogActions.js",
    ],
    group: "Dialog",
  },
  {
    filepath: "../src/components/Dialog/DialogContent.js",
    title: "Dialog.Content",
    description:
      "A component to show content in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Content>\n            <Paragraph>This is simple dialog</Paragraph>\n          </Dialog.Content>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
    link: "dialog-content",
    data: {
      description:
        "A component to show content in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Content>\n            <Paragraph>This is simple dialog</Paragraph>\n          </Dialog.Content>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "Dialog.Content",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DialogContent`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Dialog/DialogContent.js",
    ],
    group: "Dialog",
  },
  {
    filepath: "../src/components/Dialog/DialogScrollArea.js",
    title: "Dialog.ScrollArea",
    description:
      "A component to show a scrollable content in a Dialog. The component only provides appropriate styling.\nFor the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.ScrollArea>\n            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>\n              This is a scrollable area\n            </ScrollView>\n          </Dialog.ScrollArea>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
    link: "dialog-scroll-area",
    data: {
      description:
        "A component to show a scrollable content in a Dialog. The component only provides appropriate styling.\nFor the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.ScrollArea>\n            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>\n              This is a scrollable area\n            </ScrollView>\n          </Dialog.ScrollArea>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "Dialog.ScrollArea",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `DialogScrollArea`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Dialog/DialogScrollArea.js",
    ],
    group: "Dialog",
  },
  {
    filepath: "../src/components/Dialog/DialogTitle.js",
    title: "Dialog.Title",
    description:
      "A component to show a title in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Title>This is a title</Dialog.Title>\n          <Dialog.Content>\n            <Paragraph>This is simple dialog</Paragraph>\n          </Dialog.Content>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
    link: "dialog-title",
    data: {
      description:
        "A component to show a title in a Dialog.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph, Dialog, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _hideDialog = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Portal>\n        <Dialog\n          visible={this.state.visible}\n          onDismiss={this._hideDialog}>\n          <Dialog.Title>This is a title</Dialog.Title>\n          <Dialog.Content>\n            <Paragraph>This is simple dialog</Paragraph>\n          </Dialog.Content>\n        </Dialog>\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "Dialog.Title",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Title text for the `DialogTitle`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Dialog/DialogTitle.js",
    ],
    group: "Dialog",
  },
  {
    filepath: "../src/components/Divider.js",
    title: "Divider",
    description:
      "A divider is a thin, lightweight separator that groups content in lists and page layouts.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Divider, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <View>\n    <Text>Apple</Text>\n    <Divider />\n    <Text>Orange</Text>\n    <Divider />\n  </View>\n);\n\nexport default MyComponent;\n```",
    link: "divider",
    data: {
      description:
        "A divider is a thin, lightweight separator that groups content in lists and page layouts.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Divider, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <View>\n    <Text>Apple</Text>\n    <Divider />\n    <Text>Orange</Text>\n    <Divider />\n  </View>\n);\n\nexport default MyComponent;\n```",
      displayName: "Divider",
      methods: [],
      statics: [],
      props: {
        inset: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether divider has a left inset.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Divider.js",
    ],
  },
  {
    filepath: "../src/components/Drawer/DrawerItem.js",
    title: "Drawer.Item",
    description:
      "A component used to show an action item with an icon and a label in a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Drawer } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Drawer.Item label=\"First Item\" />\n);\n\nexport default MyComponent;\n```",
    link: "drawer-item",
    data: {
      description:
        "A component used to show an action item with an icon and a label in a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Drawer } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Drawer.Item label=\"First Item\" />\n);\n\nexport default MyComponent;\n```",
      displayName: "Drawer.Item",
      methods: [],
      statics: [],
      props: {
        label: {
          required: true,
          flowType: { name: "string" },
          description: "The label text of the item.",
        },
        icon: {
          required: false,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `DrawerItem`.",
        },
        active: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to highlight the drawer item as active.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Drawer/DrawerItem.js",
    ],
    group: "Drawer",
  },
  {
    filepath: "../src/components/Drawer/DrawerSection.js",
    title: "Drawer.Section",
    description:
      "A component to group content inside a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Drawer } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    active: 'first',\n  };\n\n  render() {\n    const { active } = this.state;\n\n    return (\n      <Drawer.Section title=\"Some title\">\n        <Drawer.Item\n          label=\"First Item\"\n          active={active === 'first'}\n          onPress={() => { this.setState({ active: 'first' }); }}\n        />\n        <Drawer.Item\n          label=\"Second Item\"\n          active={active === 'second'}\n          onPress={() => { this.setState({ active: 'second' }); }}\n        />\n     </Drawer.Section>\n    );\n  }\n}\n```",
    link: "drawer-section",
    data: {
      description:
        "A component to group content inside a navigation drawer.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Drawer } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    active: 'first',\n  };\n\n  render() {\n    const { active } = this.state;\n\n    return (\n      <Drawer.Section title=\"Some title\">\n        <Drawer.Item\n          label=\"First Item\"\n          active={active === 'first'}\n          onPress={() => { this.setState({ active: 'first' }); }}\n        />\n        <Drawer.Item\n          label=\"Second Item\"\n          active={active === 'second'}\n          onPress={() => { this.setState({ active: 'second' }); }}\n        />\n     </Drawer.Section>\n    );\n  }\n}\n```",
      displayName: "Drawer.Section",
      methods: [],
      statics: [],
      props: {
        title: {
          required: false,
          flowType: { name: "string" },
          description: "Title to show as the header for the section.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Drawer.Section`.",
        },
        style: {
          required: false,
          flowType: { name: "ViewStyleProp" },
          description: "",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Drawer/DrawerSection.js",
    ],
    group: "Drawer",
  },
  {
    filepath: "../src/components/FAB/FAB.js",
    title: "FAB",
    description:
      "A floating action button represents the primary action in an application.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-1.png\" />\n  <img src=\"screenshots/fab-2.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { FAB } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <FAB\n    style={styles.fab}\n    small\n    icon=\"add\"\n    onPress={() => console.log('Pressed')}\n  />\n);\n\nconst styles = StyleSheet.create({\n  fab: {\n    position: 'absolute',\n    margin: 16,\n    right: 0,\n    bottom: 0,\n  },\n})\n\nexport default MyComponent;\n```",
    link: "fab",
    data: {
      description:
        "A floating action button represents the primary action in an application.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-1.png\" />\n  <img src=\"screenshots/fab-2.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { FAB } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <FAB\n    style={styles.fab}\n    small\n    icon=\"add\"\n    onPress={() => console.log('Pressed')}\n  />\n);\n\nconst styles = StyleSheet.create({\n  fab: {\n    position: 'absolute',\n    margin: 16,\n    right: 0,\n    bottom: 0,\n  },\n})\n\nexport default MyComponent;\n```",
      displayName: "FAB",
      methods: [],
      statics: [
        { name: "Group", description: null, docblock: null, type: null },
      ],
      props: {
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `FAB`.",
        },
        label: {
          required: false,
          flowType: { name: "string" },
          description: "Optional label for extended `FAB`.",
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.\nUses `label` by default if specified.",
        },
        small: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for the `FAB`.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        visible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether `FAB` is currently visible.",
          defaultValue: { value: "true", computed: false },
        },
        loading: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to show a loading indicator.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/FAB/FAB.js",
    ],
  },
  {
    filepath: "../src/components/FAB/FABGroup.js",
    title: "FAB.Group",
    description:
      "A component to display a stack of FABs with related actions in a speed dial.\nTo render the group above other components, you'll need to wrap it with the [`Portal`](portal.html) component.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-group.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { FAB, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    open: false,\n  };\n\n  render() {\n    return (\n      <Portal>\n        <FAB.Group\n          open={this.state.open}\n          icon={this.state.open ? 'today' : 'add'}\n          actions={[\n            { icon: 'add', onPress: () => console.log('Pressed add') },\n            { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},\n            { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },\n            { icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },\n          ]}\n          onStateChange={({ open }) => this.setState({ open })}\n          onPress={() => {\n            if (this.state.open) {\n              // do something if the speed dial is open\n            }\n          }}\n        />\n      </Portal>\n    );\n  }\n}\n```",
    link: "fab-group",
    data: {
      description:
        "A component to display a stack of FABs with related actions in a speed dial.\nTo render the group above other components, you'll need to wrap it with the [`Portal`](portal.html) component.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/fab-group.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { FAB, Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    open: false,\n  };\n\n  render() {\n    return (\n      <Portal>\n        <FAB.Group\n          open={this.state.open}\n          icon={this.state.open ? 'today' : 'add'}\n          actions={[\n            { icon: 'add', onPress: () => console.log('Pressed add') },\n            { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},\n            { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },\n            { icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },\n          ]}\n          onStateChange={({ open }) => this.setState({ open })}\n          onPress={() => {\n            if (this.state.open) {\n              // do something if the speed dial is open\n            }\n          }}\n        />\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "FAB.Group",
      methods: [
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
          required: true,
          flowType: {
            name: "Array",
            elements: [
              {
                name: "signature",
                type: "object",
                raw: "{\n  icon: IconSource,\n  label?: string,\n  color?: string,\n  accessibilityLabel?: string,\n  style?: any,\n  onPress: () => mixed,\n}",
                signature: {
                  properties: [
                    {
                      key: "icon",
                      value: { name: "IconSource", required: true },
                    },
                    {
                      key: "label",
                      value: { name: "string", required: false },
                    },
                    {
                      key: "color",
                      value: { name: "string", required: false },
                    },
                    {
                      key: "accessibilityLabel",
                      value: { name: "string", required: false },
                    },
                    { key: "style", value: { name: "any", required: false } },
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
            raw: "Array<{\n  icon: IconSource,\n  label?: string,\n  color?: string,\n  accessibilityLabel?: string,\n  style?: any,\n  onPress: () => mixed,\n}>",
          },
          description:
            "Action items to display in the form of a speed dial.\nAn action item should contain the following properties:\n- `icon`: icon to display (required)\n- `label`: optional label text\n- `accessibilityLabel`: accessibility label for the action, uses label by default if specified\n- `color`: custom icon color of the action item\n- `style`: pass additional styles for the fab item, for example, `backgroundColor`\n- `onPress`: callback that is called when `FAB` is pressed (required)",
        },
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description:
            "Icon to display for the `FAB`.\nYou can toggle it based on whether the speed dial is open to display a different icon.",
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for the `FAB`.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on pressing the `FAB`.",
        },
        open: {
          required: true,
          flowType: { name: "boolean" },
          description: "Whether the speed dial is open.",
        },
        onStateChange: {
          required: true,
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
          description:
            "Callback which is called on opening and closing the speed dial.\nThe open state needs to be updated when it's called, otherwise the change is dropped.",
        },
        visible: {
          required: true,
          flowType: { name: "boolean" },
          description: "Whether `FAB` is currently visible.",
        },
        style: {
          required: false,
          flowType: { name: "any" },
          description:
            "Style for the group. You can use it to pass additional styles if you need.\nFor example, you can set an additional padding if you have a tab bar at the bottom.",
        },
        fabStyle: {
          required: false,
          flowType: { name: "any" },
          description:
            "Style for the FAB. It allows to pass the FAB button styles, such as backgroundColor.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/FAB/FABGroup.js",
    ],
    group: "FAB",
  },
  {
    filepath: "../src/components/Typography/Headline.js",
    title: "Headline",
    description:
      "Typography component for showing a headline.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/headline.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Headline } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Headline>Headline</Headline>\n);\n\nexport default MyComponent;\n```",
    link: "headline",
    data: {
      description:
        "Typography component for showing a headline.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/headline.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Headline } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Headline>Headline</Headline>\n);\n\nexport default MyComponent;\n```",
      displayName: "Headline",
      methods: [],
      statics: [],
      props: {
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Headline.js",
    ],
  },
  {
    filepath: "../src/components/HelperText.js",
    title: "HelperText",
    description:
      "Helper text is used in conjuction with input elements to provide additional hints for the user.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/helper-text.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { HelperText, TextInput } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    text: ''\n  };\n\n  render(){\n    return (\n      <View>\n        <TextInput\n          label=\"Email\"\n          value={this.state.text}\n          onChangeText={text => this.setState({ text })}\n        />\n        <HelperText\n          type=\"error\"\n          visible={!this.state.text.includes('@')}\n        >\n          Email address is invalid!\n        </HelperText>\n      </View>\n    );\n  }\n}\n```",
    link: "helper-text",
    data: {
      description:
        "Helper text is used in conjuction with input elements to provide additional hints for the user.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/helper-text.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { HelperText, TextInput } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    text: ''\n  };\n\n  render(){\n    return (\n      <View>\n        <TextInput\n          label=\"Email\"\n          value={this.state.text}\n          onChangeText={text => this.setState({ text })}\n        />\n        <HelperText\n          type=\"error\"\n          visible={!this.state.text.includes('@')}\n        >\n          Email address is invalid!\n        </HelperText>\n      </View>\n    );\n  }\n}\n```",
      displayName: "HelperText",
      methods: [
        {
          name: "_showText",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_hideText",
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
          required: false,
          flowType: {
            name: "union",
            raw: "'error' | 'info'",
            elements: [
              { name: "literal", value: "'error'" },
              { name: "literal", value: "'info'" },
            ],
          },
          description: "Type of the helper text.",
          defaultValue: { value: "'info'", computed: false },
        },
        visible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to display the helper text.",
          defaultValue: { value: "true", computed: false },
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text content of the HelperText.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/HelperText.js",
    ],
  },
  {
    filepath: "../src/components/IconButton.js",
    title: "IconButton",
    description:
      'An icon button is a button which displays only an icon without a label.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/icon-button-1.png" />\n    <figcaption>Icon button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/icon-button-2.png" />\n    <figcaption>Pressed icon button</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { IconButton, Colors } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <IconButton\n    icon="add-a-photo"\n    color={Colors.red500}\n    size={20}\n    onPress={() => console.log(\'Pressed\')}\n  />\n);\n\nexport default MyComponent;\n```',
    link: "icon-button",
    data: {
      description:
        'An icon button is a button which displays only an icon without a label.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/icon-button-1.png" />\n    <figcaption>Icon button</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/icon-button-2.png" />\n    <figcaption>Pressed icon button</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { IconButton, Colors } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <IconButton\n    icon="add-a-photo"\n    color={Colors.red500}\n    size={20}\n    onPress={() => console.log(\'Pressed\')}\n  />\n);\n\nexport default MyComponent;\n```',
      displayName: "IconButton",
      methods: [],
      statics: [],
      props: {
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Icon to display.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Color of the icon.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the icon.",
          defaultValue: { value: "24", computed: false },
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.",
        },
        animated: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether an icon change is animated.",
          defaultValue: { value: "false", computed: false },
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the button. This is read by the screen reader when the user taps the button.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/IconButton.js",
    ],
  },
  {
    filepath: "../src/components/TouchableRipple/index.js",
    title: "TouchableRipple",
    description:
      "A wrapper for views that should respond to touches.\nProvides a material \"ink ripple\" interaction effect for supported platforms (>= Android Lollipop).\nOn unsupported platforms, it falls back to a highlight effect.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Text, TouchableRipple } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <TouchableRipple\n    onPress={() => console.log('Pressed')}\n    rippleColor=\"rgba(0, 0, 0, .32)\"\n  >\n    <Text>Press me</Text>\n  </TouchableRipple>\n);\n\nexport default MyComponent;\n```",
    link: "touchable-ripple",
    data: {
      description:
        "A wrapper for views that should respond to touches.\nProvides a material \"ink ripple\" interaction effect for supported platforms (>= Android Lollipop).\nOn unsupported platforms, it falls back to a highlight effect.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { Text, TouchableRipple } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <TouchableRipple\n    onPress={() => console.log('Pressed')}\n    rippleColor=\"rgba(0, 0, 0, .32)\"\n  >\n    <Text>Press me</Text>\n  </TouchableRipple>\n);\n\nexport default MyComponent;\n```",
      displayName: "TouchableRipple",
      methods: [
        {
          name: "_handlePressIn",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
          returns: null,
        },
        {
          name: "_handlePressOut",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
          returns: null,
        },
      ],
      statics: [
        {
          name: "supported",
          description: "Whether ripple effect is supported.",
          docblock: "Whether ripple effect is supported.",
          value: true,
          type: null,
        },
      ],
      props: {
        borderless: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to render the ripple outside the view bounds.",
          defaultValue: { value: "false", computed: false },
        },
        background: {
          required: false,
          flowType: { name: "Object" },
          description:
            "Type of background drawabale to display the feedback (Android).\nhttps://facebook.github.io/react-native/docs/touchablenativefeedback.html#background",
        },
        centered: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to start the ripple at the center (Web).",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to prevent interaction with the touchable.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
            nullable: true,
          },
          description:
            "Function to execute on press. If not set, will cause the touchable to be disabled.",
        },
        onLongPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on long press.",
        },
        rippleColor: {
          required: false,
          flowType: { name: "string" },
          description: "Color of the ripple effect (Android >= 5.0 and Web).",
        },
        underlayColor: {
          required: false,
          flowType: { name: "string" },
          description:
            "Color of the underlay for the highlight effect (Android < 5.0 and iOS).",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `TouchableRipple`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/TouchableRipple/index.js",
    ],
  },
  {
    filepath: "../src/components/List/ListAccordion.js",
    title: "List.Accordion",
    description:
      'A component used to display an expandable list item.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-accordion-1.png" />\n  <img class="medium" src="screenshots/list-accordion-2.png" />\n  <img class="medium" src="screenshots/list-accordion-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List, Checkbox } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  state = {\n    expanded: true\n  }\n\n  _handlePress = () =>\n    this.setState({\n      expanded: !this.state.expanded\n    });\n\n  render() {\n    return (\n      <List.Section title="Accordions">\n        <List.Accordion\n          title="Uncontrolled Accordion"\n          left={props => <List.Icon {...props} icon="folder" />}\n        >\n          <List.Item title="First item" />\n          <List.Item title="Second item" />\n        </List.Accordion>\n\n        <List.Accordion\n          title="Controlled Accordion"\n          left={props => <List.Icon {...props} icon="folder" />}\n          expanded={this.state.expanded}\n          onPress={this._handlePress}\n        >\n          <List.Item title="First item" />\n          <List.Item title="Second item" />\n        </List.Accordion>\n      </List.Section>\n    );\n  }\n}\n\nexport default MyComponent;\n```',
    link: "list-accordion",
    data: {
      description:
        'A component used to display an expandable list item.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-accordion-1.png" />\n  <img class="medium" src="screenshots/list-accordion-2.png" />\n  <img class="medium" src="screenshots/list-accordion-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List, Checkbox } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  state = {\n    expanded: true\n  }\n\n  _handlePress = () =>\n    this.setState({\n      expanded: !this.state.expanded\n    });\n\n  render() {\n    return (\n      <List.Section title="Accordions">\n        <List.Accordion\n          title="Uncontrolled Accordion"\n          left={props => <List.Icon {...props} icon="folder" />}\n        >\n          <List.Item title="First item" />\n          <List.Item title="Second item" />\n        </List.Accordion>\n\n        <List.Accordion\n          title="Controlled Accordion"\n          left={props => <List.Icon {...props} icon="folder" />}\n          expanded={this.state.expanded}\n          onPress={this._handlePress}\n        >\n          <List.Item title="First item" />\n          <List.Item title="Second item" />\n        </List.Accordion>\n      </List.Section>\n    );\n  }\n}\n\nexport default MyComponent;\n```',
      displayName: "List.Accordion",
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
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Title text for the list accordion.",
        },
        description: {
          required: false,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Description text for the list accordion.",
        },
        left: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { color: string }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ color: string }",
                    signature: {
                      properties: [
                        {
                          key: "color",
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
          description:
            "Callback which returns a React element to display on the left side.",
        },
        expanded: {
          required: false,
          flowType: { name: "boolean" },
          description:
            'Whether the accordion is expanded\nIf this prop is provided, the accordion will behave as a "controlled component".\nYou\'ll need to update this prop when you want to toggle the component or on `onPress`.',
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the section.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: {
          required: false,
          flowType: { name: "ViewStyleProp" },
          description:
            "Style that is passed to the wrapping TouchableRipple element.",
        },
        titleStyle: {
          required: false,
          flowType: { name: "TextStyleProp" },
          description: "Style that is passed to Title element.",
        },
        descriptionStyle: {
          required: false,
          flowType: { name: "TextStyleProp" },
          description: "Style that is passed to Description element.",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/List/ListAccordion.js",
    ],
    group: "List",
  },
  {
    filepath: "../src/components/List/ListIcon.js",
    title: "List.Icon",
    description:
      "A component to show an icon in a list item.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { List, Colors } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <List.Icon color={Colors.blue500} icon=\"folder\" />\n);\n\nexport default MyComponent;\n```",
    link: "list-icon",
    data: {
      description:
        "A component to show an icon in a list item.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { List, Colors } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <List.Icon color={Colors.blue500} icon=\"folder\" />\n);\n\nexport default MyComponent;\n```",
      displayName: "List.Icon",
      methods: [],
      statics: [],
      props: {
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Icon to show.",
        },
        color: {
          required: true,
          flowType: { name: "string" },
          description: "Color for the icon.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/List/ListIcon.js",
    ],
    group: "List",
  },
  {
    filepath: "../src/components/List/ListItem.js",
    title: "List.Item",
    description:
      'A component to show tiles inside a List.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-item-1.png" />\n  <img class="medium" src="screenshots/list-item-2.png" />\n  <img class="medium" src="screenshots/list-item-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <List.Item\n    title="First Item"\n    description="Item description"\n    left={props => <List.Icon {...props} icon="folder" />}\n  />\n);\n\nexport default MyComponent;\n```',
    link: "list-item",
    data: {
      description:
        'A component to show tiles inside a List.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/list-item-1.png" />\n  <img class="medium" src="screenshots/list-item-2.png" />\n  <img class="medium" src="screenshots/list-item-3.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <List.Item\n    title="First Item"\n    description="Item description"\n    left={props => <List.Icon {...props} icon="folder" />}\n  />\n);\n\nexport default MyComponent;\n```',
      displayName: "List.Item",
      methods: [
        {
          name: "renderDescription",
          docblock: null,
          modifiers: [],
          params: [
            { name: "description", type: null },
            { name: "descriptionColor", type: null },
          ],
          returns: null,
        },
      ],
      statics: [],
      props: {
        title: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Title text for the list item.",
        },
        description: {
          required: false,
          flowType: {
            name: "union",
            raw: "| React.Node\n| ((props: {\n    ellipsizeMode: EllipsizeProp,\n    color: string,\n    fontSize: number,\n  }) => React.Node)",
            elements: [
              { name: "ReactNode", raw: "React.Node" },
              {
                name: "signature",
                type: "function",
                raw: "(props: {\n  ellipsizeMode: EllipsizeProp,\n  color: string,\n  fontSize: number,\n}) => React.Node",
                signature: {
                  arguments: [
                    {
                      name: "props",
                      type: {
                        name: "signature",
                        type: "object",
                        raw: "{\n  ellipsizeMode: EllipsizeProp,\n  color: string,\n  fontSize: number,\n}",
                        signature: {
                          properties: [
                            {
                              key: "ellipsizeMode",
                              value: { name: "EllipsizeProp", required: true },
                            },
                            {
                              key: "color",
                              value: { name: "string", required: true },
                            },
                            {
                              key: "fontSize",
                              value: { name: "number", required: true },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  return: { name: "ReactNode", raw: "React.Node" },
                },
              },
            ],
          },
          description:
            "Description text for the list item or callback which returns a React element to display the description.",
        },
        left: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { color: string }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ color: string }",
                    signature: {
                      properties: [
                        {
                          key: "color",
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
          description:
            "Callback which returns a React element to display on the left side.",
        },
        right: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: { color: string }) => React.Node",
            signature: {
              arguments: [
                {
                  name: "props",
                  type: {
                    name: "signature",
                    type: "object",
                    raw: "{ color: string }",
                    signature: {
                      properties: [
                        {
                          key: "color",
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
          description:
            "Callback which returns a React element to display on the right side.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: {
          required: false,
          flowType: { name: "ViewStyleProp" },
          description:
            "Style that is passed to the wrapping TouchableRipple element.",
        },
        titleStyle: {
          required: false,
          flowType: { name: "TextStyleProp" },
          description: "Style that is passed to Title element.",
        },
        descriptionStyle: {
          required: false,
          flowType: { name: "TextStyleProp" },
          description: "Style that is passed to Description element.",
        },
        titleEllipsizeMode: {
          required: false,
          flowType: { name: "EllipsizeProp" },
          description: "Ellipsize Mode for the Title",
        },
        descriptionEllipsizeMode: {
          required: false,
          flowType: { name: "EllipsizeProp" },
          description: "Ellipsize Mode for the Description",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/List/ListItem.js",
    ],
    group: "List",
  },
  {
    filepath: "../src/components/List/ListSection.js",
    title: "List.Section",
    description:
      'A component used to group list items.\n\n<div class="screenshots">\n  <img src="screenshots/list-section.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  render() {\n    return (\n      <List.Section>\n        <List.Subheader>Some title</List.Subheader>\n        <List.Item\n          title="First Item"\n          left={() => <List.Icon icon="folder" />}\n       />\n        <List.Item\n          title="Second Item"\n          left={() => <List.Icon color="#000" icon="folder" />}\n       />\n     </List.Section>\n    );\n  }\n}\n\nexport default MyComponent;\n```',
    link: "list-section",
    data: {
      description:
        'A component used to group list items.\n\n<div class="screenshots">\n  <img src="screenshots/list-section.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { List } from \'react-native-paper\';\n\nclass MyComponent extends React.Component {\n  render() {\n    return (\n      <List.Section>\n        <List.Subheader>Some title</List.Subheader>\n        <List.Item\n          title="First Item"\n          left={() => <List.Icon icon="folder" />}\n       />\n        <List.Item\n          title="Second Item"\n          left={() => <List.Icon color="#000" icon="folder" />}\n       />\n     </List.Section>\n    );\n  }\n}\n\nexport default MyComponent;\n```',
      displayName: "List.Section",
      methods: [],
      statics: [],
      props: {
        title: {
          required: false,
          flowType: { name: "string" },
          description: "Title text for the section.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the section.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        titleStyle: {
          required: false,
          flowType: { name: "TextStyleProp" },
          description: "Style that is passed to Title element.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/List/ListSection.js",
    ],
    group: "List",
  },
  {
    filepath: "../src/components/List/ListSubheader.js",
    title: "List.Subheader",
    description:
      "A component used to display a header in lists.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { List } from 'react-native-paper';\n\nclass MyComponent extends React.Component {\n render () {\n   return <List.Subheader>My List Title</List.Subheader>;\n }\n}\n\nexport default MyComponent;\n```",
    link: "list-subheader",
    data: {
      description:
        "A component used to display a header in lists.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { List } from 'react-native-paper';\n\nclass MyComponent extends React.Component {\n render () {\n   return <List.Subheader>My List Title</List.Subheader>;\n }\n}\n\nexport default MyComponent;\n```",
      displayName: "List.Subheader",
      methods: [],
      statics: [],
      props: {
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: {
          required: false,
          flowType: { name: "any" },
          description: "Style that is passed to Text element.",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/List/ListSubheader.js",
    ],
    group: "List",
  },
  {
    filepath: "../src/components/Menu/Menu.js",
    title: "Menu",
    description:
      'Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/menu-1.png" />\n  <img class="medium" src="screenshots/menu-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Paragraph, Menu, Divider, Provider } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _openMenu = () => this.setState({ visible: true });\n\n  _closeMenu = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Provider>\n        <View\n          style={{\n            paddingTop: 50,\n            flexDirection: \'row\',\n            justifyContent: \'center\'\n          }}>\n          <Menu\n            visible={this.state.visible}\n            onDismiss={this._closeMenu}\n            anchor={\n              <Button onPress={this._openMenu}>Show menu</Button>\n            }\n          >\n            <Menu.Item onPress={() => {}} title="Item 1" />\n            <Menu.Item onPress={() => {}} title="Item 2" />\n            <Divider />\n            <Menu.Item onPress={() => {}} title="Item 3" />\n          </Menu>\n        </View>\n      </Provider>\n    );\n  }\n}\n```',
    link: "menu",
    data: {
      description:
        'Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.\n\n <div class="screenshots">\n  <img class="medium" src="screenshots/menu-1.png" />\n  <img class="medium" src="screenshots/menu-2.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { View } from \'react-native\';\nimport { Button, Paragraph, Menu, Divider, Provider } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _openMenu = () => this.setState({ visible: true });\n\n  _closeMenu = () => this.setState({ visible: false });\n\n  render() {\n    return (\n      <Provider>\n        <View\n          style={{\n            paddingTop: 50,\n            flexDirection: \'row\',\n            justifyContent: \'center\'\n          }}>\n          <Menu\n            visible={this.state.visible}\n            onDismiss={this._closeMenu}\n            anchor={\n              <Button onPress={this._openMenu}>Show menu</Button>\n            }\n          >\n            <Menu.Item onPress={() => {}} title="Item 1" />\n            <Menu.Item onPress={() => {}} title="Item 2" />\n            <Divider />\n            <Menu.Item onPress={() => {}} title="Item 3" />\n          </Menu>\n        </View>\n      </Provider>\n    );\n  }\n}\n```',
      displayName: "Menu",
      methods: [
        {
          name: "_measureMenuLayout",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_measureAnchorLayout",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_updateVisibility",
          docblock: null,
          modifiers: ["async"],
          params: [],
          returns: null,
        },
        {
          name: "_isBrowser",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_focusFirstDOMNode",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "el",
              type: {
                name: "union",
                raw: "View | null",
                elements: [{ name: "View" }, { name: "null" }],
              },
            },
          ],
          returns: null,
        },
        {
          name: "_handleDismiss",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_handleKeypress",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "e",
              type: { name: "KeyboardEvent", alias: "KeyboardEvent" },
            },
          ],
          returns: null,
        },
        {
          name: "_attachListeners",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_removeListeners",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null,
        },
        {
          name: "_show",
          docblock: null,
          modifiers: ["async"],
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
        { name: "Item", description: null, docblock: null, type: null },
      ],
      props: {
        visible: {
          required: true,
          flowType: { name: "boolean" },
          description: "Whether the Menu is currently visible.",
        },
        anchor: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description:
            "The anchor to open the menu from. In most cases, it will be a button that opens the manu.",
        },
        statusBarHeight: {
          required: false,
          flowType: { name: "number" },
          description:
            "Extra margin to add at the top of the menu to account for translucent status bar on Android.\nIf you are using Expo, we assume translucent status bar and set a height for status bar automatically.\nPass `0` or a custom value to and customize it.\nThis is automatically handled on iOS.",
          defaultValue: { value: "APPROX_STATUSBAR_HEIGHT", computed: true },
        },
        onDismiss: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Menu`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Menu/Menu.js",
    ],
  },
  {
    filepath: "../src/components/Menu/MenuItem.js",
    title: "Menu.Item",
    description: "A component to show a single list item inside a Menu.",
    link: "menu-item",
    data: {
      description: "A component to show a single list item inside a Menu.",
      displayName: "Menu.Item",
      methods: [],
      statics: [],
      props: {
        title: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Title text for the `MenuItem`.",
        },
        icon: {
          required: false,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `MenuItem`.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Menu/MenuItem.js",
    ],
    group: "Menu",
  },
  {
    filepath: "../src/components/Modal.js",
    title: "Modal",
    description:
      "The Modal component is a simple way to present content above an enclosing view.\nTo render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Modal, Portal, Text, Button, Provider } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showModal = () => this.setState({ visible: true });\n  _hideModal = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n     <Provider>\n       <Portal>\n         <Modal visible={visible} onDismiss={this._hideModal}>\n           <Text>Example Modal</Text>\n         </Modal>\n         <Button\n           style={{ marginTop: 30 }}\n           onPress={this._showModal}\n         >\n           Show\n         </Button>\n       </Portal>\n     </Provider>\n    );\n  }\n}\n```",
    link: "modal",
    data: {
      description:
        "The Modal component is a simple way to present content above an enclosing view.\nTo render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Modal, Portal, Text, Button, Provider } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  _showModal = () => this.setState({ visible: true });\n  _hideModal = () => this.setState({ visible: false });\n\n  render() {\n    const { visible } = this.state;\n    return (\n     <Provider>\n       <Portal>\n         <Modal visible={visible} onDismiss={this._hideModal}>\n           <Text>Example Modal</Text>\n         </Modal>\n         <Button\n           style={{ marginTop: 30 }}\n           onPress={this._showModal}\n         >\n           Show\n         </Button>\n       </Portal>\n     </Provider>\n    );\n  }\n}\n```",
      displayName: "Modal",
      methods: [
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
          required: false,
          flowType: { name: "boolean" },
          description:
            "Determines whether clicking outside the modal dismiss it.",
          defaultValue: { value: "true", computed: false },
        },
        onDismiss: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Callback that is called when the user dismisses the modal.",
        },
        visible: {
          required: false,
          flowType: { name: "boolean" },
          description: "Determines Whether the modal is visible.",
          defaultValue: { value: "false", computed: false },
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Modal`.",
        },
        contentContainerStyle: {
          required: false,
          flowType: { name: "any" },
          description: "Style for the content of the modal",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Modal.js",
    ],
  },
  {
    filepath: "../src/components/Typography/Paragraph.js",
    title: "Paragraph",
    description:
      "Typography component for showing a paragraph.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paragraph.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paragraph>Paragraph</Paragraph>\n);\n\nexport default MyComponent;\n```",
    link: "paragraph",
    data: {
      description:
        "Typography component for showing a paragraph.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/paragraph.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Paragraph } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Paragraph>Paragraph</Paragraph>\n);\n\nexport default MyComponent;\n```",
      displayName: "Paragraph",
      methods: [],
      statics: [],
      props: {
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Paragraph.js",
    ],
  },
  {
    filepath: "../src/components/Portal/Portal.js",
    title: "Portal",
    description:
      "Portal allows to render a component at a different place in the parent tree.\nYou can use it to render content which should appear above other elements, similar to `Modal`.\nIt requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Portal, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Portal>\n        <Text>This is rendered at a different place</Text>\n      </Portal>\n    );\n  }\n}\n```",
    link: "portal",
    data: {
      description:
        "Portal allows to render a component at a different place in the parent tree.\nYou can use it to render content which should appear above other elements, similar to `Modal`.\nIt requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Portal, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Portal>\n        <Text>This is rendered at a different place</Text>\n      </Portal>\n    );\n  }\n}\n```",
      displayName: "Portal",
      methods: [],
      statics: [
        { name: "Host", description: null, docblock: null, type: null },
      ],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Portal`.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Portal/Portal.js",
    ],
  },
  {
    filepath: "../src/components/Portal/PortalHost.js",
    title: "Portal.Host",
    description:
      "Portal host renders all of its children `Portal` elements.\nFor example, you can wrap a screen in `Portal.Host` to render items above the screen.\nIf you're using the `Provider` component, it already includes `Portal.Host`.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Text } from 'react-native';\nimport { Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Portal.Host>\n        <Text>Content of the app</Text>\n      </Portal.Host>\n    );\n  }\n}\n```\n\nHere any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.",
    link: "portal-host",
    data: {
      description:
        "Portal host renders all of its children `Portal` elements.\nFor example, you can wrap a screen in `Portal.Host` to render items above the screen.\nIf you're using the `Provider` component, it already includes `Portal.Host`.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Text } from 'react-native';\nimport { Portal } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  render() {\n    return (\n      <Portal.Host>\n        <Text>Content of the app</Text>\n      </Portal.Host>\n    );\n  }\n}\n```\n\nHere any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.",
      displayName: "Portal.Host",
      methods: [
        {
          name: "_setManager",
          docblock: null,
          modifiers: [],
          params: [
            { name: "manager", type: { name: "Object", nullable: true } },
          ],
          returns: null,
        },
        {
          name: "_mount",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "children",
              type: { name: "ReactNode", raw: "React.Node" },
            },
          ],
          returns: null,
        },
        {
          name: "_update",
          docblock: null,
          modifiers: [],
          params: [
            { name: "key", type: { name: "number" } },
            {
              name: "children",
              type: { name: "ReactNode", raw: "React.Node" },
            },
          ],
          returns: null,
        },
        {
          name: "_unmount",
          docblock: null,
          modifiers: [],
          params: [{ name: "key", type: { name: "number" } }],
          returns: null,
        },
      ],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Portal/PortalHost.js",
    ],
    group: "Portal",
  },
  {
    filepath: "../src/components/ProgressBar/ProgressBar.js",
    title: "ProgressBar",
    description:
      "Progress bar is an indicator used to present progress of some activity in the app.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/progress-bar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ProgressBar, Colors } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <ProgressBar progress={0.5} color={Colors.red800} />\n);\n\nexport default MyComponent;\n```",
    link: "progress-bar",
    data: {
      description:
        "Progress bar is an indicator used to present progress of some activity in the app.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/progress-bar.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ProgressBar, Colors } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <ProgressBar progress={0.5} color={Colors.red800} />\n);\n\nexport default MyComponent;\n```",
      displayName: "ProgressBar",
      methods: [],
      statics: [],
      props: {
        progress: {
          required: true,
          flowType: { name: "number" },
          description: "Progress value (between 0 and 1).",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Color of the progress bar.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/ProgressBar/ProgressBar.js",
    ],
  },
  {
    filepath: "../src/components/RadioButton.js",
    title: "RadioButton",
    description:
      "Radio buttons allow the selection a single option from a set.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/radio-enabled.android.png\" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.android.png\" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-enabled.ios.png\" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.ios.png\" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: 'first',\n  };\n\n  render() {\n    const { checked } = this.state;\n\n    return (\n      <View>\n        <RadioButton\n          value=\"first\"\n          status={checked === 'first' ? 'checked' : 'unchecked'}\n          onPress={() => { this.setState({ checked: 'first' }); }}\n        />\n        <RadioButton\n          value=\"second\"\n          status={checked === 'second' ? 'checked' : 'unchecked'}\n          onPress={() => { this.setState({ checked: 'second' }); }}\n        />\n      </View>\n    );\n  }\n}\n```",
    link: "radio-button",
    data: {
      description:
        "Radio buttons allow the selection a single option from a set.\n\n<div class=\"screenshots\">\n  <figure>\n    <img src=\"screenshots/radio-enabled.android.png\" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.android.png\" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-enabled.ios.png\" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src=\"screenshots/radio-disabled.ios.png\" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    checked: 'first',\n  };\n\n  render() {\n    const { checked } = this.state;\n\n    return (\n      <View>\n        <RadioButton\n          value=\"first\"\n          status={checked === 'first' ? 'checked' : 'unchecked'}\n          onPress={() => { this.setState({ checked: 'first' }); }}\n        />\n        <RadioButton\n          value=\"second\"\n          status={checked === 'second' ? 'checked' : 'unchecked'}\n          onPress={() => { this.setState({ checked: 'second' }); }}\n        />\n      </View>\n    );\n  }\n}\n```",
      displayName: "RadioButton",
      methods: [
        {
          name: "handlePress",
          docblock: null,
          modifiers: [],
          params: [{ name: "context", type: null }],
          returns: null,
        },
        {
          name: "isChecked",
          docblock: null,
          modifiers: [],
          params: [{ name: "context", type: null }],
          returns: null,
        },
      ],
      statics: [
        { name: "Group", description: null, docblock: null, type: null },
        { name: "Android", description: null, docblock: null, type: null },
        { name: "IOS", description: null, docblock: null, type: null },
      ],
      props: {
        value: {
          required: true,
          flowType: { name: "string" },
          description: "Value of the radio button",
        },
        status: {
          required: false,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
            ],
          },
          description: "Status of radio button.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether radio is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for unchecked radio.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for radio.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/RadioButton.js",
    ],
  },
  {
    filepath: "../src/components/RadioButtonAndroid.js",
    title: "RadioButton.Android",
    description:
      'Radio buttons allow the selection a single option from a set.\nThis component follows platform guidelines for Android.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/radio-enabled.android.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/radio-disabled.android.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
    link: "radio-button-android",
    data: {
      description:
        'Radio buttons allow the selection a single option from a set.\nThis component follows platform guidelines for Android.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/radio-enabled.android.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/radio-disabled.android.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
      displayName: "RadioButton.Android",
      methods: [],
      statics: [],
      props: {
        value: {
          required: true,
          flowType: { name: "string" },
          description: "Value of the radio button",
        },
        status: {
          required: false,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
            ],
          },
          description: "Status of radio button.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether radio is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        uncheckedColor: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for unchecked radio.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for radio.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/RadioButtonAndroid.js",
    ],
    group: "RadioButton",
  },
  {
    filepath: "../src/components/RadioButtonGroup.js",
    title: "RadioButton.Group",
    description:
      "Radio button group allows to control a group of radio buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    value: 'first',\n  };\n\n  render() {\n    return(\n      <RadioButton.Group\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n        <View>\n          <Text>First</Text>\n          <RadioButton value=\"first\" />\n        </View>\n        <View>\n          <Text>Second</Text>\n          <RadioButton value=\"second\" />\n        </View>\n      </RadioButton.Group>\n    )\n  }\n}\n```",
    link: "radio-button-group",
    data: {
      description:
        "Radio button group allows to control a group of radio buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton, Text } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    value: 'first',\n  };\n\n  render() {\n    return(\n      <RadioButton.Group\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n        <View>\n          <Text>First</Text>\n          <RadioButton value=\"first\" />\n        </View>\n        <View>\n          <Text>Second</Text>\n          <RadioButton value=\"second\" />\n        </View>\n      </RadioButton.Group>\n    )\n  }\n}\n```",
      displayName: "RadioButton.Group",
      methods: [],
      statics: [],
      props: {
        onValueChange: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(value: string) => mixed",
            signature: {
              arguments: [{ name: "value", type: { name: "string" } }],
              return: { name: "mixed" },
            },
          },
          description: "Function to execute on selection change.",
        },
        value: {
          required: true,
          flowType: { name: "string" },
          description: "Value of the currently selected radio button.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "React elements containing radio buttons.",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/RadioButtonGroup.js",
    ],
    group: "RadioButton",
  },
  {
    filepath: "../src/components/RadioButtonIOS.js",
    title: "RadioButton.IOS",
    description:
      'Radio buttons allow the selection a single option from a set.\nThis component follows platform guidelines for iOS.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/radio-enabled.ios.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/radio-disabled.ios.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
    link: "radio-button-ios",
    data: {
      description:
        'Radio buttons allow the selection a single option from a set.\nThis component follows platform guidelines for iOS.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/radio-enabled.ios.png" />\n    <figcaption>Enabled</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/radio-disabled.ios.png" />\n    <figcaption>Disabled</figcaption>\n  </figure>\n</div>',
      displayName: "RadioButton.IOS",
      methods: [],
      statics: [],
      props: {
        value: {
          required: true,
          flowType: { name: "string" },
          description: "Value of the radio button",
        },
        status: {
          required: false,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
            ],
          },
          description: "Status of radio button.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether radio is disabled.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description: "Function to execute on press.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for radio.",
        },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/RadioButtonIOS.js",
    ],
    group: "RadioButton",
  },
  {
    filepath: "../src/components/Searchbar.js",
    title: "Searchbar",
    description:
      'Searchbar is a simple input box where users can type search queries.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/searchbar.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Searchbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    firstQuery: \'\',\n  };\n\n  render() {\n    const { firstQuery } = this.state;\n    return (\n      <Searchbar\n        placeholder="Search"\n        onChangeText={query => { this.setState({ firstQuery: query }); }}\n        value={firstQuery}\n      />\n    );\n  }\n}\n```',
    link: "searchbar",
    data: {
      description:
        'Searchbar is a simple input box where users can type search queries.\n\n<div class="screenshots">\n  <img class="medium" src="screenshots/searchbar.png" />\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Searchbar } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    firstQuery: \'\',\n  };\n\n  render() {\n    const { firstQuery } = this.state;\n    return (\n      <Searchbar\n        placeholder="Search"\n        onChangeText={query => { this.setState({ firstQuery: query }); }}\n        value={firstQuery}\n      />\n    );\n  }\n}\n```',
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
          required: false,
          flowType: { name: "string" },
          description: "Hint text shown when the input is empty.",
        },
        value: {
          required: true,
          flowType: { name: "string" },
          description: "The value of the text input.",
        },
        icon: {
          required: false,
          flowType: { name: "IconSource" },
          description:
            "Icon name for the left icon button (see `onIconPress`).",
        },
        onChangeText: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(query: string) => void",
            signature: {
              arguments: [{ name: "query", type: { name: "string" } }],
              return: { name: "void" },
            },
          },
          description:
            "Callback that is called when the text input's text changes.",
        },
        onIconPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Callback to execute if we want the left icon to act as button.",
        },
        inputStyle: {
          required: false,
          flowType: { name: "any" },
          description:
            "Set style of the TextInput component inside the searchbar",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        iconColor: {
          required: false,
          flowType: { name: "string" },
          description:
            "Custom color for icon, default will be derived from theme",
        },
        clearIcon: {
          required: false,
          flowType: { name: "IconSource" },
          description:
            "Custom icon for clear button, default will be icon close",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Searchbar.js",
    ],
  },
  {
    filepath: "../src/components/Snackbar.js",
    title: "Snackbar",
    description:
      "Snackbars provide brief feedback about an operation through a message at the bottom of the screen.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/snackbar.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Snackbar } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View style={styles.container}>\n        <Button\n          onPress={() => this.setState(state => ({ visible: !state.visible }))}\n        >\n          {this.state.visible ? 'Hide' : 'Show'}\n        </Button>\n        <Snackbar\n          visible={this.state.visible}\n          onDismiss={() => this.setState({ visible: false })}\n          action={{\n            label: 'Undo',\n            onPress: () => {\n              // Do something\n            },\n          }}\n        >\n          Hey there! I'm a Snackbar.\n        </Snackbar>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-between',\n  },\n});\n```",
    link: "snackbar",
    data: {
      description:
        "Snackbars provide brief feedback about an operation through a message at the bottom of the screen.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/snackbar.gif\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Snackbar } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    visible: false,\n  };\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <View style={styles.container}>\n        <Button\n          onPress={() => this.setState(state => ({ visible: !state.visible }))}\n        >\n          {this.state.visible ? 'Hide' : 'Show'}\n        </Button>\n        <Snackbar\n          visible={this.state.visible}\n          onDismiss={() => this.setState({ visible: false })}\n          action={{\n            label: 'Undo',\n            onPress: () => {\n              // Do something\n            },\n          }}\n        >\n          Hey there! I'm a Snackbar.\n        </Snackbar>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-between',\n  },\n});\n```",
      displayName: "Snackbar",
      methods: [
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
          name: "DURATION_MEDIUM",
          description: "Show the Snackbar for a medium duration.",
          docblock: "Show the Snackbar for a medium duration.",
          type: null,
        },
        {
          name: "DURATION_LONG",
          description: "Show the Snackbar for a long duration.",
          docblock: "Show the Snackbar for a long duration.",
          type: null,
        },
      ],
      props: {
        visible: {
          required: true,
          flowType: { name: "boolean" },
          description: "Whether the Snackbar is currently visible.",
        },
        action: {
          required: false,
          flowType: {
            name: "signature",
            type: "object",
            raw: "{\n  label: string,\n  accessibilityLabel?: string,\n  onPress: () => mixed,\n}",
            signature: {
              properties: [
                { key: "label", value: { name: "string", required: true } },
                {
                  key: "accessibilityLabel",
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
          description:
            "Label and press callback for the action button. It should contain the following properties:\n- `label` - Label of the action button\n- `onPress` - Callback that is called when action button is pressed.",
        },
        duration: {
          required: false,
          flowType: { name: "number" },
          description: "The duration for which the Snackbar is shown.",
          defaultValue: { value: "7000", computed: false },
        },
        onDismiss: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "() => mixed",
            signature: { arguments: [], return: { name: "mixed" } },
          },
          description:
            "Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Text content of the Snackbar.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Snackbar.js",
    ],
  },
  {
    filepath: "../src/components/Typography/Subheading.js",
    title: "Subheading",
    description:
      "Typography component for showing a subheading.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/subheading.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Subheading } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Subheading>Subheading</Subheading>\n);\n\nexport default MyComponent;\n```",
    link: "subheading",
    data: {
      description:
        "Typography component for showing a subheading.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/subheading.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Subheading } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Subheading>Subheading</Subheading>\n);\n\nexport default MyComponent;\n```",
      displayName: "Subheading",
      methods: [],
      statics: [],
      props: {
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Subheading.js",
    ],
  },
  {
    filepath: "../src/components/Surface.js",
    title: "Surface",
    description:
      "Surface is a basic container that can give depth to an element with elevation shadow.\nA shadow can be applied by specifying the `elevation` property both on Android and iOS.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/surface-1.png\" />\n  <img src=\"screenshots/surface-2.png\" />\n  <img src=\"screenshots/surface-3.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Surface, Text } from 'react-native-paper';\nimport { StyleSheet } from 'react-native';\n\nconst MyComponent = () => (\n  <Surface style={styles.surface}>\n     <Text>Surface</Text>\n  </Surface>\n);\n\nexport default MyComponent;\n\nconst styles = StyleSheet.create({\n  surface: {\n    padding: 8,\n    height: 80,\n    width: 80,\n    alignItems: 'center',\n    justifyContent: 'center',\n    elevation: 4,\n  },\n});\n```",
    link: "surface",
    data: {
      description:
        "Surface is a basic container that can give depth to an element with elevation shadow.\nA shadow can be applied by specifying the `elevation` property both on Android and iOS.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/surface-1.png\" />\n  <img src=\"screenshots/surface-2.png\" />\n  <img src=\"screenshots/surface-3.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Surface, Text } from 'react-native-paper';\nimport { StyleSheet } from 'react-native';\n\nconst MyComponent = () => (\n  <Surface style={styles.surface}>\n     <Text>Surface</Text>\n  </Surface>\n);\n\nexport default MyComponent;\n\nconst styles = StyleSheet.create({\n  surface: {\n    padding: 8,\n    height: 80,\n    width: 80,\n    alignItems: 'center',\n    justifyContent: 'center',\n    elevation: 4,\n  },\n});\n```",
      displayName: "Surface",
      methods: [],
      statics: [],
      props: {
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "Content of the `Surface`.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Surface.js",
    ],
  },
  {
    filepath: "../src/components/Switch.js",
    title: "Switch",
    description:
      'Switch is a visual toggle between two mutually exclusive states — on and off.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/switch-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Switch } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    isSwitchOn: false,\n  };\n\n  render() {\n    const { isSwitchOn } = this.state;\n    return (\n      <Switch\n        value={isSwitchOn}\n        onValueChange={() =>\n          { this.setState({ isSwitchOn: !isSwitchOn }); }\n        }\n      />\n    );\n  }\n}\n```',
    link: "switch",
    data: {
      description:
        'Switch is a visual toggle between two mutually exclusive states — on and off.\n\n<div class="screenshots">\n  <figure>\n    <img src="screenshots/switch-enabled.android.png" />\n    <figcaption>Android (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.android.png" />\n    <figcaption>Android (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-enabled.ios.png" />\n    <figcaption>iOS (enabled)</figcaption>\n  </figure>\n  <figure>\n    <img src="screenshots/switch-disabled.ios.png" />\n    <figcaption>iOS (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { Switch } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    isSwitchOn: false,\n  };\n\n  render() {\n    const { isSwitchOn } = this.state;\n    return (\n      <Switch\n        value={isSwitchOn}\n        onValueChange={() =>\n          { this.setState({ isSwitchOn: !isSwitchOn }); }\n        }\n      />\n    );\n  }\n}\n```',
      displayName: "Switch",
      methods: [],
      statics: [],
      props: {
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Disable toggling the switch.",
        },
        value: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "Value of the switch, true means 'on', false means 'off'.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom color for switch.",
        },
        onValueChange: {
          required: false,
          flowType: { name: "Function" },
          description: "Callback called with the new value when it changes.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Switch.js",
    ],
  },
  {
    filepath: "../src/components/Typography/Text.js",
    title: "Text",
    description:
      "Text component which follows styles from the theme.\n\n@extends Text props https://facebook.github.io/react-native/docs/text.html#props",
    link: "text",
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
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Text.js",
    ],
  },
  {
    filepath: "../src/components/TextInput/TextInput.js",
    title: "TextInput",
    description:
      'A component to allow users to input text.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/textinput-flat.focused.png" />\n    <figcaption>Flat (focused)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-flat.disabled.png" />\n    <figcaption>Flat (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-outlined.focused.png" />\n    <figcaption>Outlined (focused)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-outlined.disabled.png" />\n    <figcaption>Outlined (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { TextInput } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    text: \'\'\n  };\n\n  render(){\n    return (\n      <TextInput\n        label=\'Email\'\n        value={this.state.text}\n        onChangeText={text => this.setState({ text })}\n      />\n    );\n  }\n}\n```\n\n@extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props',
    link: "text-input",
    data: {
      description:
        'A component to allow users to input text.\n\n<div class="screenshots">\n  <figure>\n    <img class="medium" src="screenshots/textinput-flat.focused.png" />\n    <figcaption>Flat (focused)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-flat.disabled.png" />\n    <figcaption>Flat (disabled)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-outlined.focused.png" />\n    <figcaption>Outlined (focused)</figcaption>\n  </figure>\n  <figure>\n    <img class="medium" src="screenshots/textinput-outlined.disabled.png" />\n    <figcaption>Outlined (disabled)</figcaption>\n  </figure>\n</div>\n\n## Usage\n```js\nimport * as React from \'react\';\nimport { TextInput } from \'react-native-paper\';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    text: \'\'\n  };\n\n  render(){\n    return (\n      <TextInput\n        label=\'Email\'\n        value={this.state.text}\n        onChangeText={text => this.setState({ text })}\n      />\n    );\n  }\n}\n```\n\n@extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props',
      displayName: "TextInput",
      methods: [
        {
          name: "_showPlaceholder",
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
          name: "_onLayoutAnimatedText",
          docblock: null,
          modifiers: [],
          params: [{ name: "e", type: null }],
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
        mode: {
          required: false,
          flowType: {
            name: "union",
            raw: "'flat' | 'outlined'",
            elements: [
              { name: "literal", value: "'flat'" },
              { name: "literal", value: "'outlined'" },
            ],
          },
          description:
            "Mode of the TextInput.\n- `flat` - flat input with an underline.\n- `outlined` - input with an outline.\n\nIn `outlined` mode, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.\nThis component render TextInputOutlined or TextInputFlat based on that props",
          defaultValue: { value: "'flat'", computed: false },
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description:
            "If true, user won't be able to interact with the component.",
          defaultValue: { value: "false", computed: false },
        },
        label: {
          required: false,
          flowType: { name: "string" },
          description: "The text to use for the floating label.",
        },
        placeholder: {
          required: false,
          flowType: { name: "string" },
          description: "Placeholder for the input.",
        },
        error: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether to style the TextInput with error style.",
          defaultValue: { value: "false", computed: false },
        },
        onChangeText: {
          required: false,
          flowType: { name: "Function" },
          description:
            "Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.",
        },
        selectionColor: {
          required: false,
          flowType: { name: "string" },
          description: "Selection color of the input",
        },
        underlineColor: {
          required: false,
          flowType: { name: "string" },
          description: "Underline color of the input.",
        },
        multiline: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether the input can have multiple lines.",
          defaultValue: { value: "false", computed: false },
        },
        numberOfLines: {
          required: false,
          flowType: { name: "number" },
          description:
            "The number of lines to show in the input (Android only).",
        },
        onFocus: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(args: any) => mixed",
            signature: {
              arguments: [{ name: "args", type: { name: "any" } }],
              return: { name: "mixed" },
            },
          },
          description:
            "Callback that is called when the text input is focused.",
        },
        onBlur: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(args: any) => mixed",
            signature: {
              arguments: [{ name: "args", type: { name: "any" } }],
              return: { name: "mixed" },
            },
          },
          description:
            "Callback that is called when the text input is blurred.",
        },
        render: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(props: RenderProps) => React.Node",
            signature: {
              arguments: [{ name: "props", type: { name: "RenderProps" } }],
              return: { name: "ReactNode", raw: "React.Node" },
            },
          },
          description:
            'Callback to render a custom input component such as `react-native-text-input-mask`\ninstead of the default `TextInput` component from `react-native`.\n\nExample:\n```js\n<TextInput\n  label="Phone number"\n  render={props =>\n    <TextInputMask\n      {...props}\n      mask="+[00] [000] [000] [000]"\n    />\n  }\n/>\n```',
          defaultValue: {
            value: "(props: RenderProps) => <NativeTextInput {...props} />",
            computed: false,
          },
        },
        value: {
          required: false,
          flowType: { name: "string" },
          description: "Value of the text input.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
        editable: {
          defaultValue: { value: "true", computed: false },
          required: false,
        },
      },
      composes: [null],
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/TextInput/TextInput.js",
    ],
  },
  {
    filepath: "../src/components/Typography/Title.js",
    title: "Title",
    description:
      "Typography component for showing a title.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/title.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Title } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Title>Title</Title>\n);\n\nexport default MyComponent;\n```",
    link: "title",
    data: {
      description:
        "Typography component for showing a title.\n\n<div class=\"screenshots\">\n  <img src=\"screenshots/title.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { Title } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Title>Title</Title>\n);\n\nexport default MyComponent;\n```",
      displayName: "Title",
      methods: [],
      statics: [],
      props: {
        style: { required: false, flowType: { name: "any" }, description: "" },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/Typography/Title.js",
    ],
  },
  {
    filepath: "../src/components/ToggleButton/ToggleButton.js",
    title: "ToggleButton",
    description:
      "Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,\na group should share a common container.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/toggle-button.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ToggleButton } from 'react-native-paper';\n\nclass ToggleButtonExample extends React.Component {\n  state = {\n    status: 'checked',\n  };\n\n  render() {\n    return (\n      <ToggleButton\n        icon=\"bluetooth\"\n        value=\"bluetooth\"\n        status={this.state.status}\n        onPress={value =>\n          this.setState({\n            status: value === 'checked' ? 'unchecked' : 'checked',\n          })\n        }\n      />\n    );\n  }\n}\n```",
    link: "toggle-button",
    data: {
      description:
        "Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,\na group should share a common container.\n\n<div class=\"screenshots\">\n  <img class=\"medium\" src=\"screenshots/toggle-button.png\" />\n</div>\n\n## Usage\n```js\nimport * as React from 'react';\nimport { ToggleButton } from 'react-native-paper';\n\nclass ToggleButtonExample extends React.Component {\n  state = {\n    status: 'checked',\n  };\n\n  render() {\n    return (\n      <ToggleButton\n        icon=\"bluetooth\"\n        value=\"bluetooth\"\n        status={this.state.status}\n        onPress={value =>\n          this.setState({\n            status: value === 'checked' ? 'unchecked' : 'checked',\n          })\n        }\n      />\n    );\n  }\n}\n```",
      displayName: "ToggleButton",
      methods: [],
      statics: [
        { name: "Group", description: null, docblock: null, type: null },
      ],
      props: {
        icon: {
          required: true,
          flowType: { name: "IconSource" },
          description: "Icon to display for the `ToggleButton`.",
        },
        size: {
          required: false,
          flowType: { name: "number" },
          description: "Size of the icon.",
        },
        color: {
          required: false,
          flowType: { name: "string" },
          description: "Custom text color for button.",
        },
        disabled: {
          required: false,
          flowType: { name: "boolean" },
          description: "Whether the button is disabled.",
        },
        accessibilityLabel: {
          required: false,
          flowType: { name: "string" },
          description:
            "Accessibility label for the `ToggleButton`. This is read by the screen reader when the user taps the button.",
        },
        onPress: {
          required: false,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(value: ?string) => mixed",
            signature: {
              arguments: [
                { name: "value", type: { name: "string", nullable: true } },
              ],
              return: { name: "mixed" },
            },
          },
          description: "Function to execute on press.",
        },
        value: {
          required: false,
          flowType: { name: "string" },
          description: "Value of button.",
        },
        status: {
          required: false,
          flowType: {
            name: "union",
            raw: "'checked' | 'unchecked'",
            elements: [
              { name: "literal", value: "'checked'" },
              { name: "literal", value: "'unchecked'" },
            ],
          },
          description: "Status of button.",
        },
        style: { required: false, flowType: { name: "any" }, description: "" },
        theme: {
          required: true,
          flowType: { name: "Theme" },
          description: "@optional",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/ToggleButton/ToggleButton.js",
    ],
  },
  {
    filepath: "../src/components/ToggleButton/ToggleButtonGroup.js",
    title: "ToggleButton.Group",
    description:
      "Toggle group allows to control a group of toggle buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { ToggleButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    value: 'left',\n  };\n\n  render() {\n    return(\n      <ToggleButton.Group\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n          <ToggleButton icon=\"format-align-left\" value=\"left\" />\n          <ToggleButton icon=\"format-align-right\" value=\"right\" />\n      </ToggleButton.Group>\n    )\n  }\n}\n```",
    link: "toggle-button-group",
    data: {
      description:
        "Toggle group allows to control a group of toggle buttons.\n\n## Usage\n```js\nimport * as React from 'react';\nimport { View } from 'react-native';\nimport { ToggleButton } from 'react-native-paper';\n\nexport default class MyComponent extends React.Component {\n  state = {\n    value: 'left',\n  };\n\n  render() {\n    return(\n      <ToggleButton.Group\n        onValueChange={value => this.setState({ value })}\n        value={this.state.value}\n      >\n          <ToggleButton icon=\"format-align-left\" value=\"left\" />\n          <ToggleButton icon=\"format-align-right\" value=\"right\" />\n      </ToggleButton.Group>\n    )\n  }\n}\n```",
      displayName: "ToggleButton.Group",
      methods: [],
      statics: [],
      props: {
        onValueChange: {
          required: true,
          flowType: {
            name: "signature",
            type: "function",
            raw: "(value: string) => mixed",
            signature: {
              arguments: [{ name: "value", type: { name: "string" } }],
              return: { name: "mixed" },
            },
          },
          description: "Function to execute on selection change.",
        },
        value: {
          required: true,
          flowType: { name: "string" },
          description: "Value of the currently selected toggle button.",
        },
        children: {
          required: true,
          flowType: { name: "ReactNode", raw: "React.Node" },
          description: "React elements containing toggle buttons.",
        },
      },
    },
    type: "component",
    dependencies: [
      "/Users/drakeoon/Desktop/Dev/projects/react-native-paper/src/components/ToggleButton/ToggleButtonGroup.js",
    ],
    group: "ToggleButton",
  },
];
