// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope["#childScope/1"], "x");
}
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<button><!>: <!></button>";
const $walks = " D%c%l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => $count($scope, input_value);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_label($scope, input.label);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
