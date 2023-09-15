import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { nextScopeId as _nextScopeId, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  baz({
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
  _write(`${_escapeXML(c)}${_markResumeNode(_scope0_id, "#text/0")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/import-tag/template.marko");