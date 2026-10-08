// tags/demo-card.marko
const $template$2 = "<span class=title><!> <!></span>";
const $walks$2 = "D%c%l";
_shells({ "__tests__/tags/demo-card.marko": "__tests__/tags/demo-card.marko;D%c%;<span class=title><!> <!></span>" });
var demo_card_default = _template_patch("__tests__/tags/demo-card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=title>${_patch_text($scope0_id, "#text/0", input.name, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "#text/1", input.progress, 2, $scope0_reason, 1)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/demo-card.marko", 0);
});

// tags/page-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)($walks$2);
_shells({ "__tests__/tags/page-b.marko": /*@__PURE__*/ (() => `__tests__/tags/page-b.marko !__tests__/tags/page-b.marko_0;${((_w0) => ` D l/${_w0}&`)($walks$2)};${((_w0) => `<button> </button>${_w0}`)($template$2)}`)() });
var page_b_default = _template_patch("__tests__/tags/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let progress = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", progress)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	demo_card_default({
		name: "Switch",
		progress
	});
	_script($scope0_id, "__tests__/tags/page-b.marko_0");
	_patch_value($scope0_id, "__tests__/tags/page-b.marko_fill0", progress, 1);
	$scope0_page && _scope($scope0_id, {
		progress,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/page-b.marko", 0, { progress: "1:6" });
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
