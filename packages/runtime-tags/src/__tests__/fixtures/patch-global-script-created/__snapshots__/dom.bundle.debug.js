// tags/logger.marko
const $template$1 = "<div></div>";
const $walks$1 = "b";
const $setup__$global_brand__script = _fill_global_script("__tests__/tags/logger.marko_0_$global_brand#3", ($scope) => document.querySelector("div").dataset.log = "ran:" + $scope.$global.brand, "brand");
const $setup__$global_brand = $setup__$global_brand__script;
const $setup$1 = $setup__$global_brand;
var logger_default = /*@__PURE__*/ _template("__tests__/tags/logger.marko", $template$1, "b", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup__script($scope);
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
