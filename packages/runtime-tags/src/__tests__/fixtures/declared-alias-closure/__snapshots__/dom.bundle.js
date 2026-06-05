// template.marko
const $Child_content2__input__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $if_content__value_class = /* @__PURE__ */ _closure_get(2, ($scope) => _attr_class($scope.a, $scope._._.c), ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__value_class($scope);
	$if_content__text($scope);
};
const $if_content__text = /* @__PURE__ */ _closure_get(3, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._);
const $Child_content__if = /* @__PURE__ */ _if(0, "<span> </span>", " D l", $if_content__setup);
const $Child_content = _content_resume("a2", "<!><!><!>", "b%c", /* @__PURE__ */ _closure_get(1, ($scope) => $Child_content__if($scope, $scope._.b ? 0 : 1)));
