function createWrapper(a) {
  return {
    a
  };
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let count = 0;
  const {
    a,
    a: b
  } = createWrapper(count);
  _._html(`<button>${_._escape(a)}${_._el_resume($scope0_id, "#text/1")} <!>${_._escape(b)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "5:6"
  });
  _._resume_branch($scope0_id);
});