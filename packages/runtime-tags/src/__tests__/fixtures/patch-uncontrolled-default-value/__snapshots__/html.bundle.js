// template.marko
_shells({ a: "a; b b ;<input><textarea></textarea><input type=checkbox>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_name = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.name, 0, 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "a", $uf__input_name)}<textarea>${_attr_textarea_value($scope0_id, "b", input.name, 0, 1, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "b", $uf__input_name)}<input${_attr_input_checked($scope0_id, "c", input.on, 0, 1, $scope0_reason, 1)} type=checkbox>${_el_mark($scope0_id, "c", _updates_from($scope0_reason, 1))}`);
	_scope($scope0_id, {});
}, 1);
