import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    children
  } = input;
  _$.write("<div>");
  const _by = function (c) {
    return c.id;
  };
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(children, (child, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_by(child, _index), _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "3:4", {
      "child": "3:8",
      "child_text": ["child.text", "3:8"]
    });
  }, _scope0_id, "#div/0");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/template.marko", 0, {
    "children": "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);