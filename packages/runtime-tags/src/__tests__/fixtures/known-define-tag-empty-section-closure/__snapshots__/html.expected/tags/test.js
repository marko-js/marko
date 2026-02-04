import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/test.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const count = 123;
  const Tag = {
    content: _._content("__tests__/tags/test.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._if(() => {
        if (input.x) {
          const $scope2_id = _._scope_id();
          _._html(`<div>${_._escape(count)}</div>`);
          _._serialize_if($scope1_reason, /* input.x */0) && _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id)
          }, "__tests__/tags/test.marko", "3:4");
          return 0;
        }
      }, $scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.x */0), _._serialize_guard($scope1_reason, /* input.x */0), _._serialize_guard($scope1_reason, /* input.x */0), 0, 1);
      _._serialize_if($scope1_reason, /* input.x */0) && _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/tags/test.marko", "2:2");
    })
  };
  Tag.content({
    x: 1
  });
  _._scope($scope0_id, {
    count
  }, "__tests__/tags/test.marko", 0, {
    count: "1:8"
  });
});