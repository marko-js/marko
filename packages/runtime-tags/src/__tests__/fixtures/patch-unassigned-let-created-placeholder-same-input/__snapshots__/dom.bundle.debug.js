// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__r = ($scope, r) => _text($scope["#text/0"], r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $placeholder_content__x = /*@__PURE__*/ _closure_get("x/9", ($scope) => _text($scope["#text/0"], $scope._.x));
const $placeholder_content__setup = $placeholder_content__x;
const $placeholder_content = _content("__tests__/template.marko_3*content", "<i> </i>", "D ", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_p = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_p#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_p", /*@__PURE__*/ _closure_get("input_p/8", ($scope) => $if_content__await_promise($scope, $scope._._.input_p), ($scope) => $scope._._, "__tests__/template.marko_2_input_p#0:5/subscribe"), 0));
const $if_content__setup = ($scope) => {
	$if_content__input_p($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:4/init", /*@__PURE__*/ _closure_get("input_show/7", ($scope) => $try_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#0:4/subscribe"));
const $try_content__setup = $try_content__input_show;
const $x__closure = /*@__PURE__*/ _closure($placeholder_content__x);
const $x = /*@__PURE__*/ _let("x/6", $x__closure);
const $input_v = $x;
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
	$input_p($scope, input.p);
};
const $input_show__closure = /*@__PURE__*/ _closure($try_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_p__closure = /*@__PURE__*/ _closure($if_content__input_p);
const $input_p = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_p", $input_p__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
