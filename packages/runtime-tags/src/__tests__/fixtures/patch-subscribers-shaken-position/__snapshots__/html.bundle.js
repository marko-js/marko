// tags/frame.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_x = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_content ? " d" : "") + ($fg__input_x ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $ui__input_content__OR__input_x && input.content,
		e: $ui__input_content__OR__input_x && input.x
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/&b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 2), $sg__input_n = _server_guard($scope0_reason, 1), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const Effect = { content: _content("a0", () => {
		const $scope1_id = _scope_id(), $fg__input_n = _filled_guard($scope0_reason, 1);
		_scope_reason();
		const twice = input.n * 2;
		_script($scope1_id, "a1", 0, $fg__input_n);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope1_id, {
			a: twice,
			_: _scope_with_id($scope0_id)
		}), $cg__input_n && "a2", 0) || $fg__input_n && _patch_write($scope1_id, "xa", twice, !$sg__input_n);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Effect.content({});
	_patch_child_end();
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	frame_default({
		x: input.x,
		content: _content_resume("a4", (x) => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", x, 1, 4, 0)} ${_text_mark($scope2_id, "b", input.n, 2, $scope0_reason, 1)}</p>`);
			$cg__input_n && _patch_render($scope2_id, "a3");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				Cg: $wi__input_n && 1
			}), $cg__input_n && "a3");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.n,
		g: $wi__input_n && $input_n__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.n, !$sg__input_n) && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
