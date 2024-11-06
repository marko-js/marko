import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const open = true;
  const list = [1, 2, 3];
  _$.write(`<ul${_$.attr("hidden", !open)}>`);
  const _by = function (x) {
    return x;
  };
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forOf(list, (x, _index) => {
    const _scope1_id = _$.nextScopeId();
    _forScopeIds.push(_scope1_id);
    _$.write(`<li>${_$.escapeXML(x)}${_$.markResumeNode(_scope1_id, "#text/0")}</li>`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(_by(x, _index), _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#ul/0", _forScopeIds)}</ul>${_$.markResumeNode(_scope0_id, "#ul/0")}<button id=toggle>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open");
  _$.writeScope(_scope0_id, {
    "open": open,
    "list": list,
    "#ul/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko", _renderer);