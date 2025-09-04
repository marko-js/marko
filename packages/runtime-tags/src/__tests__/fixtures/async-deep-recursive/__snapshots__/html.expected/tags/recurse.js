import * as _ from "@marko/runtime-tags/debug/html";
const $content = (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const $input_level__closures = new Set();
  _._if(() => {
    if (input.level) {
      const $scope1_id = _._scope_id();
      _._html(`<div${_._attr("data-level", input.level)}>`);
      _._try($scope1_id, "#text/1", _._content_resume("__tests__/tags/recurse.marko_2_content", () => {
        const $scope2_id = _._scope_id();
        _._await($scope2_id, "#text/0", new Promise(setImmediate), () => {
          const $scope3_id = _._scope_id();
          const $childScope = _._peek_scope_id();
          $content({
            level: input.level - 1
          });
          _._serialize_guard($serialize, /* input.level */0) && _._subscribe($input_level__closures, _._scope($scope3_id, {
            _: _._scope_with_id($scope2_id),
            "#childScope/0": _._serialize_if($serialize, /* input.level */0) && _._existing_scope($childScope),
            "ClosureSignalIndex:input_level": _._serialize_if($serialize, /* input.level */0) && 0
          }, "__tests__/tags/recurse.marko", "5:7"));
          _._resume_branch($scope3_id);
        }, _._serialize_guard($serialize, /* input.level */0));
        _._serialize_guard($serialize, /* input.level */0) && _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/tags/recurse.marko", "3:5");
      }, $scope1_id), {
        placeholder: _.attrTag({
          content: _._content_resume("__tests__/tags/recurse.marko_4_content", () => {
            const $scope4_id = _._scope_id();
            _._html("LOADING...");
          }, $scope1_id)
        })
      });
      _._html(`</div>${_._el_resume($scope1_id, "#div/0", _._serialize_guard($serialize, /* input.level */0))}`);
      _._serialize_guard($serialize, /* input.level */0) && _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/tags/recurse.marko", "1:1");
      return 0;
    }
  }, $scope0_id, "#text/0", _._serialize_guard($serialize, /* input.level */0), _._serialize_guard($serialize, /* input.level */0), 0, 1);
  _._scope($scope0_id, {
    input_level: input.level,
    "ClosureScopes:input_level": _._serialize_if($serialize, /* input.level */0) && $input_level__closures
  }, "__tests__/tags/recurse.marko", 0, {
    input_level: ["input.level"]
  });
};
export default _._template("__tests__/tags/recurse.marko", $content);