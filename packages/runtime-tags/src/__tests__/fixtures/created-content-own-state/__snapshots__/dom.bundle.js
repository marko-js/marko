// template.marko
const $wrap_content__input_id = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._.e), 0, "a1");
const $wrap_content__c = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__c($scope, +$scope.d + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_id($scope);
	$wrap_content__c($scope, 0);
	$wrap_content__setup__script($scope);
};
const $wrap_content = _content("a2", "<button><!> <!></button>", " D%c%", $wrap_content__setup);
