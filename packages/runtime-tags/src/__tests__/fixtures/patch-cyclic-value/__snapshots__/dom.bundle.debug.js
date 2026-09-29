// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $node = ($scope, node) => $input_node($scope["#childScope/0"], node);
const $input_name = ($scope, input_name) => $node($scope, (() => {
	const n = {
		name: input_name,
		self: null
	};
	n.self = n;
	return n;
})());
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/tagged/index.marko
const $template = "<button> </button>";
const $walks = " D l";
function describe(n) {
	return n.name + "/" + n.self.name;
}
const $label = /*@__PURE__*/ _fill_let("__tests__/tags/tagged/index.marko0", "label/5", ($scope) => _text($scope["#text/1"], $scope.label));
const $setup__script = _script("__tests__/tags/tagged/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, describe($scope.input_node));
}));
function $setup($scope) {
	$setup__script($scope);
	$label($scope, "");
}
const $input = ($scope, input) => $input_node($scope, input.node);
const $input_node = /*@__PURE__*/ _const("input_node");
var tagged_default = /*@__PURE__*/ _template("__tests__/tags/tagged/index.marko", $template, $walks, $setup, $input);
