// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const { value: $value2, valueChange: $valueChange3, ...rest } = input;
			_html(`<button${_attrs_partial(rest, { "on-click": 1 }, "a", $scope1_id, "button")}>${_text_resume($scope1_id, "b", input.value, _write_guard($scope0_reason, 1))}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_script($scope1_id, "b1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), 0, 0, 0, 1);
	_scope($scope0_id, {
		d: input.value,
		e: input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = 1;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		value: v,
		valueChange: _resume((_new_v) => {
			v = _new_v;
		}, "a0", $scope0_id),
		class: "c"
	});
	_html(`<em>${_text_resume($scope0_id, "b", v)}</em>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
