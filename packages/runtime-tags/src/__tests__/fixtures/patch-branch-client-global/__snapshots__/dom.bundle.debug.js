// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__$global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_1_$global_brand#3/global", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope.$global.brand)));
const $if_content__setup = $if_content__$global_brand;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
