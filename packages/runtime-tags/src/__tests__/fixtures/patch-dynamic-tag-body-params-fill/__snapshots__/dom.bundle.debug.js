// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "content", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content)));
const $if_content__setup = $if_content__content;
const $Card_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $Card_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill4", "open/7", ($scope) => $Card_content__if($scope, $scope.open ? 0 : 1));
const $Card_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Card_content__open($scope, !$scope.open);
}));
const $Card_content__setup = ($scope) => {
	$Card_content__setup__script($scope);
	$Card_content__open($scope, true);
};
const $Card_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__label($scope, $params2[0].label);
	$Card_content__content($scope, $params2[0].content);
};
const $Card_content__content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "content", $if_content__content);
const $Card_content = _content("__tests__/template.marko_2*content", "<button class=toggle>t</button><p><!><!></p>", " bD%b%", $Card_content__setup, $Card_content__$params);
const $Label_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe"), 0));
const $Label_content__setup = $Label_content__input_label;
const $Label_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Label_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_card__OR__input_tag__OR__Card__OR__Label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_tag", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_card", /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.input_card ? $scope.Card : "span", ($_) => ({
	label: $scope.input_tag,
	content: $scope.Label
})), 3)));
const $Card = /*@__PURE__*/ _const("Card", $input_card__OR__input_tag__OR__Card__OR__Label);
const $Label = /*@__PURE__*/ _const("Label", $input_card__OR__input_tag__OR__Card__OR__Label);
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$Label($scope, { content: $Label_content($scope) });
}
const $input_card = /*@__PURE__*/ _const("input_card", $input_card__OR__input_tag__OR__Card__OR__Label);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_card__OR__input_tag__OR__Card__OR__Label);
const $input = ($scope, input) => {
	$input_card($scope, input.card);
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Label_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
