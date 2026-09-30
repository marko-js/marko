// template.marko
const $template = "<p> </p><button class=same-length></button><button class=toggle></button>";
const $walks = "D l b b";
const $list__OR__show = /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/0"], $scope.show ? $scope.list.join() : "none"));
const $list = /*@__PURE__*/ _let("list/3", ($scope) => {
	$list_length($scope, $scope.list?.length);
	$list__OR__show($scope);
});
const $show = /*@__PURE__*/ _const("show", $list__OR__show);
const $list_length__OR__flag = /*@__PURE__*/ _or(6, ($scope) => $show($scope, $scope.list_length > 1 || $scope.flag));
const $list_length = /*@__PURE__*/ _const("list_length", $list_length__OR__flag);
const $flag = /*@__PURE__*/ _let("flag/5", $list_length__OR__flag);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$list($scope, [...$scope.list]);
	});
	_on($scope["#button/2"], "click", function() {
		$flag($scope, !$scope.flag);
	});
});
function $setup($scope) {
	$list($scope, [1, 2]);
	$flag($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
