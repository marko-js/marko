import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  let lastCount = 0;
  let lastCount2 = 0;
  _._html(`<button>${_._escape(clickCount)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}used to be <span>${_._escape(lastCount)}${_._el_resume($scope0_id, "#text/2")}</span> which should be the same as <span>${_._escape(lastCount2)}${_._el_resume($scope0_id, "#text/3")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0_clickCount");
  _._scope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});