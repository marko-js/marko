// under.marko
const $template$1 = "<p>under <!></p><!><!>";
const $walks$1 = "Db%l%c";
const $setup$1 = ($_) => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_depth$1($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = $if_content__input_depth;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_depth$1 = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/0"], $scope.input_depth);
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input$1 = ($scope, input) => $input_depth$1($scope, input.depth);
var under_default = /*@__PURE__*/ _template("__tests__/under.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = ($_) => {};
const $input_depth = ($scope, input_depth) => $input_depth$1($scope["#childScope/0"], input_depth);
const $input = ($scope, input) => $input_depth($scope, input.depth);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
