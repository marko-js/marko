require("@babel/register")({
  ignore: [],
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        targets: {
          node: "8",
        },
      },
    ],
  ],
});
