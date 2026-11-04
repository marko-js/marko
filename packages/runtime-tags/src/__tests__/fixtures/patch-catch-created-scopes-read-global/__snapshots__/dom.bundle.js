// tags/show-label.marko
const $template = "<i> </i>";
const $setup__$global_label = /*@__PURE__*/ _fill_global("b0", ($scope) => _text($scope.a, $scope.$.label), "label");
const $setup = $setup__$global_label;

// template.marko
const $Label_content__walks = "D%c%l";
const $Label_content__template = "<i><!>:<!></i>";
const $for_content__setup__$global_label = /*@__PURE__*/ _fill_global_for("a2", 1, ($scope) => _text($scope.b, $scope.$.label), "label");
const $for_content__setup = ($scope) => {
	$for_content__setup__$global_label($scope);
	_text($scope.a, $scope.M);
};
const $Label_content__x = ($scope, x) => _text($scope.a, x);
const $Label_content__setup = /* @__PURE__ */ _fill_global("a1", ($scope) => _text($scope.b, $scope.$.label), "label");
const $if_content__for = /*@__PURE__*/ _for_until_unkeyed(1, "<s><!>:<!></s>", "D%c%", $for_content__setup);
const $if_content__input_n = /*@__PURE__*/ _closure_get_patch("a8", 7, ($scope) => $if_content__for($scope, [$scope._._.e]), ($scope) => $scope._._, "a15", 0);
const $if_content__setup__$global_label = /*@__PURE__*/ _fill_global("a7", ($scope) => _text($scope.a, $scope.$.label), "label");
const $if_content__setup = ($scope) => {
	$if_content__input_n($scope);
	$if_content__setup__$global_label($scope);
};
const $catch_content__if = /*@__PURE__*/ _if(5, "<u> </u><!><!>", "D l%", $if_content__setup);
const $catch_content__input_show = /*@__PURE__*/ _closure_get_patch("a11", 6, ($scope) => $catch_content__if($scope, $scope._.d ? 0 : 1), 0, "a14", 0);
const $catch_content__count = /*@__PURE__*/ _fill_let("a12", 9, /* @__PURE__ */ _fill_global("a9", ($scope) => _text($scope.c, $scope.j + ":" + $scope.$.label), "label"));
const $catch_content__setup__script = _script("a10", ($scope) => _on($scope.b, "click", function() {
	$catch_content__count($scope, +$scope.j + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__input_show($scope);
	$setup($scope.d);
	$Label_content__setup($scope.e);
	$Label_content__x($scope.e, 1);
	$catch_content__setup__script($scope);
	$catch_content__count($scope, 0);
};
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a5", /*@__PURE__*/ ((_w0, _w1) => `<b> </b><em> </em>${_w0}${_w1}<!><!>`)($template, $Label_content__template), /*@__PURE__*/ ((_w0, _w1) => `D l D l/${_w0}&/${_w1}&%c`)("D l", $Label_content__walks), $catch_content__setup, $catch_content__$params);
