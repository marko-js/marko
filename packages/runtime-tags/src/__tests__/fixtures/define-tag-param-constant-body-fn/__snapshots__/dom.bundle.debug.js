// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($D_content__walks);
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.f()));
const $if_content__setup = $if_content__f;
const $D_content__f = /*@__PURE__*/ _const("f");
const $D_content__setup = ($scope) => $D_content__f($scope, function() {
	return "A";
});
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$D_content__setup($scope["#childScope/0"]);
	$D_content__on($scope["#childScope/0"], true);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
