// tags/baz.marko
const $template$2 = "<div>baz</div>";
const $walks$2 = "b";
const $setup$2 = () => {};
var baz_default = /*@__PURE__*/ _template("__tests__/tags/baz.marko", $template$2, "b", $setup$2);

// tags/foo.marko
const $template$1 = "<div>foo</div>";
const $walks$1 = "b";
const $setup$1 = () => {};
var foo_default = /*@__PURE__*/ _template("__tests__/tags/foo.marko", $template$1, "b", $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $x = /*@__PURE__*/ _let("x/1", ($scope) => $dynamicTag($scope, $scope.x === 1 ? baz_default : foo_default));
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
