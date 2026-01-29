import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _.forOf(["foo"], foo => {
    const $scope1_id = _._scope_id();
    if (true) {
      const $scope2_id = _._scope_id();
      let baz = foo;
      _._html(_._escape(baz));
    }
  });
});