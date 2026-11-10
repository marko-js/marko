// tags/c2.marko
const $D_content__walks = "b%b%c";
const $D_content__template = "<!><!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $D_content__depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__depth._($scope);
	$scope["#childScope/0"]._ = $scope._._;
	$D_content__setup($scope["#childScope/0"]);
};
const $D_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $D_content__input_content__OR__depth = /*@__PURE__*/ _or(5, ($scope) => $D_content__dynamicTag($scope, $scope._.input_content, ($_) => [$scope.depth]));
const $D_content__input_content = /*@__PURE__*/ _closure_get("input_content/4", $D_content__input_content__OR__depth, 0, "__tests__/tags/c2.marko_1_input_content#0:3/subscribe");
const $D_content__setup = $D_content__input_content;
const $D_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $D_content__depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$D_content__if($scope, $scope.depth > 0 ? 0 : 1);
	$D_content__input_content__OR__depth($scope);
	$if_content__depth($scope);
});
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__depth($scope, $temp.depth);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$D_content__depth($scope["#childScope/0"], 1);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($D_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var c2_default = /*@__PURE__*/ _template("__tests__/tags/c2.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $c2_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $c2_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", 0, $c2_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $c2_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
