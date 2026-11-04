// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Inner = { content: _content("a1", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button>${_text_mark($scope1_id, "b", label, _write_guard($scope1_reason, 0))}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, { e: fn });
	}, $scope0_id) };
	const Outer = { content: _content("a3", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_write_guard($scope2_reason, 1) << 1);
		const $childScope = _peek_scope_id();
		Inner.content({
			fn,
			label
		});
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_set_scope_reason(2 | _write_guard($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id();
	Outer.content({
		fn: _resume(function() {
			n += input.step;
		}, "a0", $scope0_id),
		label: input.label
	});
	_html(`<p>${_text_mark($scope0_id, "b", n)}</p>`);
	_scope($scope0_id, {
		e: input.step,
		g: n,
		a: _existing_scope($childScope2)
	});
}, 1);
