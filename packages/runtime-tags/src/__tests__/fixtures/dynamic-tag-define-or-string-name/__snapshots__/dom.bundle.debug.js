// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $showFoodiv_content = _content_resume("__tests__/template.marko_3*content", "body");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $Foo_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Foo_content__open = /*@__PURE__*/ _let("open/5", ($scope) => $Foo_content__if($scope, $scope.open ? 0 : 1));
const $Foo_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Foo_content__open($scope, true);
}));
const $Foo_content__setup = ($scope) => {
	$Foo_content__open($scope, false);
	$Foo_content__setup__script($scope);
};
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input_content($scope, $params2[0]?.content);
const $Foo_content__input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
const $Foo_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button id=open>open</button><!><!>", " b%", $Foo_content__setup, $Foo_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $showFoodiv_content);
const $show__OR__Foo = /*@__PURE__*/ _or(3, ($scope) => $dynamicTag($scope, $scope.show ? $scope.Foo : "div"));
const $show = /*@__PURE__*/ _let("show/1", $show__OR__Foo);
const $Foo = /*@__PURE__*/ _const("Foo", $show__OR__Foo);
function $setup($scope) {
	$show($scope, true);
	$Foo($scope, { content: $Foo_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
