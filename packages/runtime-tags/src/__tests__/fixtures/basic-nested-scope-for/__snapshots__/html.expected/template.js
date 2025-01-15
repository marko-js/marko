import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const selected = 0;
  const _scope1_ = new Map();
  _$.forOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (num, _index) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button${_$.attr("data-selected", selected === num)}${_$.attr("data-multiple", num % selected === 0)}>${_$.escapeXML(num)}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_num");
    _$.writeScope(_scope1_id, {
      "num": num,
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.markResumeCleanup(_scope1_id);
    _scope1_.set(_index, _$.getScopeById(_scope1_id));
  });
  _$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);