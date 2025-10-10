import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-button.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    onClick,
    text
  } = input;
  _._html(`<button>${_._escape(text)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.text */0))}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/my-button.marko_0_onClick");
  _._scope($scope0_id, {
    onClick
  }, "__tests__/tags/my-button.marko", 0, {
    onClick: "1:10"
  });
});