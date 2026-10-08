// tags/toggle-panel/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/toggle-panel/index.marko": "__tests__/tags/toggle-panel/index.marko; ;<div></div>",
	"__tests__/tags/toggle-panel/index.marko_1*shell": "__tests__/tags/toggle-panel/index.marko_1*shell,<em>on</em>"
});
var toggle_panel_default = _template_patch("__tests__/tags/toggle-panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/toggle-panel/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/toggle-panel/index.marko_1*shell"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_show)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/toggle-panel/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)(" b")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	toggle_panel_default({ show: count % 2 === 0 });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
