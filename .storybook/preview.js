import "../src/style-guide/cssVars.css"
import "../src/style-guide/global.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
}
