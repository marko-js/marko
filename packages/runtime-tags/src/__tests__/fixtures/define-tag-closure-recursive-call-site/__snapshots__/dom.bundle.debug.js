// template.marko
const $Tree_content__walks = "D%b%l%c", $Tree_content__template = "<span><!><!></span><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button>deeper</button>${_w0}<!>`)($Tree_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($Tree_content__walks);
const $if_content__level = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $Tree_content__level($scope["#childScope/0"], $scope._.level + 1));
const $if_content__setup = ($scope) => {
	$if_content__level._($scope);
	$Tree_content__setup._($scope["#childScope/0"], $scope._._);
};
const $Tree_content__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__depth__OR__level = /*@__PURE__*/ _or(6, ($scope) => $Tree_content__if($scope, $scope.level < $scope._.depth ? 0 : 1));
const $Tree_content__depth = /*@__PURE__*/ _closure_get("depth", $Tree_content__depth__OR__level, 0, "__tests__/template.marko_1_depth#2/subscribe");
const $Tree_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Tree_content__depth($scope);
	$Tree_content__label($scope);
});
const $Tree_content__label = /*@__PURE__*/ _closure_get("label", ($scope) => _text($scope["#text/0"], $scope._.label));
const $Tree_content__level = /*@__PURE__*/ _const("level", ($scope) => {
	_text($scope["#text/1"], $scope.level);
	$Tree_content__depth__OR__level($scope);
	$if_content__level($scope);
});
const $Tree_content__$params = ($scope, $params2) => $Tree_content__$temp($scope, $params2?.[0]);
const $Tree_content__$temp = ($scope, $temp) => $Tree_content__level($scope, $temp.level);
const $depth__closure = /*@__PURE__*/ _closure($Tree_content__depth);
const $depth = /*@__PURE__*/ _let("depth/2", $depth__closure);
const $label = /*@__PURE__*/ _const("label");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$depth($scope, +$scope.depth + 1);
}));
function $setup($scope) {
	$Tree_content__setup._($scope["#childScope/1"], $scope);
	$Tree_content__level($scope["#childScope/1"], 1);
	$depth($scope, 1);
	$label($scope, "node");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
