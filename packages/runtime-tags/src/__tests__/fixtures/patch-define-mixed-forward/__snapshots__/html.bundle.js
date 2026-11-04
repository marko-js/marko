// template.marko
const $Kid_content__walks = "D l";
const $Kid_content__template = "<span> </span>";
_shells({ a: `a !a2;${((_w0) => `/${_w0}& b`)($Kid_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Kid_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Kid = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__input_a = _filled_guard($scope1_reason, 1), $fg__input_b = _filled_guard($scope1_reason, 2);
		_html(`<span>${_text_mark($scope1_id, "a", input.a + input.b, 1, $scope1_reason, 0)}</span>`);
		_patch_render($scope1_id, "a1", [$fg__input_a && "d", $fg__input_b && "e"], $scope1_reason, 0);
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && input.a,
			e: _write_if($scope1_reason, 1) && input.b
		}) || ($fg__input_a && _unfilled_if($scope1_reason, 2) && _patch_write($scope1_id, "xd", input.a, !_server_guard($scope1_reason, 1)), $fg__input_b && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "xe", input.b, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	let s = 1;
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Kid.content({
		a: s,
		b: input.x
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: s,
		a: _existing_scope($childScope)
	});
}, 1);
