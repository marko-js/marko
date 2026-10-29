// template.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy.marko.input_label.mjs"), "_a");
const $if_content__input_label = /*@__PURE__*/ _fill("b2", 6, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $load_Lazy_tag_input_label($scope.b, $scope._.g)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$load_Lazy_setup($scope, $scope.b, $scope.a);
};
const $if2 = /*@__PURE__*/ _if(2, "<!><!><!>", "b%/&", $if_content__setup);
const $open = _let(7, ($scope) => $if2($scope, $scope.h ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));

// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
