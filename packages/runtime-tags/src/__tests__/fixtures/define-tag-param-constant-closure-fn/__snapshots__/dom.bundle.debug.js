// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($D_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($D_content__walks, $walks$1);
const $if_content__f = /*@__PURE__*/ _closure_get("f/3", ($scope) => _text($scope["#text/0"], $scope._._.f()), ($scope) => $scope._._);
const $if_content__setup = $if_content__f;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $f2 = /*@__PURE__*/ _const("f");
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__on($scope["#childScope/0"], true);
	$setup$1($scope["#childScope/1"]);
	$f2($scope, $f);
}
function $f() {
	return "A";
}
_resumed["__tests__/template.marko_0/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
