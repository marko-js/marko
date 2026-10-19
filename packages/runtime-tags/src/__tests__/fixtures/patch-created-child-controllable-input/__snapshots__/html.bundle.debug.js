// tags/demo-card.marko
const $template$2 = "<button>tab=<!></button>";
const $walks$2 = " Db%l";
_shells({ "__tests__/tags/demo-card.marko": "__tests__/tags/demo-card.marko !__tests__/tags/demo-card.marko_0; Db%;<button>tab=<!></button>" });
var demo_card_default = _template("__tests__/tags/demo-card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = input.tab;
	_html(`<button>tab=${_text_resume($scope0_id, "#text/1", String(selected), 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/demo-card.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/demo-card.marko_0_input_tab#4_input_tabChange#5/init");
	const $selectedChange = input.tabChange || void 0;
	_patch_let_change($scope0_id, "PatchValue:__tests__/tags/demo-card.marko_fill2", selected, "PatchBind:TagVariableChange:selected", $selectedChange, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		input_tab: _write_if($scope0_reason, 2) && input.tab,
		input_tabChange: _write_if($scope0_reason, 1) && input.tabChange,
		selected,
		"TagVariableChange:selected": $selectedChange
	}, "__tests__/tags/demo-card.marko", 0, {
		input_tab: ["input.tab"],
		input_tabChange: ["input.tabChange"],
		selected: "2:6",
		"TagVariableChange:selected": ["selectedChange", "2:6"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/demo-card.marko_fill0", input.tab, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/demo-card.marko_fill1", input.tabChange, !_server_guard($scope0_reason, 2)));
});

// tags/page-b.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
_shells({ "__tests__/tags/page-b.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/page-b.marko !;${((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2) });
var page_b_default = _template("__tests__/tags/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	_set_scope_reason(10 | ($scope0_page ? 0 : 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	demo_card_default({
		tab,
		tabChange: _resume((_new_tab) => {
			tab = _new_tab;
		}, "__tests__/tags/page-b.marko_0/tabChange", $scope0_id)
	});
	_patch_value($scope0_id, "PatchValue:__tests__/tags/page-b.marko_fill0", tab, 1);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/page-b.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			page_b_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
