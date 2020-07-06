import translateHTML from "./index[html]";
import translateVDOM from "./index[vdom]";

export default function(path) {
  const {
    hub: {
      file: { _markoOptions }
    }
  } = path;
  if (_markoOptions.output === "html") {
    translateHTML(path);
  } else {
    translateVDOM(path);
  }
}
