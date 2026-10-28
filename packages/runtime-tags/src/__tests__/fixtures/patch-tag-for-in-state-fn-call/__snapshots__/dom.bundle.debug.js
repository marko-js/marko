// tags/card.marko
const $template$1 = "<!><!><button class=s>+</button>";
const $walks$1 = "b%b b";
const $if_content__s__OR__fmt__OR__v = /*@__PURE__*/ _fill_join_if("__tests__/tags/card.marko_fill2", "v", /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_2_s#0:7_fmt#0:8_v#1:4/init", 1, ($scope) => _text($scope["#text/0"], $scope._._.fmt($scope._.v + $scope._._.s)), 2), "#text/0", 0);
const $if_content__s = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_2_s#0:7/init", /*@__PURE__*/ _closure_get("s/10", $if_content__s__OR__fmt__OR__v, ($scope) => $scope._._, "__tests__/tags/card.marko_2_s#0:7/subscribe"));
const $if_content__setup = ($scope) => {
	$if_content__s($scope);
	$if_content__fmt($scope);
	$if_content__v._($scope);
};
const $if_content__fmt = /*@__PURE__*/ _closure_get("fmt/11", $if_content__s__OR__fmt__OR__v, ($scope) => $scope._._, "__tests__/tags/card.marko_2_fmt#0:8/subscribe");
const $if_content__v = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__s__OR__fmt__OR__v);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $for_content__input_sel = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_sel#0:6/init", /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_sel", /*@__PURE__*/ _for_selector("#text/0", "input_sel", "#LoopKey", ($scope) => $for_content__if($scope, $scope["#LoopKey"] === $scope._.input_sel ? 0 : 1))));
const $for_content__setup = $for_content__input_sel;
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for_content__v = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill2", "v", $if_content__v);
const $s__closure = /*@__PURE__*/ _closure($if_content__s);
const $s = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "s/7", $s__closure);
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup$1($scope) {
	$s($scope, 0);
	$setup__script$1($scope);
}
const $fmt2__closure = /*@__PURE__*/ _closure($if_content__fmt);
const $fmt2 = /*@__PURE__*/ _const("fmt", $fmt2__closure);
const $input_prefix$1 = /*@__PURE__*/ _const("input_prefix", ($scope) => $fmt2($scope, $fmt($scope)));
const $for = /*@__PURE__*/ _for_in("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_obj$1 = ($scope, input_obj) => $for($scope, [input_obj]);
const $input$1 = ($scope, input) => {
	$input_prefix$1($scope, input.prefix);
	$input_obj$1($scope, input.obj);
	$input_sel$1($scope, input.sel);
};
const $input_sel$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_sel", $for_content__input_sel);
const $fmt = ($scope) => (v) => $scope.input_prefix + v;
_bind_resume("__tests__/tags/card.marko_0/fmt input_prefix", $fmt);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=p>p</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $input_dyn__OR__input_prefix__OR__pre = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_prefix", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_dyn", /*@__PURE__*/ _or(9, ($scope) => $input_prefix$1($scope["#childScope/0"], $scope.input_dyn ? $scope.pre : $scope.input_prefix), 2)));
const $pre = /*@__PURE__*/ _let("pre/8", $input_dyn__OR__input_prefix__OR__pre);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$pre($scope, $scope.pre + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$pre($scope, "a");
	$setup__script($scope);
}
const $input_obj = ($scope, input_obj) => $input_obj$1($scope["#childScope/0"], input_obj);
const $input_sel = ($scope, input_sel) => $input_sel$1($scope["#childScope/0"], input_sel);
const $input_dyn = /*@__PURE__*/ _const("input_dyn", $input_dyn__OR__input_prefix__OR__pre);
const $input_prefix = /*@__PURE__*/ _const("input_prefix", $input_dyn__OR__input_prefix__OR__pre);
const $input = ($scope, input) => {
	$input_obj($scope, input.obj);
	$input_sel($scope, input.sel);
	$input_dyn($scope, input.dyn);
	$input_prefix($scope, input.prefix);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
