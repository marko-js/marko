// template.marko
const $template = "<ul></ul><button class=reorder>stable prefix, drop tail, swap</button><button class=front>reorder from front and shrink</button><button class=append>append</button>";
const $walks = " b b b b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", $for_content__setup);
const $rows = /*@__PURE__*/ _let("rows/4", ($scope) => $for($scope, [$scope.rows, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$rows($scope, [
			$scope.rows[0],
			$scope.rows[1],
			$scope.rows[3],
			$scope.rows[2]
		]);
	});
	_on($scope["#button/2"], "click", function() {
		$rows($scope, [$scope.rows[1], $scope.rows[0]]);
	});
	_on($scope["#button/3"], "click", function() {
		$rows($scope, [...$scope.rows, { id: 9 }]);
	});
});
function $setup($scope) {
	$rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 }
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
