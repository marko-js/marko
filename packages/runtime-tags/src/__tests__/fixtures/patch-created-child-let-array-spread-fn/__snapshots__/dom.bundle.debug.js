// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $o = /*@__PURE__*/ _let("o/4", ($scope) => $o_list($scope, $scope.o?.list));
const $o_list = /*@__PURE__*/ _const("o_list", ($scope) => $o_list_($scope, $scope.o_list?.[0]));
const $f = ($scope, f) => _text($scope["#text/0"], f());
const $o_list_ = /*@__PURE__*/ _const("o_list_0", ($scope) => $f($scope, $scope.o_list_0));
const $input_opts = $o;
const $input$1 = ($scope, input) => $input_opts($scope, input.opts);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_items__OR__input_label = /*@__PURE__*/ _fill_signal("input_items __tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched,input_label __tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_items#0:4_input_label#0:5/init", 1, ($scope) => $input_opts($scope["#childScope/0"], { list: [...$scope._.input_items, () => "f:" + $scope._.input_label] })), _if_closure, "#text/0", 0);
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_items__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_items__OR__input_label);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
