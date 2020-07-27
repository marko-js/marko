import translateHTML from "./index[html]";
import translateVDOM from "./index[vdom]";

export default function(path) {
  if (path.hub.file._markoOptions.output === "html") {
    translateHTML(path);
  } else {
    translateVDOM(path);
  }
}
