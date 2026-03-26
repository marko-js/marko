import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_button = _._serialize_guard($scope0_reason, /* input.button */0),
    $si__input_button = _._serialize_if($scope0_reason, /* input.button */0);
  const $scope0_id = _._scope_id();
  const {
    button: buttons,
    ...htmlInput
  } = input;
  _._html(`<div${_._attrs(htmlInput, "#div/0", $scope0_id, "div")}>`);
  _._for_of(buttons, button => {
    const $scope1_id = _._scope_id();
    _._if(() => {
      if (button) {
        const $scope2_id = _._scope_id();
        _._dynamic_tag($scope2_id, "#text/0", button, {}, 0, 0, ($sg__input_button));
        ($si__input_button) && _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/tags/child.marko", "4:8");
        return 0;
      }
    }, $scope1_id, "#text/0", $sg__input_button, $sg__input_button, ($sg__input_button));
    ($si__input_button) && _._scope($scope1_id, {
      button
    }, "__tests__/tags/child.marko", "3:4", {
      button: "3:8"
    });
  }, 0, $scope0_id, "#div/0", $sg__input_button, 1, $sg__input_button, "</div>");
  _._script($scope0_id, "__tests__/tags/child.marko_0_htmlInput");
  _._scope($scope0_id, {
    htmlInput
  }, "__tests__/tags/child.marko", 0, {
    htmlInput: "1:30"
  });
});