// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template_patch("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
_load_lazy("ready:__tests__/child.marko", () => import("./child.mjs").then(() => {}));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0);
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", "<main><!></main>", "D%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template_patch("__tests__/template.marko", $template, "b%c", 0, $input);
