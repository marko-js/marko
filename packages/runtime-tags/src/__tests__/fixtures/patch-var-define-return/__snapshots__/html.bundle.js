// template.marko
_shells({ a: "a !a3;0&b D l ;<!><div> </div><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2);
		const $return = a + b;
		_patch_render($scope1_id, "a1", [$fg__a && "c", $fg__b && "d"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			c: _write_if($scope1_reason, 2) && a,
			d: _write_if($scope1_reason, 1) && b
		}) || ($fg__a && _client_guard($scope1_reason, 2) && _patch_write($scope1_id, "xc", a, !_server_guard($scope1_reason, 1)), $fg__b && _client_guard($scope1_reason, 1) && _patch_write($scope1_id, "xd", b, !_server_guard($scope1_reason, 2)));
		return $return;
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let total = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "b", $childScope, "a2");
	_patch_child_end();
	_html(`<div>${_text_mark($scope0_id, "d", total)}</div>${_el_mark($scope0_id, "c")}<button>+</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		i: n,
		j: total,
		a: _existing_scope($childScope)
	});
}, 1);
