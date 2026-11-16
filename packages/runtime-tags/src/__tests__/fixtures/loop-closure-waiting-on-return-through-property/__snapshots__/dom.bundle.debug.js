// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, { list: [$scope.input_x + $scope.input_y] }));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", $input_x__OR__input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>inc</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $for_content__other__OR__item = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.item + $scope._.other));
const $for_content__other = /*@__PURE__*/ _for_closure("#text/2", $for_content__other__OR__item, 9, "#scopeOffset/1");
const $for_content__setup = $for_content__other;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__other__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => $input_x($scope["#childScope/0"], $scope.count));
const $other = /*@__PURE__*/ _let("other/5", ($scope) => {
	$input_y($scope["#childScope/0"], $scope.other);
	$for_content__other($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
	$other($scope, +$scope.other + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$count($scope, 0);
	$other($scope, 1);
	$setup__script($scope);
}
const $o = ($scope, o) => $for($scope, [o.list]);
const $r = _var_resume("__tests__/template.marko_0_r#6/var", ($scope, r) => $o($scope, { ...r }));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
