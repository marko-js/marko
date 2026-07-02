// template.marko
const $template = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
const $walks = " Db%l bD l";
const $multipliedCount = ($scope, multipliedCount) => _text($scope["#text/3"], multipliedCount);
const $count__OR__multiplier = /* @__PURE__ */ _or(6, ($scope) => $multipliedCount($scope, $scope.count * $scope.multiplier));
const $count = /* @__PURE__ */ _let("count/4", $count__OR__multiplier);
const $multiplier = /* @__PURE__ */ _let("multiplier/5", ($scope) => {
	_text($scope["#text/1"], $scope.multiplier);
	$count__OR__multiplier($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$multiplier($scope, $scope.multiplier + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$multiplier($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
