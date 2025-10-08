import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/FancyButton.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    content,
    ...attrs
  } = input;
  _._html(`<button${_._attrs(attrs, "#button/0", $scope0_id, "button")}>`);
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */0));
  _._html(`</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/FancyButton.marko_0_attrs");
  _._scope($scope0_id, {
    attrs
  }, "__tests__/tags/FancyButton.marko", 0, {
    attrs: "1:22"
  });
});