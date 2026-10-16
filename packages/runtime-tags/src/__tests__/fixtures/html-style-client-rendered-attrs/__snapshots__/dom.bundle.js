// template.marko
const $if_content__input_media = /*@__PURE__*/ _if_closure(1, 0, ($scope) => {
	_attr($scope.b, "media", $scope._.e);
	_attr($scope.c, "media", $scope._.e);
	_attr($scope.d, "media", $scope._.e);
});
const $if_content__setup = ($scope) => {
	$if_content__input_media._($scope);
	$if_content__input_src._($scope);
	_attr($scope.a, "nonce", $scope.$.cspNonce);
	_start_late($scope.a, "main { --a: 1 }");
	_start_late($scope.b, "main { --b: 1 }");
	_start_late($scope.c, "main { --c: 1 }");
	_start_late($scope.d, "main { --d: 1 }");
};
const $if_content__input_src = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _attr($scope.d, "src", $scope._.f));
const $if = /*@__PURE__*/ _if(1, "<style></style><style></style><style src=x.css></style><style></style>", " b! b! b! ", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
