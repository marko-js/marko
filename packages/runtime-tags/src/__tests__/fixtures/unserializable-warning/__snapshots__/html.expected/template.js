import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Foo = {
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      const unserializable = {
        nested: {
          thing: Buffer.from("")
        }
      };
      const test = _._resume(function () {
        return unserializable;
      }, "__tests__/template.marko_1/test", $scope1_id);
      _._script($scope1_id, "__tests__/template.marko_1_test");
      _._scope($scope1_id, {
        unserializable,
        test
      }, "__tests__/template.marko", "1:2", {
        unserializable: "2:10",
        test: "7:10"
      });
    })
  };
  Foo.content({});
});