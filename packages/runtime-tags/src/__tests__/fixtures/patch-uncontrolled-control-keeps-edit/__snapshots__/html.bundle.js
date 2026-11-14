// template.marko
_shells({ a: "a; b b b b ;<input><input type=checkbox><textarea></textarea><select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><details><summary>more</summary>body</details>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_text = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.text, 0, 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "a", $uf__input_text)}<input${_attr_input_checked($scope0_id, "b", input.on, 0, 1, $scope0_reason, 1)} type=checkbox>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 1))}<textarea>${_attr_textarea_value($scope0_id, "c", input.text, 0, 1, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "c", $uf__input_text)}`);
	_attr_select_value($scope0_id, "d", input.pick, 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option></select>`);
	}, 1, $scope0_reason, 2);
	_html(`${_el_mark($scope0_id, "d", _updates_from($scope0_reason, 2))}<details${_attr_details_open($scope0_id, "e", input.open, 0, 1, $scope0_reason, 3)}><summary>more</summary>body</details>${_el_mark($scope0_id, "e", _updates_from($scope0_reason, 3))}`);
	_scope($scope0_id, {});
}, 1);
