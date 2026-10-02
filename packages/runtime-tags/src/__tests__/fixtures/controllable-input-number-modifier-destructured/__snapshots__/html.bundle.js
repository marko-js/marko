// tags/my-input.marko
function num(v) {
	return +v;
}
var my_input_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.count, input.countChange && _resume(($next) => {
		input.countChange(num($next));
	}, "b0", $scope0_id))} type=number>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		d: input.countChange,
		e: _write_if($scope0_reason, 0) && input.count
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	my_input_default({
		count: value,
		countChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "b", value)} ${_text_resume($scope0_id, "c", typeof value, 2)}</span>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
