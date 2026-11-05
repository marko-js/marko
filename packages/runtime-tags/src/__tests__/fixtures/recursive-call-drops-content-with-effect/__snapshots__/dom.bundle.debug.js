// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/c1.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = $if_content__input_depth;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var c1_default = /*@__PURE__*/ _template("__tests__/tags/c1.marko", $template, "b%c", 0, $input);
