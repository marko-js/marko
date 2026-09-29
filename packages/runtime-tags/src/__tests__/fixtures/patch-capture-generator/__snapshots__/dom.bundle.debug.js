// template.marko
const $template = "<p><!> <!></p><button>go</button>";
const $walks = "D%c%l b";
const $out = /*@__PURE__*/ _let("out/7", ($scope) => _text($scope["#text/1"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$out($scope, [...$scope.input_items].join(","));
}));
function $setup($scope) {
	$out($scope, "none");
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _const("input_items");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
