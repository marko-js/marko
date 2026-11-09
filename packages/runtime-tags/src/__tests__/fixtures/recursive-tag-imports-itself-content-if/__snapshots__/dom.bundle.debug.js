// under.marko
const $template$1 = "<p>under <!></p><!><!><!>";
const $walks$1 = "Db%l%b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $Self_content__if = /*@__PURE__*/ _if("#text/0", "odd");
const $Self_content__input_depth = /*@__PURE__*/ _closure_get("input_depth/7", ($scope) => $Self_content__if($scope, $scope._._.input_depth % 2 ? 0 : 1), ($scope) => $scope._._, "__tests__/under.marko_2_input_depth#0:5/subscribe");
const $Self_content__setup = $Self_content__input_depth;
const $Self_content = /*@__PURE__*/ _content("__tests__/under.marko_2*content", "<!><!><!>", "b%", $Self_content__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$input_content($scope["#childScope/0"], $Self_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_depth__closure = /*@__PURE__*/ _closure($Self_content__input_depth);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/0"], $scope.input_depth);
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
	$input_depth__closure($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var under_default = /*@__PURE__*/ _template("__tests__/under.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 2);
	$input_content($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
