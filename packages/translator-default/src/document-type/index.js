import translateHTML from "./index[html]";
import translateVDOM from "./index[vdom]";

export default function(path) {
  const {
    hub: { options }
  } = path;
  if (options.output === "html") {
    translateHTML(path);
  } else {
    translateVDOM(path);
  }
}
