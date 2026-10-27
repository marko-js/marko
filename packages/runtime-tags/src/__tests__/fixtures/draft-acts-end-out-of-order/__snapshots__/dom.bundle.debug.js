// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $d = /*@__PURE__*/ _draft("d/3", ($scope) => _text($scope["#text/1"], $scope.d));
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $d($scope, $scope.n));
const $slow2 = _action("slow/5", "__tests__/template.marko_0_slow#5/action");
const $fast2 = _action("fast/7", "__tests__/template.marko_0_fast#7/action");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.slow();
	$scope.fast();
}));
function $setup($scope) {
	$n($scope, 1);
	$slow2($scope, $slow($scope));
	$fast2($scope, $fast($scope));
	$setup__script($scope);
}
const $slow = ($scope) => async () => {
	$d($scope, "slow");
	await resolveAfter(0, 2);
};
const $fast = ($scope) => async () => {
	$d($scope, "fast");
	await resolveAfter(0, 1);
};
_resumed["__tests__/template.marko_0/slow"] = $slow;
_resumed["__tests__/template.marko_0/fast"] = $fast;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
