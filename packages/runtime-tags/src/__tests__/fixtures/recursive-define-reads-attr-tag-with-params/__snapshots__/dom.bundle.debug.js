// tags/c1.marko
const $D_content__walks = "b%b%c";
const $D_content__template = "<!><!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $D_content__tag_input_depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__depth._($scope);
	$scope["#childScope/0"]._ = $scope._._;
	$D_content__setup($scope["#childScope/0"]);
};
const $D_content__if = /*@__PURE__*/ _if("#text/0", "a");
const $D_content__input_item = /*@__PURE__*/ _closure_get("input_item/4", ($scope) => $D_content__if($scope, $scope._.input_item ? 0 : 1), 0, "__tests__/tags/c1.marko_1_input_item#0:3/subscribe");
const $D_content__setup = $D_content__input_item;
const $D_content__if2 = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $D_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	$D_content__if2($scope, $scope.depth > 0 ? 0 : 1);
	$if_content__depth($scope);
});
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__tag_input_depth($scope, $temp.depth);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$D_content__tag_input_depth($scope["#childScope/0"], 1);
}
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item__closure = /*@__PURE__*/ _closure($D_content__input_item);
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__closure);
var c1_default = /*@__PURE__*/ _template("__tests__/tags/c1.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "a");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTag({ content: $item_content($scope) }));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
