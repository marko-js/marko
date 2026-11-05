// tags/cyc-b/index.marko
const $template$2 = "<span>b <!></span><!><!><!>";
const $walks$2 = "Db%l%b%c";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_depth$1 = ($scope, input_depth) => {
	_text($scope["#text/0"], input_depth);
	$dynamicTag2($scope, cyc_a_default, ($_) => ({ depth: input_depth + 1 }));
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_depth$1($scope, input.depth);
	$input_content($scope, input.content);
};
var cyc_b_default = /*@__PURE__*/ _template("__tests__/tags/cyc-b/index.marko", $template$2, $walks$2, 0, $input$1);

// tags/cyc-a/index.marko
const $template$1 = "<div>a <!></div><!><!>";
const $walks$1 = "Db%l%c";
const $setup$1 = ($_) => {};
const $cycb_content__if = /*@__PURE__*/ _if("#text/0", "odd");
const $cycb_content__input_depth = /*@__PURE__*/ _closure_get("input_depth/5", ($scope) => $cycb_content__if($scope, $scope._._.input_depth % 2 ? 0 : 1), ($scope) => $scope._._, "__tests__/tags/cyc-a/index.marko_2_input_depth#0:4/subscribe");
const $cycb_content__setup = $cycb_content__input_depth;
const $cycb_content = /*@__PURE__*/ _content("__tests__/tags/cyc-a/index.marko_2*content", "<!><!><!>", "b%", $cycb_content__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_depth$1($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$input_content_direct($scope["#childScope/0"], $cycb_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $if_content__setup);
const $input_depth__closure = /*@__PURE__*/ _closure($cycb_content__input_depth);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/0"], $scope.input_depth);
	$if($scope, $scope.input_depth < 2 ? 0 : 1);
	$if_content__input_depth($scope);
	$input_depth__closure($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var cyc_a_default = /*@__PURE__*/ _template("__tests__/tags/cyc-a/index.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
