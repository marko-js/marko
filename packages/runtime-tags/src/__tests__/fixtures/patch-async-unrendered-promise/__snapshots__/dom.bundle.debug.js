// tags/card.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/0"], input_user_name);
const $input$1 = ($scope, input) => $input_user$1($scope, input.user);
const $input_user$1 = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!><!><p>end</p>";
const $walks = " D l%b%b%c";
const $await_content3__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $await_content3__$params = ($scope, $params5) => $await_content3__user_name($scope, $params5[0]?.name);
const $await_content2__user = ($scope, user) => $input_user$1($scope["#childScope/0"], user);
const $await_content2__$params = ($scope, $params4) => $await_content2__user($scope, $params4[0]);
const $catch_content = _content("__tests__/template.marko_6*content", "<b>failed</b>");
const $await_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $await_content__$params = ($scope, $params2) => $await_content__user_name($scope, $params2[0]?.name);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $inputtag_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $inputtag_content__input_boxed = /*@__PURE__*/ _closure_get("input_boxed/15", ($scope) => $inputtag_content__await_promise($scope, $scope._.input_boxed), 0, "__tests__/template.marko_4_input_boxed#0:11/subscribe");
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_boxed($scope);
	$await_content3($scope);
};
const $inputtag_content = _content("__tests__/template.marko_4*content", "<!><!><!>", "b%", $inputtag_content__setup);
_content_resume($inputtag_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"));
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__input_card = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_card", /*@__PURE__*/ _closure_get("input_card/14", ($scope) => $try_content__await_promise($scope, $scope._._.input_card), ($scope) => $scope._._, "__tests__/template.marko_3_input_card#0:9/subscribe"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_card($scope);
	$await_content2($scope);
};
const $if_content2__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $if_content2__setup = ($scope) => $if_content2__try($scope);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_user = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_user", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_user)));
const $if_content__setup = ($scope) => {
	$if_content__input_user._($scope);
	$await_content($scope);
};
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/12", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%", $if_content2__setup);
const $input_show = ($scope, input_show) => {
	$if($scope, input_show ? 0 : 1);
	$if2($scope, input_show ? 0 : 1);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4", $inputtag_content);
const $input_tag = ($scope, input_tag) => $dynamicTag($scope, input_tag, () => ({ class: "box" }));
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_boxed($scope, input.boxed);
	$input_show($scope, input.show);
	$input_user($scope, input.user);
	$input_card($scope, input.card);
};
const $input_user = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_user", $if_content__input_user);
const $input_card__closure = /*@__PURE__*/ _closure($try_content__input_card);
const $input_card = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_card", $input_card__closure);
const $input_boxed__closure = /*@__PURE__*/ _closure($inputtag_content__input_boxed);
const $input_boxed = /*@__PURE__*/ _const("input_boxed", $input_boxed__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
