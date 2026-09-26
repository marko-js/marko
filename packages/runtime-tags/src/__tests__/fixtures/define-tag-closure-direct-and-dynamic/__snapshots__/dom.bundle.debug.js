// template.marko
const $Box_content__walks = " b", $Box_content__template = "<div></div>";
const $template = "<button>toggle</button><!><!><!>";
const $walks = " b%b%c";
const $if_content__setup = ($scope) => {
	$Box_content__setup._($scope["#childScope/0"], $scope._);
};
const $Box_content__attrs_class = /*@__PURE__*/ _closure_get("attrs_class/8", ($scope) => _attr_class($scope["#div/0"], $scope._.attrs_class));
const $Box_content__setup = /*@__PURE__*/ _child_setup($Box_content__attrs_class);
const $Box_content = _content("__tests__/template.marko_1*content", $Box_content__template, $Box_content__walks, $Box_content__setup);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks), $if_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $show__OR__Box = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.show ? $scope.Box : null));
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__OR__Box($scope);
});
const $attrs = ($scope, attrs) => $attrs_class($scope, attrs.class);
const $Box = /*@__PURE__*/ _const("Box", $show__OR__Box);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$attrs($scope, { class: "a" });
	$Box($scope, { content: $Box_content($scope) });
	$setup__script($scope);
}
const $attrs_class = /*@__PURE__*/ _const("attrs_class");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
