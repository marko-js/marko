// eslint-disable-next-line no-constant-condition
if ("MARKO_DEBUG") {
  const browserRefreshClient = require("browser-refresh-client");
  if (browserRefreshClient.isBrowserRefreshEnabled()) {
    const extensions = require(".").getExtensions();
    const hotReload = require("./hot-reload");

    browserRefreshClient
      .enableSpecialReload(
        `${extensions
          .map(ext => `*${ext}`)
          .join(" ")} marko.json marko-tag.json`
      )
      .onFileModified(path => {
        hotReload.handleFileModified(path);
      });
  }
}
