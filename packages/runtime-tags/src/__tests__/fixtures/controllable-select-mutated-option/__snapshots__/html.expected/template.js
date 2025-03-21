import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  let options = [1, 2, 3];
  let value = options[0];
  _$.controllable_select_value(_scope0_id, "#select/0", value, _$.register(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", _scope0_id), () => {
    _$.write("<form><select>");
    const _by = v => v;
    _$.resumeSingleNodeForOf(options, (opt, _index) => {
      const _scope1_id = _$.nextScopeId();
      _scope1_.set(_by(opt, _index), _$.ensureScopeWithId(_scope1_id));
      _$.write(`<option${_$.optionValueAttr(opt)}>${_$.escapeXML(opt)}${_$.markResumeNode(_scope1_id, "#text/1")}</option>${_$.markResumeNode(_scope1_id, "#option/0")}`);
      _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "5:6");
    }, _scope0_id, "#select/0", 1);
    _$.write("</select>");
  });
  _$.write(`<button type=reset>reset</button></form><div>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</div><button class=remove>Remove option</button>${_$.markResumeNode(_scope0_id, "#button/2")}<button class=add>Add option</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_options");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    options,
    value,
    "LoopScopeMap:#select/0": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    options: "1:6",
    value: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});