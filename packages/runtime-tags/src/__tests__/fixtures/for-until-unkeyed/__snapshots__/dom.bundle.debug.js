// template.marko
const $template = "<button class=more>more</button><button class=none>none</button><ul></ul><!><!>";
const $walks = " b b b%c";
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li> </li>", "D ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_until("#text/3", "<span> </span>", "D ", $for_content2__setup);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	$for($scope, [
		$scope.count,
		0,
		1
	]);
	$for2($scope, [
		$scope.count,
		1,
		1
	]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$count($scope, 0);
	});
});
function $setup($scope) {
	$count($scope, 2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
