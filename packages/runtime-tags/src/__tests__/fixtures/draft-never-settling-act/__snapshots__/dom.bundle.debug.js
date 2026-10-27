// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $stuck = /*@__PURE__*/ _draft("stuck/4", ($scope) => _text($scope["#text/1"], $scope.stuck));
const $quick = /*@__PURE__*/ _draft("quick/6", ($scope) => _text($scope["#text/2"], $scope.quick));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	$stuck($scope, $scope.n);
	$quick($scope, $scope.n);
});
const $hang2 = _action("hang/8", "__tests__/template.marko_0_hang#8/action");
const $brief2 = _action("brief/10", "__tests__/template.marko_0_brief#10/action");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.hang();
	$scope.brief();
}));
function $setup($scope) {
	$n($scope, 1);
	$hang2($scope, $hang($scope));
	$brief2($scope, $brief($scope));
	$setup__script($scope);
}
const $hang = ($scope) => async () => {
	$stuck($scope, "stuck");
	await new Promise(() => {});
};
const $brief = ($scope) => async () => {
	$quick($scope, "quick");
	await new Promise((resolve) => setTimeout(resolve, 50));
};
_resumed["__tests__/template.marko_0/hang"] = $hang;
_resumed["__tests__/template.marko_0/brief"] = $brief;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
