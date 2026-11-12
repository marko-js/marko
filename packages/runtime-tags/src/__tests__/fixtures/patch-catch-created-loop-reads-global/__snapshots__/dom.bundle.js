// template.marko
const $for_content__$global_label = /*@__PURE__*/ _global_for("a3", /* @__PURE__ */ _global_key(8, "label"), 1, ($scope) => _text($scope.b, $scope.$.label));
const $for_content__setup = ($scope) => {
	_text($scope.a, $scope.M);
	$for_content__$global_label($scope);
};
const $catch_content__for = /*@__PURE__*/ _for_until_unkeyed(1, "<i><!>:<!></i>", "D%c%", $for_content__setup);
const $catch_content__input_n = /*@__PURE__*/ _closure_get_patch("a4", 5, ($scope) => $catch_content__for($scope, [$scope._.d]), 0, "a7", 0);
const $catch_content__setup = $catch_content__input_n;
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a2", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $setup__script = _script("a6", ($scope) => document.body.dataset.ready = "1");
