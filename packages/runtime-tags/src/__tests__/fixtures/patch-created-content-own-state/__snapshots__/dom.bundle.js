// template.marko
const $wrap_content__input_id = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a5", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._.e), 0, "a2"), 0));
const $wrap_content__c = /*@__PURE__*/ _fill_let("a3", 3, ($scope) => _text($scope.b, $scope.d));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__c($scope, +$scope.d + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_id($scope);
	$wrap_content__c($scope, 0);
	$wrap_content__setup__script($scope);
};
const $wrap_content = _content$1("a4", "<button><!> <!></button>", " D%c%", $wrap_content__setup);
