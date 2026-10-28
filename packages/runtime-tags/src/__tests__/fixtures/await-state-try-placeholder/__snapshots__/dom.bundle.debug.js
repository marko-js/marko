// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $await_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_3_input_label#0:5/subscribe");
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get("n/8", ($scope) => $try_content__await_promise($scope, Promise.resolve($scope._._.n)), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:6/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__n($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $if_content__setup = $if_content__try;
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
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
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
