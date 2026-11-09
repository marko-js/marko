// tags/dismiss-button.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup__script = _script("__tests__/tags/dismiss-button.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onDismiss();
}));
const $setup$1 = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_onDismiss($scope, input.onDismiss);
	$input_label($scope, input.label);
};
const $input_onDismiss = /*@__PURE__*/ _const("input_onDismiss");
var dismiss_button_default = /*@__PURE__*/ _template("__tests__/tags/dismiss-button.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><div id=log></div>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], $scope._["#LoopKey"]);
	$input_onDismiss($scope["#childScope/0"], $onDismiss($scope));
};
const $for_content__if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 3);
const $for_content__setup = $for_content__show;
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/1", ($scope) => $for($scope, [$scope.items, "id"]));
const $show = /*@__PURE__*/ _let("show/2");
function $setup($scope) {
	$items($scope, [{ id: "a" }, { id: "b" }]);
	$show($scope, true);
}
const $onDismiss = ($scope) => function() {
	document.getElementById("log").textContent = $scope._["#LoopKey"];
};
_resumed["__tests__/template.marko_2/onDismiss"] = $onDismiss;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
