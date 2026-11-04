// tags/tree.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$1 = ($_) => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_get._($scope);
};
const $if_content__input_get = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_get($scope["#childScope/0"], $scope._.input_get));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input_get = /*@__PURE__*/ _const("input_get", $if_content__input_get);
const $input$1 = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_get($scope, input.get);
};
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $getTitle2__script = _script("__tests__/template.marko_0_getTitle#4", ($scope) => console.log("run", $scope.getTitle()));
const $getTitle2 = /*@__PURE__*/ _const("getTitle", ($scope) => {
	$input_get($scope["#childScope/0"], $scope.getTitle);
	$getTitle2__script($scope);
});
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 2);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
_resumed["__tests__/template.marko_0/getTitle"] = $getTitle;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
