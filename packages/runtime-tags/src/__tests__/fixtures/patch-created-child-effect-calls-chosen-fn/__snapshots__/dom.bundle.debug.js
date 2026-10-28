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
const $template = "<main><!><p> </p></main>";
const $walks = "D%bD m";
const $if_content__input_x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_x#0:5/init", /*@__PURE__*/ _fill_signal("input_x __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $label($scope["#childScope/0"], $scope._.input_x))));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__input_pick._($scope);
	$if_content__fa._($scope);
	$if_content__fb._($scope);
};
const $if_content__input_pick__OR__fa__OR__fb = /*@__PURE__*/ _fill_signal("input_pick __tests__/template.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_pick#0:6_fa#0:8_fb#0:9/init", 1, ($scope) => $fn($scope["#childScope/0"], $scope._.input_pick ? $scope._.fa : $scope._.fb), 2), _if_closure, "#text/0", 0);
const $if_content__input_pick = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_pick__OR__fa__OR__fb);
const $if_content__fa = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_pick__OR__fa__OR__fb);
const $if_content__fb = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_pick__OR__fa__OR__fb);
const $flag = /*@__PURE__*/ _let("flag/7", ($scope) => _text($scope["#text/1"], $scope.flag));
const $fa2 = /*@__PURE__*/ _const("fa");
const $fb2 = /*@__PURE__*/ _const("fb");
function $setup($scope) {
	$flag($scope, 0);
	$fa2($scope, $fa($scope));
	$fb2($scope, $fb($scope));
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_x($scope, input.x);
	$input_pick($scope, input.pick);
};
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $if_content__input_x);
const $input_pick = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_pick", $if_content__input_pick);
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
