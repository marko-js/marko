// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "t:" + $scope._._._.input_title), ($scope) => $scope._._._), 0);
const $if_content2__setup = $if_content2__input_title;
const $box_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $box_content__input_show = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_show", /*@__PURE__*/ _closure_get("input_show", ($scope) => $box_content__if($scope, $scope._._.input_show ? 0 : 1), ($scope) => $scope._._), 0);
const $box_content__setup = $box_content__input_show;
const $box_content = /*@__PURE__*/ _content$1("__tests__/template.marko_2*content", "<!><!><!>", "b%", $box_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $box_content($scope));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_show__closure = /*@__PURE__*/ _closure($box_content__input_show);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $input_show__closure);
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
