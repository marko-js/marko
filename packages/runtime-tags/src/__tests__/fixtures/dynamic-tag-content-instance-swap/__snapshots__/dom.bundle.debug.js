// tags/panel.marko
const $template$1 = "";
const $walks$1 = "";
const $section_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $section_content__setup = $section_content__input_label;
const $section_content = _content_resume("__tests__/tags/panel.marko_1_content", "<span> </span>", "D l", $section_content__setup);
const $section = /*@__PURE__*/ _const("section", ($scope) => _return($scope, { section: $scope.section }));
function $setup$1($scope) {
	$section($scope, { content: $section_content($scope) });
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($section_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", "", "", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<div><!></div><button>swap</button>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&0${_w1}&D%l b`)("", "");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4");
const $idx__OR__a__OR__b = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, ($scope.idx ? $scope.b : $scope.a).section), 2);
const $idx = /*@__PURE__*/ _let("idx/6", $idx__OR__a__OR__b);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$idx($scope, 1 - $scope.idx);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "alpha");
	_var($scope, "#childScope/2", $b);
	$setup$1($scope["#childScope/2"]);
	$input_label($scope["#childScope/2"], "beta");
	$idx($scope, 0);
	$setup__script($scope);
}
const $a = _var_resume("__tests__/template.marko_0_a/var", /*@__PURE__*/ _const("a", $idx__OR__a__OR__b));
const $b = _var_resume("__tests__/template.marko_0_b/var", /*@__PURE__*/ _const("b", $idx__OR__a__OR__b));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
