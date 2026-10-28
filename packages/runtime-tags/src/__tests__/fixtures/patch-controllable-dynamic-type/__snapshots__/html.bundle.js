// template.marko
_shells({ a: "a !a1; ;<input>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, _resume(function(next) {}, "a0"), "n2a", $scope0_reason, 1, "wEa", $scope0_reason, 1)}${_attr("type", input.kind, $scope0_id, "aa$type", $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
