// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup_var(() => import("./v:child.marko.setup.mjs"));
const $if_content__a__OR__v_n = /*@__PURE__*/ _or(7, ($scope) => _text($scope.e, $scope._.c + ":" + $scope.g), 1, 2);
const $if_content__a = /*@__PURE__*/ _if_closure(1, 0, $if_content__a__OR__v_n);
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.d, "click", function() {
	$a($scope._, +$scope._.c + 1);
	$scope.f.set($scope._.c);
}));
const $if_content__setup = ($scope) => {
	$if_content__a._($scope);
	_var($scope, 1, $if_content__v);
	$load_Child_setup($scope, $scope.b, $scope.a);
	$if_content__setup__script($scope);
};
const $if_content__v = _var_resume("b0", /*@__PURE__*/ _const(5, ($scope) => $if_content__v_n($scope, $scope.f?.n)));
const $if_content__v_n = /*@__PURE__*/ _const(6, $if_content__a__OR__v_n);
const $a = /*@__PURE__*/ _let(2, $if_content__a);
const $if = /*@__PURE__*/ _if(1, "<!><!><button class=inc> </button>", "b%0&b D ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$mounted($scope, !$scope.d);
}));

// tags/grand.marko
const $template$1 = "<span> </span>";
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		n: $scope.b,
		set: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.c0 = $_return;

// child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l");
const $g = _var_resume("a0", /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c)));
function $setup($scope) {
	_var($scope, 0, $g);
	$setup$1($scope.a);
}

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
