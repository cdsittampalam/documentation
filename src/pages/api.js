import React, { Suspense, lazy } from "react";
import Layout from "@theme/Layout";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import "../css/redoc.css";

const defaultTheme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  // breakpoints: {
  //   small: "50rem",
  //   medium: "75rem",
  //   large: "105rem",
  // },
  colors: {
    //   tonalOffset: 0.3,
    //   primary: {
    //     main: "#191919",
    //   },
    //   success: {
    //     main: "#1d8127",
    //   },
    //   warning: {
    //     main: "#ffa500",
    //     contrastText: "#ffffff",
    //   },
    //   error: {
    //     main: "#d41f1c",
    //   },
    //   gray: {
    //     50: "#FAFAFA",
    //     100: "#F5F5F5",
    //   },
    //   text: {
    //     primary: "#333333",
    //     secondary: "#333333",
    //   },
    //   border: {
    //     dark: "rgba(0,0,0, 0.1)",
    //     light: "#ffffff",
    //   },
    responses: {
      success: {
        color: "#0075A2",
        backgroundColor: "transparent",
      },
      error: {
        color: "#DF001F",
        backgroundColor: "transparent",
      },
      // redirect: {
      //   color: ({ colors }) => colors.warning.main,
      //   backgroundColor: ({ colors }) =>
      //     transparentize(0.9, colors.responses.redirect.color),
      // },
      // info: {
      //   color: "#87ceeb",
      //   backgroundColor: ({ colors }) =>
      //     transparentize(0.9, colors.responses.info.color),
      // },
    },
    http: {
      get: "#00DFA1",
      post: "#65c0de",
      put: "#d6aec7",
      options: "#d3ca12",
      patch: "#e09d43",
      delete: "#ecaeae",
      basic: "#999",
      link: "#31bbb6",
      head: "#c167e4",
    },
  },
  // schema: {
  //   // linesColor: (theme) =>
  //   //   lighten(
  //   //     theme.colors.tonalOffset,
  //   //     desaturate(theme.colors.tonalOffset, theme.colors.primary.main)
  //   //   ),
  //   // defaultDetailsWidth: "75%",
  //   // typeNameColor: "red",
  //   // typeTitleColor: "green",
  //   // requireLabelColor: "(theme) => theme.colors.error.main",
  //   // labelsTextSize: "0.9em",
  //   // nestingSpacing: "1em",
  //   // nestedBackground: "#fafafa",
  //   // arrow: {
  //   //   size: "1.1em",
  //   //   color: (theme) => theme.colors.text.secondary,
  //   // },
  // },
  // typography: {
  //   fontSize: "14px",
  //   lineHeight: "1.5em",
  //   fontWeightRegular: "400",
  //   fontWeightBold: "600",
  //   fontWeightLight: "300",
  //   fontFamily: "Barlow, sans-serif",
  //   smoothing: "antialiased",
  //   optimizeSpeed: true,
  //   headings: {
  //     fontFamily: "Barlow, sans-serif",
  //     fontWeight: "400",
  //     lineHeight: "1.6em",
  //   },
  //   code: {
  //     fontSize: "13px",
  //     fontFamily: "Courier, monospace",
  //     // lineHeight: ({ typography }) => typography.lineHeight,
  //     // fontWeight: ({ typography }) => typography.fontWeightRegular,
  //     color: "#6A6A6A",
  //     backgroundColor: "rgba(38, 50, 56, 0.05)",
  //     wrap: false,
  //   },
  //   // links: {
  //   //   color: ({ colors }) => colors.primary.main,
  //   //   visited: ({ typography }) => typography.links.color,
  //   //   hover: ({ typography }) => lighten(0.2, typography.links.color),
  //   // },
  // },
  // sidebar: {
  //   width: "260px",
  //   backgroundColor: "#fff",
  //   textColor: "#333333",
  //   // activeTextColor: (theme) =>
  //   //   theme.sidebar.textColor !== defaultTheme.sidebar.textColor
  //   //     ? theme.sidebar.textColor
  //   //     : theme.colors.primary.main,
  //   groupItems: {
  //     textTransform: "uppercase",
  //   },
  //   level1Items: {
  //     textTransform: "none",
  //   },
  //   arrow: {
  //     size: "1.5em",
  //     // color: (theme) => theme.sidebar.textColor,
  //   },
  // },
  // logo: {
  //   // maxHeight: ({ sidebar }) => sidebar.width,
  //   // maxWidth: ({ sidebar }) => sidebar.width,
  //   gutter: "2px",
  // },
  // rightPanel: {
  //   backgroundColor: "#191919",
  //   width: "40%",
  //   textColor: "#ffffff",
  // },
  // codeBlock: {
  //   backgroundColor: "#191919",
  // },
};

let RedocStandalone = () => <div></div>;
if (ExecutionEnvironment.canUseDOM) {
  RedocStandalone = require("redoc").RedocStandalone;
}

function Hello() {
  return (
    <Layout title="Hello">
      <RedocStandalone
        specUrl="/swagger-3-0-2.yaml"
        options={{ theme: defaultTheme }}
      />
    </Layout>
  );
}

export default Hello;
