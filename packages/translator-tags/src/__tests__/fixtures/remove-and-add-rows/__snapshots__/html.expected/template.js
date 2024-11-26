import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    children
  } = input;
  _$.write("<div>");
  const _by = function (c) {
    return c.id;
  };
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forOf(children, (child, _index) => {
    const _scope1_id = _$.nextScopeId();
    _forScopeIds.push(_scope1_id);
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(_by(child, _index), _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko", _renderer);