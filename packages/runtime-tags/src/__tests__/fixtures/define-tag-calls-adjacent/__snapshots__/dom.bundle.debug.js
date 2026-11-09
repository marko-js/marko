// template.marko
const $D_content__walks = "%b";
const $D_content__template = "<!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button>inc</button>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)($D_content__walks, $D_content__walks);
const $D_content__n = /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:3/subscribe");
const $D_content__setup = $D_content__n;
const $n__closure = /*@__PURE__*/ _closure($D_content__n);
const $n = /*@__PURE__*/ _let("n/3", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$scope["#childScope/1"]._ = $scope;
	$D_content__setup($scope["#childScope/1"]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
