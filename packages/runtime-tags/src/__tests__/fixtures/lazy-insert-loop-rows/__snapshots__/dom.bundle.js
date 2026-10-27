// template.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $for_content__setup = ($scope) => $load_Lazy_setup($scope, $scope.b, $scope.a);
const $for_content__item = ($scope, item) => $load_Lazy_tag_input_label($scope.b, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<!><!><!>", "b%/&", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.g, "c" + $scope.g.length]);
}));

// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
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
