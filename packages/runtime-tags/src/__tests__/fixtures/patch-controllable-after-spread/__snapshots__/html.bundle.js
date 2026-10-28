// template.marko
_shells({ a: "a !a1 a2; ;<input>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.v, _resume(function(next) {
		document.body.dataset.v = next;
	}, "a0"), 1, $scope0_reason, 1, 1, $scope0_reason, 1)}${_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
