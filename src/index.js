const fs = require("fs").promises;
const getTheme = require("./theme");
const getClassicTheme = require("./classic/theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default",
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "GitHub Light High Contrast"
})

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default",
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "GitHub Dark High Contrast"
})

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind"
})

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed"
})

// Classic

const lightTheme = getClassicTheme({
  style: "light",
  name: "GitHub Light",
});

const darkTheme = getClassicTheme({
  style: "dark",
  name: "BShack Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
