// template.marko
const $Box_content2__walks = " b%c", $Box_content2__template = "<button>toggle</button><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content2__walks);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $Box_content2__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Box_content2__open = /*@__PURE__*/ _let("open/5", ($scope) => $Box_content2__if($scope, $scope.open ? 0 : 1));
const $Box_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Box_content2__open($scope, !$scope.open);
}));
const $Box_content2__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Box_content2__open($scope, false);
	$Box_content2__setup__script($scope);
});
const $Box_content2__tag_input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $Box_content2__$params = ($scope, $params2) => $Box_content2__input($scope, $params2[0]);
const $Box_content2__input = ($scope, input) => $Box_content2__tag_input_content($scope, input.content);
const $Box_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#3/subscribe");
const $Box_content__setup = $Box_content__input_label;
const $Box_content = _content("__tests__/template.marko_1*content", "label: <!>", "b%", $Box_content__setup);
function $setup($scope) {
	$Box_content2__setup._($scope["#childScope/0"], $scope);
	$Box_content2__tag_input_content($scope["#childScope/0"], $Box_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Box_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
