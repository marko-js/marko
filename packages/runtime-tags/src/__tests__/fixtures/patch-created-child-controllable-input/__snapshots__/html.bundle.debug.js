// tags/demo-card.marko
const $template$2 = "<button>tab=<!></button>";
const $walks$2 = " Db%l";
_shells({ "__tests__/tags/demo-card.marko": "__tests__/tags/demo-card.marko !__tests__/tags/demo-card.marko_0; Db%;<button>tab=<!></button>" });
var demo_card_default = _template_patch("__tests__/tags/demo-card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = input.tab;
	input.tabChange && _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/demo-card.marko_fill2", selected);
	_html(`<button>tab=${_text_resume($scope0_id, "#text/1", String(selected), 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/demo-card.marko_0");
	_patch_write($scope0_id, "input_tab", input.tab, 1);
	_patch_write($scope0_id, "input_tabChange", input.tabChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/demo-card.marko_0_input_tab#4_input_tabChange#5/init");
	_patch_value($scope0_id, "__tests__/tags/demo-card.marko_fill2", selected, 1);
	_patch_bind($scope0_id, "TagVariableChange:selected", input.tabChange || void 0);
	$scope0_page ? _scope($scope0_id, {
		input_tab: _source_if($scope0_reason, 2) && input.tab,
		input_tabChange: _source_if($scope0_reason, 1) && input.tabChange,
		selected,
		"TagVariableChange:selected": input.tabChange || void 0
	}, "__tests__/tags/demo-card.marko", 0, {
		input_tab: ["input.tab"],
		input_tabChange: ["input.tabChange"],
		selected: "2:6",
		"TagVariableChange:selected": ["selectedChange", "2:6"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/demo-card.marko_fill0", input.tab), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/demo-card.marko_fill1", input.tabChange));
});

// tags/page-b.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
_shells({ "__tests__/tags/page-b.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/page-b.marko !;${((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2) });
var page_b_default = _template_patch("__tests__/tags/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	demo_card_default({
		tab,
		tabChange: _resume((_new_tab) => {
			tab = _new_tab;
		}, "__tests__/tags/page-b.marko_0/tabChange", $scope0_id)
	});
	_patch_value($scope0_id, "__tests__/tags/page-b.marko_fill0", tab, 1);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/page-b.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_b_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
