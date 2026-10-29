// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $await_content2__s = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_s#2:2/init", /*@__PURE__*/ _closure_get("s/9", ($scope) => _text($scope["#text/0"], $scope._.s), 0, "__tests__/template.marko_3_s#2:2/subscribe"));
const $await_content2__setup = $await_content2__s;
const $await_content2__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content2__setup);
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $await_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_n#0:6/init", /*@__PURE__*/ _closure_get("n/8", ($scope) => $await_content__await_promise($scope, Promise.resolve($scope._._.n)), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:6/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__n($scope);
	$await_content2($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__s($scope, $params2[0]);
const $await_content__s__closure = /*@__PURE__*/ _closure($await_content2__s);
const $await_content__s = /*@__PURE__*/ _const("s", $await_content__s__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.input_label)))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = _let("n/6", $n__closure);
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
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
