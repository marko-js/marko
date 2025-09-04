import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/tag-a/index.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    class: className,
    other,
    content
  } = input;
  _._html(`<div${_._attr_class(className)}${_._attr("data-other", other)}>A `);
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($serialize, /* content */2));
  _._html(`</div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($serialize, /* className,other */0))}`);
  _._serialize_guard($serialize, /* className,other,content */1) && _._scope($scope0_id, {}, "__tests__/tags/tag-a/index.marko", 0);
});