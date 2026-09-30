// child.marko
const $template = "<span class=child>c</span>";
const $walks = "b";
const $setup = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b");

// template.marko
const $template = "<button>Show</button><!><!>";
const $walks = " b%c";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $dynamicTag($scope, $scope.show ? Child : null, () => ({ value: 1 })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
