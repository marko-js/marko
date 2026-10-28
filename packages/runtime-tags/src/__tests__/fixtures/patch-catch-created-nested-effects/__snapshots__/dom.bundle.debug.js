// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_fail__OR__input_msg = /*@__PURE__*/ _or_resume("__tests__/template.marko_5_input_fail#0:6_input_msg#0:7/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg));
const $try_content__input_fail = /*@__PURE__*/ _closure_get("input_fail/11", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_5_input_fail#0:6/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_msg($scope);
};
const $try_content__input_msg = /*@__PURE__*/ _closure_get("input_msg/12", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_5_input_msg#0:7/subscribe");
const $wrap_content__input_v__script = _script("__tests__/template.marko_4_input_v#0:3", ($scope) => console.log("content", $scope._._.input_v));
const $wrap_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_v#0:3/init", _closure_resume("__tests__/template.marko_4_input_v#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_v", /*@__PURE__*/ _closure_get("input_v/8", $wrap_content__input_v__script, ($scope) => $scope._._), 3)));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_v($scope);
	$wrap_content__w($scope);
};
const $wrap_content__w = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_w#1:7/init", /*@__PURE__*/ _closure_get("w/13", ($scope) => _text($scope["#text/0"], $scope._.w), 0, "__tests__/template.marko_4_w#1:7/subscribe"));
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<s> </s>", "D ", $wrap_content__setup);
const $for_content__input_v__OR__x__script = _script("__tests__/template.marko_3_input_v#0:3_x#2", ($scope) => console.log("for", $scope.x, $scope._._.input_v));
const $for_content__input_v__OR__x = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0/unpatched | __tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _or_resume("__tests__/template.marko_3_input_v#0:3_x#2/init", 3, $for_content__input_v__OR__x__script), "input_v/8", 2);
const $for_content__input_v = _closure_resume("__tests__/template.marko_3_input_v#0:3/subscribe", /*@__PURE__*/ _closure_index(2, /*@__PURE__*/ _closure_get("input_v/8", $for_content__input_v__OR__x, ($scope) => $scope._._)));
const $for_content__setup = $for_content__input_v;
const $for_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$for_content__input_v__OR__x($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $if_content__input_v__script = _script("__tests__/template.marko_2_input_v#0:3", ($scope) => console.log("if", $scope._._.input_v));
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_v#0:3/init", _closure_resume("__tests__/template.marko_2_input_v#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_v", /*@__PURE__*/ _closure_get("input_v/8", $if_content__input_v__script, ($scope) => $scope._._), 1)));
const $if_content__setup = ($scope) => {
	$if_content__input_v($scope);
	$if_content__w._($scope);
};
const $if_content__w = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_w#1:7/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.w)));
const $catch_content__w__closure = /*@__PURE__*/ _closure($wrap_content__w);
const $catch_content__w = /*@__PURE__*/ _const("w", ($scope) => {
	$catch_content__w__closure($scope);
	$if_content__w($scope);
});
const $catch_content__input_v__script = _script("__tests__/template.marko_1_input_v#0:3", ($scope) => console.log("catch", $scope._.input_v));
const $catch_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:3/init", _closure_resume("__tests__/template.marko_1_input_v#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_v", /*@__PURE__*/ _closure_get("input_v/8", ($scope) => {
	$catch_content__w($scope, $scope._.input_v * 10);
	$catch_content__input_v__script($scope);
}), 0)));
const $catch_content__setup = ($scope) => {
	$catch_content__input_v($scope);
	$catch_content__input_show($scope);
	$catch_content__input_items($scope);
	$input_content_direct($scope["#childScope/3"], $wrap_content($scope));
};
const $catch_content__if = /*@__PURE__*/ _if("#text/1", "<i> </i>", "D ", $if_content__setup);
const $catch_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:4/init", _closure_resume("__tests__/template.marko_1_input_show#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_show", /*@__PURE__*/ _closure_get("input_show/9", ($scope) => $catch_content__if($scope, $scope._.input_show ? 0 : 1)), 0)));
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<u> </u>", "D ", $for_content__setup, $for_content__$params);
const $catch_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:5/init", _closure_resume("__tests__/template.marko_1_input_items#0:5/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "input_items", /*@__PURE__*/ _closure_get("input_items/10", ($scope) => $catch_content__for($scope, [$scope._.input_items])), 0)));
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<b> </b><!><!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `D l%b%b/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
	$input_items($scope, input.items);
	$input_fail($scope, input.fail);
	$input_msg($scope, input.msg);
};
const $input_v__closure = /*@__PURE__*/ _closure($catch_content__input_v, $if_content__input_v, $for_content__input_v, $wrap_content__input_v);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $input_v__closure, /*@__PURE__*/ _fill_mark("input_v", $input_v__closure));
const $input_show__closure = /*@__PURE__*/ _closure($catch_content__input_show);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_show", $input_show__closure);
const $input_items__closure = /*@__PURE__*/ _closure($catch_content__input_items);
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_items", $input_items__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
