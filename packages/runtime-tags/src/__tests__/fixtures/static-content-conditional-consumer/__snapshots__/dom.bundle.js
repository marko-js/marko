// total: 13125 (min) 5073 (brotli)
// tags/consumer.marko: 175 (min) 131 (brotli)
const $if_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $if_content__input_content = /* @__PURE__ */ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /* @__PURE__ */ _if(1, "<!><!><!>", "b%c", $if_content__input_content);
const $show__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
const $show = /* @__PURE__ */ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$show__script($scope);
});

// template.marko: 54 (min) 58 (brotli)
const $consumer_content = _content_resume("a0", "<div>static content</div>", "b");
