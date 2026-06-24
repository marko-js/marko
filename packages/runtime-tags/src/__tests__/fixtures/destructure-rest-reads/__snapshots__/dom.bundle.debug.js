// template.marko
const $template = "<div><!>|<!>|<!>|<!></div><button>update</button>";
const $walks = "D%c%c%c%l b";
const $list = /*@__PURE__*/ _let("list/5", ($scope) => {
	(([, ...rest]) => $rest($scope, rest))($scope.list);
	$first($scope, $scope.list[0]);
	$list_($scope, $scope.list[1]);
	$list_2($scope, $scope.list[2]);
});
const $rest = /*@__PURE__*/ _const("rest", ($scope) => $rest_length($scope, $scope.rest.length));
const $rest_length = /*@__PURE__*/ _const("rest_length", ($scope) => _text($scope["#text/3"], $scope.rest_length));
const $first = /*@__PURE__*/ _const("first", ($scope) => _text($scope["#text/0"], $scope.first));
const $list_ = /*@__PURE__*/ _const("list_1", ($scope) => _text($scope["#text/1"], $scope.list_1));
const $list_2 = /*@__PURE__*/ _const("list_2", ($scope) => _text($scope["#text/2"], $scope.list_2));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$list($scope, [4, 5]);
}));
function $setup($scope) {
	$list($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
