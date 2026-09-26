// template.marko
const $Rec_content__walks = "b%b D l", $Rec_content__template = "<!><!><button> </button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Rec_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Rec_content__walks);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Rec_content__tag_input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__child);
	$if_content__input_depth._($scope);
	$Rec_content__setup._($scope["#childScope/0"], $scope._._);
};
const $if_content__child = _var_resume("__tests__/template.marko_2_child#3/var", ($scope, child) => _text($scope["#text/2"], child));
const $Rec_content__n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_return($scope, $scope.n);
});
const $Rec_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$Rec_content__n($scope, +$scope.n + 1);
}));
const $Rec_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Rec_content__n($scope, 0);
	$Rec_content__setup__script($scope);
});
const $Rec_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<span> </span>`)($Rec_content__template), /*@__PURE__*/ ((_w0) => `b0${_w0}&D l`)($Rec_content__walks), $if_content__setup);
const $Rec_content__tag_input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$Rec_content__if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $Rec_content__$params = ($scope, $params2) => $Rec_content__input($scope, $params2[0]);
const $Rec_content__input = ($scope, input) => $Rec_content__tag_input_depth($scope, input.depth);
function $setup($scope) {
	$Rec_content__setup._($scope["#childScope/0"], $scope);
	$Rec_content__tag_input_depth($scope["#childScope/0"], 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
