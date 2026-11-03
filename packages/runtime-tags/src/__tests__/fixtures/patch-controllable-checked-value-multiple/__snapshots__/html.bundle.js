// template.marko
_shells({ a: "a !a2;D b lD ;<fieldset><input type=checkbox class=a><input type=checkbox class=b></fieldset><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<fieldset><input${_attr_input_checkedValue($scope0_id, "a", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a0", $scope0_id), "a", "n1a", $scope0_reason, 0, "wEa", $scope0_reason, 0)} type=checkbox class=a>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a1", $scope0_id), "b", "n1b", $scope0_reason, 0, "wEb", $scope0_reason, 0)} type=checkbox class=b>${_el_resume($scope0_id, "b")}</fieldset><p>${_text_resume($scope0_id, "c", last)}</p>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
