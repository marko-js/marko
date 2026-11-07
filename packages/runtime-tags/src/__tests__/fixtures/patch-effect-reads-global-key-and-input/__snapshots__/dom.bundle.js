// template.marko
const $input_page__OR__$global_user_name__script = _script("a1", ($scope) => $scope.a.textContent = $scope.$.user.name + ":" + $scope.d);
const $input_page__OR__$global_user_name = /*@__PURE__*/ _or_patch("a2", 4, $input_page__OR__$global_user_name__script);
const $global_user_name = _fill_global_path("a0", $input_page__OR__$global_user_name, "user", "name");
