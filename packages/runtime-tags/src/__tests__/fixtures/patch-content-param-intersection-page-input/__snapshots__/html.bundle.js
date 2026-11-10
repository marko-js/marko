// tags/pass-on.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var pass_on_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_obj_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_obj_x = _unfilled_if($scope0_reason, 0), $ui__input_obj_x = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_obj_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.obj.x], 1, 0, 1, $wg__input_content__OR__input_obj_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_content ? " d" : "") + ($fg__input_obj_x ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_obj_x || $ui__input_content__OR__input_obj_x) && input.content,
		f: ($ui__input_content || $ui__input_content__OR__input_obj_x) && input.obj?.x
	}) || ($fg__input_content && $ui__input_obj_x && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_obj_x && $ui__input_content && _patch_write($scope0_id, "xf", input.obj?.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 3), $cg__input_b = _client_guard($scope0_reason, 2), $uf__input_obj = _updates_from($scope0_reason, 1), $ui__input_obj = _unfilled_if($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($uf__input_obj << 1 | $uf__input_obj << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	pass_on_default({
		obj: input.obj,
		content: _content_resume("a3", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 3);
			$ui__input_a && _patch_write($scope1_id, "xd", x);
			_html(`<i>${_text_mark($scope1_id, "a", input.b, 1, $scope0_reason, 2)}</i><p>${_text_mark($scope1_id, "b", input.a + x, 1, (2 | $uf__input_a) << 1, 0)}</p>`);
			$cg__input_b && _patch_render($scope1_id, "a0");
			_patch_render($scope1_id, "a1", "d" + (_filled_guard($scope0_reason, 3) ? " >f" : ""), (2 | $uf__input_a) << 1, 0);
			_subscribe($ui__input_a && $input_a__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope1_id, {
				d: $ui__input_a && x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
			}), $cg__input_b && "a0"), _client_guard($scope0_reason, 3) && "a2");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "a4", 0);
	$fg__input_b && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_a && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: ($ui__input_obj || _unfilled_if($scope0_reason, 2)) && input.b,
		f: ($ui__input_obj || _unfilled_if($scope0_reason, 3)) && input.a,
		g: _write_if($scope0_reason, 2) && $input_b__closures,
		h: _write_if($scope0_reason, 3) && $input_a__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_b && $ui__input_obj && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)), $fg__input_a && $ui__input_obj && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 3)));
}, 1);
