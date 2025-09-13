import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._for_of(input.item, item => {
    const $scope1_id = _._scope_id();
    _._dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, _._serialize_guard($serialize, /* input.item */1));
    _._serialize_guard($serialize, /* input.item */1) && _._scope($scope1_id, {}, "__tests__/tags/hello/index.marko", "1:1");
  }, 0, $scope0_id, "#text/0", _._serialize_guard($serialize, /* input.item */1), _._serialize_guard($serialize, /* input.item */1), _._serialize_guard($serialize, /* input.item */1));
  _._dynamic_tag($scope0_id, "#text/1", input.other, {}, 0, 0, _._serialize_guard($serialize, /* input.other */2));
  _._serialize_guard($serialize, /* input.item,input.other */0) && _._scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});