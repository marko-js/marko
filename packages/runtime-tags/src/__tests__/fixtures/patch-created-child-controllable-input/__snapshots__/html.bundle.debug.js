// tags/demo-card.marko
const $template$2 = "<button>tab=<!></button>";
const $walks$2 = " Db%l";
const $setup$2 = [[], ["__tests__/tags/demo-card.marko_0"]];
_shells({ "__tests__/tags/demo-card.marko": "__tests__/tags/demo-card.marko !__tests__/tags/demo-card.marko_0; Db%;<button>tab=<!></button>" });
var demo_card_default = _template("__tests__/tags/demo-card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_tab = _filled_guard($scope0_reason, 1), $fg__input_tabChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let selected = input.tab;
	_html(`<button>tab=${_text_mark($scope0_id, "#text/1", String(selected), 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/demo-card.marko_0");
	_patch_render($scope0_id, "__tests__/tags/demo-card.marko_0_input_tab#4_input_tabChange#5/setup", [$fg__input_tab && "input_tab", $fg__input_tabChange && "input_tabChange"], $scope0_reason, 0);
	const $selectedChange = input.tabChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/tags/demo-card.marko_0_selected#7/fill", selected, "PatchWrite:TagVariableChange:selected", $selectedChange, $scope0_reason, 0);
	_scope($scope0_id, {
		input_tab: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tab,
		input_tabChange: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.tabChange,
		selected,
		"TagVariableChange:selected": $selectedChange
	}, "__tests__/tags/demo-card.marko", 0, {
		input_tab: ["input.tab"],
		input_tabChange: ["input.tabChange"],
		selected: "2:6",
		"TagVariableChange:selected": ["selectedChange", "2:6"]
	}) || ($fg__input_tab && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_tab", input.tab, !_server_guard($scope0_reason, 1)), $fg__input_tabChange && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_tabChange", input.tabChange, !_server_guard($scope0_reason, 2)));
});

// tags/page-b.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/page-b.marko": `__tests__/tags/page-b.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$2)};${$template$2}` });
var page_b_default = _template("__tests__/tags/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tab = 0;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	demo_card_default({
		tab,
		tabChange: _resume((_new_tab) => {
			tab = _new_tab;
		}, "__tests__/tags/page-b.marko_0/tabChange", $scope0_id)
	});
	_patch_child_end();
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/page-b.marko_0_tab#1/fill", tab, 1);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/page-b.marko", 0);
	_resume_branch($scope0_id);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			page_b_default({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
