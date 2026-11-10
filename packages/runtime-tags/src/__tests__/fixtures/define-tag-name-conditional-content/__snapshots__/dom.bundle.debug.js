// template.marko
const $Wrapper_content__walks = " b%c";
const $Wrapper_content__template = "<button id=toggle>toggle</button><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Wrapper_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Wrapper_content__walks);
const $Wrapper_content2 = _content("__tests__/template.marko_2*content", "Hello");
const $Wrapper_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Wrapper_content__content__OR__open = /*@__PURE__*/ _or(6, ($scope) => $Wrapper_content__dynamicTag($scope, $scope.open ? $scope.content : undefined));
const $Wrapper_content__open = /*@__PURE__*/ _let("open/5", $Wrapper_content__content__OR__open);
const $Wrapper_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Wrapper_content__open($scope, !$scope.open);
}));
const $Wrapper_content__setup = ($scope) => {
	$Wrapper_content__open($scope, false);
	$Wrapper_content__setup__script($scope);
};
const $Wrapper_content__content = /*@__PURE__*/ _const("content", $Wrapper_content__content__OR__open);
const $Wrapper_content__$params = ($scope, $params2) => $Wrapper_content__$temp($scope, $params2[0]);
const $Wrapper_content__$temp = ($scope, $temp) => $Wrapper_content__content($scope, $temp.content);
function $setup($scope) {
	$Wrapper_content__setup($scope["#childScope/0"]);
	$Wrapper_content__content($scope["#childScope/0"], $Wrapper_content2($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
