// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.v, $wg__input_v)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.v,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const c = input.a + input.b;
	_set_scope_reason($wg__input_a__OR__input_b << 1);
	const $childScope = _peek_scope_id();
	child_default({ v: c });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.a,
		e: _write_if($scope0_reason, 1) && input.b,
		a: _existing_scope($childScope)
	});
}, 1);
