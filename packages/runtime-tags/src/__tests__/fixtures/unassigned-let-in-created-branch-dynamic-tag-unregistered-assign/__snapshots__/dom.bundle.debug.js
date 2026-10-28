// tags/label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$1 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $ybbi_content__input_v = /*@__PURE__*/ _closure_get("input_v/5", ($scope) => _text($scope["#text/0"], $scope._._.input_v), ($scope) => $scope._._, "__tests__/template.marko_2_input_v#0:4/subscribe");
const $ybbi_content__setup = $ybbi_content__input_v;
const $ybbi_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $ybbi_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $ybbi_content);
const $if_content__y = /*@__PURE__*/ _let("y/2", ($scope) => $if_content__dynamicTag($scope, $scope.y === "b" ? "b" : "i"));
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__y($scope, $scope._.input_v));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$input_onHide($scope["#childScope/0"], function() {
		$if_content__y($scope, "z");
	});
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v__closure = /*@__PURE__*/ _closure($ybbi_content__input_v);
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	$if_content__input_v($scope);
	$input_v__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
