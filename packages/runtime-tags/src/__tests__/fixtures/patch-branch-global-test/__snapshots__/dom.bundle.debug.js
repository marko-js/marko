// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $count__OR__$global_enabled = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_count#2_$global_enabled#5/setup", 3, ($scope) => $if($scope, _global_read($scope.$global, "enabled") && $scope.count > 1 ? 0 : 1));
const $count = _let("count/2", $count__OR__$global_enabled);
const $global_enabled = _fill_global_resume("__tests__/template.marko_0_$global_enabled#5/subscribe", $count__OR__$global_enabled, "enabled");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_enabled($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
