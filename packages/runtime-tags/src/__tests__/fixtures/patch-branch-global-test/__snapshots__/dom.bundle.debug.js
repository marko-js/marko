// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>");
const $global_enabled_key = /*@__PURE__*/ _global_key("$global_enabled/5", "enabled");
const $global_enabled = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_enabled#5/subscribe", $global_enabled_key);
const $count__OR__$global_enabled = /*@__PURE__*/ _global_or(3, ($scope) => $if($scope, _global_read($scope.$global, "enabled") && $scope.count > 1 ? 0 : 1), $global_enabled);
const $count = _let("count/2", $count__OR__$global_enabled);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_enabled($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
