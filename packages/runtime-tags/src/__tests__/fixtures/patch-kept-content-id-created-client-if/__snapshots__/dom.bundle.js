// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $if_content__c = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.f));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__c);
const $c = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__c($scope);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
