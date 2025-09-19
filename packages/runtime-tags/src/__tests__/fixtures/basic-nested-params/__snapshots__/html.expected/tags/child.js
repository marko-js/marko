import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    content,
    value
  } = input;
  _._html("<div>");
  _._dynamic_tag($scope0_id, "#text/0", content, [value], 0, 1, _._serialize_guard($serialize, /* content,value */0));
  _._html("</div>");
  _._serialize_guard($serialize, /* content,value */0) && _._scope($scope0_id, {
    content: _._serialize_if($serialize, /* value */2) && content,
    value: _._serialize_if($serialize, /* content */1) && value
  }, "__tests__/tags/child.marko", 0, {
    content: "1:9",
    value: "1:18"
  });
});