// tags/picker.marko
const $template = "<button>pick</button>";
const $walks = " b";
const $setup__script = _script("__tests__/tags/picker.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onPick();
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_onPick($scope, input.onPick);
const $input_onPick = /*@__PURE__*/ _const("input_onPick");
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", $template, " b", $setup, $input);

// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
let $load_Picker_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:picker.marko.setup.mjs"));
let $load_Picker_tag_input_onPick = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:picker.marko.input_onPick.mjs"), "ready:__tests__/tags/picker.marko");
const $if_content__setup = ($scope) => {
	$load_Picker_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Picker_tag_input_onPick($scope["#childScope/1"], $onPick($scope));
};
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $onPick = ($scope) => function() {
	$count($scope._, +$scope._.count + 1);
};
_resumed["__tests__/template.marko_1/onPick"] = $onPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/v:picker.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
