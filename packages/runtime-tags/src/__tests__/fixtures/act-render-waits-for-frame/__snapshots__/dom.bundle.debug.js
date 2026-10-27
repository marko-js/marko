// template.marko
const $template = "<form><button name=_action value=add>Add</button></form><button> </button>";
const $walks = " D l D l";
const $busy = /*@__PURE__*/ _let("busy/4", ($scope) => _attr($scope["#button/1"], "disabled", $scope.busy));
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#form/0"], "submit", function(ev) {
		ev.preventDefault();
		$count($scope, +$scope.count + 1);
		_defer_frame();
		$busy($scope, true);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$busy($scope, false);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
