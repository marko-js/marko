// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("b0", ({ a, b, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const get = flag ? a : b;
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && a,
			e: _write_if($scope1_reason, 1) && b,
			f: _write_if($scope1_reason, 0) && flag,
			h: get
		});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	Show.content({
		a: input.a,
		b: input.b,
		flag: input.flag
	});
	_write_if($scope0_reason, 3) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(138 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: low,
		b: low,
		flag: true
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	});
}, 1);
