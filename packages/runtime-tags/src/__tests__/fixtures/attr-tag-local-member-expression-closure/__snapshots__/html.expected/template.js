import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Child = {
    content: _._content("__tests__/template.marko_1_content", ({
      item: items
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason(),
        $sg__items = _._serialize_guard($scope1_reason, /* items */0),
        $si__items = _._serialize_if($scope1_reason, /* items */0);
      _._for_of(items, item => {
        const $scope3_id = _._scope_id();
        _._dynamic_tag($scope3_id, "#text/0", item, {}, 0, 0, ($sg__items));
        ($si__items) && _._scope($scope3_id, {}, "__tests__/template.marko", "2:4");
      }, 0, $scope1_id, "#text/0", $sg__items, $sg__items, ($sg__items));
      ($si__items) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    })
  };
  _.forOf([[{
    text: "hello"
  }, {
    text: "world"
  }]], texts => {
    const $scope2_id = _._scope_id();
    let $item;
    _.forOf(texts, item => {
      $item = _.attrTags($item, {
        content: _._content("__tests__/template.marko_4_content", () => {
          _._scope_reason();
          const $scope4_id = _._scope_id();
          _._html(`${_._escape(item.text)}${_._el_resume($scope4_id, "#text/0")}`);
          _._scope($scope4_id, {}, "__tests__/template.marko", "11:14");
        })
      });
    });
    Child.content({
      item: $item
    });
  });
}, 1);