// template.marko
const $B_content = _content$1("a2", "<b>B</b>");
const $A_content__l = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $A_content__x = ($scope, x) => $A_content__l($scope, String(x));
const $A_content__setup = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$A_content__l($scope, $scope.f + "+");
}));
const $A_content__$params = ($scope, $params2) => $A_content__x($scope, $params2[0].x);
const $A_content = _content$1("a0", "<button> </button>", " D ", $A_content__setup, $A_content__$params);
