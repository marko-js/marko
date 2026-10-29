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
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", f(input.label))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 2);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", f, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: _write_if($scope0_reason, 0) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6"
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 3));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const plain = _resume((v) => "p-" + v, "__tests__/template.marko_0/plain");
	const loud = _resume((v) => "l-" + v, "__tests__/template.marko_0/loud");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 4) << 3 | _mask_group($scope0_reason, 6) << 5 | _mask_group($scope0_reason, 5) << 7);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				fmt: input.alt ? loud : plain,
				label: input.label,
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "__tests__/template.marko_1_input_more#0:6/init");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/template.marko_1_input_alt#0:4_plain#0:7_loud#0:8/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_scope($scope0_id, {
		input_alt: _unfilled_if($scope0_reason, 3) && input.alt,
		input_label: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.label,
		input_more: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.more,
		plain: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && plain,
		loud: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && loud
	}, "__tests__/template.marko", 0, {
		input_alt: ["input.alt"],
		input_label: ["input.label"],
		input_more: ["input.more"],
		plain: "1:8",
		loud: "2:8"
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.alt, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.more, !_server_guard($scope0_reason, 6)));
}, 1);
