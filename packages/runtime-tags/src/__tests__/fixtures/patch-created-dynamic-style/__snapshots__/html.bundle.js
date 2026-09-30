// tags/v:bar.marko.module.css
var v_bar_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_bar_marko_module_default });
var v_bar_marko_module_default = "\n  .track { height: 4px; }\n  .fill { width: var(--M_b0); height: 4px; background: red; }\n  .hp { background: green; }\n";

// tags/bar.marko
const $template$1 = "<style></style><div><div></div></div>";
const $walks$1 = " b D l";
_shells({ b: "b; b D ;<style></style><div><div></div></div>" });
var bar_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const pct = Math.round(Math.max(0, Math.min(100, input.pct)));
	const fillClass = v_bar_marko_module_exports[input.variant || "hp"];
	_html(`${_style_html(`--M_b0:${_patch_style($scope0_id, "a", "--M_b0", pct + "px", $scope0_reason, 0)};`)}${_el_resume($scope0_id, "a")}<div${_patch_attr_class($scope0_id, "b", [void 0, input.class], $scope0_reason, 2)}><div${_patch_attr_class($scope0_id, "c", [void 0, fillClass], $scope0_reason, 1)}${_patch_attr($scope0_id, "c", "id", `fill${input.variant || ""}`, $scope0_reason, 1)}></div>${_el_resume($scope0_id, "c")}</div>${_el_resume($scope0_id, "b")}`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/route-bar.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
_shells({ c: /*@__PURE__*/ ((_w0, _w1) => `c !c0;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)($walks$1), ((_w0) => `${_w0}<button>+</button>`)($template$1)) });
var route_bar_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let w = 40;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(bar_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "a", $childScope);
		bar_default({ pct: w });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c1", w, 1);
	$scope0_page && _scope($scope0_id, {
		c: w,
		a: _existing_scope($childScope)
	});
}, 0, () => [bar_default]);

// template.marko
const $Route_withLoadAssets = withLoadAssets(route_bar_default, "_c", void 0, 1);
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Route_withLoadAssets({});
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [$Route_withLoadAssets]);
