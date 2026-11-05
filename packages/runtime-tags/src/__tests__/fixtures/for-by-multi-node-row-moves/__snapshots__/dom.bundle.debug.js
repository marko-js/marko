// template.marko
const $template = "<dl></dl><button class=reverse>reverse</button><button class=swap>swap middle</button><button class=mixed>add and move</button>";
const $walks = " b b b b";
const $for_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope["#LoopKey"]);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#dl/0", "<dt> </dt><dd> </dd>", "D lD ", $for_content__setup);
const $rows = /*@__PURE__*/ _let("rows/4", ($scope) => {
	$rows_($scope, $scope.rows?.[0]);
	$rows_2($scope, $scope.rows?.[2]);
	$rows_3($scope, $scope.rows?.[1]);
	$rows_4($scope, $scope.rows?.[3]);
	$for($scope, [$scope.rows, "id"]);
});
const $rows_ = /*@__PURE__*/ _const("rows_0");
const $rows_2 = /*@__PURE__*/ _const("rows_2");
const $rows_3 = /*@__PURE__*/ _const("rows_1");
const $rows_4 = /*@__PURE__*/ _const("rows_3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$rows($scope, [...$scope.rows].reverse());
	});
	_on($scope["#button/2"], "click", function() {
		$rows($scope, [
			$scope.rows_0,
			$scope.rows_2,
			$scope.rows_1,
			$scope.rows_3
		]);
	});
	_on($scope["#button/3"], "click", function() {
		$rows($scope, [
			{ id: 9 },
			...$scope.rows.slice(2),
			...$scope.rows.slice(0, 2)
		]);
	});
});
function $setup($scope) {
	$rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 }
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
