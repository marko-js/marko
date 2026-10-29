// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $if_content__input_label__OR__T = /*@__PURE__*/ _or_resume("c7", 3, ($scope) => $if_content__dynamicTag($scope, $scope._.j, ($_) => ({ label: $scope._.h })));
const $if_content__input_label__OR__f = /*@__PURE__*/ _or_resume("c8", 4, ($scope) => _text($scope.c, $scope._.k($scope._.h)));
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__input_label__OR__T($scope);
	$if_content__input_label__OR__f($scope);
});
const $if_content__n = /*@__PURE__*/ _init_resume("c6", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.i)));
const $if_content__T = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__T);
const $if_content__f = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__f);
const $n = fill("c2", /*@__PURE__*/ _let(8, $if_content__n));
const $T = fill("c3", /*@__PURE__*/ _let(9, $if_content__T));
const $f = fill("c4", /*@__PURE__*/ _let(10, $if_content__f));
const $input_label = fill("c1", /*@__PURE__*/ _const(7, $if_content__input_label));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;

// template.marko
function $wrap(v) {
	return "w-" + v;
}
_resumed.a0 = $wrap;
