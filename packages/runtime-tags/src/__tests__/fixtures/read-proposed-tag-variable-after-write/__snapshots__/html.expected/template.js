import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const $b = _._el();
  const $a = _._el();
  let clickCount = 0;
  _._html(`<div><button>${_._escape(clickCount)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<div></div>${_._el_resume($scope0_id, "#div/2")}<div></div>${_._el_resume($scope0_id, "#div/3")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_clickCount");
  _._scope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "2:8"
  });
  _._resume_branch($scope0_id);
});