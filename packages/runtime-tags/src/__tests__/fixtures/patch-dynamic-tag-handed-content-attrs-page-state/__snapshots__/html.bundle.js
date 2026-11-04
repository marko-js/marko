// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_t = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { title: input.t }, 1, 0, 0, $wg__input_content__OR__input_t, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", [$fg__input_content && "d", $fg__input_t && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.t
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_t && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.t, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_y = _client_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	one_default({
		t: input.y,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_mark($scope1_id, "a", input.y, 2, $scope0_reason, 0)}`);
			$cg__input_y && _patch_render($scope1_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_y__closures, _scope($scope1_id, { _: $wi__input_y && _scope_with_id($scope0_id) }), $cg__input_y && "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: s,
		g: $wi__input_y && $input_y__closures,
		b: _existing_scope($childScope)
	});
}, 1);
