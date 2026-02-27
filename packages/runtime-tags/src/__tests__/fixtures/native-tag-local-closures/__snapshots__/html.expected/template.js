import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let size = 1;
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._for_of(input.item, item => {
        const $scope2_id = _._scope_id();
        _._html("<div");
        _._attrs_content(item, "#div/0", $scope2_id, "div");
        _._html(`</div>${_._el_resume($scope2_id, "#div/0")}`);
        _._script($scope2_id, "__tests__/template.marko_2_item");
        _._scope($scope2_id, {
          item
        }, "__tests__/template.marko", "4:4", {
          item: "4:8"
        });
      }, 0, $scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.item */0), _._serialize_guard($scope1_reason, /* input.item */0), _._serialize_guard($scope1_reason, /* input.item */0), 0, 1);
      _._serialize_if($scope1_reason, /* input.item */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "3:2");
    })
  };
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* size */1);
  let $item;
  _.forUntil(size, 0, 1, i => {
    $item = _.attrTags($item, {
      content: _._content_resume("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html(`${_._escape(i)}${_._el_resume($scope3_id, "#text/0")}`);
        _._scope($scope3_id, {}, "__tests__/template.marko", "11:6");
      }, $scope0_id)
    });
  });
  Child.content({
    item: $item
  });
  _._html(`<button>Add</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_size");
  _._scope($scope0_id, {
    size,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    size: "1:6"
  });
  _._resume_branch($scope0_id);
});