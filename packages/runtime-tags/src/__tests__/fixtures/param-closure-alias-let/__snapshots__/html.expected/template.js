import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _.forOf(["foo"], foo => {
    const $scope1_id = _._scope_id();
    if (true) {
      const $scope2_id = _._scope_id();
      let baz = foo;
      _._html(`${_._escape(baz)}${_._el_resume($scope2_id, "#text/0")}`);
      _._scope($scope2_id, {}, "__tests__/template.marko", "2:3");
    }
  });
});