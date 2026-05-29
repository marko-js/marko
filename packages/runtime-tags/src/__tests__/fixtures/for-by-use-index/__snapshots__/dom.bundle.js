// total: 8051 (min) 3652 (brotli)
// template.marko: 388 (min) 257 (brotli)
const $if_content__last = /* @__PURE__ */ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content__setup = $if_content__last;
const $for_content__messages__OR__index = /* @__PURE__ */ _or(5, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$messages($scope._, $scope._.c.toSpliced($scope.e, 1));
	$last($scope._, $scope.e);
})));
const $for_content__messages = /* @__PURE__ */ _for_closure(0, $for_content__messages__OR__index);
const $for_content__setup = $for_content__messages;
const $for_content__index = /* @__PURE__ */ _const(4, $for_content__messages__OR__index);
const $for_content__message = ($scope, message) => _html($scope, message, "b");
const $for_content__$params = ($scope, $params2) => {
	$for_content__message($scope, $params2[0]);
	$for_content__index($scope, $params2[1]);
};
const $for = /* @__PURE__ */ _for_of(0, "<button> </button>", " D l", $for_content__setup, $for_content__$params);
const $messages = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c, (f) => f]);
	$for_content__messages($scope);
});
const $if = /* @__PURE__ */ _if(1, "<div> </div>", "D l", $if_content__setup);
const $last = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d !== void 0 ? 0 : 1);
	$if_content__last($scope);
});
