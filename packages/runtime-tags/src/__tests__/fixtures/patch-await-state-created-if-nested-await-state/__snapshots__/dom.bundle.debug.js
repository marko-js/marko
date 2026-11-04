// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<b> </b>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $await_content__q = _fill_let_resume("__tests__/template.marko_fill0", "q/4", ($scope) => $await_content__await_promise($scope, $scope.q));
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__q($scope, Promise.resolve("k"));
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__n = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_n#0:6/setup", "#text/2", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.n)));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$await_content($scope);
};
const $n = _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$if_content__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
