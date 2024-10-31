import "./foo";
import { b as c } from "./bar";
import Baz from "./components/baz.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, escapeXML as _escapeXML, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _baz from "./components/baz.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  Baz({});
  const _childScope2 = _peekNextScope();
  Baz({});
  const _childScope3 = _peekNextScope();
  _baz({});
  _write(`${_escapeXML(c)}`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2),
    "#childScope/2": _writeExistingScope(_childScope3)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko");