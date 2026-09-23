// template.marko
const $Box_content__walks = " D%c%l", $Box_content__template = "<button class=box><!> <!></button>";
const $template = /*@__PURE__*/ ((_w0) => `<button id=toggle>toggle</button>${_w0}<!><!>`)($Box_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&%c`)($Box_content__walks);
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $useBoxBoxdiv_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "dynamic");
const $Box_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "static");
const $Box_content__count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $Box_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Box_content__count($scope, +$scope.count + 1);
}));
const $Box_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Box_content__count($scope, 0);
	$Box_content__setup__script($scope);
});
const $Box_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Box_content__input_content = $Box_content__dynamicTag;
const $Box_content__$params = ($scope, $params2) => $Box_content__input($scope, $params2[0]);
const $Box_content__input = ($scope, input) => $Box_content__input_content($scope, input?.content);
const $Box_content = _content_resume("__tests__/template.marko_1*content", $Box_content__template, $Box_content__walks, $Box_content__setup, $Box_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $useBoxBoxdiv_content);
const $useBox__OR__Box = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.useBox ? $scope.Box : "div"));
const $useBox = /*@__PURE__*/ _let("useBox/3", $useBox__OR__Box);
const $Box = /*@__PURE__*/ _const("Box", $useBox__OR__Box);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$useBox($scope, !$scope.useBox);
}));
function $setup($scope) {
	$Box_content__setup._($scope["#childScope/1"], $scope);
	$input_content_direct($scope["#childScope/1"], $Box_content2($scope));
	$useBox($scope, false);
	$Box($scope, { content: $Box_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
