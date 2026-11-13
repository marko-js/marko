// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $for_content__c = _let(5, ($scope) => $for_content__dynamicTag($scope, $scope.f));
const $for_content__setup = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$for_content__c($scope, void 0);
}));

// template.marko
const $row_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => _text($scope.a, $scope._.d), 0, "a2", 0);
const $row_content = _content$1("a1", "<em>row <!></em>", "Db%", $row_content__input_label);
