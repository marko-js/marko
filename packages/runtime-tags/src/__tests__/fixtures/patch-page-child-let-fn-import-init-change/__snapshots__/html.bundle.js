// fmt.ts
const plain = (v) => "p-" + v;
const loud = (v) => "l-" + v;

// tags/outer.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 b3;D ;<p> </p>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_first_value($scope0_id, "g", f, $scope0_reason, 1);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", f(input.label), 1, (_mask_group($scope0_reason, 3) | _mask_group($scope0_reason, 1)) << 1, 0, 1, "^g")}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_more, 1, 0, 0, ["b0"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "wg", f, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _unfilled_if($scope0_reason, 0) && f
	}) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 3));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: input.alt ? loud : plain,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
