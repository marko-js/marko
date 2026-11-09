// tags/reader.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko; ;<output></output>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_get#3", 1, $fg__input_get, "get");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/reader.marko", 0, { get: "1:10" }) || $fg__input_get && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/pass-on.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/pass-on.marko": "__tests__/tags/pass-on.marko;b%;<!><!><!>" });
var pass_on_default = _template("__tests__/tags/pass-on.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_obj_x = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_obj_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.obj.x], 1, 0, 1, $wg__input_content__OR__input_obj_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/pass-on.marko_0_input_content#3_input_obj_x#5/setup", [$fg__input_content && "input_content", $fg__input_obj_x && "input_obj_x"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		input_obj_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.obj?.x
	}, "__tests__/tags/pass-on.marko", 0, {
		input_content: ["input.content"],
		input_obj_x: ["input.obj.x"]
	}) || ($fg__input_content && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)), $fg__input_obj_x && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_obj_x", input.obj?.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_obj = _client_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	pass_on_default({
		obj: input.obj,
		content: _content_resume("__tests__/template.marko_1*content", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.a + x, 1, (2 | _updates_from($scope0_reason, 2)) << 1, 0)}</p>`);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			reader_default({ get: _bind_resume(function() {
				return x;
			}, "__tests__/template.marko_1/get", $scope1_id) });
			_patch_child_end();
			_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4_x#3/setup", [_filled_guard($scope0_reason, 2) && ">input_a", "x"], (2 | _updates_from($scope0_reason, 2)) << 1, 0);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, {
				x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { x: "1:10" }), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_a#0:4/subscribe");
		}, $scope0_id, void 0, 1)
	});
	_patch_child_end();
	$fg__input_a && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_a#4/subscribers", "input_a");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		"ClosureScopes:input_a/5": _write_if($scope0_reason, 2) && $input_a__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || $fg__input_a && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $cg__input_obj || $cg__input_obj) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2));
}, 1);
