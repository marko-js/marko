import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const Foo = {
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      const unserializable = {
        nested: {
          thing: Buffer.from("")
        }
      };
      const test = _$.register(function () {
        return unserializable;
      }, "__tests__/template.marko_1/test", $scope1_id);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_test");
      _$.writeScope($scope1_id, {
        unserializable,
        test
      }, "__tests__/template.marko", "1:2", {
        unserializable: "2:10",
        test: "7:10"
      });
    })
  };
  _$.dynamicTag($scope0_id, "#text/0", Foo, {});
});