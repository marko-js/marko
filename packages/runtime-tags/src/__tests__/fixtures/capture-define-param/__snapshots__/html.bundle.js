// tags/label.marko
var label_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.get });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content("a1", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		label_default({ get: _resume(function() {
			return text;
		}, "a0", $scope1_id) });
		_scope($scope1_id, {
			d: text,
			a: _write_if($scope1_reason, 0) && _existing_scope($childScope)
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_v << 1);
	const $childScope2 = _peek_scope_id();
	Row.content({ text: input.v });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
