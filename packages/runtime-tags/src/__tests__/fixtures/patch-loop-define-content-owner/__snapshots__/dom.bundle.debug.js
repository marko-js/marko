// template.marko
const $Card_content__walks = "D%b%l";
const $Card_content__template = "<p><!><!></p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $rowcardCardspan_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_7_row_label#2:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "row_label", /*@__PURE__*/ _closure_get("row_label/13", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_7_row_label#2:7/subscribe"), 2));
const $rowcardCardspan_content__setup = ($scope) => {
	$rowcardCardspan_content__row_label($scope);
	$rowcardCardspan_content__n($scope);
};
const $rowcardCardspan_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_7_n#2:11/init", /*@__PURE__*/ _closure_get("n/15", ($scope) => _text($scope["#text/1"], $scope._.n)));
const $rowcardCardspan_content = _content("__tests__/template.marko_7*content", "<b><!> <!></b>", "D%c%", $rowcardCardspan_content__setup);
_content_resume($rowcardCardspan_content);
const $Card_content2__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_6_row_label#2:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "row_label", /*@__PURE__*/ _closure_get("row_label/13", ($scope) => _text($scope["#text/0"], $scope._.row_label)), 1));
const $Card_content2__setup = ($scope) => {
	$Card_content2__row_label($scope);
	$Card_content2__n($scope);
};
const $Card_content2__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_6_n#2:11/init", /*@__PURE__*/ _closure_get("n/15", ($scope) => _text($scope["#text/1"], $scope._.n)));
const $Card_content2 = /*@__PURE__*/ _content("__tests__/template.marko_6*content", "<i><!> <!></i>", "D%c%", $Card_content2__setup);
const $Label_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_row_label#2:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "row_label", /*@__PURE__*/ _closure_get("row_label/13", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_5_row_label#2:7/subscribe"), 0));
const $Label_content__setup = ($scope) => {
	$Label_content__row_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_n#2:11/init", /*@__PURE__*/ _closure_get("n/15", ($scope) => _text($scope["#text/1"], $scope._.n)));
const $Label_content = _content("__tests__/template.marko_5*content", "<em><!> <!></em>", "D%c%", $Label_content__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content2__Card__OR__row_card__OR__Label__OR__tag = /*@__PURE__*/ _or_resume("__tests__/template.marko_3_Card#0:4_row_card#2:8_Label#2:12_tag#2/init", 3, ($scope) => $for_content2__dynamicTag($scope, $scope._.row_card ? $scope._._.Card : "span", ($_) => ({
	label: $scope.tag,
	content: $scope._.Label
})), 3);
const $for_content2__Card = /*@__PURE__*/ _closure_get("Card/5", $for_content2__Card__OR__row_card__OR__Label__OR__tag, ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__Card($scope);
	$for_content2__row_card._($scope);
	$for_content2__Label._($scope);
};
const $for_content2__row_card = /*@__PURE__*/ _for_closure("#text/4", $for_content2__Card__OR__row_card__OR__Label__OR__tag);
const $for_content2__Label = /*@__PURE__*/ _for_closure("#text/4", $for_content2__Card__OR__row_card__OR__Label__OR__tag);
const $for_content2__tag = /*@__PURE__*/ _const("tag", $for_content2__Card__OR__row_card__OR__Label__OR__tag);
const $for_content2__$params = ($scope, $params4) => $for_content2__tag($scope, $params4[0]);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", $rowcardCardspan_content);
const $for_content__Card__OR__row_card = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_Card#0:4_row_card#8/init", 9, ($scope) => $for_content__dynamicTag($scope, $scope.row_card ? $scope._.Card : "span", ($_) => ({ label: "dynamic" })));
const $for_content__Card = /*@__PURE__*/ _for_closure("#text/0", $for_content__Card__OR__row_card);
const $for_content__n__closure = /*@__PURE__*/ _closure($Label_content__n, $Card_content2__n, $rowcardCardspan_content__n);
const $for_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/11", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$for_content__n__closure($scope);
});
const $for_content__Label = /*@__PURE__*/ _const("Label");
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__n($scope, +$scope.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__Card._($scope);
	$Card_content__tag_input_content($scope["#childScope/2"], $Card_content2($scope));
	$Card_content__label($scope["#childScope/2"], "direct");
	$for_content__Label($scope, { content: $Label_content($scope) });
	$for_content__setup__script($scope);
	$for_content__n($scope, 0);
};
const $for_content__row_card = /*@__PURE__*/ _const("row_card", ($scope) => {
	$for_content__Card__OR__row_card($scope);
	$for_content2__row_card($scope);
});
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/4", "<!><!><!>", "b%", $for_content2__setup, $for_content2__$params);
const $for_content__row_tags = ($scope, row_tags) => $for_content__for($scope, [row_tags]);
const $for_content__$params = ($scope, $params3) => {
	$for_content__row_card($scope, $params3[0]?.card);
	$for_content__row_label($scope, $params3[0]?.label);
	$for_content__row_tags($scope, $params3[0]?.tags);
};
const $for_content__row_label__closure = /*@__PURE__*/ _closure($Label_content__row_label, $Card_content2__row_label, $rowcardCardspan_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "row_label", $for_content__row_label__closure);
const $Card_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Card_content__label = ($scope, label) => {
	_text($scope["#text/0"], label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__tag_input_content = /*@__PURE__*/ _const("content", $if_content__content);
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => {
	$Card_content__tag_input_content($scope, $temp.content);
	$Card_content__label($scope, $temp.label);
};
const $Card_content = _content("__tests__/template.marko_1*content", $Card_content__template, $Card_content__walks, 0, $Card_content__$params);
const $Card = /*@__PURE__*/ _const("Card");
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
}
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<section><button> </button>${_w0}<!><!></section>`)($Card_content__template), /*@__PURE__*/ ((_w0) => `D D l/${_w0}&%b%l`)($Card_content__walks), $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
