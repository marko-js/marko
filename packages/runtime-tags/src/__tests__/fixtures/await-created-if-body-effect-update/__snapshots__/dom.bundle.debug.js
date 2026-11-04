// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $if_content2__n = /*@__PURE__*/ _closure_get("n/8", ($scope) => _text($scope["#text/1"], $scope._._._.n), ($scope) => $scope._._._, "__tests__/template.marko_3_n#0:6/subscribe");
const $if_content2__setup = ($scope) => {
	$if_content2__n($scope);
	$if_content2__x._($scope);
};
const $if_content2__x = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.x));
const $await_content__if = /*@__PURE__*/ _if("#text/1", "<em><!>:<!></em>", "D%c%", $if_content2__setup);
const $await_content__n = /*@__PURE__*/ _closure_get("n/8", ($scope) => $await_content__if($scope, $scope._._.n % 2 ? 0 : 1), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:6/subscribe");
const $await_content__setup = $await_content__n;
const $await_content__x__script = _script("__tests__/template.marko_2_x#3", ($scope) => console.log("await", $scope.x));
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$if_content2__x($scope);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($await_content__n, $if_content2__n);
const $n = /*@__PURE__*/ _let("n/6", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
