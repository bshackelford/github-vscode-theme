const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const bshackColors = require("./colorsBShack.json")

function getColors(theme) {

  switch(theme) {
    case "light":
      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
        return lightColorblindColors;
    case "dark":
      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
  return bshackColors;
}

module.exports = {
  getColors,
};
