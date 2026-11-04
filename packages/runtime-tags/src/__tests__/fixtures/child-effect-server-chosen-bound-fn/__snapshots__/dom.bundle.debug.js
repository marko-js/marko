// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_fn__OR__input_v__script = _script("__tests__/tags/child.marko_0_fn#2_v#3", ($scope) => $scope.fn($scope.v));
const $input_fn__OR__input_v = /*@__PURE__*/ _or(4, $input_fn__OR__input_v__script);
const $fn = /*@__PURE__*/ _const("fn", $input_fn__OR__input_v);
const $v = /*@__PURE__*/ _const("v", $input_fn__OR__input_v);
const $input$1 = ($scope, input) => {
	$fn($scope, input.fn);
	$v($scope, input.v);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("");
const $last = /*@__PURE__*/ _let("last/6", ($scope) => _text($scope["#text/1"], $scope.last));
const $input_pick__OR__fa__OR__fb = /*@__PURE__*/ _or(9, ($scope) => $fn($scope["#childScope/0"], $scope.input_pick ? $scope.fa : $scope.fb), 2);
const $fa2 = /*@__PURE__*/ _const("fa", $input_pick__OR__fa__OR__fb);
const $fb2 = /*@__PURE__*/ _const("fb", $input_pick__OR__fa__OR__fb);
function $setup($scope) {
	$last($scope, "none");
	$fa2($scope, $fa($scope));
	$fb2($scope, $fb($scope));
}
const $input_x = ($scope, input_x) => $v($scope["#childScope/0"], input_x);
const $input_pick = /*@__PURE__*/ _const("input_pick", $input_pick__OR__fa__OR__fb);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_pick($scope, input.pick);
};
const $fa = ($scope) => function(v) {
	$last($scope, "a" + v);
};
const $fb = ($scope) => function(v) {
	$last($scope, "b" + v);
};
_resumed["__tests__/template.marko_0/fa"] = $fa;
_resumed["__tests__/template.marko_0/fb"] = $fb;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
