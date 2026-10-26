// template.marko
const $template = "<button> </button><!><!><!>";
const $walks = " D l%b%c";
const $catch_content = _content("__tests__/template.marko_8*content", "<em>inner failed</em>");
const $placeholder_content2 = _content("__tests__/template.marko_7*content", "<em>inner loading</em>");
const $placeholder_content = _content("__tests__/template.marko_6*content", "<em>outer loading</em>");
const $await_content3__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_input_msg#0:7/init", /*@__PURE__*/ _closure_get("input_msg/12", ($scope) => _text($scope["#text/0"], $scope._.input_msg), 0, "__tests__/template.marko_5_input_msg#0:7/subscribe"));
const $await_content3__setup = $await_content3__input_msg;
const $await_content3__c = ($scope, c) => _text($scope["#text/1"], c);
const $await_content3__$params = ($scope, $params4) => $await_content3__c($scope, $params4[0]);
const $await_content2__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_msg#0:7/init", /*@__PURE__*/ _closure_get("input_msg/12", ($scope) => _text($scope["#text/0"], $scope._._._._.input_msg), ($scope) => $scope._._._._, "__tests__/template.marko_4_input_msg#0:7/subscribe"));
const $await_content2__setup = $await_content2__input_msg;
const $await_content2__b = ($scope, b) => _text($scope["#text/1"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<div id=inner><!> <!></div>", "D%c%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_inner = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_inner#0:8/init", /*@__PURE__*/ _closure_get("input_inner/13", ($scope) => $try_content2__await_promise($scope, $scope._._._.input_inner), ($scope) => $scope._._._, "__tests__/template.marko_3_input_inner#0:8/subscribe"));
const $try_content2__setup = ($scope) => {
	$try_content2__input_inner($scope);
	$await_content2($scope);
};
const $await_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_msg#0:7/init", /*@__PURE__*/ _closure_get("input_msg/12", ($scope) => _text($scope["#text/0"], $scope._._.input_msg), ($scope) => $scope._._, "__tests__/template.marko_2_input_msg#0:7/subscribe"));
const $await_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2, $catch_content);
const $await_content__setup = ($scope) => {
	$await_content__input_msg($scope);
	$await_content__try($scope);
};
const $await_content__a = ($scope, a) => _text($scope["#text/1"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=outer><!> <!></div><!><!>", "D%c%l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_outer = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_outer#0:6/init", /*@__PURE__*/ _closure_get("input_outer/11", ($scope) => $try_content__await_promise($scope, $scope._.input_outer), 0, "__tests__/template.marko_1_input_outer#0:6/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_outer($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _let("count/10", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content3($scope);
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $await_content3 = /*@__PURE__*/ _await_content("#text/3", "<span id=last><!> <!></span>", "D%c%", $await_content3__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content3__$params);
const $input_last = $await_promise;
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_last($scope, input.last);
	$input_msg($scope, input.msg);
	$input_inner($scope, input.inner);
};
const $input_outer__closure = /*@__PURE__*/ _closure($try_content__input_outer);
const $input_outer = /*@__PURE__*/ _const("input_outer", $input_outer__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($await_content__input_msg, $await_content2__input_msg, $await_content3__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_msg", $input_msg__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($try_content2__input_inner);
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
