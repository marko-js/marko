// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0 b2 b3;D%bD ;<section><!><b> </b></section>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
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
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>body</em>");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		data: _patch_live($childScope, {
			content: Body.content,
			n: input.n
		}, $scope0_id, "d"),
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 0) && Body?.content,
		a: _existing_scope($childScope)
	});
}, 1);
