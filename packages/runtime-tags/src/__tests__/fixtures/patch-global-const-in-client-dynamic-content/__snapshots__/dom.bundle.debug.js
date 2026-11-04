// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $A_content__h = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_h#0:3/subscribe", "h/6", ($scope) => _text($scope["#text/0"], $scope._.h), 0, "__tests__/template.marko_0_h#3/subscribers", 0);
const $A_content__setup = $A_content__h;
const $A_content = _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $A_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $open__OR__A = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.open ? $scope.A : null));
const $open = _let("open/2", $open__OR__A);
const $A = /*@__PURE__*/ _const("A", $open__OR__A);
const $h__closure = /*@__PURE__*/ _closure($A_content__h);
const $h = /*@__PURE__*/ _const("h", $h__closure);
const $setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_label#6", ($scope) => $h($scope, $scope.$global.label + "!"), "label");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$A($scope, { content: $A_content($scope) });
	$setup__$global_label($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
