// template.marko
const $template = "<div><!> <!> <!></div><button></button>";
const $walks = "D%c%c%l b";
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$more($scope, (([, , , ...more]) => more)($scope.list));
	$first($scope, $scope.list[0]);
	$third($scope, $scope.list[2]);
});
const $more = /*@__PURE__*/ _const("more", ($scope) => $more_length($scope, $scope.more.length));
const $more_length = /*@__PURE__*/ _const("more_length", ($scope) => _text($scope["#text/2"], $scope.more_length));
const $first = /*@__PURE__*/ _const("first", ($scope) => _text($scope["#text/0"], $scope.first));
const $third = /*@__PURE__*/ _const("third", ($scope) => _text($scope["#text/1"], $scope.third));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$list($scope, [
		4,
		5,
		6,
		7
	]);
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
