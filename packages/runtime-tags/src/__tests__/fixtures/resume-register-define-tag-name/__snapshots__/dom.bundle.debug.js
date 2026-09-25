// tags/card.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $Heading_content__walks = "b%c", $Heading_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Heading_content__template, $Heading_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Heading_content__walks, $Heading_content__walks);
const $inputtype_content = _content("__tests__/template.marko_2*content", "define body: registered");
const $Heading_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $Heading_content__input_type = $Heading_content__dynamicTag;
const $Heading_content__$params = ($scope, $params2) => $Heading_content__input($scope, $params2[0]);
const $Heading_content__input = ($scope, input) => $Heading_content__input_type($scope, input.type);
function $setup($scope) {
	$Heading_content__input_type($scope["#childScope/0"], "h1");
	$Heading_content__input_type($scope["#childScope/1"], card_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
