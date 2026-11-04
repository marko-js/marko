// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// template.marko
const $if_content__field = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.g));
const $if_content__setup = $if_content__field;
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $field = /*@__PURE__*/ _let(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$if_content__field($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$field($scope, void 0);
}));
