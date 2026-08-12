// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
const $input_title$1 = /*@__PURE__*/ _const("input_title", ($scope) => _return($scope, "[" + $scope.input_title + "]"));
const $input$1 = ($scope, input) => $input_title$1($scope, input.title);
var labeler_default = /*@__PURE__*/ _template("__tests__/tags/labeler/index.marko", $template$1, "b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}& D m`)("b");
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $label);
	$count($scope, 0);
	$setup__script($scope);
}
const $label__script = _script("__tests__/template.marko_0_label#8", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + $scope.label;
	}
});
const $label = _var_resume("__tests__/template.marko_0_label#8/var", /*@__PURE__*/ _const("label", $label__script));
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
