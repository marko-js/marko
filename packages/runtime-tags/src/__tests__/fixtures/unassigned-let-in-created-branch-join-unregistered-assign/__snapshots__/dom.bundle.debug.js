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
const $if_content__input_w__OR__y = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/1"], $scope.y + $scope._.input_w));
const $if_content__y = /*@__PURE__*/ _let("y/2", $if_content__input_w__OR__y);
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__y($scope, $scope._.input_v));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_w._($scope);
	$input_onHide($scope["#childScope/0"], function() {
		$if_content__y($scope, "z");
	});
};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_w__OR__y);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _const("input_v", $if_content__input_v);
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
