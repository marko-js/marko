// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.x)}>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_await(_scope_id(), "a", resolveAfter("X", 1), (value) => {
		const $scope1_id = _scope_id();
		child_default({ x: value });
		_html(`<input${_attr_input_value($scope1_id, "b", value)}><span>got: ${_escape(value)}</span>`);
	}, 0);
}, 1);
