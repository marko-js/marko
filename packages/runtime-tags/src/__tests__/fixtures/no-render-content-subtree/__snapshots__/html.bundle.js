// tags/my-const.marko
var my_const_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.value;
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let x = my_const_default({ value: input.foo });
	_var($scope0_id, "b", $childScope, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		d: input,
		f: x,
		a: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const output = _el($scope0_id, "a0");
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			child_default({
				foo: "bar",
				output
			});
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $sg__input_show, $sg__input_show, $sg__input_show);
	writeScope($scope0_id, {});
}, 1);
