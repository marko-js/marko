// a.marko
const $template$2 = "<button>a <!>:<!></button><!><!>";
const $walks$2 = " Db%c%l%c";
const B = /*@__PURE__*/ _load_template("b", ($_) => Promise.resolve().then(() => b_exports).then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_depth$2 = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $if_content__dynamicTag($scope, B, ($_) => ({ depth: $scope._.g - 1 })));
const $if_content__setup$2 = $if_content__input_depth$2;
const $n$2 = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script$2 = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n$2($scope, +$scope.h + 1);
}));
function $setup$2($scope) {
	$n$2($scope, 0);
	$setup__script$2($scope);
}
const $if$2 = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup$2);
const $input_depth$2 = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if$2($scope, $scope.g > 0 ? 0 : 1);
	$if_content__input_depth$2($scope);
});

// c.marko
const $template$1 = "<button>c <!>:<!></button><!><!>";
const $walks$1 = " Db%c%l%c";
const $if_content__input_depth$1 = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $input_depth$2($scope.a, $scope._.g - 1));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_depth$1._($scope);
	$setup$2($scope.a);
};
const $n$1 = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$n$1($scope, +$scope.h + 1);
}));
function $setup$1($scope) {
	$n$1($scope, 0);
	$setup__script$1($scope);
}
const $if$1 = /*@__PURE__*/ _if(3, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $if_content__setup$1);
const $input_depth$1 = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if$1($scope, $scope.g > 0 ? 0 : 1);
	$if_content__input_depth$1($scope);
});

// b.marko
var b_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_depth: () => $input_depth,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks,
	default: () => b_default
});
const $template = "<button>b <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
const $if_content__input_depth = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $input_depth$1($scope.a, $scope._.g - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$setup$1($scope.a);
};
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if(3, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var b_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
