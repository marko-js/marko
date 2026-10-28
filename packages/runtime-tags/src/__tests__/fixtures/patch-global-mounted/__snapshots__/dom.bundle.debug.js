// tags/badge.marko
const $template$1 = "<p> </p>";
const $walks$1 = " D l";
const $count__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/tags/badge.marko_0_count#2_$global_brand#6", ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand")), "brand");
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/badge.marko_fill0", "count/2", $count__$global_brand);
const $setup__$global__script = _fill_global_script("__tests__/tags/badge.marko_0_$global#5", ($scope) => _el_read($scope["#p/0"]).dataset.log = (_el_read($scope["#p/0"]).dataset.log || "") + "[" + JSON.stringify($scope.$global) + "]", "");
const $setup__$global = $setup__$global__script;
const $setup__script$1 = _script("__tests__/tags/badge.marko_0", ($scope) => _on($scope["#p/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$setup__$global($scope);
	$setup__script$1($scope);
	$count($scope, 0);
}
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => badge_default.mount({ $global: { brand: "own" } }, _el_read($scope["#div/1"])));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
