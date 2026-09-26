// template.marko
const $Item_content__walks = "b%b D l", $Item_content__template = "<!><!><button> </button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Item_content__tag_input_depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__depth._($scope);
	$Item_content__setup._($scope["#childScope/0"], $scope._._);
};
const $Item_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function(e) {
	e.target.textContent = `clicked ${$scope.depth}`;
}));
const $Item_content__setup = /*@__PURE__*/ _child_setup($Item_content__setup__script);
const $Item_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks), $if_content__setup);
const $Item_content__tag_input_depth = /*@__PURE__*/ _const("depth", ($scope) => {
	_text($scope["#text/2"], $scope.depth);
	$Item_content__if($scope, $scope.depth ? 0 : 1);
	$if_content__depth($scope);
});
const $Item_content__$params = ($scope, $params2) => $Item_content__$temp($scope, $params2?.[0]);
const $Item_content__$temp = ($scope, $temp) => $Item_content__tag_input_depth($scope, $temp.depth);
function $setup($scope) {
	$Item_content__setup._($scope["#childScope/0"], $scope);
	$Item_content__tag_input_depth($scope["#childScope/0"], 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
