// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	const Show = { content: _content("a3", ({ get }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const g = get ?? _resume(() => "none", "a2");
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a4");
		_scope($scope1_id, { e: g });
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Show.content({ get: low });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	});
}, 1);
