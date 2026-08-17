// tags/l1/tags/l2/tags/l3/index.marko
const $template$2 = "<em> </em>";
const $input_note$2 = ($scope, input_note) => _text($scope.a, input_note);

// tags/l1/tags/l2/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
const $n = /*@__PURE__*/ _fill_let("c0", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_note$1 = ($scope, input_note) => $input_note$2($scope.c, input_note);

// tags/l1/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope.a);
}
const $input_note = ($scope, input_note) => $input_note$1($scope.a, input_note);

// template.marko
const $if_content__input_note = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_note($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
