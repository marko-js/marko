// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $Box_content__label = /*@__PURE__*/ _closure_get("label/6", ($scope) => _text($scope["#text/0"], $scope._.label), 0, "__tests__/template.marko_1_label#0:3/subscribe");
const $Box_content__setup = $Box_content__label;
const $Box_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $Box_content__setup);
const $label__closure = /*@__PURE__*/ _closure($Box_content__label);
const $label = /*@__PURE__*/ _const("label", $label__closure);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $show__OR__Box = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.show ? $scope.Box : null));
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	$label($scope, $scope.show ? "on" : "off");
	$show__OR__Box($scope);
});
const $Box = /*@__PURE__*/ _const("Box", $show__OR__Box);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$Box($scope, { content: $Box_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
