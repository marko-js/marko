// tags/label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$1 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l");
const $if_content__x = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.x));
const $if_content__setup = $if_content__x;
const $x = /*@__PURE__*/ _let("x/6", $if_content__x);
const $input_v = $x;
function $setup($scope) {
	$input_onHide($scope["#childScope/0"], function() {
		$x($scope, "z");
	});
}
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
