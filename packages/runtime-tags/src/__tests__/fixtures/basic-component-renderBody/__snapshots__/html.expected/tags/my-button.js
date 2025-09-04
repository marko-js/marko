import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-button.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  const {
    onClick,
    content
  } = input;
  _._html("<button>");
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($serialize, /* content */0));
  _._html(`</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _._scope($scope0_id, {
    onClick
  }, "__tests__/tags/my-button.marko", 0, {
    onClick: "1:10"
  });
});