// template.marko
const $await_content2__$params = ($scope, $params5) => _text($scope.a, $params5[0]);
const $global_label_key = /*@__PURE__*/ _global_key("label");
const $catch_content2__err_message = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.$.label + " " + $scope.e), /* @__PURE__ */ _global_closure($global_label_key, "a11")));
const $await_content2 = /*@__PURE__*/ _await_content(1, "<i> </i>", "D ");
const $catch_content2__await_promise = /*@__PURE__*/ _await_promise(1, $await_content2__$params);
const $global_p_key = /*@__PURE__*/ _global_key("p");
const $catch_content2__$global_p = /*@__PURE__*/ _global_closure($global_p_key, "a12", ($scope) => $catch_content2__await_promise($scope, $scope.$.p));
const $catch_content2__setup = ($scope) => {
	$await_content2($scope);
	$catch_content2__$global_p($scope);
};
const $catch_content2__$params = ($scope, $params4) => $catch_content2__err_message($scope, $params4[0]?.message);
const $catch_content2 = _content$1("a2", "<b> </b><!><!>", "D l%", $catch_content2__setup, $catch_content2__$params);
const $await_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $catch_content__err_message = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.$.label + " " + $scope.e), /* @__PURE__ */ _global_closure($global_label_key, "a8")));
const $await_content = /*@__PURE__*/ _await_content(1, "<i> </i>", "D ");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $catch_content__$global_p = /*@__PURE__*/ _global_closure($global_p_key, "a9", ($scope) => $catch_content__await_promise($scope, $scope.$.p));
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__$global_p($scope);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
