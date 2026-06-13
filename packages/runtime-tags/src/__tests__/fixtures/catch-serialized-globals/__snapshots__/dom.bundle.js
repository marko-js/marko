// template.marko
_enable_catch();
const $catch_content__error_message__OR__message__OR__clicked = /* @__PURE__ */ _or(7, ($scope) => _text($scope.b, $scope.g ? $scope.f : $scope.e), 2);
const $catch_content__message = /* @__PURE__ */ _const(5, $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__clicked = /* @__PURE__ */ _let(6, $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content__clicked($scope, true);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__message($scope, $scope.$.settings.message);
	$catch_content__clicked($scope, false);
	$catch_content__setup__script($scope);
};
const $catch_content__error_message = /* @__PURE__ */ _const(4, $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__$params = ($scope, $params2) => $catch_content__error($scope, $params2[0]);
const $catch_content__error = ($scope, error) => $catch_content__error_message($scope, error?.message);
const $catch_content = _content_resume("a1", "<button> </button>", " D l", $catch_content__setup, $catch_content__$params);
