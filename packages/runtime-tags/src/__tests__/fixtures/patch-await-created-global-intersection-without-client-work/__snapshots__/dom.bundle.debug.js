// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $global_f_key = /*@__PURE__*/ _global_key("f");
const $await_content__$global_f = /*@__PURE__*/ _global_closure($global_f_key, "__tests__/template.marko_2_$global_f#0:10/subscribe");
const $await_content__$global_f__OR__x = /*@__PURE__*/ _global_or(($scope) => _text($scope["#text/0"], $scope.x + ":" + _global_read($scope.$global, "f")), $await_content__$global_f);
const $await_content__x = /*@__PURE__*/ _const("x", $await_content__$global_f__OR__x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_p = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_p#0:4/setup", "#text/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_p));
const $if_content__setup = ($scope) => {
	$if_content__input_p._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_p($scope, input.p);
};
const $input_p = /*@__PURE__*/ _const("input_p", $if_content__input_p);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
