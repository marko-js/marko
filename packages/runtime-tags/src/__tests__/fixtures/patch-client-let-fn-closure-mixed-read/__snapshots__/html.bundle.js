// tags/outer.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup$1 = [[], []];
_shells({
	b: "b !;D l%;<p> </p><!><!>",
	b1: "b1 b6;D ;<p> </p>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_more = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const g = _resume((v) => f(v), "b0", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "a", g(input.label))}</p>`);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", g("constant"))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["b1"], $scope0_reason, 3);
	_patch_init_entry($scope0_id, "b3", _filled_guard($scope0_reason, 2) && "f");
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb4", f, 1);
	_scope($scope0_id, {
		f: input.label,
		h: $wi__input_label__OR__input_more && f,
		i: $wi__input_label__OR__input_more && g
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		fmt: fn,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
