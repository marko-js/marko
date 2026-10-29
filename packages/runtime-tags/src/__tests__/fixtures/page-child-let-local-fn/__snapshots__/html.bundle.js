// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = _resume((v) => "<" + v + ">", "b0");
	_html(`<button>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", f(input.label))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 0, 0, 1);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_more = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label__OR__input_more << 1 | _write_guard($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	outer_default({
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
