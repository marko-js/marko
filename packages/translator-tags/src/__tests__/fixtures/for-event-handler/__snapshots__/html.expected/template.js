import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const num = 0;
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forTo(num, 0, 1, i => {
    const _scope1_id = _$.nextScopeId();
    _forScopeIds.push(_scope1_id);
    _$.write(`<button>${_$.escapeXML(i)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko_1_num");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _scope1_.set(i, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _forScopeIds)}`);
  _$.writeScope(_scope0_id, {
    "num": num,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-event-handler/template.marko");