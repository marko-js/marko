// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_2_$global_brand#0:7", ($scope) => _text($scope["#text/1"], $scope.$global.brand), "brand");
const $for_content__setup = $for_content__setup__$global_brand;
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_brand#0:7", ($scope) => _text($scope["#text/0"], $scope.$global.brand), "brand");
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<i><!><!></i>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__for($scope, [[1, 2]]);
	$if_content__setup__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<em> </em><!><!>", "D l%", $if_content__setup);
const $on = _let("on/2", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
