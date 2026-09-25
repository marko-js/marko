// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/heading.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputtype_content__input_depth = /*@__PURE__*/ _closure_get("input_depth", ($scope) => _text($scope["#text/0"], $scope._._.input_depth), ($scope) => $scope._._, "__tests__/tags/heading.marko_2_input_depth#5/subscribe");
const $inputtype_content__setup = $inputtype_content__input_depth;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/tags/heading.marko_2*content", "depth <!>", "b%", $inputtype_content__setup);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $if_content__input_type = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_type));
const $if_content__setup = $if_content__input_type;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_type($scope, input.type);
	$input_depth($scope, input.depth);
};
const $input_type = /*@__PURE__*/ _const("input_type", $if_content__input_type);
const $input_depth__closure = /*@__PURE__*/ _closure($inputtype_content__input_depth);
const $input_depth = /*@__PURE__*/ _const("input_depth", $input_depth__closure);
const $renders = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$1, "b%c", 0, $input, $renders);

// tags/v:heading.marko.register-$inputtype_content.js
_resumed["__tests__/tags/heading.marko_2*content"] = $inputtype_content2;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_type($scope["#childScope/0"], card_default);
	$input_depth($scope["#childScope/0"], 0);
	$input_show($scope["#childScope/0"], true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
