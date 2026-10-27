// tags/opener.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $if_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope.b, $scope.a);
	$load_Lazy_tag_input_label($scope.b, "c");
};
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%/&", $if_content__setup);
const $open = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
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
