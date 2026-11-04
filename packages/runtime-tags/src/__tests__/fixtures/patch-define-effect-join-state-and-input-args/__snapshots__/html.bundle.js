// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<pre id=log></pre>${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "a", a + b, 1, $scope1_reason, 0)}</p>`);
		_script($scope1_id, "a1", 1, 0, 0, "a2", $scope1_reason, 0);
		_scope($scope1_id, {
			d: a,
			e: b
		});
	}, $scope0_id) };
	_html("<pre id=log></pre>");
	_set_scope_reason(126);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		a: n + input.x,
		b: n + input.y
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_render($scope0_id, "a4", $fg__input_x && "e");
	_patch_render($scope0_id, "a5", $fg__input_y && "f");
	_scope($scope0_id, {
		e: input.x,
		f: input.y,
		g: n,
		a: _existing_scope($childScope)
	}) || ($fg__input_x && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0)), $fg__input_y && _patch_write($scope0_id, "xf", input.y, !_server_guard($scope0_reason, 1)));
}, 1);
