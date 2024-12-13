import "./foo";
import { b as c } from "./bar";
import Baz from "./components/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _baz from "./components/baz.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  Baz({});
  const _childScope2 = _$.peekNextScope();
  Baz({});
  const _childScope3 = _$.peekNextScope();
  _baz({});
  _$.write(_$.escapeXML(c));
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2),
    "#childScope/2": _$.writeExistingScope(_childScope3)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);