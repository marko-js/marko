// tags/wrap.marko
const $template$2 = "<div></div><!><!>";
const $walks$2 = " b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $input__script = _script("__tests__/tags/wrap.marko_0_input#3", ($scope) => _attrs_script($scope, "#div/0"));
const $input$1 = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$if($scope, $scope.input.show ? 0 : 1);
	$input_content($scope, $scope.input.content);
	$input__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, $walks$2, 0, $input$1);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $setup$1 = ($_) => {};
const $wrap_content__input_value = /*@__PURE__*/ _closure_get("input_value/5", ($scope) => _text($scope["#text/0"], $scope._.input_value), 0, "__tests__/tags/outer.marko_1_input_value#0:4/subscribe");
const $wrap_content__setup = $wrap_content__input_value;
const $wrap_content = _content_resume("__tests__/tags/outer.marko_1*content", " ", " ", $wrap_content__setup);
const $input_show = ($scope, input_show) => $input$1($scope["#childScope/0"], {
	show: input_show,
	content: $wrap_content($scope)
});
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value__closure = /*@__PURE__*/ _closure($wrap_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $x = /*@__PURE__*/ _let("x/2", ($scope) => {
	$input_value($scope["#childScope/0"], $scope.x);
	$input_show($scope["#childScope/0"], $scope.x > 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
