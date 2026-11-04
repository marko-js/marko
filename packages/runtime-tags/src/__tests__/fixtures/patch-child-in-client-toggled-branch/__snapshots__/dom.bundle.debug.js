// tags/my-tag.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $if_content__input_value$1 = /*@__PURE__*/ _if_closure_patch("__tests__/tags/my-tag.marko_1_input_value#0:4/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_value));
const $if_content__setup$1 = $if_content__input_value$1;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup$1);
const $open = _fill_let_resume("__tests__/tags/my-tag.marko_fill0", "open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
function $setup$1($scope) {
	$open($scope, true);
}
const $input_value__script = _script("__tests__/tags/my-tag.marko_0_input_value#4", ($scope) => console.log("value", $scope.input_value));
const $input_value$1 = /*@__PURE__*/ _const("input_value", ($scope) => {
	$if_content__input_value$1($scope);
	_text($scope["#text/1"], $scope.input_value);
	$input_value__script($scope);
});
const $input$1 = ($scope, input) => $input_value$1($scope, input.value);
var my_tag_default = /*@__PURE__*/ _template("__tests__/tags/my-tag.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_value = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_value#0:4/setup", "#text/1", 0, ($scope) => $input_value$1($scope["#childScope/0"], $scope._.input_value));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $show = _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
