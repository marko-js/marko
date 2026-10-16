// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _closure_get("input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_4_input_error#0:4/subscribe");
const $try_content__setup = $try_content__input_error;
const $else_content__input_label = _closure_resume("__tests__/template.marko_3_input_label#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 1));
const $else_content__setup = $else_content__input_label;
const $if_content__input_label = _closure_resume("__tests__/template.marko_2_input_label#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $if_content__setup = $if_content__input_label;
const $catch_content__if = /*@__PURE__*/ _if("#text/0", "<b> </b>", "D ", $if_content__setup, "<i> </i>", "D ", $else_content__setup);
const $catch_content__err_status = ($scope, err_status) => $catch_content__if($scope, err_status === 404 ? 0 : 1);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_status($scope, $params2[0]?.status);
const $catch_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", 0, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label, $else_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
