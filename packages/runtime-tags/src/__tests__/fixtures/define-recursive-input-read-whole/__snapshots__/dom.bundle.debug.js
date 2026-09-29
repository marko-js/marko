// template.marko
const $Tree_content__walks = "b%bD l";
const $Tree_content__template = "<!><!><span> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>deeper</button>`)($Tree_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Tree_content__walks);
const $if_content__input_depth__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => $Tree_content__tag_input($scope["#childScope/0"], {
	depth: $scope._.input_depth - 1,
	label: $scope._.input_label
}));
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_depth__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_depth__OR__input_label);
const $Tree_content__tag_input = ($scope, input) => {
	$Tree_content__input_depth($scope, input.depth);
	$Tree_content__input_label($scope, input.label);
};
const $Tree_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$Tree_content__if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $Tree_content__input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/1"], $scope.input_label);
	$if_content__input_label($scope);
});
const $Tree_content__$params = ($scope, $params2) => $Tree_content__tag_input($scope, $params2[0]);
const $depth = /*@__PURE__*/ _let("depth/2", ($scope) => $Tree_content__input_depth($scope["#childScope/0"], $scope.depth));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$depth($scope, +$scope.depth + 1);
}));
function $setup($scope) {
	$Tree_content__input_label($scope["#childScope/0"], "x");
	$depth($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
