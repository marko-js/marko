import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _._dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */0));
  _._html("</div>");
  _._serialize_guard($serialize, /* input.content */0) && _._scope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});