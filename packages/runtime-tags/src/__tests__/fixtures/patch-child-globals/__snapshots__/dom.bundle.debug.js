// tags/widget/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/tags/widget/index.marko_0_$global_brand#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup$1($scope) {
	$global_brand($scope);
}
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup__script($scope);
	$show($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
