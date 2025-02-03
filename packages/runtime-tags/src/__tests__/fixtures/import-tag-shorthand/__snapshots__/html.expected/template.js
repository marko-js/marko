import BazComp from "./tags/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  BazComp({});
  const _childScope2 = _$.peekNextScope();
  BazComp({});
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);