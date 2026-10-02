// template.marko
const $Foo_content__walks = "b%c";
const $Foo_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Foo_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Foo_content__walks);
const $else_content__input_message = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.input_message));
const $else_content__setup = $else_content__input_message;
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__Foo = /*@__PURE__*/ _closure_get("Foo/2", ($scope) => $if_content__dynamicTag($scope, 0 || $scope._._.Foo, () => ({ message: "done" })), ($scope) => $scope._._);
const $if_content__setup = $if_content__Foo;
const $Foo_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup, " ", " ", $else_content__setup);
const $Foo_content__input_depth = ($scope, input_depth) => $Foo_content__if($scope, input_depth ? 0 : 1);
const $Foo_content__tag_input_message = /*@__PURE__*/ _const("input_message", $else_content__input_message);
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input($scope, $params2[0]);
const $Foo_content__input = ($scope, input) => {
	$Foo_content__input_depth($scope, input?.depth);
	$Foo_content__tag_input_message($scope, input?.message);
};
const $Foo_content = _content("__tests__/template.marko_1*content", $Foo_content__template, $Foo_content__walks, 0, $Foo_content__$params);
const $Foo = /*@__PURE__*/ _const("Foo");
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Foo_content__input_depth($scope["#childScope/0"], 1);
	$Foo_content__tag_input_message($scope["#childScope/0"]);
	$Foo($scope, { content: $Foo_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
