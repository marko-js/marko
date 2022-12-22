import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { markHydrateNode as _markHydrateNode, classAttr as _classAttr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 1)}<div${_classAttr(myStyles.content)}>Hello</div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);