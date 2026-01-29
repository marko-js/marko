import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Foo = {
    content: _._content("__tests__/template.marko_1_content", ({
      show
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._if(() => {
        if (show) {
          const $scope2_id = _._scope_id();
          const Bar = {
            content: _._content("__tests__/template.marko_3_content", () => {
              const $scope3_id = _._scope_id();
              _._scope_reason();
              Foo.content({});
            })
          };
          Bar.content({});
          _._serialize_if($scope1_reason, /* show */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, $scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* show */0), _._serialize_guard($scope1_reason, /* show */0), _._serialize_guard($scope1_reason, /* show */0));
      _._html(" foo");
      _._serialize_if($scope1_reason, /* show */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    })
  };
  Foo.content({
    show: true
  });
});