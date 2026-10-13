// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $count__OR__$global_enabled = /*@__PURE__*/ _fill_global_join("enabled", "__tests__/template.marko_0_count#2_$global_enabled#4/global", ($scope) => {
	$if($scope, _global_read($scope.$global, "enabled") && $scope.count > 1 ? 0 : 1);
});
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/2", $count__OR__$global_enabled);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
