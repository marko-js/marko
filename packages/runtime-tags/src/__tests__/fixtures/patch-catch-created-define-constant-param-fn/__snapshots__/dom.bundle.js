// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $if_content__setup = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e()));
const $catch_content__setup = ($scope) => {
	$D_content__setup($scope.b);
	$D_content__on($scope.b, true);
};
const $catch_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]?.message);
const $catch_content = _content$1("a1", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($D_content__walks), $catch_content__setup, $catch_content__$params);
const $D_content__f = /*@__PURE__*/ _const(4);
const $D_content__setup = ($scope) => $D_content__f($scope, function() {
	return "A";
});
const $D_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
