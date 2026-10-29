// tags/outer.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0 b2 b3;D%bD ;<section><!><b> </b></section>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_first_value($scope0_id, "f", value, $scope0_reason, 0);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "^f");
			_html(`<b>${_text_resume($scope1_id, "b", value.n)}</b></section>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b0"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", value?.content, 1);
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wh", value?.n, 1);
	_scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 1) && value?.content,
		h: $wi__input_more && value?.n
	});
	$wg__input_more || $wi__input_more && _resume_branch($scope0_id);
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>body</em>");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 4) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				data: _patch_live($childScope, {
					content: Body.content,
					n: input.n
				}, $scope1_id, ">e"),
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a1");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 2) && input.n,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.more,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && Body?.content
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.n, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.n), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va5", input.more, !_server_guard($scope0_reason, 4)));
}, 1);
