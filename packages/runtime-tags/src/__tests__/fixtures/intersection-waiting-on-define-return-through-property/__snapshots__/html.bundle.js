// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 1;
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = { a: input.x + input.y };
		_scope($scope1_id, {
			c: input.x,
			d: input.y
		});
		return $return;
	}, $scope0_id) };
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	let r = Child.content({
		x: count,
		y: other
	});
	_var($scope0_id, "b", $childScope, "a1");
	const o = { ...r };
	_html(`<p>${_text_mark($scope0_id, "c", o.a + other)}</p><button>inc</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: count,
		f: other,
		a: _existing_scope($childScope)
	});
}, 1);
