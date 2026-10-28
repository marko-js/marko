// tags/v:bar.marko.module.css
var v_bar_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_bar_marko_module_default });
var v_bar_marko_module_default = "\n  .track { height: 4px; }\n  .fill { width: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0); height: 4px; background: red; }\n  .hp { background: green; }\n";

// tags/bar.marko
const $template$2 = "<style></style><div><div></div></div>";
const $walks$2 = " b D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/bar.marko": "__tests__/tags/bar.marko; b D ;<style></style><div><div></div></div>" });
var bar_default = _template("__tests__/tags/bar.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const pct = Math.round(Math.max(0, Math.min(100, input.pct)));
	const fillClass = v_bar_marko_module_exports[input.variant || "hp"];
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0:${_escape_style_value(pct + "px", $scope0_id, "PatchStyle:#style/0 --M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0", $scope0_reason, 0)};`)}${_el_resume($scope0_id, "#style/0", _mask_group($scope0_reason, 0))}<div${_attr_class([void 0, input.class], $scope0_id, "PatchAttr:#div/1 class", $scope0_reason, 2)}><div${_attr_class([void 0, fillClass], $scope0_id, "PatchAttr:#div/2 class", $scope0_reason, 1)}${_attr("id", `fill${input.variant || ""}`, $scope0_id, "PatchAttr:#div/2 id", $scope0_reason, 1)}></div>${_el_resume($scope0_id, "#div/2", _mask_group($scope0_reason, 1))}</div>${_el_resume($scope0_id, "#div/1", _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/bar.marko", 0);
});

// tags/route-bar.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$2);
const $setup$1 = _shell_setup([[], ["__tests__/tags/route-bar.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/route-bar.marko": /*@__PURE__*/ (() => `__tests__/tags/route-bar.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}& b`)($walks$2)};${((_w0) => `${_w0}<button>+</button>`)($template$2)}`)() });
var route_bar_default = _template("__tests__/tags/route-bar.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let w = 40;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	bar_default({ pct: w });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/route-bar.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/route-bar.marko_fill0", w, 1);
	_scope($scope0_id, {
		w,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/route-bar.marko", 0, { w: "1:6" });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Route_withLoadAssets = withLoadAssets(() => route_bar_default, "__tests__/tags/route-bar.marko", flush, "ready:__tests__/tags/route-bar.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Route_withLoadAssets({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
