// tags/outer/tags/inner/index.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/tags/outer/tags/inner/index.marko_0_$global_brand#1/global", ($scope, $global_brand) => _text($scope["#text/0"], $scope.$global.brand));
function $setup$2($scope) {
	$global_brand($scope, $scope.$global.brand);
}
var inner_default = /*@__PURE__*/ _template("__tests__/tags/outer/tags/inner/index.marko", $template$2, "D l", $setup$2);

// tags/outer/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
