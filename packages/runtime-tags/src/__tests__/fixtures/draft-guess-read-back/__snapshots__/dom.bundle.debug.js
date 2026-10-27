// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $act2__script = _script("__tests__/template.marko_0_act#7", ($scope) => _on($scope["#button/0"], "click", $scope.act));
const $act2 = _action("act/7", "__tests__/template.marko_0_act#7/action", $act2__script);
const $d = /*@__PURE__*/ _draft("d/4", ($scope) => {
	_text($scope["#text/1"], $scope.d);
	$act2($scope, $act($scope));
});
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $d($scope, $scope.n));
const $seen = /*@__PURE__*/ _let("seen/6", ($scope) => _text($scope["#text/2"], $scope.seen));
function $setup($scope) {
	$n($scope, 1);
	$seen($scope, "");
}
const $act = ($scope) => function() {
	$d($scope, 5);
	$d($scope, 6);
	$seen($scope, $scope.d);
};
_resumed["__tests__/template.marko_0/act"] = $act;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
