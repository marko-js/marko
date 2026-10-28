// template.marko
_shells({ a: "a !a4;0&b D l ;<!><div> </div><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = a + b;
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			c: _write_if($scope1_reason, 2) && a,
			d: _write_if($scope1_reason, 1) && b
		}) || (_filled_guard($scope1_reason, 1) && _patch_fill($scope1_id, "va1", a, !_server_guard($scope1_reason, 1)), _filled_guard($scope1_reason, 2) && _patch_fill($scope1_id, "va2", b, !_server_guard($scope1_reason, 2)));
		return $return;
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let total = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "b", $childScope, "a3");
	_patch_child_end();
	_html(`<div>${_text_resume($scope0_id, "d", total)}</div>${_el_resume($scope0_id, "c")}<button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		i: n,
		j: total,
		a: _existing_scope($childScope)
	});
}, 1);
