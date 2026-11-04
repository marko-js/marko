// template.marko
const $D_content__walks = "b%b D l";
const $D_content__template = "<!><!><button> </button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($D_content__walks);
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.f()));
const $if_content__setup = $if_content__f;
const $D_content__n = /*@__PURE__*/ _closure_get("n/2", ($scope) => _text($scope["#text/2"], $scope._.n), 0, "__tests__/template.marko_1_n#0:1/subscribe");
const $D_content__f = /*@__PURE__*/ _const("f");
const $D_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope._, +$scope._.n + 1);
}));
const $D_content__setup = ($scope) => {
	$D_content__n($scope);
	$D_content__setup__script($scope);
	$D_content__f($scope, function() {
		return "A";
	});
};
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $n__closure = /*@__PURE__*/ _closure($D_content__n);
const $n = _let("n/1", $n__closure);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$D_content__on($scope["#childScope/0"], true);
	$n($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
