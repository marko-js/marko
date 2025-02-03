import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const num = 0;
  const _scope1_ = new Map();
  _$.resumeSingleNodeForTo(num, 0, 1, i => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(i, _$.ensureScopeWithId(_scope1_id));
    _$.write(`<button>${_$.escapeXML(i)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_num");
    _$.debug(_$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    }), "__tests__/template.marko", "3:2", {
      "i": "3:6"
    });
  }, _scope0_id, "#text/0");
  _$.debug(_$.writeScope(_scope0_id, {
    "num": num,
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/template.marko", 0, {
    "num": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);