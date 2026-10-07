// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $el2_getter = _hoist_resume("__tests__/template.marko_0_#span#3:0/hoist", "#span/0", "BranchScopes:#text/1", "ClosureScopes:1");
const $el1_getter = _hoist_resume("__tests__/template.marko_0_#p#2:0/hoist", "#p/0", "BranchScopes:#text/0", "ClosureScopes:1");
const $wrap_content__if = /*@__PURE__*/ _if("#text/0", "<p></p>", " ");
const $wrap_content__input_a = /*@__PURE__*/ _closure_get("input_a/6", ($scope) => $wrap_content__if($scope, $scope._.input_a ? 0 : 1), 0, "__tests__/template.marko_1_input_a#0:4/subscribe");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_a($scope);
	$wrap_content__input_b($scope);
};
const $wrap_content__if2 = /*@__PURE__*/ _if("#text/1", "<span></span>", " ");
const $wrap_content__input_b = /*@__PURE__*/ _closure_get("input_b/7", ($scope) => $wrap_content__if2($scope, $scope._.input_b ? 0 : 1), 0, "__tests__/template.marko_1_input_b#0:5/subscribe");
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!><!>", "b%b%", $wrap_content__setup, 0, "ClosureScopes:1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	for (const el of $el1_getter($scope)) el.textContent = "a";
	for (const el of $el2_getter($scope)) el.textContent = "b";
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($wrap_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($wrap_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
