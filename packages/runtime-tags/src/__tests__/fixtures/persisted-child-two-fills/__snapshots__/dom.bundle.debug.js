// tags/card/index.marko
const $template$1 = "<h3> </h3><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_body$1 = ($scope, input_body) => _text($scope["#text/1"], input_body);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_body$1($scope, input.body);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_body._($scope);
};
const $if_content__input_body = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_body", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_body$1($scope["#childScope/0"], $scope._.input_body)));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_body($scope, input.body);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
const $input_body = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_body", $if_content__input_body);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
