// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $count__$global_enabled = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_count#2_$global_enabled#5", ($scope) => $if($scope, _global_read($scope.$global, "enabled") && $scope.count > 1 ? 0 : 1), "enabled");
const $count = /*@__PURE__*/ _let("count/2", $count__$global_enabled);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
