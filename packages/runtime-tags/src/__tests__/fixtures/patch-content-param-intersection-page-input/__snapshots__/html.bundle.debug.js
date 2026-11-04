// tags/pass-on.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/pass-on.marko": "__tests__/tags/pass-on.marko;b%;<!><!><!>" });
var pass_on_default = _template("__tests__/tags/pass-on.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_obj_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_obj_x = _unfilled_if($scope0_reason, 0), $ui__input_obj_x = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_obj_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.obj.x], 1, 0, 1, $wg__input_content__OR__input_obj_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/pass-on.marko_0_input_content#3_input_obj_x#5/setup", (($fg__input_content ? " input_content" : "") + ($fg__input_obj_x ? " input_obj_x" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_content: ($ui__input_obj_x || $ui__input_content__OR__input_obj_x) && input.content,
		input_obj_x: ($ui__input_content || $ui__input_content__OR__input_obj_x) && input.obj?.x
	}, "__tests__/tags/pass-on.marko", 0, {
		input_content: ["input.content"],
		input_obj_x: ["input.obj.x"]
	}) || ($fg__input_content && $ui__input_obj_x && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)), $fg__input_obj_x && $ui__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_obj_x", input.obj?.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 3), $cg__input_b = _client_guard($scope0_reason, 2), $uf__input_obj = _updates_from($scope0_reason, 1), $ui__input_obj = _unfilled_if($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $input_a__closures = new Set();
	_set_scope_reason($uf__input_obj << 1 | $uf__input_obj << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	pass_on_default({
		obj: input.obj,
		content: _content_resume("__tests__/template.marko_1*content", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 3);
			$ui__input_a && _patch_write($scope1_id, "PatchMarkedWrite:x", x);
			_html(`<i>${_text_mark($scope1_id, "#text/0", input.b, 1, $scope0_reason, 2)}</i><p>${_text_mark($scope1_id, "#text/1", input.a + x, 1, (2 | $uf__input_a) << 1, 0)}</p>`);
			$cg__input_b && _patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:4/subscribe");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:5_x#3/setup", "x" + (_filled_guard($scope0_reason, 3) ? " >input_a" : ""), (2 | $uf__input_a) << 1, 0);
			_subscribe($ui__input_a && $input_a__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope1_id, {
				x: $ui__input_a && x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { x: "1:10" }), $cg__input_b && "__tests__/template.marko_1_input_b#0:4/subscribe"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_1_input_a#0:5/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0", 0);
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_b#4/subscribers", "input_b");
	$fg__input_a && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_a#5/subscribers", "input_a");
	_scope($scope0_id, {
		input_b: ($ui__input_obj || _unfilled_if($scope0_reason, 2)) && input.b,
		input_a: ($ui__input_obj || _unfilled_if($scope0_reason, 3)) && input.a,
		"ClosureScopes:input_b/6": _write_if($scope0_reason, 2) && $input_b__closures,
		"ClosureScopes:input_a/7": _write_if($scope0_reason, 3) && $input_a__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) || ($fg__input_b && $ui__input_obj && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 2)), $fg__input_a && $ui__input_obj && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3)));
}, 1);
