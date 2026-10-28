// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $card_content__setup);
const $if_content__setup = ($scope) => $input_content($scope["#childScope/0"], $card_content($scope));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<section><button>x</button><!></section>";
const $walks = "Db%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $c = _let("c/4", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, 0, $input);
