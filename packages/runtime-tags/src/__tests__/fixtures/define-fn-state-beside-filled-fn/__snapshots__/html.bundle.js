// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a2", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "a", a() + b())}</p>`);
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && a,
			e: b
		});
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	Row.content({
		a: _resume(() => count, "a0", $scope0_id),
		b: _resume(() => input.x, "a1", $scope0_id)
	});
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.x,
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
