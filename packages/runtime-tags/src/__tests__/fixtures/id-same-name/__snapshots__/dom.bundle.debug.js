// template.marko
const $template = "<button> </button><div><input><label> </label></div><div><input></div><!><!>";
const $walks = " D lD b D mD l%c";
const $for_content__y = ($scope, y) => _attr($scope["#input/0"], "id", y);
const $for_content__setup = ($scope) => $for_content__y($scope, _id($scope));
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_text($scope["#text/4"], $scope.n);
});
const $x2 = ($scope, x) => {
	_attr($scope["#input/2"], "id", x);
	_attr($scope["#label/3"], "for", x);
};
const $x3 = ($scope, $x) => _attr($scope["#input/5"], "id", $x);
const $for = /*@__PURE__*/ _for_of("#text/6", "<input>", " ", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$x2($scope, _id($scope));
	$x3($scope, _id($scope));
	$for($scope, [[{ k: "a b" }, { k: "a]" }], "k"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
