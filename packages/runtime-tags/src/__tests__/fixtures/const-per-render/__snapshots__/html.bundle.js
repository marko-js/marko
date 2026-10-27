// template.marko
let n = 0;
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name__OR__input_value = _write_guard($scope0_reason, 0), $wg__input_name = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = "u" + ++n;
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "b", input.label, $wg__input_label)}</label>${_el_resume($scope0_id, "a", $wg__input_name)}<input${_attr_input_value($scope0_id, "c", input.value)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name)}>${_el_resume($scope0_id, "c", $wg__input_name__OR__input_value)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { i: _write_if($scope0_reason, 2) && uid });
}, 1);
