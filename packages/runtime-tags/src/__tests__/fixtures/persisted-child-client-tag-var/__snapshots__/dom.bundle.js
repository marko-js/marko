// tags/widget/index.marko
const $template = "<em><!> x<!></em><button class=bump>+</button>";
const $walks = "D%c%l b";
const $count = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => {
	_text($scope.b, $scope.g);
	_return($scope, $scope.g);
});
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script$1($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, 0, $if_content__w);
	$setup($scope.a);
};
const $if_content__w = _var_resume("a0", ($scope, w) => _text($scope.c, w));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<p class=echo> </p>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
