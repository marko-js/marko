// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_ready("_a", 1, /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content2__input_label = /*@__PURE__*/ _fill_join_closure("b1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $load_Child_tag_input_label($scope.b, $scope._._.f), ($scope) => $scope._._), 0);
const $if_content2__setup = ($scope) => {
	$if_content2__input_label($scope);
	$load_Child_setup($scope);
};
const $if_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%/&", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__if($scope, $scope._.e ? 0 : 1)));
const $if_content__setup = $if_content__input_show;
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
