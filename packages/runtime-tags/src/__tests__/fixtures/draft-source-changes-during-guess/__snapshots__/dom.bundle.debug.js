// template.marko
const $template = "<button> </button><button>source</button>";
const $walks = " D l b";
const $d = /*@__PURE__*/ _draft("d/4", ($scope) => _text($scope["#text/1"], $scope.d));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $d($scope, $scope.n));
const $hold2__script = _script("__tests__/template.marko_0_hold#6", ($scope) => _on($scope["#button/0"], "click", $scope.hold));
const $hold2 = _action("hold/6", "__tests__/template.marko_0_hold#6/action", $hold2__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$hold2($scope, $hold($scope));
	$setup__script($scope);
}
const $hold = ($scope) => async () => {
	$d($scope, 5);
	await resolveAfter(0);
};
_resumed["__tests__/template.marko_0/hold"] = $hold;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
