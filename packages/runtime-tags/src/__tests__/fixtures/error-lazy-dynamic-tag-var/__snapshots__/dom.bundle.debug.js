// tags/some.marko
const $template = "";
const $walks = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup($scope) {
	$n($scope, 1);
}
var some_default = /*@__PURE__*/ _template("__tests__/tags/some.marko", "", "", /*@__PURE__*/ _return_setup($setup));

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1bD l";
const Some = /*@__PURE__*/ _load_template("__tests__/tags/some.marko", () => import("./some.mjs").then((mod) => mod.default));
_dynamic_tag_var_resume("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/3", ($scope) => $dynamicTag($scope, $scope.Tag));
function $setup($scope) {
	$Tag($scope, Some);
}
const $v = _var_resume("__tests__/template.marko_0_v#4/var", ($scope, v) => _text($scope["#text/2"], String(v && v.n)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
