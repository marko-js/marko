// tags/some.marko
const $template = "";
const $walks = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup($scope) {
	$n($scope, 1);
}
var some_default = /*@__PURE__*/ _template("__tests__/tags/some.marko", "", "", /*@__PURE__*/ _return_setup($setup));

// template.marko
const $template = "<button></button><!><p> </p>";
const $walks = " b1bD l";
const Some = /*@__PURE__*/ _load_template("__tests__/tags/some.marko", /*@__PURE__*/ _return_setup(() => import("./some.mjs").then((mod) => mod.default)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", 0, () => $v);
const $mounted = /*@__PURE__*/ _let("mounted/4", ($scope) => $dynamicTag($scope, $scope.mounted && Some));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mounted($scope, true);
}));
function $setup($scope) {
	$mounted($scope, false);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#5/var", ($scope, v) => _text($scope["#text/3"], String(v && v.n)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
