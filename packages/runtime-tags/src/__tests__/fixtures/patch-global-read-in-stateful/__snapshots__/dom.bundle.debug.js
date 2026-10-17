// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_1_$global_brand#0:7", ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $if_content__setup = $if_content__setup__$global_brand;
const $if = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "on/2", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup__script($scope);
	$on($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
