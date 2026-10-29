// tags/outer.marko
const $template$1 = "<button>plain</button><p> </p><p> </p><p> </p>";
const $walks$1 = " bD lD lD l";
const $setup$1 = [[
	"__tests__/tags/outer.marko_0_input_label#7_f#8/init",
	"__tests__/tags/outer.marko_0_input_label#7_g#6/init",
	"__tests__/tags/outer.marko_0_input_label#7_o#10/init"
], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko __tests__/tags/outer.marko_0_input_label#7_f#8/init __tests__/tags/outer.marko_0_input_label#7_g#6/init __tests__/tags/outer.marko_0_input_label#7_o#10/init!__tests__/tags/outer.marko_0; bD lD lD ;<button>plain</button><p> </p><p> </p><p> </p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const o = { f };
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/1", [input.label].map(f).join(), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "f")}</p><p>${_text_resume($scope0_id, "#text/2", f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "f")}</p><p>${_text_resume($scope0_id, "#text/3", o.f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "f")}</p>`);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && $cg__input_label && _patch_write($scope0_id, "PatchWrite:f", f, 1);
	_filled_guard($scope0_reason, 0) && $cg__input_label && _patch_write($scope0_id, "PatchWrite:o", o, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: _unfilled_if($scope0_reason, 1) && f,
		o: _write_if($scope0_reason, 1) && o
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6",
		o: "4:8"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "[" + v + "]", "__tests__/template.marko_0/wrap");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		wrap: _unfilled_if($scope0_reason, 0) && wrap
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		wrap: "1:8"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
