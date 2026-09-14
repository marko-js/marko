// template.marko
const $template = "<style></style><script><\/script><p class=x><!> <!></p><button>+</button>";
const $walks = " b bD%c%l b";
const $count = /*@__PURE__*/ _let("count/9", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	_attr_nonce($scope, "#script/1");
	$count($scope, 0);
	$setup__script($scope);
}
const $input_on = ($scope, input_on) => _text_content($scope["#style/0"], `.x { color: ${_to_text(input_on ? "red" : "blue")} }`);
const $input_label = ($scope, input_label) => {
	_text_content($scope["#script/1"], `window.__label = ${_to_text(JSON.stringify(input_label))};`);
	_text($scope["#text/2"], input_label);
};
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
