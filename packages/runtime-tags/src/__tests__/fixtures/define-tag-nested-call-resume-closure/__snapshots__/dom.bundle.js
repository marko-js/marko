// template.marko
const $E_content__walks = "D l";
const $E_content__template = "<span> </span>";
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._._;
	$E_content__setup($scope.a);
};
const $D_content__if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($E_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($E_content__walks), $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $E_content__input_x = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a1");
const $E_content__setup = $E_content__input_x;
const $on = /*@__PURE__*/ _let(5, ($scope) => $D_content__on($scope.b, $scope.f));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
