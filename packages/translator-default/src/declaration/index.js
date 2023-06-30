import translateHTML from "./index[html]";
import translateVDOM from "./index[vdom]";

export default function (path) {
  const {
    hub: {
      file: { markoOpts },
    },
  } = path;
  if (markoOpts.output === "html") {
    translateHTML(path);
  } else {
    translateVDOM(path);
  }
}
