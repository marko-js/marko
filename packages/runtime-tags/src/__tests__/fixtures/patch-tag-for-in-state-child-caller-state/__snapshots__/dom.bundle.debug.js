// tags/child.marko
const $template$2 = "<span><!><!><!></span>";
const $walks$2 = "D%b%b%l";
const $setup$2 = ($_) => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b$1 = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input$2 = ($scope, input) => {
	_text($scope["#text/2"], typeof input.get === "function" ? input.get() : "");
	$input_a($scope, input.a);
	$input_b$1($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, 0, $input$2);

// tags/shape.marko
const $template$1 = "<!><!><button></button>";
const $walks$1 = "b%b b";
const $if_content__input_b__OR__s__OR__v = /*@__PURE__*/ _fill_join_if("__tests__/tags/shape.marko_fill3", "v", /*@__PURE__*/ _fill_join("__tests__/tags/shape.marko_fill1", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/shape.marko_2_input_b#0:6_s#0:7_v#1:4/init", 1, ($scope) => $input$2($scope["#childScope/0"], {
	a: $scope._.v + $scope._._.s,
	b: $scope._._.input_b
}), 2), ($join) => /*@__PURE__*/ _for_closure("#text/0", /*@__PURE__*/ _if_closure("#text/0", 0, $join))), "#text/0", 0);
const $if_content__input_b = /*@__PURE__*/ _closure_get("input_b/9", $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "__tests__/tags/shape.marko_2_input_b#0:6/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__input_b($scope);
	$if_content__s($scope);
	$if_content__v._($scope);
};
const $if_content__s = /*@__PURE__*/ _init_resume("__tests__/tags/shape.marko_2_s#0:7/init", /*@__PURE__*/ _closure_get("s/10", $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "__tests__/tags/shape.marko_2_s#0:7/subscribe"));
const $if_content__v = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__s__OR__v);
const $for_content__if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
const $for_content__input_sel = /*@__PURE__*/ _init_resume("__tests__/tags/shape.marko_1_input_sel#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/shape.marko_fill0", "input_sel", /*@__PURE__*/ _for_selector("#text/0", "input_sel", "#LoopKey", ($scope) => $for_content__if($scope, $scope["#LoopKey"] === $scope._.input_sel ? 0 : 1))));
const $for_content__setup = $for_content__input_sel;
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for_content__v = /*@__PURE__*/ _fill_const("__tests__/tags/shape.marko_fill3", "v", $if_content__v);
const $s__closure = /*@__PURE__*/ _closure($if_content__s);
const $s = /*@__PURE__*/ _fill_let("__tests__/tags/shape.marko_fill2", "s/7", $s__closure);
const $setup__script$1 = _script("__tests__/tags/shape.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$s($scope, 0);
}
const $for = /*@__PURE__*/ _for_in("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_obj$1 = ($scope, input_obj) => $for($scope, [input_obj]);
const $input$1 = ($scope, input) => {
	$input_obj$1($scope, input.obj);
	$input_sel$1($scope, input.sel);
	$input_b($scope, input.b);
};
const $input_sel$1 = /*@__PURE__*/ _fill_const("__tests__/tags/shape.marko_fill0", "input_sel", $for_content__input_sel);
const $input_b__closure = /*@__PURE__*/ _closure($if_content__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/shape.marko_fill1", "input_b", $input_b__closure);
var shape_default = /*@__PURE__*/ _template("__tests__/tags/shape.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=b>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $b = _let("b/6", ($scope) => $input_b($scope["#childScope/1"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$b($scope, $scope.b + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$b($scope, "x");
	$setup__script($scope);
}
const $input_obj = ($scope, input_obj) => $input_obj$1($scope["#childScope/1"], input_obj);
const $input_sel = ($scope, input_sel) => $input_sel$1($scope["#childScope/1"], input_sel);
const $input = ($scope, input) => {
	$input_obj($scope, input.obj);
	$input_sel($scope, input.sel);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
