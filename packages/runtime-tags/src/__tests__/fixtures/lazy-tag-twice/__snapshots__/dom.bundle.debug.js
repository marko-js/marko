// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%/&b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_id = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_id.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
let $load_Child_setup2 = /* @__PURE__ */ _load_setup("#text/2", "#childScope/3", () => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_id($scope["#childScope/1"], "a");
	$load_Child_setup2($scope);
	$load_Child_tag_input_id($scope["#childScope/3"], "b");
}
const $input_value = ($scope, input_value) => {
	$load_Child_tag_input_value($scope["#childScope/1"], input_value);
	$load_Child_tag_input_value($scope["#childScope/3"], input_value * 10);
};
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = () => {};
const $count__script = _script("__tests__/child.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $input_value = ($scope, input_value) => $count($scope, input_value);
const $input_id = ($scope, input_id) => _attr($scope["#button/0"], "id", input_id);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_id($scope, input.id);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
