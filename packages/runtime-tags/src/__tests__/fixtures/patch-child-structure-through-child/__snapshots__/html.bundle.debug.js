// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/leaf.marko": "__tests__/tags/leaf.marko !;b%;<!><!><!>",
	"__tests__/tags/leaf.marko_1*shell": "__tests__/tags/leaf.marko_1*shell;D ;<em> </em>"
});
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.flag) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/leaf.marko_1_input_label#0:4/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/leaf.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_flag, 1, 0, 0, ["__tests__/tags/leaf.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/tags/leaf.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/leaf.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// tags/mid.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/mid.marko": "__tests__/tags/mid.marko !;b%;<!><!><!>",
	"__tests__/tags/mid.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/mid.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2)}`)()
});
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			leaf_default({
				flag: input.flag,
				label: input.label
			});
			_patch_child_end();
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/mid.marko_1_input_flag#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/mid.marko_1_input_label#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/mid.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/mid.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.flag,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label
	}, "__tests__/tags/mid.marko", 0, {
		input_flag: ["input.flag"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/mid.marko_fill0", input.flag, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/mid.marko_fill1", input.label, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	mid_default({
		show: count % 2 === 0,
		flag: input.flag,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
