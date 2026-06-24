// tags/my-for.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $for_content__input_content__OR__args = /*@__PURE__*/ _or(2, ($scope) => $for_content__dynamicTag($scope, $scope._.input_content, () => [...$scope.$params2]));
const $for_content__input_content = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_content__OR__args);
const $for_content__setup = $for_content__input_content;
const $for_content__$params = /*@__PURE__*/ _const("$params2", $for_content__input_content__OR__args);
const $for = /*@__PURE__*/ _for_to("#text/0", "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $input_to = ($scope, input_to) => $for($scope, [
	input_to,
	0,
	1
]);
const $input = ($scope, input) => {
	$input_to($scope, input.to);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $for_content__input_content);
var my_for_default = /*@__PURE__*/ _template("__tests__/tags/my-for.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $myfor_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $myfor_content__$params = ($scope, $params2) => $myfor_content__i($scope, $params2[0]);
const $myfor_content = _content_resume("__tests__/template.marko_1_content", " ", " b", 0, $myfor_content__$params);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $myfor_content($scope));
	$input_to($scope["#childScope/0"], 5);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
