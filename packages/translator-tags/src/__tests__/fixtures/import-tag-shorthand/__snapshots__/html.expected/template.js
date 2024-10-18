import BazComp from "./components/baz.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  BazComp._({});
  const _childScope2 = _peekNextScope();
  BazComp._({});
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/import-tag-shorthand/template.marko");