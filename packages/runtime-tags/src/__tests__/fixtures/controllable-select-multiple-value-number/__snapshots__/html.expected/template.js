import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let selected = [1];
  _._attr_select_value($scope0_id, "#select/0", selected, _._resume(function (v) {
    selected = v.map(it => Number(it));
  }, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
    _._html(`<select multiple><option${_._attr_option_value(0)}></option><option${_._attr_option_value("1")}></option><option${_._attr_option_value(2)}></option></select>`);
  });
  _._html(`${_._el_resume($scope0_id, "#select/0")}<span>${_._escape(selected)}${_._el_resume($scope0_id, "#text/1")}</span><button>Reset</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
}, 1);