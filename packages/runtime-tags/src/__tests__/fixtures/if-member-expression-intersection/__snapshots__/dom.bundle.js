// total: 5986 (min) 2729 (brotli)
// tags/child.marko: 213 (min) 172 (brotli)
const $if_content__text = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.c));
const $if = /* @__PURE__ */ _if(0, "<div> </div>", "D l", $if_content__text);
const $hide__OR__text_length = /* @__PURE__ */ _or(4, ($scope) => $if($scope, !$scope.b && $scope.d ? 0 : 1));
const $hide = /* @__PURE__ */ _let(1, $hide__OR__text_length);
const $text = /* @__PURE__ */ _let(2, ($scope) => {
	$text_length($scope, $scope.c?.length);
	$if_content__text($scope);
});
const $id__script = _script("b0", ($scope) => {
	$text($scope, $scope.f);
	$hide($scope, false);
});
const $text_length = /* @__PURE__ */ _const(3, $hide__OR__text_length);
