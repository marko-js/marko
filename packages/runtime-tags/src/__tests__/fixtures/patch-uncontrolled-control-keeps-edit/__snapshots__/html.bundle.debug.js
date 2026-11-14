// template.marko
const $template = "<input><input type=checkbox><textarea></textarea><select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><details><summary>more</summary>body</details>";
const $walks = " b b b b b";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; b b b b ;<input><input type=checkbox><textarea></textarea><select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><details><summary>more</summary>body</details>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_text = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.text, 0, 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/0", $uf__input_text)}<input${_attr_input_checked($scope0_id, "#input/1", input.on, 0, 1, $scope0_reason, 1)} type=checkbox>${_el_mark($scope0_id, "#input/1", _updates_from($scope0_reason, 1))}<textarea>${_attr_textarea_value($scope0_id, "#textarea/2", input.text, 0, 1, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "#textarea/2", $uf__input_text)}`);
	_attr_select_value($scope0_id, "#select/3", input.pick, 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	}, 1, $scope0_reason, 2);
	_html(`${_el_mark($scope0_id, "#select/3", _updates_from($scope0_reason, 2))}<details${_attr_details_open($scope0_id, "#details/4", input.open, 0, 1, $scope0_reason, 3)}><summary>more</summary>body</details>${_el_mark($scope0_id, "#details/4", _updates_from($scope0_reason, 3))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
