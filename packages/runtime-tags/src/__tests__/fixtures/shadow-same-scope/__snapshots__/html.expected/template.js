import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  let $count = 0;
  let $count2 = 0;
  let $count3 = 0;
  _._html(`<div><button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<div><button>${_._escape($count)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}<div><button>${_._escape($count2)}${_._el_resume($scope0_id, "#text/5")}</button>${_._el_resume($scope0_id, "#button/4")}</div></div></div><div><button>${_._escape($count3)}${_._el_resume($scope0_id, "#text/7")}</button>${_._el_resume($scope0_id, "#button/6")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_$count3");
  _._script($scope0_id, "__tests__/template.marko_0_$count2");
  _._script($scope0_id, "__tests__/template.marko_0_$count");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    $count,
    $count2,
    $count3
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    $count: "5:10",
    $count2: "8:12",
    $count3: "14:8"
  });
  _._resume_branch($scope0_id);
});