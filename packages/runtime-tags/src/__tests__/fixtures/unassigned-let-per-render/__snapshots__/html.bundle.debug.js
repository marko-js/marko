// template.marko
let n = 0;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name__OR__input_value = _write_guard($scope0_reason, 0), $wg__input_name = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 3), $wi__input_name__OR__input_label__OR__input_value = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let uid = "u" + ++n;
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_name)}<input${_attr_input_value($scope0_id, "#input/2", input.value)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name)}>${_el_resume($scope0_id, "#input/2", $wg__input_name__OR__input_value)}`);
	$wi__input_name__OR__input_label__OR__input_value && _scope($scope0_id, { uid: _write_if($scope0_reason, 2) && uid }, "__tests__/template.marko", 0, { uid: "2:6" });
	$wg__input_name__OR__input_value || $wg__input_name || $wg__input_label || $wi__input_name__OR__input_label__OR__input_value && _resume_branch($scope0_id);
}, 1);
