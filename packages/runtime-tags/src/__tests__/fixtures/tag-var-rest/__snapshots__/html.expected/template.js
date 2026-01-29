import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  const {
    a,
    ...partialObj
  } = obj;
  _._html(`<div class=obj>${_._escape(JSON.stringify(obj))}${_._el_resume($scope0_id, "#text/0")}</div><div class=partialObj>${_._escape(JSON.stringify(partialObj))}${_._el_resume($scope0_id, "#text/1")}</div><div class=a>${_._escape(a)}${_._el_resume($scope0_id, "#text/2")}</div><div class=b>${_._escape(partialObj.b)}${_._el_resume($scope0_id, "#text/3")}</div><div class=a>${_._escape(partialObj.a === undefined ? "removed a" : "didn't remove a")}${_._el_resume($scope0_id, "#text/4")}</div><button>Update</button>${_._el_resume($scope0_id, "#button/5")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});