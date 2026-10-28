// template.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy.marko.input_label.mjs"), "_a");
const $await_content__input_label__OR__x = /*@__PURE__*/ _or(4, ($scope) => $load_Lazy_tag_input_label($scope.b, $scope._._.f + $scope.d));
const $await_content__input_label = /*@__PURE__*/ _fill_join_closure("b5", 5, /*@__PURE__*/ _closure_get(7, $await_content__input_label__OR__x, ($scope) => $scope._._, "b1"), 0);
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$load_Lazy_setup($scope, $scope.b, $scope.a);
};
const $await_content__x__script = _script("b0", ($scope) => console.log("await", $scope.d));
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	$await_content__input_label__OR__x($scope);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = _resumed.b8 = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%/&", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__n = /*@__PURE__*/ _init_resume("b9", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.g))));
const $n = /*@__PURE__*/ _let(6, $if_content__n);
const $setup__script = _script("b4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
