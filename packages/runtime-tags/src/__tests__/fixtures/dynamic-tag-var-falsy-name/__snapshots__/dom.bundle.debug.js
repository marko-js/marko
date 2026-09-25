// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&`)($walks$1, $walks$1);
const $plain = ($scope, plain) => {};
function $setup($scope) {
	_var($scope, "#childScope/0", $plain);
	_var($scope, "#childScope/2", $labeled);
	$setup$1($scope["#childScope/0"]);
	$input_a11yText($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	$input_a11yText($scope["#childScope/2"], "Close");
}
const $labeled = ($scope, labeled) => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/wrapper/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper/index.marko", $template$1, "D%l", 0, $input$1);

// tags/child/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_dynamic_tag_var_resume("#text/0");
const $inputa11yTextbutton_content = /*@__PURE__*/ _content("__tests__/tags/child/index.marko_2*content", "content");
const $btn_getter = _hoist_resume("__tests__/tags/child/index.marko_0_$btn#2/hoist", "$btn", "ClosureScopes:1");
const $wrapper_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputa11yTextbutton_content, () => $wrapper_content__$btn);
const $wrapper_content__input_a11yText = /*@__PURE__*/ _closure_get("input_a11yText", ($scope) => $wrapper_content__dynamicTag($scope, $scope._.input_a11yText && "button", () => ({ "aria-label": $scope._.input_a11yText })), 0, "__tests__/tags/child/index.marko_1_input_a11yText#3/subscribe");
const $wrapper_content__setup = $wrapper_content__input_a11yText;
const $wrapper_content__$btn = _var_resume("__tests__/tags/child/index.marko_1_$btn#2/var", /*@__PURE__*/ _const("$btn", ($scope) => _assert_hoist($scope.$btn)));
const $wrapper_content = /*@__PURE__*/ _content("__tests__/tags/child/index.marko_1*content", "<!><!><!>", "b1", $wrapper_content__setup, 0, "ClosureScopes:1");
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
	_return($scope, { btn: $btn_getter($scope) });
}
const $input = ($scope, input) => $input_a11yText($scope, input.a11yText);
const $input_a11yText__closure = /*@__PURE__*/ _closure($wrapper_content__input_a11yText);
const $input_a11yText = /*@__PURE__*/ _const("input_a11yText", $input_a11yText__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);
