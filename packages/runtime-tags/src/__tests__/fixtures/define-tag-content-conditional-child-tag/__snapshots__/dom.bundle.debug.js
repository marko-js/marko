// tags/child.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Box_content2__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $Box_content2__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content2__walks);
const $child_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $child_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $child_content__dynamicTag($scope, $scope._.input_content));
const $child_content__setup = $child_content__input_content;
const $child_content = _content_resume("__tests__/template.marko_3*content", "<!><!><!>", "b%", $child_content__setup);
const $Box_content2__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
});
const $Box_content2__tag_input_content__closure = /*@__PURE__*/ _closure($child_content__input_content);
const $Box_content2__tag_input_content = /*@__PURE__*/ _const("input_content", $Box_content2__tag_input_content__closure);
const $Box_content2__$params = ($scope, $params2) => $Box_content2__input($scope, $params2[0]);
const $Box_content2__input = ($scope, input) => $Box_content2__tag_input_content($scope, input.content);
const $Box_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $Box_content__setup = $Box_content__input_label;
const $Box_content = _content_resume("__tests__/template.marko_1*content", "label: <!>", "b%", $Box_content__setup);
function $setup($scope) {
	$Box_content2__setup._($scope["#childScope/0"], $scope);
	$Box_content2__tag_input_content($scope["#childScope/0"], $Box_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Box_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
