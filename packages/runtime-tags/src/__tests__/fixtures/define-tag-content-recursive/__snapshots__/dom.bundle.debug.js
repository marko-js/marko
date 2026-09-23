// template.marko
const $Tree_content2__walks = " D l%c", $Tree_content2__template = "<button> </button><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content2__walks);
const $Tree_content3__input_depth = /*@__PURE__*/ _closure_get("input_depth", ($scope) => _text($scope["#text/0"], $scope._._._.input_depth), ($scope) => $scope._._._);
const $Tree_content3__setup = ($scope) => {
	$Tree_content3__input_depth($scope);
	$Tree_content3__input_content($scope);
};
const $Tree_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Tree_content3__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $Tree_content3__dynamicTag($scope, $scope._._._.input_content), ($scope) => $scope._._._);
const $Tree_content3 = _content_resume("__tests__/template.marko_5*content", "<!>: <!><!>", "%c%", $Tree_content3__setup);
const $if_content2__input_depth = /*@__PURE__*/ _closure_get("input_depth", ($scope) => $Tree_content2__input_depth($scope["#childScope/0"], $scope._._.input_depth - 1), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__input_depth($scope);
	$Tree_content2__setup._($scope["#childScope/0"], $scope._._._);
	$Tree_content2__tag_input_content($scope["#childScope/0"], $Tree_content3($scope));
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content2__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content2__walks), $if_content2__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__if($scope, $scope._.input_depth ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_content._($scope);
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $Tree_content2__if = /*@__PURE__*/ _if("#text/2", "<!><!><!><!>", "b%b%", $if_content__setup);
const $Tree_content2__open = /*@__PURE__*/ _let("open/7", ($scope) => $Tree_content2__if($scope, $scope.open ? 0 : 1));
const $Tree_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Tree_content2__open($scope, !$scope.open);
}));
const $Tree_content2__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Tree_content2__open($scope, false);
	$Tree_content2__setup__script($scope);
});
const $Tree_content2__input_depth__closure = /*@__PURE__*/ _closure($if_content2__input_depth, $Tree_content3__input_depth);
const $Tree_content2__input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if_content__input_depth($scope);
	$Tree_content2__input_depth__closure($scope);
});
const $Tree_content2__tag_input_content__closure = /*@__PURE__*/ _closure($Tree_content3__input_content);
const $Tree_content2__tag_input_content = /*@__PURE__*/ _const("input_content", ($scope) => {
	$if_content__input_content($scope);
	$Tree_content2__tag_input_content__closure($scope);
});
const $Tree_content2__$params = ($scope, $params2) => $Tree_content2__input($scope, $params2[0]);
const $Tree_content2__input = ($scope, input) => {
	$Tree_content2__input_depth($scope, input.depth);
	$Tree_content2__tag_input_content($scope, input.content);
};
const $Tree_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $Tree_content__setup = $Tree_content__input_label;
const $Tree_content = _content_resume("__tests__/template.marko_1*content", "leaf <!>", "b%", $Tree_content__setup);
function $setup($scope) {
	$Tree_content2__setup._($scope["#childScope/0"], $scope);
	$Tree_content2__tag_input_content($scope["#childScope/0"], $Tree_content($scope));
	$Tree_content2__input_depth($scope["#childScope/0"], 2);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Tree_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
