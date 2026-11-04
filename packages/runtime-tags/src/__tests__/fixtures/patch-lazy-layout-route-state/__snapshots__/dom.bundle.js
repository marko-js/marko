// layout.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
const $if_content__setup = ($scope) => $load_Lazy_setup($scope, $scope.b, $scope.a);
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%/&", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// template.marko
const $Layout_content__setup = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope._, !$scope._.b);
}));
const $open = _let(1, ($scope) => $input_open($scope.a, $scope.b));

// lazy.marko
const $template = "<b>lazy</b>";
const $setup = ($_) => {};

// v:lazy.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
