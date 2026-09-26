// template.marko
const $template = "<table></table><button class=count> </button><button class=clear>clear</button>";
const $walks = " b D l b";
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#table/0", "<div> </div>", "D ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/4", ($scope) => $for($scope, [$scope.list]));
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$list($scope, []);
	});
});
function $setup($scope) {
	$list($scope, [1, 2]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
