// template.marko
const $Row_content__walks = "D l b";
const $Row_content__template = "<p> </p><div></div>";
_shells({ a: `a !a3;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "a", a + b, 1, $scope1_reason, 0)}</p><div></div>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a1", 1, $fg__a, "e");
		_patch_render($scope1_id, "a2", [$fg__a && "e", $fg__b && "f"], $scope1_reason, 0);
		_scope($scope1_id, {
			e: a,
			f: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && b
		}) || ($fg__a && _patch_write($scope1_id, "xe", a, !_server_guard($scope1_reason, 1)), $fg__b && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "xf", b, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
