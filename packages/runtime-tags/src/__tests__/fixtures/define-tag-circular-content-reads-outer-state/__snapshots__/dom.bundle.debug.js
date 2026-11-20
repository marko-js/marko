// template.marko
const $Outer_content__walks = " D l%b%c";
const $Outer_content__template = "<button> </button><!><!><!>";
const $Inner_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Outer_content__walks);
const $Inner_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Outer_content__template);
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Outer_content__walks);
const $Inner_content2__label = /*@__PURE__*/ _closure_get("label/12", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_5_label#1:9/subscribe");
const $Inner_content2__setup = $Inner_content2__label;
const $Inner_content2 = _content_resume("__tests__/template.marko_5*content", "<em>held <!></em>", "Db%", $Inner_content2__setup);
const $if_content2__input_depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $Inner_content__inner_depth($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content2__setup = ($scope) => {
	$if_content2__input_depth._($scope);
	$Inner_content__setup($scope["#childScope/0"]);
	$Inner_content__inner_content($scope["#childScope/0"], $Inner_content2($scope));
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $Inner_content__setup = ($scope) => $Outer_content__setup($scope["#childScope/0"]);
const $Inner_content__inner_depth = ($scope, inner_depth) => $Outer_content__tag_input_depth($scope["#childScope/0"], inner_depth);
const $Inner_content__inner_content = ($scope, inner_content) => $Outer_content__tag_input_content($scope["#childScope/0"], inner_content);
const $Inner_content__$params = ($scope, $params3) => $Inner_content__inner($scope, $params3[0]);
const $Inner_content__inner = ($scope, inner) => {
	$Inner_content__inner_depth($scope, inner.depth);
	$Inner_content__inner_content($scope, inner.content);
};
const $Outer_content__label__closure = /*@__PURE__*/ _closure($Inner_content2__label);
const $Outer_content__label = /*@__PURE__*/ _const("label", $Outer_content__label__closure);
const $Outer_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $Outer_content__shown = /*@__PURE__*/ _let("shown/8", ($scope) => {
	$Outer_content__label($scope, $scope.shown ? "on" : "off");
	$Outer_content__if($scope, $scope.shown ? 0 : 1);
});
const $Outer_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Outer_content__shown($scope, !$scope.shown);
}));
const $Outer_content__setup = ($scope) => {
	$Outer_content__shown($scope, false);
	$Outer_content__setup__script($scope);
};
const $Outer_content__if2 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Inner_content__walks), $if_content2__setup);
const $Outer_content__tag_input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$Outer_content__if2($scope, $scope.input_depth < 1 ? 0 : 1);
	$if_content2__input_depth($scope);
});
const $Outer_content__tag_input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $Outer_content__$params = ($scope, $params2) => $Outer_content__input($scope, $params2[0]);
const $Outer_content__input = ($scope, input) => {
	$Outer_content__tag_input_depth($scope, input.depth);
	$Outer_content__tag_input_content($scope, input.content);
};
function $setup($scope) {
	$Outer_content__setup($scope["#childScope/0"]);
	$Outer_content__tag_input_depth($scope["#childScope/0"], 0);
	$Outer_content__tag_input_content($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
