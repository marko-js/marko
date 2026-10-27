// template.marko
const $template = "<button>plain</button><button>after await</button><div> </div>";
const $walks = " b bD l";
const $d = /*@__PURE__*/ _draft("d/4", ($scope) => _text($scope["#text/2"], $scope.d));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $d($scope, $scope.n));
const $act2__script = _script("__tests__/template.marko_0_act#6", ($scope) => _on($scope["#button/1"], "click", $scope.act));
const $act2 = _action("act/6", "__tests__/template.marko_0_act#6/action", $act2__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$d($scope, 5);
}));
function $setup($scope) {
	$n($scope, 1);
	$act2($scope, $act($scope));
	$setup__script($scope);
}
const $act = ($scope) => async () => {
	await 0;
	$d($scope, 7);
};
_resumed["__tests__/template.marko_0/act"] = $act;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
