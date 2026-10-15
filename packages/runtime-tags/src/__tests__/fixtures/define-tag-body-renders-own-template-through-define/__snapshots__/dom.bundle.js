// tags/tree.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<b> </b>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($Label_content__walks);
const $Child_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks);
const $Child_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template);
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks);
const $Level_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $Level_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Child_content__setup._($scope.a, $scope._));
const $Level_content__depth = ($scope, depth) => $Child_content__depth($scope.a, depth);
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => $setup($scope.a));
const $Child_content__depth = ($scope, depth) => $input_depth($scope.a, depth - 1);
const $Label_content__depth = ($scope, depth) => _text($scope.a, depth);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $Level_content__depth($scope.a, $scope._.g));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$Level_content__setup._($scope.a, $scope._);
};
const $if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks), $if_content__setup);
const $input_depth__OR__open = /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.h && $scope.g ? 0 : 1));
const $open = /*@__PURE__*/ _let(7, $input_depth__OR__open);
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input_depth = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$Label_content__depth($scope.d, $scope.g);
	$input_depth__OR__open($scope);
	$if_content__input_depth($scope);
});
