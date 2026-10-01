// tags/child-a/index.marko
var child_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $wg__input_a)} ${_text_resume($scope0_id, "b", input.b, $wg__input_b * 2)} ${_text_resume($scope0_id, "c", input.c, $wg__input_c * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child-c/index.marko
var child_c_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.a, $wg__input_a)} ${_text_resume($scope0_id, "b", input.b, $wg__input_b * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const extras = {
		b: 2,
		c: 3
	};
	let n = 1;
	_html(`<button>inc ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(170);
	const $childScope = _peek_scope_id();
	child_a_default({
		a: n,
		...extras
	});
	_set_scope_reason(10);
	const $childScope2 = _peek_scope_id();
	child_a_default({
		...extras,
		a: n
	});
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope3 = _peek_scope_id();
	child_c_default(input.settings);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: extras,
		j: n,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2),
		e: _write_if($scope0_reason, 0) && _existing_scope($childScope3)
	});
}, 1);
