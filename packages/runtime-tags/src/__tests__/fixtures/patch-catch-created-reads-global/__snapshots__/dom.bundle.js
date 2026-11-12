// template.marko
const $await_content2__$params = ($scope, $params5) => _text($scope.a, $params5[0]);
const $global_label_key = /*@__PURE__*/ _global_key(9, "label");
const $catch_content2__$global_label = /*@__PURE__*/ _global_closure("a11", $global_label_key);
const $catch_content2__err_message = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(5, ($scope) => _text($scope.a, $scope.$.label + " " + $scope.e), $catch_content2__$global_label));
const $await_content2 = /*@__PURE__*/ _await_content(1, "<i> </i>", "D ");
const $catch_content2__await_promise = /*@__PURE__*/ _await_promise(1, $await_content2__$params);
const $global_p_key = /*@__PURE__*/ _global_key(10, "p");
const $catch_content2__$global_p = /*@__PURE__*/ _global_closure("a12", $global_p_key, ($scope) => $catch_content2__await_promise($scope, $scope.$.p));
const $catch_content2__setup = ($scope) => {
	$await_content2($scope);
	$catch_content2__$global_label($scope);
	$catch_content2__$global_p($scope);
};
const $catch_content2__$params = ($scope, $params4) => $catch_content2__err_message($scope, $params4[0]?.message);
const $catch_content2 = _content$1("a2", "<b> </b><!><!>", "D l%", $catch_content2__setup, $catch_content2__$params);
const $await_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $catch_content__$global_label = /*@__PURE__*/ _global_closure("a8", $global_label_key);
const $catch_content__err_message = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(5, ($scope) => _text($scope.a, $scope.$.label + " " + $scope.e), $catch_content__$global_label));
const $await_content = /*@__PURE__*/ _await_content(1, "<i> </i>", "D ");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $catch_content__$global_p = /*@__PURE__*/ _global_closure("a9", $global_p_key, ($scope) => $catch_content__await_promise($scope, $scope.$.p));
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__$global_label($scope);
	$catch_content__$global_p($scope);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $setup__script = _script("a14", ($scope) => document.body.dataset.ready = "1");
