import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let foo = {};
  const {
    class: fooClass
  } = foo;
  _._html(`<div${_._attr_class(((foo, foo.class)))}></div>${_._el_resume($scope0_id, "#div/0")}<div${_._attr_class(((foo, foo.class)))}></div>${_._el_resume($scope0_id, "#div/1")}<button>Click</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});