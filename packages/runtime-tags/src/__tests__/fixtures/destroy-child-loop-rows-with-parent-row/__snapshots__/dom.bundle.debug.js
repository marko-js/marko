// tags/c2.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $for_content__setup__script = _script("__tests__/tags/c2.marko_1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy");
} }));
const $for_content__setup$1 = $for_content__setup__script;
const $for$1 = /*@__PURE__*/ _for_of("#text/0", 0, 0, $for_content__setup$1);
function $setup$1($scope) {
	$for$1($scope, [[{ id: 1 }], (item) => item.id]);
}
var c2_default = /*@__PURE__*/ _template("__tests__/tags/c2.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $for_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, []);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
