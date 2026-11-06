// tags/dismiss-button.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup__script$1 = _script("__tests__/tags/dismiss-button.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onDismiss();
}));
const $setup$1 = $setup__script$1;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_onDismiss($scope, input.onDismiss);
	$input_label($scope, input.label);
};
const $input_onDismiss = /*@__PURE__*/ _const("input_onDismiss");
var dismiss_button_default = /*@__PURE__*/ _template("__tests__/tags/dismiss-button.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button class=add>add</button><!><div id=log></div>";
const $walks = " b%c";
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_onDismiss($scope["#childScope/0"], $onDismiss($scope));
};
const $for_content__$params = ($scope, $params2) => $input_label($scope["#childScope/0"], $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, "c"]);
}));
function $setup($scope) {
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
const $onDismiss = ($scope) => function() {
	document.getElementById("log").textContent = $scope["#LoopKey"];
};
_resumed["__tests__/template.marko_1/onDismiss"] = $onDismiss;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
