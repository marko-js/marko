// tags/child.marko
const $template$1 = "<div>Body</div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $attrs__script = _script("__tests__/tags/child.marko_0_attrs#4", ($scope) => _attrs_script($scope, "#div/0"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs($scope, "#div/0", $scope.attrs);
	$attrs__script($scope);
});
const $input = ($scope, input) => $item2($scope, input.item);
const $item2 = ($scope, $item) => $attrs($scope, (({ content, ...attrs }) => attrs)($item));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>grow</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $obj = /*@__PURE__*/ _let("obj/2", ($scope) => {
	$attrs($scope["#childScope/1"], (({ content, ...attrs }) => attrs)($scope.obj));
	$obj_class($scope, $scope.obj?.class);
});
const $obj_class = /*@__PURE__*/ _const("obj_class");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$obj($scope, { class: $scope.obj_class + "a" });
}));
function $setup($scope) {
	$obj($scope, { class: "a" });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
