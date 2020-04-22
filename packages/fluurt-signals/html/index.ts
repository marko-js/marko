export { register } from "../common/registry";

export { escapeScript, escapeStyle, escapeXML } from "./content";

export { attr, attrs, classAttr, styleAttr } from "./attrs";

export { dynamicTag } from "./dynamic-tag";

export {
  createRenderer,
  write,
  fork,
  tryPlaceholder,
  tryCatch
} from "./writer";
