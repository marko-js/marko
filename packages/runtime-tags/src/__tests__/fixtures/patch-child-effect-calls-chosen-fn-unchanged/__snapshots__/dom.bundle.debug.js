// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $label = ($scope, label) => _text($scope["#text/0"], label);
const $fn__script = _script("__tests__/tags/child.marko_0_fn#3", ($scope) => $scope.fn());
const $fn = /*@__PURE__*/ _const("fn", $fn__script);
const $input$1 = ($scope, input) => {
	$fn($scope, input.fn);
	$label($scope, input.label);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&D m`)("D l");
const $flag = _let("flag/6", ($scope) => _text($scope["#text/1"], $scope.flag));
const $input_pick__OR__fa__OR__fb = /*@__PURE__*/ _or(9, ($scope) => $fn($scope["#childScope/0"], $scope.input_pick ? $scope.fa : $scope.fb), 2);
const $fa2 = /*@__PURE__*/ _const("fa", $input_pick__OR__fa__OR__fb);
const $fb2 = /*@__PURE__*/ _const("fb", $input_pick__OR__fa__OR__fb);
function $setup($scope) {
	$flag($scope, 0);
	$fa2($scope, $fa($scope));
	$fb2($scope, $fb($scope));
}
const $input_x = ($scope, input_x) => $label($scope["#childScope/0"], input_x);
const $input_pick = /*@__PURE__*/ _const("input_pick", $input_pick__OR__fa__OR__fb);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_pick($scope, input.pick);
};
const $fa = ($scope) => function() {
	$flag($scope, 1);
	const m = document.querySelector("main");
	m.dataset.a = String(+(m.dataset.a || 0) + 1);
};
const $fb = ($scope) => function() {
	$flag($scope, 2);
	const m = document.querySelector("main");
	m.dataset.b = String(+(m.dataset.b || 0) + 1);
};
_resumed["__tests__/template.marko_0/fa"] = $fa;
_resumed["__tests__/template.marko_0/fb"] = $fb;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
