// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0));
const $if_content2__setup = $if_content2__input_label;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $if_content__open = _let("open/1", ($scope) => $if_content__if($scope, $scope.open ? 0 : 1));
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__open($scope, $scope._.input_open))));
const $if_content__setup = $if_content__input_open;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_label($scope, input.label);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
const $input_label__closure = /*@__PURE__*/ _closure($if_content2__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
