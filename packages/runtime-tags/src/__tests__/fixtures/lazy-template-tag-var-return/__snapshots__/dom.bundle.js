// template.marko
const Some = /*@__PURE__*/ _load_template("b", () => import("./some.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, 0, () => $v);
const $mounted = /*@__PURE__*/ _let(4, ($scope) => $dynamicTag($scope, $scope.e && Some));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$mounted($scope, true);
}));
const $v = _var_resume("a0", ($scope, v) => _text($scope.d, String(v && v.n)));

// tags/some.marko
const $template = "";
const $walks = "";
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { n: $scope.a }));
function $setup($scope) {
	$n($scope, 1);
}
var some_default = /*@__PURE__*/ _template("b", "", "", $setup);
