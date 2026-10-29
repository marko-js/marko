// template.marko
const $myfor_content__n = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.e)));
const $myfor_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope._, $scope._.e + ($scope.d + 1));
}));
const $myfor_content__setup = ($scope) => {
	$myfor_content__n($scope);
	$myfor_content__setup__script($scope);
};
const $myfor_content__$params = ($scope, $params2) => $myfor_content__i($scope, $params2[0]);
const $myfor_content__i = /*@__PURE__*/ _const(3);
const $myfor_content = _content$1("a1", "<button class=r> </button>", " D ", $myfor_content__setup, $myfor_content__$params);
const $n = _let(4, /* @__PURE__ */ _closure($myfor_content__n));
