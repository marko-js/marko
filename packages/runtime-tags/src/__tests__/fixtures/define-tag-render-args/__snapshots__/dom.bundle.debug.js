// template.marko
const $MyTag_content__walks = "D%c%c%l";
const $MyTag_content__template = "<div><!>|<!>|<!></div>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template);
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<button> </button>`)($MyTag_content__template, $MyTag_content__template, $Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}& D l`)($MyTag_content__walks, $MyTag_content__walks, $Outer_content__walks);
const $Outer_content__v = ($scope, v) => $MyTag_content__a($scope["#childScope/0"], v);
const $Outer_content__setup = ($scope) => {
	$MyTag_content__b($scope["#childScope/0"]);
	$MyTag_content__$c($scope["#childScope/0"]);
};
const $Outer_content__$params = ($scope, $params3) => $Outer_content__v($scope, $params3[0]);
const $MyTag_content__a__OR__$c = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/2"], void 0 !== $scope.$c ? $scope.$c : $scope.a + 1));
const $MyTag_content__a = /*@__PURE__*/ _const("a", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$MyTag_content__a__OR__$c($scope);
});
const $MyTag_content__$c = /*@__PURE__*/ _const("$c", $MyTag_content__a__OR__$c);
const $MyTag_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $MyTag_content__$params = ($scope, $params2) => {
	$MyTag_content__a($scope, $params2[0]);
	$MyTag_content__b($scope, $params2[1]);
	$MyTag_content__$c($scope, $params2[2]);
};
const $x = /*@__PURE__*/ _let("x/5", ($scope) => {
	$MyTag_content__$c($scope["#childScope/0"], $scope.x);
	$MyTag_content__a($scope["#childScope/1"], $scope.x);
	$Outer_content__v($scope["#childScope/2"], $scope.x);
	_text($scope["#text/4"], $scope.x);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$MyTag_content__a($scope["#childScope/0"], 1);
	$MyTag_content__b($scope["#childScope/0"], "Hello");
	$MyTag_content__b($scope["#childScope/1"]);
	$MyTag_content__$c($scope["#childScope/1"]);
	$Outer_content__setup($scope["#childScope/2"]);
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
