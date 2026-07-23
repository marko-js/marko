// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $checked = /*@__PURE__*/ _let("checked/2", ($scope) => _text($scope["#text/1"], $scope.checked));
const $root = /*@__PURE__*/ _const("root");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$checked($scope, ($scope.root?.set).size === 1 && ($scope.root?.set).has($scope.root) ? "intact" : "broken");
}));
function $setup($scope) {
	$checked($scope, "pending");
	$root($scope, (() => {
		const root = { name: "root" };
		const set = new Set();
		set.add(root);
		root.set = set;
		return root;
	})());
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
