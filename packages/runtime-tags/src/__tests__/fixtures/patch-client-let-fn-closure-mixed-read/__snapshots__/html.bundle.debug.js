// tags/outer.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;D l%;<p> </p><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_g#0:8/init;D ;<p> </p>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_more = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const g = _resume((v) => f(v), "__tests__/tags/outer.marko_0/g", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "#text/0", g(input.label))}</p>`);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", g("constant"))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 3);
	_patch_init_entry($scope0_id, "__tests__/tags/outer.marko_0_input_label#5_g#8/init", _filled_guard($scope0_reason, 2) && "input_label");
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", f, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: $wi__input_label__OR__input_more && f,
		g: $wi__input_label__OR__input_more && g
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6",
		g: "2:8"
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "__tests__/template.marko_0/fn");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: fn,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
