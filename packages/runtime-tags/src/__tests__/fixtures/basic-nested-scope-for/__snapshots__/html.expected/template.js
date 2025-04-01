import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let selected = 0;
  _$.resumeSingleNodeForOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], num => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button${_$.attr("data-selected", selected === num)}${_$.attr("data-multiple", num % selected === 0)}>${_$.escapeXML(num)}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_num");
    _$.writeScope(_scope1_id, {
      num,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "3:2", {
      num: "3:6"
    });
  }, 0, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});