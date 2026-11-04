// template.marko
const $Inner_content__walks = " D l";
const $Inner_content__template = "<button> </button>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Outer_content__template = $Inner_content__template;
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($Outer_content__walks);
const $Outer_content__fn = ($scope, fn) => $Inner_content__fn($scope["#childScope/0"], fn);
const $Outer_content__label = ($scope, label) => $Inner_content__label($scope["#childScope/0"], label);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__fn($scope, $temp2.fn);
	$Outer_content__label($scope, $temp2.label);
};
const $Inner_content__fn__script = _script("__tests__/template.marko_1_fn#4", ($scope) => _on($scope["#button/0"], "click", $scope.fn));
const $Inner_content__fn = /*@__PURE__*/ _const("fn", $Inner_content__fn__script);
const $Inner_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__fn($scope, $temp.fn);
	$Inner_content__label($scope, $temp.label);
};
const $input_step__OR__n = /*@__PURE__*/ _or(7, ($scope) => $Outer_content__fn($scope["#childScope/0"], $fn($scope)));
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_step__OR__n($scope);
});
function $setup($scope) {
	$n($scope, 0);
}
const $input_step = /*@__PURE__*/ _const("input_step", $input_step__OR__n);
const $input_label = ($scope, input_label) => $Outer_content__label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_step($scope, input.step);
	$input_label($scope, input.label);
};
const $fn = ($scope) => function() {
	$n($scope, $scope.n + $scope.input_step);
};
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
