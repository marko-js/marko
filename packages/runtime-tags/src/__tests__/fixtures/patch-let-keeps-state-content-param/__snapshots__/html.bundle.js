// tags/boxp.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var boxp_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, { x: input.x }, 1, 0, 0, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_html("</div>");
	_patch_render($scope0_id, "b0", [$fg__input_content && "d", $fg__input_x && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.x
	}) || ($fg__input_content && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	boxp_default({
		x: input.a,
		content: _content_resume("a1", ({ x }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let l = String(x);
			_html(`<button>${_text_mark($scope1_id, "b", l)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { f: l });
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
