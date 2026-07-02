// template.marko
const $MyTag_content__a = ($scope, a) => _text($scope.a, a);
const $MyTag_content__b = ($scope, b) => _text($scope.b, b);
const $MyTag_content__tag_params = ($scope, $params2) => {
	$MyTag_content__a($scope, $params2[0]);
	$MyTag_content__b($scope, $params2[1]);
};
const $args = /* @__PURE__ */ _const(8, ($scope) => $MyTag_content__tag_params($scope.a, [...$scope.i]));
const $x__OR__args = ($scope) => {
	let $cgrp;
	if ($scope.h) $cgrp = attrTag({ y: 1 });
	else $cgrp = attrTag({ y: 2 });
	$MyTag_content__tag_params($scope.c, [...$scope.i, {
		cgrp: $cgrp,
		row: attrTag({ r: $scope.h })
	}]);
};
const $x = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.e, $scope.h);
	$args($scope, [$scope.h, 2]);
	$x__OR__args($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$x($scope, $scope.h + 1);
}));
