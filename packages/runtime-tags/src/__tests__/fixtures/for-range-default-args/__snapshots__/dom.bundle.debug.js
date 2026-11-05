// template.marko
const $template = "<button>more</button><div class=defaults></div><div class=from></div><div class=step></div><div class=by></div>";
const $walks = " b b b b b";
const $for_content4__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content3__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to_unkeyed("#div/1", " ", " ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_to_unkeyed("#div/2", " ", " ", $for_content2__setup);
const $for3 = /*@__PURE__*/ _for_until_unkeyed("#div/3", " ", " ", $for_content3__setup);
const $for4 = /*@__PURE__*/ _for_to("#div/4", " ", " ", $for_content4__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	$for($scope, [$scope.count]);
	$for2($scope, [$scope.count, 1]);
	$for3($scope, [
		$scope.count,
		0,
		2
	]);
	$for4($scope, [
		$scope.count,
		0,
		0,
		(n) => n
	]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 3);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
