// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
_load_lazy("ready:__tests__/tags/route-bar.marko", () => import("./route-bar.mjs").then(() => {}));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/v:bar.marko.module.css
var v_bar_marko_module_exports = /* @__PURE__ */ __exportAll({ default: () => v_bar_marko_module_default });
var v_bar_marko_module_default = "\n  .track { height: 4px; }\n  .fill { width: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0); height: 4px; background: red; }\n  .hp { background: green; }\n";

// tags/bar.marko
const $template$1 = "<style></style><div><div></div></div>";
const $walks$1 = " b D l";
const $pct = /*@__PURE__*/ _const("pct", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19created-19dynamic-19style-1btags-1bbar-1amarko_0", $scope.pct + "px"));
const $input_pct = ($scope, input_pct) => $pct($scope, Math.round(Math.max(0, Math.min(100, input_pct))));
function $setup$1($scope) {
	_style_shell($scope, "#style/0");
}
const $fillClass = ($scope, fillClass) => _attr_class($scope["#div/2"], [void 0, fillClass]);
const $input_variant = ($scope, input_variant) => {
	_attr($scope["#div/2"], "id", `fill${input_variant || ""}`);
	$fillClass($scope, v_bar_marko_module_exports[input_variant || "hp"]);
};
const $input_class = ($scope, input_class) => _attr_class($scope["#div/1"], [void 0, input_class]);
const $input = ($scope, input) => {
	$input_pct($scope, input.pct);
	$input_variant($scope, input.variant);
	$input_class($scope, input.class);
};
var bar_default = /*@__PURE__*/ _template("__tests__/tags/bar.marko", $template$1, $walks$1, $setup$1, $input);

// tags/route-bar.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $w = /*@__PURE__*/ _fill_let("__tests__/tags/route-bar.marko_fill0", "w/2", ($scope) => $input_pct($scope["#childScope/0"], $scope.w));
const $setup__script = _script("__tests__/tags/route-bar.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$w($scope, $scope.w + 10);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_variant($scope["#childScope/0"]);
	$input_class($scope["#childScope/0"]);
	$setup__script($scope);
	$w($scope, 40);
}
var route_bar_default = /*@__PURE__*/ _template("__tests__/tags/route-bar.marko", $template, $walks, $setup);
