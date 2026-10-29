// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $if_content2__f = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill("a4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e()))));
const $if_content2__setup = $if_content2__f;
const $if_content__input_a = /*@__PURE__*/ _fill("a8", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Show_content__v($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$scope.a._ = $scope._;
	$Show_content__setup($scope.a);
};
const $Show_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content2__setup);
const $Show_content__input_x = /*@__PURE__*/ _fill_closure("a7", 4, /*@__PURE__*/ _closure_get(7, ($scope) => $Show_content__if($scope, $scope._.e ? 0 : 1), 0, "a5"), 0);
const $Show_content__setup = $Show_content__input_x;
const $Show_content__f = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__f);
const $Show_content__v = /*@__PURE__*/ _const(3, ($scope) => $Show_content__f($scope, $f($scope)));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks), $if_content__setup);
const $show = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.g);
}));
const $f = ($scope) => function() {
	return $scope.d;
};
_bind_resume("a0 d", $f);
