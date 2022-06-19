import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  init_react
} from "/build/_shared/chunk-AAE4WTYM.js";

// browser-route-module:/Users/markjensen/shared/electric-ladyland/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: {
      fontFamily: `'-apple-system', 'Segoe UI', 'Helvetica Neue',
    'Helvetica', 'Roboto', 'Arial', 'sans-serif', 'system-ui', 'Apple Color Emoji',
    'Segoe UI Emoji'`,
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-S7BQJURB.js.map
