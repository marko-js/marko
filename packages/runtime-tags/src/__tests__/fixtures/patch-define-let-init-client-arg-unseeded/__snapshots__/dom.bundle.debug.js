// template.marko
const $D_content__walks = " D l";
const $D_content__template = "<button> </button>";
const $template = $D_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($D_content__walks);
const $D_content__x = _let("x/5", ($scope) => _text($scope["#text/1"], $scope.x));
const $D_content__v = $D_content__x;
const $D_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$D_content__x($scope, +$scope.x + 1);
}));
const $D_content__setup = $D_content__setup__script;
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__v($scope, $temp.v);
const $n = _let("n/1", ($scope) => $D_content__v($scope["#childScope/0"], $scope.n));
function $setup($scope) {
	$D_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
