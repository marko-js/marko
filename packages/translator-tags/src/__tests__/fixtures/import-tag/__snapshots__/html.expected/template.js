import "./foo";
import { b as c } from "./bar";
import bazComp from "./components/baz.marko";
import _baz from "./components/baz.marko";
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  bazComp._({});
  bazComp._({});
  _baz._({});
  _write(`${_escapeXML(c)}${_markResumeNode(_scope0_id, "#text/3")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko");