// tags/label.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$2 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$2, "D l", 0, $input$2);

// tags/show-value.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__y = /*@__PURE__*/ _let("y/2", ($scope) => $input_value($scope["#childScope/1"], $scope.y));
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__y($scope, $scope._.input_v));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$input_onHide($scope["#childScope/0"], function() {
		$if_content__y($scope, "z");
	});
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v = /*@__PURE__*/ _const("input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
