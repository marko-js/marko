// template.marko
const $boxp_content__l = _let(5, ($scope) => _text($scope.b, $scope.f));
const $boxp_content__x = ($scope, x) => $boxp_content__l($scope, String(x));
const $boxp_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$boxp_content__l($scope, $scope.f + "+");
}));
const $boxp_content__$params = ($scope, $params2) => $boxp_content__x($scope, $params2[0].x);
const $boxp_content = _content$1("a1", "<button> </button>", " D ", $boxp_content__setup, $boxp_content__$params);
