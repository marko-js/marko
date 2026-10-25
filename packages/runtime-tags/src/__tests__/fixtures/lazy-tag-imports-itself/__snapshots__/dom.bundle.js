// under.marko
var under_exports = /* @__PURE__ */ __exportAll({
	$input_depth: () => $input_depth,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks
});
const $template = "<button>under <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
let $load_Self_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:under.marko.setup.mjs"));
let $load_Self_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:under.marko.input_depth.mjs"));
const $if_content__input_depth = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $load_Self_tag_input_depth($scope.b, $scope._.g - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$load_Self_setup($scope, $scope.b, $scope.a);
};
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
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

// v:under.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
