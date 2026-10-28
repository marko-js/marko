// tags/rowsy.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup$1 = $if_content__content;
const $Card_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $Card_content__label = ($scope, label) => {
	_text($scope["#text/0"], label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__content($scope, $params2[0].content);
	$Card_content__label($scope, $params2[0].label);
};
const $Card_content__content = /*@__PURE__*/ _const("content", $if_content__content);
const $Card_content = _content("__tests__/tags/rowsy.marko_3*content", "<p><!><!></p>", "D%b%", 0, $Card_content__$params);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_card__OR__Card__OR__Label__OR__tag = /*@__PURE__*/ _fill_signal("input_card __tests__/tags/rowsy.marko_fill1/unpatched,Card __tests__/tags/rowsy.marko_fill2/unpatched,Label __tests__/tags/rowsy.marko_fill4/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/rowsy.marko_2_input_card#0:7_Card#0:8_Label#0:10_tag#2/init", 3, ($scope) => $for_content__dynamicTag($scope, $scope._.input_card ? $scope._.Card : "span", ($_) => ({
	label: $scope.tag,
	content: $scope._.Label
})), 3), _for_closure, "#text/2");
const $for_content__input_card = /*@__PURE__*/ _for_closure("#text/2", $for_content__input_card__OR__Card__OR__Label__OR__tag);
const $for_content__setup = ($scope) => {
	$for_content__input_card._($scope);
	$for_content__Card._($scope);
	$for_content__Label._($scope);
};
const $for_content__Card = /*@__PURE__*/ _for_closure("#text/2", $for_content__input_card__OR__Card__OR__Label__OR__tag);
const $for_content__Label = /*@__PURE__*/ _for_closure("#text/2", $for_content__input_card__OR__Card__OR__Label__OR__tag);
const $for_content__tag = /*@__PURE__*/ _const("tag", $for_content__input_card__OR__Card__OR__Label__OR__tag);
const $for_content__$params = ($scope, $params3) => $for_content__tag($scope, $params3[0]);
const $Label_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/rowsy.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/tags/rowsy.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/rowsy.marko_1_input_label#0:5/subscribe"), 0));
const $Label_content__setup = ($scope) => {
	$Label_content__input_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/rowsy.marko_1_n#0:9/init", /*@__PURE__*/ _closure_get("n/14", ($scope) => _text($scope["#text/1"], $scope._.n)));
const $Label_content = _content("__tests__/tags/rowsy.marko_1*content", "<em><!> <!></em>", "D%c%", $Label_content__setup);
const $Card = /*@__PURE__*/ _const("Card");
const $n__closure = /*@__PURE__*/ _closure($Label_content__n);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/rowsy.marko_fill3", "n/9", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $Label = /*@__PURE__*/ _const("Label");
const $setup__script$1 = _script("__tests__/tags/rowsy.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$Card($scope, { content: $Card_content($scope) });
	$n($scope, 0);
	$Label($scope, { content: $Label_content($scope) });
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tags$1 = ($scope, input_tags) => $for($scope, [input_tags]);
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_tags$1($scope, input.tags);
	$input_card($scope, input.card);
};
const $input_label__closure = /*@__PURE__*/ _closure($Label_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/rowsy.marko_fill0", "input_label", $input_label__closure);
const $input_card = /*@__PURE__*/ _const("input_card", $for_content__input_card);
var rowsy_default = /*@__PURE__*/ _template("__tests__/tags/rowsy.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=c>c</button>";
const $walks = "b%b b";
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_tags._($scope);
	$if_content__card._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_tags = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_tags#0:6/init", /*@__PURE__*/ _fill_signal("input_tags __tests__/template.marko_fill1", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_tags$1($scope["#childScope/0"], $scope._.input_tags))));
const $if_content__card = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_card#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_card($scope["#childScope/0"], $scope._.card)));
const $card = /*@__PURE__*/ _let("card/7", $if_content__card);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$card($scope, !$scope.card);
}));
function $setup($scope) {
	$card($scope, true);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_tags($scope, input.tags);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $input_tags = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_tags", $if_content__input_tags);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
