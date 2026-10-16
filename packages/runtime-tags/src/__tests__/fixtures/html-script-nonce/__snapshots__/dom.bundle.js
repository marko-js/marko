// template.marko
const $if_content__setup = ($scope) => _start_late($scope.a, "\n    D\n  ");
const $spreadAttrs__script = _script("a1", ($scope) => _attrs_script($scope, "c"));
const $if = /*@__PURE__*/ _if(3, "<script type=magic><\/script>", "! ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));
