// tags/huge-label.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = /*@__PURE__*/ _const("input_label", ($scope) => {
	_return($scope, $scope.input_label + "!");
	_text($scope["#text/0"], $scope.input_label);
});
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var huge_label_default = /*@__PURE__*/ _template("__tests__/tags/huge-label.marko", $template$2, "D l", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/tiny-label.marko
const $template$1 = "<b> </b>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	_return($scope, $scope.input_label + "?");
	_text($scope["#text/0"], $scope.input_label);
});
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var tiny_label_default = /*@__PURE__*/ _template("__tests__/tags/tiny-label.marko", $template$1, "D l", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_fail#0:5/init", /*@__PURE__*/ _closure_get("input_fail/8", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/template.marko_2_input_fail#0:5/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", 0, ($_) => $catch_content__v);
const $catch_content__input_big__OR__input_label = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0/unpatched", "input_big", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_big#0:3_input_label#0:4/init", 4, ($scope) => $catch_content__dynamicTag($scope, $scope._.input_big ? huge_label_default : tiny_label_default, ($_) => ({ label: $scope._.input_label }))), "input_big/6", 0), "input_label/7", 0);
const $catch_content__input_big = /*@__PURE__*/ _closure_get("input_big/6", $catch_content__input_big__OR__input_label, 0, "__tests__/template.marko_1_input_big#0:3/subscribe");
const $catch_content__setup = ($scope) => {
	$catch_content__input_big($scope);
	$catch_content__input_label($scope);
};
const $catch_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", $catch_content__input_big__OR__input_label, 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__v = _fill_var_resume("__tests__/template.marko_1_v#8/var", ($scope, v) => _text($scope["#text/3"], v));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b> </b><!><i> </i>", "D l1bD ", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_big($scope, input.big);
	$input_label($scope, input.label);
	$input_fail($scope, input.fail);
};
const $input_big__closure = /*@__PURE__*/ _closure($catch_content__input_big);
const $input_big = /*@__PURE__*/ _const("input_big", $input_big__closure);
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
