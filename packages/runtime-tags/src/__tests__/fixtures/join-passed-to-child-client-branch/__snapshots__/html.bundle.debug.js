// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.v, $wg__input_v)}</p>`);
			_scope($scope1_id, {}, "__tests__/tags/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_scope($scope0_id, {
		input_v: input.v,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_v: ["input.v"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const c = input.a + input.b;
	_set_scope_reason($wg__input_a__OR__input_b << 1);
	const $childScope = _peek_scope_id();
	child_default({ v: c });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_a: _write_if($scope0_reason, 2) && input.a,
		input_b: _write_if($scope0_reason, 1) && input.b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
}, 1);
