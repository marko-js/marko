// tags/widget/index.marko
const $template$1 = "<p> </p><button>run</button>";
const $walks$1 = "D l b";
const $label = ($scope, label) => _text($scope["#text/0"], label());
const $input_title$1 = /*@__PURE__*/ _const("input_title", ($scope) => $label($scope, () => "t:" + $scope.input_title));
const $setup__script$1 = _script("__tests__/tags/widget/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function(event) {
	const label = $scope.input_title;
	event.target.textContent = label;
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_title$1($scope, input.title);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button class=outer>+</button></main>";
const $walks = "D%b l";
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
