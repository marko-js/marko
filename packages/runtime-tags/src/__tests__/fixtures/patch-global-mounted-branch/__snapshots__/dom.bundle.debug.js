// tags/badge.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = " D l%c";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/5", "brand");
const $if_content__$global_brand = /*@__PURE__*/ _global_if("__tests__/tags/badge.marko_1_$global_brand#0:8/subscribe", $global_brand_key, "#text/2", 0, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $global_key = /*@__PURE__*/ _global_key("$global/7/4");
const $if_content__$global = /*@__PURE__*/ _global_if("__tests__/tags/badge.marko_1_$global#0:7/subscribe", $global_key, "#text/2", 0, ($scope) => $if_content__$global__script($scope));
const $if_content__$global__script = _global_script("__tests__/tags/badge.marko_1_$global#0:7", ($scope) => _el_read($scope._["#p/0"]).dataset.log = (_el_read($scope._["#p/0"]).dataset.log || "") + "[" + JSON.stringify($scope.$global) + "]", $if_content__$global);
const $if_content__setup = ($scope) => {
	$if_content__$global_brand($scope);
	$if_content__$global($scope);
};
const $if = /*@__PURE__*/ _if("#text/2", "<i> </i>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/badge.marko_0_count#3/fill", "count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if($scope, $scope.count >= 0 ? 0 : 1);
});
const $setup__script$1 = _script("__tests__/tags/badge.marko_0", ($scope) => _on($scope["#p/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
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
