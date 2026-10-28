// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $Card_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Card_content__label = ($scope, label) => {
	_text($scope["#text/0"], label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__label($scope, $params2[0].label);
	$Card_content__content($scope, $params2[0].content);
};
const $Card_content__content = /*@__PURE__*/ _const("content", $if_content__content);
const $Card_content = _content("__tests__/template.marko_3*content", "<p><!><!></p>", "D%b%", 0, $Card_content__$params);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_card__OR__Card__OR__Label__OR__tag = /*@__PURE__*/ _or(3, ($scope) => $for_content__dynamicTag($scope, $scope._.input_card ? $scope._.Card : "span", ($_) => ({
	label: $scope.tag,
	content: $scope._.Label
})), 3);
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
const $Label_content__input_label = /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe");
const $Label_content__setup = ($scope) => {
	$Label_content__input_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _closure_get("n/14", ($scope) => _text($scope["#text/1"], $scope._.n), 0, "__tests__/template.marko_1_n#0:9/subscribe");
const $Label_content = _content("__tests__/template.marko_1*content", "<em><!> <!></em>", "D%c%", $Label_content__setup);
const $Card = /*@__PURE__*/ _const("Card");
const $n__closure = /*@__PURE__*/ _closure($Label_content__n);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $Label = /*@__PURE__*/ _const("Label");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$n($scope, 0);
	$Label($scope, { content: $Label_content($scope) });
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tags = ($scope, input_tags) => $for($scope, [input_tags]);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tags($scope, input.tags);
	$input_card($scope, input.card);
};
const $input_label__closure = /*@__PURE__*/ _closure($Label_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_card = /*@__PURE__*/ _const("input_card", $for_content__input_card);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
