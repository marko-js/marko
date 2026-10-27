// template.marko
_shells({ a: "a !a2;D b lD ;<fieldset><input type=checkbox class=a><input type=checkbox class=b></fieldset><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<fieldset><input${_attr_input_checkedValue($scope0_id, "a", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a0", $scope0_id), "a", 1, $scope0_reason, 0, 1, $scope0_reason, 0)} type=checkbox class=a>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a1", $scope0_id), "b", 1, $scope0_reason, 0, 1, $scope0_reason, 0)} type=checkbox class=b>${_el_resume($scope0_id, "b")}</fieldset><p>${_text_resume($scope0_id, "c", last)}</p>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
