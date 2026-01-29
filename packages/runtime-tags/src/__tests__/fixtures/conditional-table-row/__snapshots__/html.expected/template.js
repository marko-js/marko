import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = false;
  _._html("<table><tbody>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html("<tr><td>Hi</td></tr>");
      _._scope($scope1_id, {}, "__tests__/template.marko", "4:6");
      return 0;
    }
  }, $scope0_id, "#tbody/0", 1, /* show */1, /* show */1, "</tbody>", 1);
  _._html(`</table><button>Toggle</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._scope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _._resume_branch($scope0_id);
});