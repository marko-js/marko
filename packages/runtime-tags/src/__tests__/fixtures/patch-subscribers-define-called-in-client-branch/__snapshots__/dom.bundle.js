// tags/panel.marko
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Info_content__setup($scope.a);
};
const $frame_content__input_n = /*@__PURE__*/ _closure_get_patch("c6", 7, ($scope) => _text($scope.b, $scope._.e), 0, "c7", 1);
const $frame_content__setup = $frame_content__input_n;
const $frame_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $frame_content = _content$1("c5", "<p><!> <!></p>", "D%c%", $frame_content__setup, $frame_content__$params);
const $Info_content__input_n__OR__twice__script = _script_patch("c1 >e a", ($scope) => console.log("effect", $scope._.e, $scope.a));
const $Info_content__input_n__OR__twice = /*@__PURE__*/ _or_patch("c3", 1, $Info_content__input_n__OR__twice__script);
const $Info_content__twice = /*@__PURE__*/ _const(0, $Info_content__input_n__OR__twice);
const $Info_content__input_n = /*@__PURE__*/ _closure_get_patch("c2", 7, ($scope) => {
	$Info_content__twice($scope, $scope._.e * 2);
	$Info_content__input_n__OR__twice($scope);
}, 0, "c7", 0);
const $Info_content__setup = $Info_content__input_n;
const $if = /*@__PURE__*/ _if(0, 0, "/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $shown = _let(8, ($scope) => $input_show($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$shown($scope, !$scope.i);
}));
