import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._if(() => {
    if (1) {
      const $scope1_id = _._scope_id();
      const x = 1;
      _._scope($scope1_id, {
        x
      }, "__tests__/template.marko", "1:2", {
        x: "2:10"
      });
      _._assert_hoist(x);
      return 0;
    }
  }, $scope0_id, "#text/0", 1, 0, 0);
  _._html(`<div>${_._escape((x => x())(_._hoist_read_error))}</div>`);
});