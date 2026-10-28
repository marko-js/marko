// tags/card.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/0"], input_user_name);
const $input$1 = ($scope, input) => $input_user$1($scope, input.user);
const $input_user$1 = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)("D l");
const $setup = ($_) => {};
const $inputtag_content__input_user3_name = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_user3_name#0:12/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill3", "input_user3_name", /*@__PURE__*/ _closure_get("input_user3_name/14", ($scope) => _text($scope["#text/0"], $scope._.input_user3_name), 0, "__tests__/template.marko_2_input_user3_name#0:12/subscribe"), 0));
const $inputtag_content__setup = $inputtag_content__input_user3_name;
const $inputtag_content = _content("__tests__/template.marko_2*content", " ", " ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $if_content__input_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_user#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_user", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_user$1($scope["#childScope/0"], $scope._.input_user))));
const $if_content__setup = $if_content__input_user;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_user2 = ($scope, input_user2) => $input_user$1($scope["#childScope/1"], input_user2);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputtag_content);
const $input_tag__OR__input_cls = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_cls", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_tag", /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_tag, ($_) => ({ class: $scope.input_cls })))));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_cls);
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_tag__OR__input_cls);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_user($scope, input.user);
	$input_user2($scope, input.user2);
	$input_tag($scope, input.tag);
	$input_cls($scope, input.cls);
	$input_user3($scope, input.user3);
};
const $input_user = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_user", $if_content__input_user);
const $input_user3 = ($scope, input_user3) => $input_user3_name($scope, input_user3?.name);
const $input_user3_name__closure = /*@__PURE__*/ _closure($inputtag_content__input_user3_name);
const $input_user3_name = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "input_user3_name", $input_user3_name__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
