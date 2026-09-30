// tags/v:bar.marko.module.css
var v_bar_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_bar_marko_module_default });
var v_bar_marko_module_default = "\n  .track { height: 4px; }\n  .fill { width: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0); height: 4px; background: red; }\n  .hp { background: green; }\n";

// tags/bar.marko
const $template$2 = "<style></style><div><div></div></div>";
const $walks$2 = " b D l";
_shells({ "__tests__/tags/bar.marko": "__tests__/tags/bar.marko; b D ;<style></style><div><div></div></div>" });
var bar_default = _template_patch("__tests__/tags/bar.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const pct = Math.round(Math.max(0, Math.min(100, input.pct)));
	const fillClass = v_bar_marko_module_exports[input.variant || "hp"];
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0:${_patch_style($scope0_id, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0", pct + "px", $scope0_reason, 0)};`)}${_el_resume($scope0_id, "#style/0")}<div${_patch_attr_class($scope0_id, "#div/1", [void 0, input.class], $scope0_reason, 2)}><div${_patch_attr_class($scope0_id, "#div/2", [void 0, fillClass], $scope0_reason, 1)}${_patch_attr($scope0_id, "#div/2", "id", `fill${input.variant || ""}`, $scope0_reason, 1)}></div>${_el_resume($scope0_id, "#div/2")}</div>${_el_resume($scope0_id, "#div/1")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/bar.marko", 0);
}, 0, 0);

// tags/route-bar.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$2);
_shells({ "__tests__/tags/route-bar.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/route-bar.marko !__tests__/tags/route-bar.marko_0;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)($walks$2), ((_w0) => `${_w0}<button>+</button>`)($template$2)) });
var route_bar_default = _template_patch("__tests__/tags/route-bar.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let w = 40;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(bar_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		bar_default({ pct: w });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/route-bar.marko_0");
	_patch_value($scope0_id, "__tests__/tags/route-bar.marko_fill0", w, 1);
	$scope0_page && _scope($scope0_id, {
		w,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/route-bar.marko", 0, { w: "1:6" });
}, 0, () => [bar_default]);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Route_withLoadAssets = withLoadAssets(route_bar_default, "ready:__tests__/tags/route-bar.marko", void 0, 1);
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Route_withLoadAssets({});
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [$Route_withLoadAssets]);
