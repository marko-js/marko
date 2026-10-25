// a.marko
const $template = "<button>a <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
const $if_content__input_depth = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $load_B_tag_input_depth($scope.b, $scope._.g - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$load_B_setup($scope, $scope.b, $scope.a);
};
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var a_default = /*@__PURE__*/ _template("a", $template, $walks, $setup, $input);

// b.marko
const $template = "<button>b <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $if_content__dynamicTag($scope, a_default, ($_) => ({ depth: $scope._.g - 1 })));
const $if_content__setup = $if_content__input_depth;
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
