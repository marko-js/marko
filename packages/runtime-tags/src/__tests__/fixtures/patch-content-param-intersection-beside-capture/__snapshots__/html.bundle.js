// tags/reader.marko
_shells({ c: "c; ;<output></output>" });
var reader_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0", 1, $fg__input_get, "d");
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/pass-on.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var pass_on_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_obj_x = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_obj_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.obj.x], 1, 0, 1, $wg__input_content__OR__input_obj_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", [$fg__input_content && "d", $fg__input_obj_x && "f"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.obj?.x
	}) || ($fg__input_content && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_obj_x && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.obj?.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	pass_on_default({
		obj: input.obj,
		content: _content_resume("a3", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xd", x);
			_html(`<p>${_text_mark($scope1_id, "a", input.a + x, 1, (2 | _updates_from($scope0_reason, 2)) << 1, 0)}</p>`);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			reader_default({ get: _bind_resume(function() {
				return x;
			}, "a0", $scope1_id) });
			_patch_child_end();
			_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 2) && ">e", "d"], (2 | _updates_from($scope0_reason, 2)) << 1, 0);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, {
				d: x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			}), _client_guard($scope0_reason, 2) && "a2");
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_a && _patch_subscribers($scope0_id, "a4", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: _write_if($scope0_reason, 2) && $input_a__closures,
		a: _existing_scope($childScope2)
	}) || $fg__input_a && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2));
}, 1);
