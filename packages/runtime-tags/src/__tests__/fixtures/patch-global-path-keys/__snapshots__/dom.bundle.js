// template.marko
const $if_content__setup__$global_o = /*@__PURE__*/ _fill_global_path("a0", ($scope) => {
	_text($scope.a, $scope.$.o.x.toUpperCase());
	_text($scope.b, $scope.$.o.list.length);
	_text($scope.c, $scope.$.o["a.b"]);
}, "o", "x", 0, "o", "list", "length", 0, "o", "a.b");
const $if_content__setup__$global_c_d = /*@__PURE__*/ _fill_global("a1", ($scope) => _text($scope.d, $scope.$["c.d"]), "c.d");
const $if_content__setup__$global_p = /*@__PURE__*/ _fill_global_path("a2", ($scope) => _text($scope.e, $scope.$.p?.x), "p", "x");
const $if_content__setup = ($scope) => {
	$if_content__setup__$global_o($scope);
	$if_content__setup__$global_c_d($scope);
	$if_content__setup__$global_p($scope);
};
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b><i> </i><u> </u><s> </s>", "D lD lD lD lD ", $if_content__setup);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
