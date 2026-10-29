// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0; ; ",
	b: "b !;b%;<!><!><!>",
	b2: "b2 b6;b%;<!><!><!>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let tag = input.tag;
	_first_value($scope0_id, "g", tag, $scope0_reason, 0);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", tag, {}, 2, _content_resume("b0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 2));
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "b1");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id), 0, 1, $scope0_reason, 0, "^g");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b2"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", tag, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _unfilled_if($scope0_reason, 1) && tag,
		h: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("b0", $scope0_id) && _patch_fill($scope0_id, "vb3", input.label, !_server_guard($scope0_reason, 2));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		tag: input.alt ? "b" : "em",
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
