// template.marko
let $load_Child_setup = _resume("b5", /*@__PURE__*/ _load_ready("_a", 1, /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__input_label__OR__n = /*@__PURE__*/ _fill_join_if("b0", 6, /*@__PURE__*/ _init_join("b3", /*@__PURE__*/ _or(2, ($scope) => $load_Child_tag_input_label($scope.b, `${$scope._.g}${$scope._.h}`))), 2, 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_label__OR__n);
const $if_content__n = /*@__PURE__*/ _init_if_closure("b4", 2, 0, $if_content__input_label__OR__n);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__n($scope);
});
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
const $input_label = _fill_const("b0", 6, $if_content__input_label);

// child.marko
const $template = "<span> </span>";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
