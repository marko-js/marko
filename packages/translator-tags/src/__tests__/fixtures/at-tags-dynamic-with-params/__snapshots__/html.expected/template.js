import { escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  const _childScope = _peekNextScope();
  _hello({});
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");