// template.marko
const $template = "<button id=t>t</button><button id=i>i</button><ul id=c><!></ul>";
const $walks = " b b D%l";
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $show = /*@__PURE__*/ _show("#ul/2");
const $open = /*@__PURE__*/ _let("open/4", ($scope) => $show($scope, $scope.open));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<li> </li>", "D ", 0, $for_content__$params);
const $results = /*@__PURE__*/ _let("results/5", ($scope) => {
	$results_length($scope, $scope.results?.length);
	$for($scope, [$scope.results]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$open($scope, !$scope.open);
	});
	_on($scope["#button/1"], "click", function() {
		$results($scope, $scope.results_length > 1 ? ["c"] : ["d", "e"]);
	});
});
function $setup($scope) {
	$open($scope, false);
	$results($scope, ["a", "b"]);
	$setup__script($scope);
}
const $results_length = /*@__PURE__*/ _const("results_length");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
