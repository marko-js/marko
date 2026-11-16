// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = { a: input.x + input.y };
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		c: _write_if($scope0_reason, 2) && input.x,
		d: _write_if($scope0_reason, 1) && input.y
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 1;
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	let r = child_default({
		x: count,
		y: other
	});
	_var($scope0_id, "b", $childScope, "a0");
	const { a } = { ...r };
	_html(`<p>${_text_mark($scope0_id, "c", a + other)}</p><button>inc</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: count,
		f: other,
		a: _existing_scope($childScope)
	});
}, 1);
