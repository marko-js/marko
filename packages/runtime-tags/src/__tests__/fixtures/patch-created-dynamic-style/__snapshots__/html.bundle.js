// tags/v:bar.marko.module.css
var v_bar_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_bar_marko_module_default });
var v_bar_marko_module_default = "\n  .track { height: 4px; }\n  .fill { width: var(--M_b0); height: 4px; background: red; }\n  .hp { background: green; }\n";

// tags/bar.marko
const $template$1 = "<style></style><div><div></div></div>";
const $walks$1 = " b D l";
const $setup$1 = [[], []];
_shells({ b: "b; b D ;<style></style><div><div></div></div>" });
var bar_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const pct = Math.round(Math.max(0, Math.min(100, input.pct)));
	const fillClass = v_bar_marko_module_exports[input.variant || "hp"];
	_html(`${_style_html(`--M_b0:${_patch_style($scope0_id, "ya$--M_b0", pct + "px", $scope0_reason, 0)};`)}${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<div${_attr_class([void 0, input.class], $scope0_id, "ab$class", $scope0_reason, 2)}><div${_attr_class([void 0, fillClass], $scope0_id, "ac$class", $scope0_reason, 1)}${_attr("id", `fill${input.variant || ""}`, $scope0_id, "ac$id", $scope0_reason, 1)}></div>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 1))}</div>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// tags/route-bar.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["c0"]], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)() });
var route_bar_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let w = 40;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	bar_default({ pct: w });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", w, 1);
	_scope($scope0_id, {
		c: w,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_bar_default, "c", flush, "_c");
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Route_withLoadAssets({});
			_patch_child_end();
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
