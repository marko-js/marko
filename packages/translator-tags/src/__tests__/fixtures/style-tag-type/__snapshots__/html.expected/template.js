import "virtual:./template.marko.less \n  .content {\n    color: green;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: blue;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: red;\n  }\n";
import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div class=content>Hello</div>");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/style-tag-type/template.marko");