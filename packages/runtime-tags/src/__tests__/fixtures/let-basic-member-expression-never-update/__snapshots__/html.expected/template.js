import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let index = -1;
  let user = index !== -1 && {
    id: index
  };
  _._html(`<div>${_._escape(user?.id)}</div><button>Update</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_index");
  _._scope($scope0_id, {
    index
  }, "__tests__/template.marko", 0, {
    index: "1:5"
  });
  _._resume_branch($scope0_id);
});