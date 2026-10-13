// tags/panel/index.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_body = /*@__PURE__*/ _fill_join("__tests__/tags/panel/index.marko_fill0", "input_body", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_body)));
const $if_content__setup$1 = $if_content__input_body;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1);
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_body($scope, input.body);
};
const $input_body = /*@__PURE__*/ _fill_const("__tests__/tags/panel/index.marko_fill0", "input_body", $if_content__input_body);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel/index.marko", $template$2, "b%c", 0, $input);

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=b>+</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $body_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/tags/card.marko_1_$global_brand#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
const $body_content__setup = ($scope) => $body_content__$global_brand($scope);
const $body_content = _content("__tests__/tags/card.marko_1*content", "<em> </em>", "D ", $body_content__setup);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "count/2", ($scope) => $input_open($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$input_body($scope["#childScope/0"], attrTag({ content: $body_content($scope) }));
	$setup__script$1($scope);
	$count($scope, 0);
}
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<button class=a>s</button><!><!>";
const $walks = " b%c";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup__script($scope);
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
