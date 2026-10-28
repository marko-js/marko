// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a1", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__fn__OR__label = _write_guard($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "a", fn() + label, $wg__fn__OR__label)}</p>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && fn,
			e: _write_if($scope1_reason, 1) && label
		});
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	Row.content({
		fn: _resume(() => count, "a0", $scope0_id),
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
