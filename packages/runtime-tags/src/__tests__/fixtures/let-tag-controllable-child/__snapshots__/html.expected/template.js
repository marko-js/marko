import _child from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const source = 1;
  const _childScope = _$.peekNextScope();
  _child({
    value: source,
    valueChange: _$.register(_new_source => {
      source = _new_source;
    }, "__tests__/template.marko_0/valueChange", _scope0_id)
  });
  _$.write(`source=<!>${_$.escapeXML(source)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);