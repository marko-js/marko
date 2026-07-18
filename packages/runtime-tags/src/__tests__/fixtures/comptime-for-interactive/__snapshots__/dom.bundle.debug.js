// template.marko
const $template = "<section><h2>kitchen</h2><button> </button></section><section><h2>porch</h2><button> </button></section>";
const $walks = "Db D mDb D m";
const $on3 = /*@__PURE__*/ _let("$on/4", ($scope) => _text($scope["#text/1"], $scope.$on ? "off" : "on"));
const $on4 = /*@__PURE__*/ _let("$on2/5", ($scope) => _text($scope["#text/3"], $scope.$on2 ? "off" : "on"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$on3($scope, !$scope.$on);
	});
	_on($scope["#button/2"], "click", function() {
		$on4($scope, !$scope.$on2);
	});
});
function $setup($scope) {
	$on3($scope, false);
	$on4($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
