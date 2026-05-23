// total: 7042 (min) 3193 (brotli)
// template.marko: 248 (min) 171 (brotli)
_enable_catch();
const $if_content__value = /* @__PURE__ */ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.d));
const $await_content__if = /* @__PURE__ */ _if(2, "<span> </span>", "D l", $if_content__value);
const $await_content__value__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content__value($scope, $scope.d + 1);
}));
const $await_content__value = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$await_content__if($scope, $scope.d > 0 ? 0 : 1);
	$if_content__value($scope);
	$await_content__value__script($scope);
});
const $placeholder_content = _content_resume("a1", "loading...", "b");
