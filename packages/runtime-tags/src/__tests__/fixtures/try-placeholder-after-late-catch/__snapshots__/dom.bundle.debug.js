// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $await_content4__d = ($scope, d) => _text($scope["#text/0"], d);
const $await_content4__$params = ($scope, $params6) => $await_content4__d($scope, $params6[0]);
const $placeholder_content = _content("__tests__/template.marko_7*content", "<i>loading</i>");
const $await_content3__c = ($scope, c) => _text($scope["#text/0"], c);
const $await_content3__$params = ($scope, $params5) => $await_content3__c($scope, $params5[0]);
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "<em> </em>", "D ", 0, $catch_content__$params);
const $await_content4 = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content4__$params);
const $try_content2__input_d = /*@__PURE__*/ _closure_get("input_d/10", ($scope) => $try_content2__await_promise($scope, $scope._._.input_d), ($scope) => $scope._._, "__tests__/template.marko_3_input_d#0:7/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__input_d($scope);
	$await_content4($scope);
};
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $await_content__input_c = /*@__PURE__*/ _closure_get("input_c/9", ($scope) => $await_content__await_promise($scope, $scope._.input_c), 0, "__tests__/template.marko_2_input_c#0:6/subscribe");
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $await_content__setup = ($scope) => {
	$await_content__input_c($scope);
	$await_content3($scope);
	$await_content__try($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a/8", ($scope) => $try_content__await_promise($scope, $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content2($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$await_content($scope);
	$try($scope);
}
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!><!>", "b%b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $input_x = $await_promise;
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
	$input_c($scope, input.c);
	$input_d($scope, input.d);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_c__closure = /*@__PURE__*/ _closure($await_content__input_c);
const $input_c = /*@__PURE__*/ _const("input_c", $input_c__closure);
const $input_d__closure = /*@__PURE__*/ _closure($try_content2__input_d);
const $input_d = /*@__PURE__*/ _const("input_d", $input_d__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
