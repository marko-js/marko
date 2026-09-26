// template.marko
const $Inner_content__walks = " b%c", $Inner_content__template = "<button>toggle</button><!><!>", $Outer_content2__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks), $Outer_content2__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content2__walks);
const $Inner_content2__outer_label = /*@__PURE__*/ _closure_get("outer_label/5", ($scope) => _text($scope["#text/0"], $scope._.outer_label), 0, "__tests__/template.marko_5_outer_label#3/subscribe");
const $Inner_content2__setup = ($scope) => {
	$Inner_content2__outer_label($scope);
	$Inner_content2__outer_content($scope);
};
const $Inner_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Inner_content2__outer_content = /*@__PURE__*/ _closure_get("outer_content/6", ($scope) => $Inner_content2__dynamicTag($scope, $scope._.outer_content), 0, "__tests__/template.marko_5_outer_content#4/subscribe");
const $Inner_content2 = _content("__tests__/template.marko_5*content", "outer <!>: <!><!>", "b%c%", $Inner_content2__setup);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $Outer_content2__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Inner_content__setup._($scope["#childScope/0"], $scope._);
	$Inner_content__tag_input_content($scope["#childScope/0"], $Inner_content2($scope));
});
const $Outer_content2__tag_input_content__closure = /*@__PURE__*/ _closure($Inner_content2__outer_content);
const $Outer_content2__tag_input_content = /*@__PURE__*/ _const("outer_content", $Outer_content2__tag_input_content__closure);
const $Outer_content2__tag_input_label__closure = /*@__PURE__*/ _closure($Inner_content2__outer_label);
const $Outer_content2__tag_input_label = /*@__PURE__*/ _const("outer_label", $Outer_content2__tag_input_label__closure);
const $Outer_content2__$params = ($scope, $params3) => $Outer_content2__outer($scope, $params3[0]);
const $Outer_content2__outer = ($scope, outer) => {
	$Outer_content2__tag_input_label($scope, outer.label);
	$Outer_content2__tag_input_content($scope, outer.content);
};
const $Inner_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Inner_content__open = /*@__PURE__*/ _let("open/5", ($scope) => $Inner_content__if($scope, $scope.open ? 0 : 1));
const $Inner_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Inner_content__open($scope, !$scope.open);
}));
const $Inner_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Inner_content__open($scope, false);
	$Inner_content__setup__script($scope);
});
const $Inner_content__tag_input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__input($scope, $params2[0]);
const $Inner_content__input = ($scope, input) => $Inner_content__tag_input_content($scope, input.content);
const $Outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#3/subscribe");
const $Outer_content__setup = $Outer_content__input_label;
const $Outer_content = _content("__tests__/template.marko_1*content", "label: <!>", "b%", $Outer_content__setup);
function $setup($scope) {
	$Outer_content2__setup._($scope["#childScope/0"], $scope);
	$Outer_content2__tag_input_content($scope["#childScope/0"], $Outer_content($scope));
}
const $input_label__closure = /*@__PURE__*/ _closure($Outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$Outer_content2__tag_input_label($scope["#childScope/0"], $scope.input_label);
	$input_label__closure($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
