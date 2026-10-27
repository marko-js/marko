// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $d = /*@__PURE__*/ _draft("d/3", ($scope) => _text($scope["#text/1"], $scope.d));
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $d($scope, $scope.n));
const $outer2__script = _script("__tests__/template.marko_0_outer#7", ($scope) => _on($scope["#button/0"], "click", $scope.outer));
const $outer2 = _action("outer/7", "__tests__/template.marko_0_outer#7/action", $outer2__script);
const $set2 = _action("set/5", "__tests__/template.marko_0_set#5/action", ($scope) => $outer2($scope, $outer($scope)));
function $setup($scope) {
	$n($scope, 1);
	$set2($scope, $set($scope));
}
const $outer = ($scope) => async () => {
	await resolveAfter(0, 1);
	$scope.set();
};
const $set = ($scope) => async () => {
	$d($scope, 9);
	await resolveAfter(0, 2);
};
_resumed["__tests__/template.marko_0/outer"] = $outer;
_resumed["__tests__/template.marko_0/set"] = $set;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
