// tags/my-input.marko
function num(v) {
	return +v;
}
var my_input_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { "countChange": $countChange, count } = input;
	_html(`<input${_attr_input_value($scope0_id, "a", count, $countChange && _resume(($next) => {
		$countChange(num($next));
	}, "b0", $scope0_id))} type=number>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		d: $countChange,
		e: _serialize_if($scope0_reason, 0) && count
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
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "b")} <!>${_escape(typeof value)}${_el_resume($scope0_id, "c")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
