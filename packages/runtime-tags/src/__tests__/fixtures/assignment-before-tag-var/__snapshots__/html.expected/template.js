import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  let lastClickCount = undefined;
  _._html(`<button>+</button>${_._el_resume($scope0_id, "#button/0")}<span>${_._escape(clickCount)}${_._el_resume($scope0_id, "#text/1")} was <!>${_._escape(lastClickCount)}${_._el_resume($scope0_id, "#text/2")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0_clickCount");
  _._scope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "6:6"
  });
  _._resume_branch($scope0_id);
});