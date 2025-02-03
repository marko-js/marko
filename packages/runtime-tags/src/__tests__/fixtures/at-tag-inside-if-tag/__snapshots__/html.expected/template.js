import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag/index.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    x
  } = input;
  const _childScope = _$.peekNextScope();
  let _thing;
  if (x) {
    _thing = _$.attrTag({
      x: 1,
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope1_id = _$.nextScopeId();
        _$.write("Hello");
      }), "__tests__/template.marko_1_renderer", _scope0_id)
    });
  } else {
    _thing = _$.attrTag({
      x: 2,
      content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
        const _scope2_id = _$.nextScopeId();
        _$.write("Goodbye");
      }), "__tests__/template.marko_2_renderer", _scope0_id)
    });
  }
  _customTag({
    thing: _thing
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "x": "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);