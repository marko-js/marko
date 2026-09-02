// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $count__OR__$global_enabled = /*@__PURE__*/ _global_join("enabled", "__tests__/template.marko_0_count#2_$global_enabled#3/global", ($scope) => {
	$if($scope, $scope.$global.enabled && $scope.count > 1 ? 0 : 1);
});
const $count = /*@__PURE__*/ _let("count/2", $count__OR__$global_enabled);
const $global_enabled = /*@__PURE__*/ _global_join("enabled", "__tests__/template.marko_0_$global_enabled#3/global", ($scope) => {});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_enabled($scope, $scope.$global.enabled);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
