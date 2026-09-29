// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_a = /*@__PURE__*/ _closure_get("input_a/7", ($scope) => $if_content__await_promise($scope, $scope._._.input_a), ($scope) => $scope._._, "__tests__/template.marko_2_input_a#0:4/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_a($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__input_show = /*@__PURE__*/ _closure_get("input_show/6", ($scope) => $try_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#0:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_show($scope);
	$try_content__input_label($scope);
};
const $try_content__input_label = /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe");
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><span> </span>", "b%bD ", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
	$input_label($scope, input.label);
};
const $input_show__closure = /*@__PURE__*/ _closure($try_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_a__closure = /*@__PURE__*/ _closure($if_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_label__closure = /*@__PURE__*/ _closure($try_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
