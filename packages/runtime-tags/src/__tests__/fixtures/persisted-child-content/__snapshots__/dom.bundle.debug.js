// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box/index.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $box_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "t:" + $scope._._.input_title), ($scope) => $scope._._), 0);
const $box_content__setup = $box_content__input_title;
const $box_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p> </p>", "D ", $box_content__setup);
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $box_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($box_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
