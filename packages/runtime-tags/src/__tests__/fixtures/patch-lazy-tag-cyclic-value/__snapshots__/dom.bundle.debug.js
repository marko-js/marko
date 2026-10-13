// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Tagged_setup = /*@__PURE__*/ _load_setup(() => import("./v:tagged.marko.setup.mjs"));
let $load_Tagged_tag_input_node = /*@__PURE__*/ _load_signal_patch(() => import("./v:tagged.marko.input_node.mjs"), "ready:__tests__/tagged.marko");
const $node = ($scope, node) => $load_Tagged_tag_input_node($scope["#childScope/1"], node);
const $input_name = ($scope, input_name) => $node($scope, (() => {
	const n = {
		name: input_name,
		self: null
	};
	n.self = n;
	return n;
})());
function $setup($scope) {
	$load_Tagged_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tagged.marko
const $template = "<button> </button>";
const $walks = " D l";
function describe(n) {
	return n.name + "/" + n.self.name;
}
const $label = /*@__PURE__*/ _fill_let("__tests__/tagged.marko_fill0", "label/5", ($scope) => _text($scope["#text/1"], $scope.label));
const $setup__script = _script("__tests__/tagged.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, describe($scope.input_node));
}));
function $setup($scope) {
	$setup__script($scope);
	$label($scope, "");
}
const $input = ($scope, input) => $input_node($scope, input.node);
const $input_node = /*@__PURE__*/ _const("input_node");
var tagged_default = /*@__PURE__*/ _template("__tests__/tagged.marko", $template, $walks, $setup, $input);

// v:tagged.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
