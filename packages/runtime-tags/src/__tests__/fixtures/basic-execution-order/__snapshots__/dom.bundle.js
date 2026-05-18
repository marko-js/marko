// total: 5955 (min) 2742 (brotli)
// template.marko: 199 (min) 148 (brotli)
const $if_content__message_text = /* @__PURE__ */ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content__setup = $if_content__message_text;
const $message = /* @__PURE__ */ _let(2, ($scope) => $message_text($scope, $scope.c?.text));
const $message_text = /* @__PURE__ */ _const(3, $if_content__message_text);
const $if = /* @__PURE__ */ _if(1, " ", " b", $if_content__setup);
const $show = /* @__PURE__ */ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, null);
	$show($scope, false);
}));
