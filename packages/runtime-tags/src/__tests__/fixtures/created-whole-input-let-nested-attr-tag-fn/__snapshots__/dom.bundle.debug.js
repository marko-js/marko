// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $i = /*@__PURE__*/ _let("i/3", ($scope) => $i_a($scope, $scope.i?.a));
const $i_a = /*@__PURE__*/ _const("i_a", ($scope) => $i_a_b($scope, $scope.i_a?.b));
const $i_a_b = /*@__PURE__*/ _const("i_a_b", ($scope) => $i_a_b_fn($scope, $scope.i_a_b?.fn));
const $f = ($scope, f) => _text($scope["#text/0"], f());
const $i_a_b_fn = /*@__PURE__*/ _const("i_a_b_fn", ($scope) => $f($scope, $scope.i_a_b_fn));
const $input$1 = $i;
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_on__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => {
	let $b;
	if ($scope._.input_on) {
		$b = attrTag({ fn: function() {
			return "f:" + $scope._.input_label;
		} });
	}
	$input$1($scope["#childScope/0"], { a: attrTag({ b: $b }) });
});
const $if_content__input_on = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_on__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_on__OR__input_label);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
const $input_on = /*@__PURE__*/ _const("input_on", $if_content__input_on);
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
