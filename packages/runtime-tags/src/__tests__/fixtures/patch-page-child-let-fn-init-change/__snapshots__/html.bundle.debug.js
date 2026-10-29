// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_input_label#0:5_f#0:6/init;D ;<p> </p>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_first_value($scope0_id, "f", f, $scope0_reason, 1);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", f(input.label), 1, (_mask_group($scope0_reason, 3) | _mask_group($scope0_reason, 1)) << 1, 0, 1, "^f")}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:f", f, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: _unfilled_if($scope0_reason, 0) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6"
	}) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 3));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const plain = _resume((v) => "p-" + v, "__tests__/template.marko_0/plain");
	const loud = _resume((v) => "l-" + v, "__tests__/template.marko_0/loud");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: input.alt ? loud : plain,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, {
		plain: _unfilled_if($scope0_reason, 1) && plain,
		loud: _unfilled_if($scope0_reason, 1) && loud,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		plain: "1:8",
		loud: "2:8"
	});
}, 1);
