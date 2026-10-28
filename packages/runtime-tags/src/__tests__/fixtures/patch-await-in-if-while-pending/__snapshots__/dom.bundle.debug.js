// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "<em>loading</em>");
const $await_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_msg#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_msg", /*@__PURE__*/ _closure_get("input_msg/11", ($scope) => _text($scope["#text/0"], $scope._._._.input_msg), ($scope) => $scope._._._, "__tests__/template.marko_3_input_msg#0:7/subscribe"), 0));
const $await_content__setup = $await_content__input_msg;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=done><!> done</div>", "D%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $if_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_promise#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_promise", /*@__PURE__*/ _closure_get("input_promise/10", ($scope) => $if_content__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/template.marko_2_input_promise#0:6/subscribe"), 0));
const $if_content__setup = ($scope) => {
	$if_content__input_promise($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:5/init", /*@__PURE__*/ _closure_get("input_show/9", ($scope) => $try_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#0:5/subscribe"));
const $try_content__setup = $try_content__input_show;
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<section></section>", " ", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
	$input_msg($scope, input.msg);
};
const $input_show__closure = /*@__PURE__*/ _closure($try_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($if_content__input_promise);
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $input_promise__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($await_content__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
