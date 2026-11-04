// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $placeholder_content3 = _content_resume("__tests__/template.marko_9*content", "<em>inner loading</em>");
const $placeholder_content2 = _content_resume("__tests__/template.marko_8*content", "<em>middle loading</em>");
const $placeholder_content = _content_resume("__tests__/template.marko_7*content", "<em>outer loading</em>");
const $await_content3__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_6_input_msg#0:6/subscribe", "input_msg/11", ($scope) => _text($scope["#text/0"], $scope._._._._._._.input_msg), ($scope) => $scope._._._._._._);
const $await_content3__setup = $await_content3__input_msg;
const $await_content3__$params = ($scope, $params4) => _text($scope["#text/1"], $params4[0]);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", "<div id=inner><!> <!></div>", "D%c%", $await_content3__setup);
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $try_content3__input_inner = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_input_inner#0:8/subscribe", "input_inner/13", ($scope) => $try_content3__await_promise($scope, $scope._._._._._.input_inner), ($scope) => $scope._._._._._);
const $try_content3__setup = ($scope) => {
	$try_content3__input_inner($scope);
	$await_content3($scope);
};
const $await_content2__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_msg#0:6/subscribe", "input_msg/11", ($scope) => _text($scope["#text/0"], $scope._._._._.input_msg), ($scope) => $scope._._._._);
const $await_content2__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content3);
const $await_content2__setup = ($scope) => {
	$await_content2__input_msg($scope);
	$await_content2__try($scope);
};
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/1"], $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<div id=middle><!> <!></div><!><!>", "D%c%l%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_middle = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_middle#0:7/subscribe", "input_middle/12", ($scope) => $try_content2__await_promise($scope, $scope._._._.input_middle), ($scope) => $scope._._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_middle($scope);
	$await_content2($scope);
};
const $await_content__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_msg#0:6/subscribe", "input_msg/11", ($scope) => _text($scope["#text/0"], $scope._._.input_msg), ($scope) => $scope._._);
const $await_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => {
	$await_content__input_msg($scope);
	$await_content__try($scope);
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=outer><!> <!></div><!><!>", "D%c%l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_outer = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_outer#0:5/subscribe", "input_outer/10", ($scope) => $try_content__await_promise($scope, $scope._.input_outer));
const $try_content__setup = ($scope) => {
	$try_content__input_outer($scope);
	$await_content($scope);
};
const $count = _let("count/9", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_msg($scope, input.msg);
	$input_middle($scope, input.middle);
	$input_inner($scope, input.inner);
};
const $input_outer__closure = /*@__PURE__*/ _closure($try_content__input_outer);
const $input_outer = /*@__PURE__*/ _const("input_outer", $input_outer__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($await_content__input_msg, $await_content2__input_msg, $await_content3__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
const $input_middle__closure = /*@__PURE__*/ _closure($try_content2__input_middle);
const $input_middle = /*@__PURE__*/ _const("input_middle", $input_middle__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($try_content3__input_inner);
const $input_inner = /*@__PURE__*/ _const("input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
