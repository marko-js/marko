// template.marko
const $template = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
const $walks = " Db%l bD l";
const $multipliedCount = ($scope, multipliedCount) => _text($scope["#text/3"], multipliedCount);
const $count__OR__multiplier = /*@__PURE__*/ _or(6, ($scope) => $multipliedCount($scope, ("count" in $scope ? "count" in $scope ? $scope.count : 0 : 0) * ("multiplier" in $scope ? "multiplier" in $scope ? $scope.multiplier : 1 : 1)));
const $count = /*@__PURE__*/ _let("count/4", $count__OR__multiplier);
const $multiplier = /*@__PURE__*/ _let("multiplier/5", ($scope) => {
	_text($scope["#text/1"], $scope.multiplier);
	$count__OR__multiplier($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$multiplier($scope, ("multiplier" in $scope ? $scope.multiplier : 1) + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, ("count" in $scope ? $scope.count : 0) + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$multiplier($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
