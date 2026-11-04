// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("a1", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__fn = _filled_guard($scope1_reason, 1), $fg__label = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "a", fn() + label, 1, $scope1_reason, 0)}</p>`);
		_patch_render($scope1_id, "a2", (($fg__fn ? " d" : "") + ($fg__label ? " e" : "")).slice(1), $scope1_reason, 0);
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && fn,
			e: _write_if($scope1_reason, 1) && label
		}) || ($fg__fn && _unfilled_if($scope1_reason, 2) && _patch_write($scope1_id, "xd", fn, !_server_guard($scope1_reason, 1)), $fg__label && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(6 | (($scope0_page ? 3 : 1) << 3 | _updates_from($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({
		fn: _resume(() => count + input.x, "a0", $scope0_id),
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_render($scope0_id, "a4", $fg__input_x && "e");
	_scope($scope0_id, {
		e: input.x,
		g: count,
		a: _existing_scope($childScope)
	}) || $fg__input_x && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
}, 1);
