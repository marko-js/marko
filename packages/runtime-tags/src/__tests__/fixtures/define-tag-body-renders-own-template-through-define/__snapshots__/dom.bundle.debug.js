// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/tree.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<b> </b>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($Label_content__walks);
const $Child_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks);
const $Child_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template);
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks);
const $Level_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $Level_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Child_content__setup._($scope["#childScope/0"], $scope._));
const $Level_content__depth = ($scope, depth) => $Child_content__depth($scope["#childScope/0"], depth);
const $Level_content__$params = ($scope, $params4) => $Level_content__$temp($scope, $params4[0]);
const $Level_content__$temp = ($scope, $temp3) => $Level_content__depth($scope, $temp3.depth);
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => $setup($scope["#childScope/0"]));
const $Child_content__depth = ($scope, depth) => $input_depth($scope["#childScope/0"], depth - 1);
const $Child_content__$params = ($scope, $params3) => $Child_content__$temp($scope, $params3[0]);
const $Child_content__$temp = ($scope, $temp2) => $Child_content__depth($scope, $temp2.depth);
const $Label_content__depth = ($scope, depth) => _text($scope["#text/0"], depth);
const $Label_content__$params = ($scope, $params2) => $Label_content__$temp($scope, $params2[0]);
const $Label_content__$temp = ($scope, $temp) => $Label_content__depth($scope, $temp.depth);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $Level_content__depth($scope["#childScope/0"], $scope._.input_depth));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$Level_content__setup._($scope["#childScope/0"], $scope._);
};
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks), $if_content__setup);
const $input_depth__OR__open = /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.open && $scope.input_depth ? 0 : 1));
const $open = /*@__PURE__*/ _let("open/7", $input_depth__OR__open);
const $setup__script = _script("__tests__/tags/tree.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$Label_content__depth($scope["#childScope/3"], $scope.input_depth);
	$input_depth__OR__open($scope);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template, $walks, $setup, $input);
