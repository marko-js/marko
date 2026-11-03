// tags/mid-define.marko
var mid_define_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("b0", ({ get }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_scope($scope1_id, { d: get });
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Show.content({ get: input.get });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_define_default({ get: low });
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
