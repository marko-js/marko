// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.x)}>${_el_resume($scope0_id, "#input/0", _serialize_guard($scope0_reason, 0))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter("X", 1), (value) => {
		const $scope1_id = _scope_id();
		child_default({ x: value });
		_html(`<input${_attr_input_value($scope1_id, "#input/1", value)}><span>got: ${_escape(value)}</span>`);
	}, 0);
}, 1);
