// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_brand#0:6/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $if_content__setup = $if_content__$global_brand;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $count = _let("count/2", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $global_brand = _fill_global_resume("__tests__/template.marko_0_$global_brand#6/subscribe", $if_content__$global_brand, "brand");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_brand($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
