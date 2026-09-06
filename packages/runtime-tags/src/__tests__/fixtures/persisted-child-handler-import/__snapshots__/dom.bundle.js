// tags/widget/helper.ts
function format(label) {
	return `!${label}!`;
}

// tags/widget/index.marko
const $template = "<p><!><!></p><button class=run>run</button>";
const $walks = "D%b%l b";
const $last = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$last($scope, format($scope.f));
}));
function $setup($scope) {
	$last($scope, "");
	$setup__script$1($scope);
}
const $input_label = /*@__PURE__*/ _const(5, ($scope) => _text($scope.a, $scope.f));

// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
